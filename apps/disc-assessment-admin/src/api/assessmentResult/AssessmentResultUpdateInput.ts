import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ReportUpdateManyWithoutAssessmentResultsInput } from "./ReportUpdateManyWithoutAssessmentResultsInput";

export type AssessmentResultUpdateInput = {
  summary?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  reports?: ReportUpdateManyWithoutAssessmentResultsInput;
};
