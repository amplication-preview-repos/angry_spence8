import { JsonValue } from "type-fest";
import { AssessmentResult } from "../assessmentResult/AssessmentResult";

export type Report = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  filePath: JsonValue;
  assessmentResult?: AssessmentResult | null;
};
