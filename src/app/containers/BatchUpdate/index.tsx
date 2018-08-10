import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'core/reducers';
import { fetchAllCourses } from 'core/actions';
import { ICourse } from 'core/models';
import BatchUpdateForm from '../../components/BatchUpdateForm/index';

const mapStateToProps = (state: RootState, props: Props): Props => {
    if (state.courses == null || state.user == null) {
        return props;
    }
    return {
        ...props,
        courses: state.courses.data || [],
    };
};

const mapDispatchToProps = (dispatch: any, props: Props): Props => {
    return {
        ...props,
        fetchCourses: () => {
            dispatch(fetchAllCourses());
        },
    };
};

type Props = {
    courses: ICourse[];
    fetchCourses: () => void;
};

class BatchUpdate extends React.Component<Props, any> {
    componentDidMount() {
        this.props.fetchCourses();
    }

    render() {
        return <BatchUpdateForm courses={this.props.courses || []} />;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BatchUpdate);
