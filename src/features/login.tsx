import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../components/input';
import { Button, Link } from '@nextui-org/react';

type Login = {
  email: string;
  password: string;
};

type Props = {
  setSelected: (value: string) => void;
};

export const Login: React.FC<Props> = ({ setSelected }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Login>({
    mode: 'onChange',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return (
    <form className="flex flex-col gap-4">
      <Input
        control={control}
        name="email"
        label="Email"
        type="email"
        required="Обов'язкове поле"
      />
      <Input
        control={control}
        name="password"
        label="Пароль"
        type="password"
        required="Обов'язкове поле"
      />
      <p className="text-center text-small">
        Немає облікового запису?{' '}
        <Link
          size="sm"
          className="cursor-pointer"
          onPress={() => setSelected('isgn-up')}
        >
          Створіть його!
        </Link>
      </p>
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary" type="submit">
          Ввійти
        </Button>
      </div>
    </form>
  );
};
