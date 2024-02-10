import React from 'react';

interface RadioGroupContextProps {
  name: string;
  value: string;
  variant: 'radio' | 'inline';
  direction: 'horizontal' | 'vertical';
  onChange: (value: string) => void;
}

export const RadioGroupContext =
  React.createContext<RadioGroupContextProps | null>(null);
