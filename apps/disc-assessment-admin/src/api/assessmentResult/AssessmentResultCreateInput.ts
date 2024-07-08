import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ReportCreateNestedManyWithoutAssessmentResultsInput } from "./ReportCreateNestedManyWithoutAssessmentResultsInput";

export type AssessmentResultCreateInput = {
  summary?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  reports?: ReportCreateNestedManyWithoutAssessmentResultsInput;
};
