import { AssessmentResultUpdateManyWithoutCustomersInput } from "./AssessmentResultUpdateManyWithoutCustomersInput";
import { AnswerUpdateManyWithoutCustomersInput } from "./AnswerUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  assessmentResults?: AssessmentResultUpdateManyWithoutCustomersInput;
  answers?: AnswerUpdateManyWithoutCustomersInput;
};
