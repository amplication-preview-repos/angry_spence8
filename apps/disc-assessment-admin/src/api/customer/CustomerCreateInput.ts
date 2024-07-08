import { AssessmentResultCreateNestedManyWithoutCustomersInput } from "./AssessmentResultCreateNestedManyWithoutCustomersInput";
import { AnswerCreateNestedManyWithoutCustomersInput } from "./AnswerCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  assessmentResults?: AssessmentResultCreateNestedManyWithoutCustomersInput;
  answers?: AnswerCreateNestedManyWithoutCustomersInput;
};
