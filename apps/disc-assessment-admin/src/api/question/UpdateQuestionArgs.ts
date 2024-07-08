import { QuestionWhereUniqueInput } from "./QuestionWhereUniqueInput";
import { QuestionUpdateInput } from "./QuestionUpdateInput";

export type UpdateQuestionArgs = {
  where: QuestionWhereUniqueInput;
  data: QuestionUpdateInput;
};
