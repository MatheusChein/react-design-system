import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../utils/classnames';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({
  children,
  asChild = false,
  disabled = false,
  className = '',
  ...rest
}: ButtonProps) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      {...rest}
      className={classNames(
        'text-black font-sans py-3 px-4 rounded font-semibold text-sm w-full flex items-center justify-center transition duration-150 focus:outline-none',
        disabled
          ? 'bg-cyan-900 cursor-not-allowed'
          : 'bg-cyan-500 hover:scale-105 hover:bg-cyan-600 focus:ring-1 ring-white',
        className
      )}
    >
      {children}
    </Component>
  );
}
