import { SortOrder } from "../../util/SortOrder";

export type QuestionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
};
