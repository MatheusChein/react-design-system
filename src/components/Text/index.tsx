import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
import { classNames } from '../../utils/classnames';

export interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Text({
  size = 'md',
  children,
  asChild = false,
  className = '',
}: TextProps) {
  const Component = asChild ? Slot : 'span';

  return (
    <Component
      className={classNames(
        'text-gray-100 font-sans',
        size === 'sm' ? 'text-xs' : '',
        size === 'md' ? 'text-sm' : '',
        size === 'lg' ? 'text-md' : '',
        className
      )}
    >
      {children}
    </Component>
  );
}
