import { InputHTMLAttributes, ReactNode } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { classNames } from '../../utils/classnames';
import { Check } from 'phosphor-react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox({ ...rest }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className="w-6 h-6 bg-gray-800 rounded px-0.5">
      <CheckboxPrimitive.Indicator asChild>
        <Check size={20} weight="bold" className="text-cyan-500" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
