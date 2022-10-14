import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../utils/classnames';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({
  children,
  asChild = false,
  disabled = false,
  ...rest
}: ButtonProps) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      {...rest}
      className={classNames(
        'text-black font-sans py-4 px-3 rounded font-semibold text-sm w-full flex items-center justify-center transition duration-150 focus:outline-none',
        disabled
          ? 'bg-cyan-900 cursor-not-allowed'
          : 'bg-cyan-500 hover:scale-[1.01] hover:bg-cyan-600 focus:ring-2 ring-white'
      )}
    >
      {children}
    </Component>
  );
}
