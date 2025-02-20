import {FC} from 'react';
import {useSearchParams} from 'react-router-dom';

export const LoginCallbackPage: FC = () => {
  const [searchParams] = useSearchParams();
  const authCode = searchParams.get('code') ?? '';

  return <div>{authCode}</div>;
};
