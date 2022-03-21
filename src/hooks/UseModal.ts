import { useEffect, useState } from 'react';

const useModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    console.log('showModal modified', showModal);
  }, [showModal]);
  
  const toggle = () => {
    setShowModal(!showModal);
  };

  return { showModal, toggle };
};

export default useModal;
