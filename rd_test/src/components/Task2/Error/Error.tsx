import React from 'react';

import styles from './error.module.css';

type Props = {
  children: string;
};

export const ErrorValidation: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.errorCenter}>
      {children}
    </div>
  );
};
