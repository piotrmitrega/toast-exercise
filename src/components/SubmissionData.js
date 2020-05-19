import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { submissionDataPropTypes } from './submissionPropTypes';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    'flex-direction': 'column'
  }
}));

export const SubmissionData = ({ email, firstName, lastName }) => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <span>{`${firstName} ${lastName}`}</span>
      <span>{email}</span>
    </div>
  );
};

SubmissionData.propTypes = submissionDataPropTypes;
