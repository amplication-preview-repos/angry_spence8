import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";

export type QuestionWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  answers?: AnswerListRelationFilter;
};
