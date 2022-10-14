import './styles/tailwind.css';

import reactLogo from './assets/logo.svg';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Envelope, Lock } from 'phosphor-react';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <img src={reactLogo} />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text className="text-gray-400 mt-1">Faça login e comece a usar</Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Enderço de e-mail</Text>

          <TextInput.Root>
            <TextInput.Input
              type="email"
              id="email"
              placeholder="johndoe@example.com"
            />
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
          </TextInput.Root>
        </label>

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Senha</Text>

          <TextInput.Root>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="*******"
            />
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200 hover:cursor-pointer">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col gap-4 mt-8">
        <Text asChild>
          <a
            href="#"
            className="underline text-gray-400 text-center transition duration-100 hover:text-gray-200"
          >
            Esqueceu sua senha?
          </a>
        </Text>

        <Text asChild>
          <a
            href="#"
            className="underline text-gray-400 text-center transition duration-100 hover:text-gray-200"
          >
            Não possui conta? Crie uma agora
          </a>
        </Text>
      </footer>
    </div>
  );
}
