import { InputJsonValue } from "../../types";
import { AssessmentResultWhereUniqueInput } from "../assessmentResult/AssessmentResultWhereUniqueInput";

export type ReportCreateInput = {
  filePath?: InputJsonValue;
  assessmentResult?: AssessmentResultWhereUniqueInput | null;
};
