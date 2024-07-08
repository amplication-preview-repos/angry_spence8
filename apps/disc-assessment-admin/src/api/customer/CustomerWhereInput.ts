import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AssessmentResultListRelationFilter } from "../assessmentResult/AssessmentResultListRelationFilter";
import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";

export type CustomerWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  assessmentResults?: AssessmentResultListRelationFilter;
  answers?: AnswerListRelationFilter;
};
