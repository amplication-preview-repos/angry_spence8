import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ASSESSMENTRESULT_TITLE_FIELD } from "../assessmentResult/AssessmentResultTitle";

export const ReportList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Reports"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
