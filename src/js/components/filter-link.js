import React from 'react';
import { connect } from 'react-redux';

import { setVisibilityFilter } from '../action-creators/visibility-filter';
import Link from './link';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Link);