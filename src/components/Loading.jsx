import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import LoadingContainerStyle from './styles/LoadingContainerStyle';

function Loading({ type }) {
  return (
    <LoadingContainerStyle>
      <ReactLoading type="spin" color="#C2C2C2" width="61px" height="61px" />
      <span>
        Loading&nbsp;
        {type}
        &nbsp;...
      </span>
    </LoadingContainerStyle>
  );
}

Loading.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Loading;
