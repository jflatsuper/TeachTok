import React from "react";
import { View } from "react-native";
import { CustomText } from "../../CustomText";
import { styles } from "./Answer.styles";
import language from "../../../../language";
import { ButtonItems } from "./ButtonItems";
import { SquareButton } from "../../Button";
import { placeHolderFunc } from "../../../../utils/placeHolder";
import { HorizontalRule } from "../../Rule";
type FlashAnswerProps = {
  answer: string;
};
const Answer: React.FC<FlashAnswerProps> = ({ answer }) => {
  return (
    <View>
      <HorizontalRule />
      <CustomText style={styles.answer}>{language["Answer"]}</CustomText>
      <CustomText
        style={styles.answerText}
        numberOfLines={6}
        ellipsizeMode="tail"
      >
        {answer}
      </CustomText>
      <View style={styles.container}>
        <CustomText style={styles.howWell}>
          {language["How Well Did You Know this?"]}
        </CustomText>
        <View style={styles.btnContainer}>
          {ButtonItems.map(({ title, color }) => (
            <SquareButton
              key={title}
              title={title}
              onPress={placeHolderFunc}
              containerStyle={{
                backgroundColor: color,
              }}
              textStyle={styles.textStyle}
            />
          ))}
        </View>
      </View>
    </View>
  );
};
export default Answer;
