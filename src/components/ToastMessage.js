import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';

const height = 48;
const spacing = 12;

const useStyles = makeStyles(() => ({
  wrapper: {
    marginBottom: props => props.index * (height + spacing)
  }
}));

export const ToastMessage = ({ index, item }) => {
  const styles = useStyles({ index });

  return (
    <Snackbar
      open={true}
      className={styles.wrapper}
      onClose={console.log}
    >
      <SnackbarContent
        message={
          'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
        }
      />
    </Snackbar>
  );
};
