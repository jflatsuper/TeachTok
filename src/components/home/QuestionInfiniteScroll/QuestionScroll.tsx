import React from "react";
import { View } from "react-native";
import { SnapInterval } from "../../scrollable";
import { getHeight } from "../../../utils/getResponsiveStyles";
import { MCQ } from "../../common/MultipleChoiceQuestion";
import { isMCQ } from "../../../utils/typeGuards";
import { FlashCard } from "../../common/FlashCard";
import { styles } from "./QuestionScroll.style";
type QuestionScrollProps<T> = {
  data: T[];
  loadMore: VoidFunction;
};

const QuestionScroll = <T extends MCQ | FlashCard>({
  data,
  loadMore,
}: QuestionScrollProps<T>) => {
  return (
    <View style={styles.container}>
      <SnapInterval
        pageHeight={getHeight()}
        data={data}
        renderItem={({ item }) => {
          return isMCQ(item) ? <MCQ {...item} /> : <FlashCard {...item} />;
        }}
        loadMore={loadMore}
      />
    </View>
  );
};
export default QuestionScroll;
