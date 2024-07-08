import { Question as TQuestion } from "../api/question/Question";

export const QUESTION_TITLE_FIELD = "id";

export const QuestionTitle = (record: TQuestion): string => {
  return record.id?.toString() || String(record.id);
};
