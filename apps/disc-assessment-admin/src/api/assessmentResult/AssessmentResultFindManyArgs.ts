import { AssessmentResultWhereInput } from "./AssessmentResultWhereInput";
import { AssessmentResultOrderByInput } from "./AssessmentResultOrderByInput";

export type AssessmentResultFindManyArgs = {
  where?: AssessmentResultWhereInput;
  orderBy?: Array<AssessmentResultOrderByInput>;
  skip?: number;
  take?: number;
};
