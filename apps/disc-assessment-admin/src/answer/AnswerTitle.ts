import { Answer as TAnswer } from "../api/answer/Answer";

export const ANSWER_TITLE_FIELD = "id";

export const AnswerTitle = (record: TAnswer): string => {
  return record.id?.toString() || String(record.id);
};
