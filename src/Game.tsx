import * as React from 'react';
import PropTypes from 'prop-types';

const Count: React.FunctionComponent<{
    count: number;
}> = (props): JSX.Element => {
    return <h1>{props.count}</h1>;
};

export default Count;

Count.propTypes = {
    count: PropTypes.number.isRequired,
};
