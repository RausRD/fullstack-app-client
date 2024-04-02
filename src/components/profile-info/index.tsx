import React from 'react';

type Props = {
  title: string;
  info?: string;
};

export const ProfileInfo: React.FC<Props> = ({ title, info }) => {
  if (!info) {
    return null;
  }

  return (
    <p className="font-semibold">
      <span className="mr-2 text-gray-500">{title}</span>
      {info}
    </p>
  );
};
