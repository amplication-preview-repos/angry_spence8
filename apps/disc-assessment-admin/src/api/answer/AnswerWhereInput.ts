import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type AnswerWhereInput = {
  id?: StringFilter;
  answerContent?: StringNullableFilter;
  question?: QuestionWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
};
