import React, { useMemo } from "react";
import { Pressable, View } from "react-native";
import { styles } from "./Option.style";
import { CustomText } from "../../CustomText";
import CorrectIcon from "../../../../assets/icons/CurrentIcon";
import WrongIcon from "../../../../assets/icons/WrongIcon";

type OptionProps = {
  correctAnswer?: Answer;
  onPress: (id: string) => void;
  selected?: string;
} & Option;
const Option: React.FC<OptionProps> = ({
  id,
  answer,
  correctAnswer,
  selected,
  onPress,
}) => {
  const isCorrect = useMemo(
    () => !!correctAnswer?.correct_options.find((item) => item.id == selected),
    [correctAnswer, selected]
  );
  return (
    <Pressable
      style={[
        styles.optionContainer,
        {
          backgroundColor:
            selected === id
              ? isCorrect
                ? "rgba(40, 177, 143, 0.7)"
                : "rgba(220, 95, 95, 0.7)"
              : "rgba(255, 255, 255, 0.5)",
        },
      ]}
      onPress={() => onPress(id)}
    >
      <CustomText style={styles.text} numberOfLines={1} ellipsizeMode="tail">
        {answer}
      </CustomText>
      <View style={styles.icon}>
        {selected === id ? isCorrect ? <CorrectIcon /> : <WrongIcon /> : null}
      </View>
    </Pressable>
  );
};
export default Option;
