import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type AnswerCreateInput = {
  answerContent?: string | null;
  question?: QuestionWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
};
