import React from 'react';

export interface PropsHeader {
  userSelected: string;
  setUserSelected: (value: React.SetStateAction<string>) => void;
}
