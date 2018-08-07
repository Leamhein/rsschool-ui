import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'core/reducers';
import './index.scss';

function mapStateToProps(state: RootState) {
    return {
        courses: state.courses,
    };
}

function mapDispatchToProps() {
    return {};
}

class BatchUpdate extends React.Component {
    render() {
        return <form />;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BatchUpdate);
