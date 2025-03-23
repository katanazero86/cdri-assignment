import { useState } from 'react';

export const useModal = <T = null>(initialData: T = null as T) => {
  const [modalData, setModalData] = useState<T>(initialData);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const updateModalData = (targetData: T) => {
    setModalData(targetData);
  };

  const initModalData = () => {
    setModalData(initialData);
  };

  return {
    isOpen,
    toggleModal,
    handleOpen,
    handleClose,
    modalData,
    updateModalData,
    initModalData,
  };
};
