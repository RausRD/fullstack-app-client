import React from 'react';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const GoBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div
      onClick={handleGoBack}
      className="flex items-center gap-2 mb-10 cursor-pointer text-default-500"
    >
      <FaRegArrowAltCircleLeft />
      Назад
    </div>
  );
};
