import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
import { classNames } from '../../utils/classnames';

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Heading({
  size = 'md',
  children,
  asChild = false,
  className = '',
}: HeadingProps) {
  const Component = asChild ? Slot : 'h2';

  return (
    <Component
      className={classNames(
        'text-gray-100 font-sans font-bold',
        size === 'sm' ? 'text-lg' : '',
        size === 'md' ? 'text-xl' : '',
        size === 'lg' ? 'text-2xl' : '',
        className
      )}
    >
      {children}
    </Component>
  );
}
