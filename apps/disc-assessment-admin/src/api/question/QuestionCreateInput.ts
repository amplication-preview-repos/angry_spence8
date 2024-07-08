import { AnswerCreateNestedManyWithoutQuestionsInput } from "./AnswerCreateNestedManyWithoutQuestionsInput";

export type QuestionCreateInput = {
  content?: string | null;
  answers?: AnswerCreateNestedManyWithoutQuestionsInput;
};
