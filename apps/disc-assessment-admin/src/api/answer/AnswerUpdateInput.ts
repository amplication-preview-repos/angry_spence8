import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type AnswerUpdateInput = {
  answerContent?: string | null;
  question?: QuestionWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
};
