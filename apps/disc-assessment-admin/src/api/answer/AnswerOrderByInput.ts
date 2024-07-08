import { SortOrder } from "../../util/SortOrder";

export type AnswerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  answerContent?: SortOrder;
  questionId?: SortOrder;
  customerId?: SortOrder;
};
