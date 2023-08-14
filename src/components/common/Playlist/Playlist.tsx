import React, { useMemo } from "react";
import { View } from "react-native";
import { styles } from "./Playlist.style";
import ReplayIcon from "../../../assets/icons/ReplayIcon";
import { CustomText } from "../CustomText";
import language from "../../../language";
import ChevronRight from "../../../assets/icons/ChevronRightIcon";
type PlaylistProps = {
  _description: string;
  playlist: string;
};
const Playlist: React.FC<PlaylistProps> = ({ playlist }) => {
  const playText = useMemo(() => {
    return `${language.Playlist}.${playlist}`;
  }, [language.Playlist, playlist]);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <ReplayIcon />
        <CustomText
          style={styles.playText}
        >
          {playText}
        </CustomText>
      </View>
      <ChevronRight />
    </View>
  );
};
export default Playlist;
