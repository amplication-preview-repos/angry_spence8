import { Question } from "../question/Question";
import { Customer } from "../customer/Customer";

export type Answer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  answerContent: string | null;
  question?: Question | null;
  customer?: Customer | null;
};
