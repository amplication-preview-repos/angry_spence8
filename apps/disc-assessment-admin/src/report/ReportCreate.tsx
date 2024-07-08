import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AssessmentResultTitle } from "../assessmentResult/AssessmentResultTitle";

export const ReportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput
          source="assessmentResult.id"
          reference="AssessmentResult"
          label="AssessmentResult"
        >
          <SelectInput optionText={AssessmentResultTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
