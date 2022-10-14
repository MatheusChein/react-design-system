import { Slot } from '@radix-ui/react-slot';
import { Fragment, InputHTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../utils/classnames';

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div
      className={classNames(
        'py-4 px-3 h-12 rounded bg-gray-800 w-full flex items-center gap-3 transition duration-150 focus-within:ring-1 ring-cyan-500',
        'flex-row-reverse' // isso aqui é gambiarra para o peer-focus do tailwind funcionar
      )}
    >
      {children}
    </div>
  );
}

TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400 peer-focus:text-cyan-500">
      {children}
    </Slot>
  );
}

TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput({ ...rest }: TextInputInputProps) {
  return (
    <input
      {...rest}
      className="bg-transparent peer flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
    />
  );
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
