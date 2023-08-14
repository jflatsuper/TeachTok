import React, { useCallback, useState } from "react";
import { Animated, Pressable, View } from "react-native";
import { CustomText } from "../CustomText";
import { getHeight } from "../../../utils/getResponsiveStyles";
import { ActionBar } from "../Action";
import Playlist from "../Playlist/Playlist";
import { styles } from "./FlashCard.style";
import Answer from "./Answer/Answer";

type FlashCardProps = FlashCard;
const FlashCard: React.FC<FlashCardProps> = ({
  flashcard_back,
  flashcard_front,
  description,
  playlist,
  user,
}) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [fadeHeight] = useState(new Animated.Value((80 / 100) * getHeight()));

  const fadeInOut = useCallback(() => {
    const value = selected;
    !value && setSelected((prev) => !prev);
    const screenHeight = getHeight();
    const targetHeight = value ? 80 : 25; // Desired percentage height (e.g., 50%)
    const absoluteTargetHeight = (targetHeight / 100) * screenHeight; // Calculate the absolute height

    const targetOpacity = value ? 0 : 1;
    Animated.timing(fadeHeight, {
      toValue: absoluteTargetHeight,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(fadeAnim, {
      toValue: targetOpacity, // Target opacity: 0 (fully transparent)
      duration: 500, // Duration of the animation in milliseconds
      useNativeDriver: true, // Use the native driver for performance
    }).start(() => {
      value && setSelected((prev) => !prev);
    });
  }, [setSelected, selected, fadeAnim, getHeight, fadeHeight]);

  return (
    <Pressable style={{ height: getHeight() }} onPress={fadeInOut}>
      <View style={styles.container}>
        <View style={styles.groupAll}>
          <View style={{ width: "83%", height: "100%" }}>
            <Animated.View
              style={[
                styles.flashFront,
                {
                  height: fadeHeight,
                },
              ]}
            >
              <CustomText style={styles.flashHeader}>
                {flashcard_front}
              </CustomText>
            </Animated.View>
            <View style={styles.flashBody}>
              {selected && (
                <Animated.View style={{ opacity: fadeAnim }}>
                  <Answer answer={flashcard_back} />
                </Animated.View>
              )}

              <View>
                <CustomText style={styles.name}>{user.name}</CustomText>
                <CustomText style={styles.description}>
                  {description}
                </CustomText>
              </View>
            </View>
          </View>

          <View style={styles.actionBar}>
            <ActionBar />
          </View>
        </View>
        <View style={styles.pl1}>
          <View style={styles.playlist}>
            <Playlist playlist={playlist} _description="" />
          </View>
        </View>
      </View>
    </Pressable>
  );
};
export default FlashCard;
