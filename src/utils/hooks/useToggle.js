import { useState } from 'react';

const useToggle = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleToggle = () => setOpen(!open);

  return {
    open,
    handleClose,
    handleOpen,
    handleToggle,
  };
};

export default useToggle;
