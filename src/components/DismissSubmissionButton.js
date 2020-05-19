import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(() => ({
  wrapper: {
    color: 'white'
  }
}));

export const DismissSubmissionButton = () => {
  const styles = useStyles();

  return (
    <Button
      onClick={console.log}
      className={styles.wrapper}
    >
      <CloseIcon />
    </Button>
  );
};
