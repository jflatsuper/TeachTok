import React, { useCallback, useEffect, useMemo, useState } from "react";
import Layout from "../../components/common/Layout/Layout";
import TopMenu from "../../components/home/Menu/TopMenu/TopMenu";
import axios from "axios";
import { apiInstance } from "../../utils/api";
import { QuestionScroll } from "../../components/home";

const HomeScreen: React.FC = () => {
  const [forYou, setForYou] = useState<MCQ[]>([]);
  const [following, setFollowing] = useState<FlashCard[]>([]);
  const [questionType, setQuestionType] = useState<QuestionType>("mcq");
  const onChangeQuestionType = useCallback(
    (value: QuestionType) => {
      setQuestionType(value);
    },
    [setQuestionType]
  );

  const getFollowing = async () => {
    const data = await axios.get(`${apiInstance}/following`);
    setFollowing((prev) => [...prev, data.data]);
  };
  const getForYou = async () => {
    const data = await axios.get(`${apiInstance}/for_you`);
    setForYou((prev) => [...prev, data.data]);
  };

  const loadMore = useMemo(
    () => (questionType === "mcq" ? getForYou : getFollowing),
    [getForYou, getFollowing]
  );
  useEffect(() => {
    (async () => await loadMore())();
  }, [questionType]);

  const data = useMemo(
    () => (questionType === "mcq" ? forYou : following),
    [questionType, forYou, following]
  );
  return (
    <Layout
      TopNavBar={
        <TopMenu active={questionType} onPress={onChangeQuestionType} />
      }
    >
      <QuestionScroll<MCQ | FlashCard> data={data} loadMore={loadMore} />
    </Layout>
  );
};
export default HomeScreen;
