import { AnswerUpdateManyWithoutQuestionsInput } from "./AnswerUpdateManyWithoutQuestionsInput";

export type QuestionUpdateInput = {
  content?: string | null;
  answers?: AnswerUpdateManyWithoutQuestionsInput;
};
