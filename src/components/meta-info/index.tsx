import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  count: number;
  Icon: IconType;
};

export const MetaInfo: React.FC<Props> = ({ count, Icon }) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      {count > 0 && (
        <p className="font-semibold text-default-400 text-l ">{count}</p>
      )}
      <p className="text-xl duration-100 ease-in text-default-400 hover:text-2xl">
        <Icon />
      </p>
    </div>
  );
};
