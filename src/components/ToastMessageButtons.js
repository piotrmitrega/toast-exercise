import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { LikeSubmissionButton } from './LikeSubmissionButton';
import { DismissSubmissionButton } from './DismissSubmissionButton';
import { submissionPropTypes } from './submissionPropTypes';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    justifyContet: 'space-between'
  }
}));

export const ToastMessageButtons = ({ item }) => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <LikeSubmissionButton item={item} />
      <DismissSubmissionButton item={item} />
    </div>
  );
};

ToastMessageButtons.propTypes = {
  item: PropTypes.shape(submissionPropTypes).isRequired
};
