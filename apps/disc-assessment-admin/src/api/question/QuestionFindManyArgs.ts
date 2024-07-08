import { QuestionWhereInput } from "./QuestionWhereInput";
import { QuestionOrderByInput } from "./QuestionOrderByInput";

export type QuestionFindManyArgs = {
  where?: QuestionWhereInput;
  orderBy?: Array<QuestionOrderByInput>;
  skip?: number;
  take?: number;
};
