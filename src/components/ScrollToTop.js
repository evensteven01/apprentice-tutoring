import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class ScrollToTop extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(prevProps) {
        if(this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}

ScrollToTop.propTypes = {
    children: PropTypes.object,
    location: PropTypes.object
};

export default withRouter(ScrollToTop);