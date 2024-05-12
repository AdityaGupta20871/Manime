'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('0330ec97-1502-4be9-827a-46c61d90ec36');
  }, []);

  return null;
};
