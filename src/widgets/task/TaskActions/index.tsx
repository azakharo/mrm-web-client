import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Alert, Box, Button} from '@mui/material';
import isEmpty from 'lodash/isEmpty';
import {useSnackbar} from 'notistack';

import {
  TaskAction,
  useCreateTaskAction,
  useGetTaskActions,
} from '@entities/task';
import {openConfirmation} from '@shared/components';
import {ROUTE__MY_TASK_DETAIL__SUB_TASKS} from '@shared/constants';

interface Props {
  taskId: number;
}

export const TaskActions: FC<Props> = ({taskId}) => {
  const {enqueueSnackbar} = useSnackbar();
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(
      ROUTE__MY_TASK_DETAIL__SUB_TASKS.replace(':id', taskId.toString()),
    );
  };

  const {data: actions, isPending, error} = useGetTaskActions(taskId);

  let backwardAction: TaskAction | null = null;
  let forwardAction: TaskAction | null = null;
  if (!isEmpty(actions)) {
    const forwardActions = actions!.filter(act => act.direction === 'forward');
    if (!isEmpty(forwardActions)) {
      forwardAction =
        forwardActions.find(act => act.next_status_type === 'in_progress') ??
        forwardActions[0]!;
    }

    const backwardActions = actions!.filter(
      act => act.direction === 'backward',
    );
    if (!isEmpty(backwardActions)) {
      backwardAction = backwardActions[0]!;
    }
  }

  const {mutate: createAction, isPending: isCreatingAction} =
    useCreateTaskAction();

  const processAction = async (action: TaskAction) => {
    if (action.direction === 'forward' && action.next_status_type === 'done') {
      try {
        await openConfirmation({
          title: 'Завершить задачу?',
          text: 'Вы уверены, что хотите завершить задачу?',
          okButtonText: 'Завершить задачу',
        });
      } catch (_) {
        return;
      }
    }

    void createAction(
      {
        taskId,
        actionId: action.id,
      },
      {
        onError: () => {
          enqueueSnackbar('Произошла ошибка. Попробуйте ещё раз.', {
            variant: 'error',
          });
        },
      },
    );
  };

  return (
    <Box gap={2} display="flex" alignItems="center" flexWrap="wrap">
      <Button variant="subtle" onClick={handleDetailsClick}>
        Смотреть подробнее
      </Button>

      {isPending && 'Загрузка...'}

      {error && (
        <Alert severity="error" color="error">
          Не удалось загрузить действия для задачи
        </Alert>
      )}

      {backwardAction && (
        <Button
          variant="subtle"
          color="error"
          onClick={() => {
            void processAction(backwardAction!);
          }}
          disabled={isCreatingAction}
        >
          {backwardAction.name}
        </Button>
      )}

      {forwardAction && (
        <Button
          variant="contained"
          onClick={() => {
            void processAction(forwardAction!);
          }}
          disabled={isCreatingAction}
        >
          {forwardAction.name}
        </Button>
      )}
    </Box>
  );
};
