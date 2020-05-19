import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { LikeSubmissionButton } from './LikeSubmissionButton';
import { DismissSubmissionButton } from './DismissSubmissionButton';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    justifyContet: 'space-between'
  }
}));

export const ToastMessageButtons = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <LikeSubmissionButton />
      <DismissSubmissionButton />
    </div>
  );
};
