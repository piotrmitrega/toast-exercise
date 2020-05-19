import React from 'react';
import { useSelector } from 'react-redux';
import { selectIncomingItems } from '../state/selectors';
import { ToastMessage } from './ToastMessage';

export const ToastMessagesContainer = () => {
  const items = useSelector(selectIncomingItems);

  return (
    <>
      {items.map((item, index) => (
        <ToastMessage
          index={index}
          item={item}
          key={item.id}
        />
      ))
      }
    </>
  );
};
