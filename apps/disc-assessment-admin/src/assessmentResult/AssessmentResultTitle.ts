import { AssessmentResult as TAssessmentResult } from "../api/assessmentResult/AssessmentResult";

export const ASSESSMENTRESULT_TITLE_FIELD = "id";

export const AssessmentResultTitle = (record: TAssessmentResult): string => {
  return record.id?.toString() || String(record.id);
};
