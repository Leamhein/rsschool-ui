import * as React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { InjectedFormProps, Field, reduxForm } from 'redux-form';
import ReduxFormInput from 'components/ReduxFormInput';
import DragNDropPanel from './DragDropPanel';

interface Props {
    courses: any;
}
class BatchUpdateForm extends React.Component<InjectedFormProps<any, Props> & Props> {
    render() {
        const { courses } = this.props;
        return (
            <FormGroup>
                <Label>Select Courses</Label>
                <Field name="courses" placeholder="Available courses" component={ReduxFormInput} type="select">
                    {courses.map((course: any) => {
                        return (
                            <option key={course._id} value={course.name}>
                                {course.name}
                            </option>
                        );
                    })}
                </Field>
                <DragNDropPanel />
            </FormGroup>
        );
    }
}

export default reduxForm<any, Props>({
    form: 'profileForm',
})(BatchUpdateForm);
