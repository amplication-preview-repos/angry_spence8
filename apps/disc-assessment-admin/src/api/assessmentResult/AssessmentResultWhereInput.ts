import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";

export type AssessmentResultWhereInput = {
  id?: StringFilter;
  summary?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  reports?: ReportListRelationFilter;
};
