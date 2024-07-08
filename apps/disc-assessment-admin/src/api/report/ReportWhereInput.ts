import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { AssessmentResultWhereUniqueInput } from "../assessmentResult/AssessmentResultWhereUniqueInput";

export type ReportWhereInput = {
  id?: StringFilter;
  filePath?: JsonFilter;
  assessmentResult?: AssessmentResultWhereUniqueInput;
};
