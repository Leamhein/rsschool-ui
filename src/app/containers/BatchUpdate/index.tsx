import * as React from 'react';
import { connect } from 'react-redux';
// import { RootState } from 'core/reducers';
import { fetchAllCourses, fetchEventsAndStages } from 'core/actions';
import { ICourse } from 'core/models';
import BatchUpdateForm from '../../components/BatchUpdateForm/index';
import { NormalizeScheduleData } from 'core/helpers';

const mapStateToProps = (state: any, props: any): Props => {
    if (state.courses == null || state.user == null) {
        return props;
    }
    return {
        ...props,
        courses: state.courses.data || [],
        normalizeData: state.schedule.normalizeData,
    };
};

const mapDispatchToProps = (dispatch: any, props: Props): Props => {
    return {
        ...props,
        fetchCourses: () => {
            dispatch(fetchAllCourses());
        },
        fetchEvents: (id: string) => {
            dispatch(fetchEventsAndStages(id));
        },
    };
};

type Props = {
    courses: ICourse[];
    fetchCourses: () => void;
    fetchEvents: (id: string) => void;
    normalizeData: NormalizeScheduleData[];
};

class BatchUpdate extends React.Component<Props, any> {
    componentDidMount() {
        this.props.fetchCourses();
    }

    render() {
        return (
            <BatchUpdateForm
                courses={this.props.courses || []}
                events={this.props.normalizeData || []}
                fetchEvents={this.props.fetchEvents}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BatchUpdate);
