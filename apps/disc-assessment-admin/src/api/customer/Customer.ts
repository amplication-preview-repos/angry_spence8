import { AssessmentResult } from "../assessmentResult/AssessmentResult";
import { Answer } from "../answer/Answer";

export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  assessmentResults?: Array<AssessmentResult>;
  answers?: Array<Answer>;
};
