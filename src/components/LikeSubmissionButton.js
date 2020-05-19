import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { likeItem } from '../state/actions';
import { submissionPropTypes } from './submissionPropTypes';

const useStyles = makeStyles(() => ({
  likeButton: {
    'text-transform': 'uppercase',
    color: 'red'
  }
}));

export const LikeSubmissionButton = ({ item }) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(likeItem(item))}
      className={styles.likeButton}
    >
      Like
    </Button>
  );
};

LikeSubmissionButton.propTypes = {
  item: PropTypes.shape(submissionPropTypes).isRequired
};
