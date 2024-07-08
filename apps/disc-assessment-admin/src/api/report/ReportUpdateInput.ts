import { InputJsonValue } from "../../types";
import { AssessmentResultWhereUniqueInput } from "../assessmentResult/AssessmentResultWhereUniqueInput";

export type ReportUpdateInput = {
  filePath?: InputJsonValue;
  assessmentResult?: AssessmentResultWhereUniqueInput | null;
};
