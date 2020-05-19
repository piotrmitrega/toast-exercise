import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

import { submissionPropTypes } from './submissionPropTypes';
import { dismissItem } from '../state/actions';

const useStyles = makeStyles(() => ({
  wrapper: {
    color: 'white'
  }
}));

export const DismissSubmissionButton = ({ item }) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(dismissItem(item))}
      className={styles.wrapper}
    >
      <CloseIcon />
    </Button>
  );
};

DismissSubmissionButton.propTypes = {
  item: PropTypes.shape(submissionPropTypes).isRequired
};

