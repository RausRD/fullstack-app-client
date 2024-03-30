import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../components/input';
import { Button, Link } from '@nextui-org/react';
import {
  useLazyCurrentQuery,
  useLoginMutation,
} from '../../app/services/userApi';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from '../../components/error-message';
import { hasErrorField } from '../../utils/has-error-field';

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

  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [triggerCurrentCuery] = useLazyCurrentQuery();

  const onSubmit = async (data: Login) => {
    try {
      await login(data).unwrap();
      await triggerCurrentCuery().unwrap();
      navigate('/');
    } catch (error) {
      if (hasErrorField(error)) {
        setError(error.data.error);
      }
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
      <ErrorMessage error={error} />
      <p className="text-center text-small">
        Немає облікового запису?{' '}
        <Link
          size="sm"
          className="cursor-pointer"
          onPress={() => setSelected('sign-up')}
        >
          Створіть його!
        </Link>
      </p>
      <div className="flex justify-end gap-2">
        <Button fullWidth color="primary" type="submit" isLoading={isLoading}>
          Ввійти
        </Button>
      </div>
    </form>
  );
};
