import React, { useCallback, useEffect, useState } from "react";
import { ImageBackground, View } from "react-native";
import { CustomText } from "../../CustomText";
import Option from "../Option/Option";
import axios from "axios";
import { apiInstance } from "../../../../utils/api";
import { styles } from "./Question.style";
import {
  getHeight,
} from "../../../../utils/getResponsiveStyles";
import { ActionBar } from "../../Action";
import Playlist from "../../Playlist/Playlist";

type QuestionPageProps = MCQ;
const Question: React.FC<QuestionPageProps> = ({
  question,
  options,
  id,
  image,
  user,
  description,
  playlist,
}) => {
  const [correctAnswer, setCorrectAnswer] = useState<Answer>();
  const [selected, setSelected] = useState<string>();
  const getCorrectAnswer = async (id: number) => {
    const answer = await axios.get(`${apiInstance}/reveal?id=${id}`);
    setCorrectAnswer(answer.data);
    return answer;
  };
  useEffect(() => {
    (async () => await getCorrectAnswer(id))();
  }, [id]);
  const onPress = useCallback(
    (id: string) => {
      setSelected(id);
    },
    [setSelected]
  );
  return (
    <View style={{ height: getHeight() }}>
      <ImageBackground
        source={{ uri: image }}
        resizeMode="cover"
        style={{ height: "100%" }}
      >
        <View
          style={styles.container}
        >
          <View
            style={styles.questionGroup}
          >
            <View style={styles.q1}>
              <View
                style={styles.q2}
              >
                <View
                  style={styles.questionHeaderContainer}
                >
                  <CustomText
                    style={styles.questionHeader}
                    numberOfLines={4}
                    ellipsizeMode="tail"
                  >
                    {question}
                  </CustomText>
                </View>
              </View>
              <View
                style={styles.optionContainerGroup}
              >
                <View
                  style={styles.optionContainer}
                >
                  {options?.map((option) => (
                    <Option
                      key={option.id}
                      correctAnswer={correctAnswer}
                      selected={selected}
                      onPress={onPress}
                      {...option}
                    />
                  ))}
                </View>
                <View>
                  <CustomText
                    style={styles.text}
                  >
                    {user.name}
                  </CustomText>
                  <CustomText
                    style={styles.text}
                  >
                    {description}
                  </CustomText>
                </View>
              </View>
            </View>

            <View
              style={styles.actionBar}
            >
              <ActionBar />
            </View>
          </View>
          <View style={styles.playlist}>
            <Playlist playlist={playlist} _description="" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Question;
