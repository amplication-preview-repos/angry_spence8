import { SortOrder } from "../../util/SortOrder";

export type AssessmentResultOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  summary?: SortOrder;
  customerId?: SortOrder;
};
