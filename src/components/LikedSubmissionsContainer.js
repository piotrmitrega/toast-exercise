import React from 'react';
import { useSelector } from 'react-redux';
import { selectLikedItems } from '../state/selectors';
import { makeStyles } from '@material-ui/core/styles';

import { SubmissionData } from './SubmissionData';

const useStyles = makeStyles(() => ({
  likedItem: {
    border: '1px solid green',
    borderRadius: 4,
    marginTop: 4
  }
}));

export const LikedSubmissionsContainer = () => {
  const styles = useStyles();
  const likedItems = useSelector(selectLikedItems);

  if (likedItems.length === 0) {
    return <span>No liked items. Yet...</span>;
  }
  return (
    <div>
      {likedItems.map(item => (
        <SubmissionData
          className={styles.likedItem}
          itemData={item.data}
        />
      ))}
    </div>
  );
};
