import * as React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { InjectedFormProps, Field, reduxForm } from 'redux-form';
import ReduxFormInput from 'components/ReduxFormInput';
import DragNDropPanel from './DragDropPanel';

interface Props {
    courses: any;
    events: any;
    fetchEvents: (event: any) => void;
}
class BatchUpdateForm extends React.Component<InjectedFormProps<any, Props> & Props> {
    fetchEvents = (event: any) => {
        // console.log(event.target.value);
        this.props.fetchEvents(event.target.value);
    };

    render() {
        const { courses, events } = this.props;
        // let normalizeEvent;
        // events.forEach(element => {
        //     console.log(element)
        //     normalizeEvent.push(element.event)
        // });
        // console.log(normalizeEvent)
        return (
            <FormGroup>
                <Label>Select Course</Label>
                <Field
                    name="courses"
                    placeholder="Available courses"
                    component={ReduxFormInput}
                    type="select"
                    onChange={this.fetchEvents}
                >
                    {courses.map((course: any) => {
                        return (
                            <option key={course._id} value={course._id}>
                                {course.name}
                            </option>
                        );
                    })}
                </Field>
                <Label>Select Task</Label>
                <Field name="tasks" placeholder="Available tasks" component={ReduxFormInput} type="select">
                    {events.map((event: any) => {
                        return (
                            <option key={event._id} value={event.name}>
                                {event.name}
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
