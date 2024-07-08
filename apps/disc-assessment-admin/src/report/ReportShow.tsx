import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ASSESSMENTRESULT_TITLE_FIELD } from "../assessmentResult/AssessmentResultTitle";

export const ReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="filePath" source="filePath" />
        <ReferenceField
          label="AssessmentResult"
          source="assessmentresult.id"
          reference="AssessmentResult"
        >
          <TextField source={ASSESSMENTRESULT_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
