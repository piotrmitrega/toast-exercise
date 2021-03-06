import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';

import { submissionPropTypes } from './submissionPropTypes';
import { SubmissionData } from './SubmissionData';
import { ToastMessageButtons } from './ToastMessageButtons';

const height = 68;
const spacing = 12;

const useStyles = makeStyles(() => ({
  toastMessage: {
    marginBottom: props => props.index * (height + spacing)
  }
}));

export const ToastMessage = ({ index, item }) => {
  const styles = useStyles({ index });

  return (
    <Snackbar
      open={true}
      className={styles.toastMessage}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
    >
      <SnackbarContent
        message={
          <SubmissionData itemData={item.data} />
        }
        action={<ToastMessageButtons item={item} />}
      />
    </Snackbar>
  );
};

ToastMessage.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.shape(submissionPropTypes)
};
