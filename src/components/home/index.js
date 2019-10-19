/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

export const Home = ({ resetSearch }) => {
  useEffect(() => {
    resetSearch();
  }, []);
  return <div />;
};
