import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  wrapper: {
    'text-transform': 'uppercase',
    color: 'red'
  }
}));

export const LikeSubmissionButton = () => {
  const styles = useStyles();

  return (
    <Button
      onClick={console.log}
      className={styles.wrapper}
    >
      Like
    </Button>
  );
};
