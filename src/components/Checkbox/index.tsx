import { InputHTMLAttributes, ReactNode } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { classNames } from '../../utils/classnames';
import { Check } from 'phosphor-react';

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className="w-6 h-6 bg-gray-800 rounded px-0.5 outline-none focus:ring-2 ring-cyan-500"
      {...props}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check size={20} weight="bold" className="text-cyan-500" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
