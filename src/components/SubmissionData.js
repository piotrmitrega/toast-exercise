import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

import { submissionDataPropTypes } from './submissionPropTypes';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    'flex-direction': 'column'
  }
}));

export const SubmissionData = ({ className, itemData }) => {
  const styles = useStyles();
  const finalClassName = classNames(className, styles.wrapper);

  const { firstName, lastName, email } = itemData;

  return (
    <div className={finalClassName}>
      <span>{`${firstName} ${lastName}`}</span>
      <span>{email}</span>
    </div>
  );
};

SubmissionData.propTypes = {
  itemData: PropTypes.shape(submissionDataPropTypes),
  className: PropTypes.string
};
