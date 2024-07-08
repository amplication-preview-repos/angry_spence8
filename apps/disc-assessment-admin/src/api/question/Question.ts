import { Answer } from "../answer/Answer";

export type Question = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  answers?: Array<Answer>;
};
