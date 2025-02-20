import {FC} from 'react';
import useMount from 'ahooks/es/useMount';

export const LoginCallbackPage: FC = () => {
  useMount(() => {
    console.log(window.location.href);
  });

  return <div>{window.location.href}</div>;
};
