import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AssessmentResultTitle } from "../assessmentResult/AssessmentResultTitle";

export const ReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
