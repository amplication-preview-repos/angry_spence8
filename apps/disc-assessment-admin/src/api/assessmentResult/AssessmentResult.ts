import { Customer } from "../customer/Customer";
import { Report } from "../report/Report";

export type AssessmentResult = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  summary: string | null;
  customer?: Customer | null;
  reports?: Array<Report>;
};
