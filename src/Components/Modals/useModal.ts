import { useState, useCallback } from 'react';

type UseModalReturnType = [boolean, () => void, (confirm?: boolean) => void];

function useModal(onConfirm?: () => void): UseModalReturnType {
  const [open, setOpen] = useState(false);
  const handleClose = useCallback(
    (confirm?: boolean) => {
      if (confirm && onConfirm) {
        onConfirm();
      }
      setOpen(false);
    },
    [onConfirm],
  );
  const handleOpen = useCallback(() => setOpen(true), []);
  return [open, handleOpen, handleClose];
}

export { useModal };
