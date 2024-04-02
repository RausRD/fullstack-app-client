import React from 'react';

export const ErrorMessage = ({ error = '' }: { error: string }) => {
  return error && <p className="mt-2 mb-5 text-red-500 text-small">{error}</p>;
};
