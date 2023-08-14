type Question = {
  type: string;
  id: number;
  playlist: string;
  flashcard_front: string;
  flashcard_back: string;
  description: string;
};
type FlashCard = {
  type: "flashcard";
  id: number;
  playlist: string;
  flashcard_front: string;
  flashcard_back: string;
  description: string;
  user:User
};
type User = {
  name: string;
  avatar: string;
};
type QuestionType = "mcq" | "flashcard";
type Option = {
  id: string;
  answer: string;
};

type MCQ = {
  type: "mcq";
  id: number;
  playlist: string;
  description: string;
  image: string;
  question: string;
  options: Option[];
  user: User;
};
type HomeTopMenu = {
  id: number;
  title: string;
  value: QuestionType;
};
type Answer = {
  id: number;
  correct_options: Option[];
};
