import {defineMock} from 'vite-plugin-mock-dev-server';
import {CommentOnBackend} from "src/entities/task/api/backendTypes";

const comments: CommentOnBackend[] = [
  {
    id: 1,
    author: {
      id: 1,
      employee_code: '1',
      employee_name: 'Михаил Кулик',
    },
    text: 'Эта задача требует обсуждения. Пока не понятно, как её делать.',
    created_at: '2025-02-12T06:02:17.418',
  },
  {
    id: 2,
    author: {
      id: 2,
      employee_code: '2',
      employee_name: 'Роман Сидоров',
    },
    text: 'Нужно определиться с требованиями и указать их в задаче. Также нужно подготовить макеты и приложить ссылку на документацию API. После этого нужно подумать, какие будут тестовые данные. Ну и, конечно, нужно разработать тест-план.',
    created_at: '2025-02-12T06:24:17.418',
  },
  {
    id: 3,
    author: {
      id: 3,
      employee_code: '3',
      employee_name: 'Илья',
    },
    text: 'Как насчёт того, чтобы разбить задачу на подзадачи? Это упростит проработку требований и сделает оценку времени на выполнение проще.',
    created_at: '2025-02-12T06:26:17.418',
  },
  {
    id: 4,
    author: {
      id: 4,
      employee_code: '4',
      employee_name: 'Александра Пчеловодова',
    },
    text: 'Я всё сделаю, не беспокойтесь. Завтра до 11:00 всё будет готово. Потом всё обсудим на созвоне.',
    created_at: '2025-02-12T06:41:11.418',
  },
];

export default defineMock({
  enabled: false,
  url: '/api/tasks/:taskId/comments',
  method: 'GET',
  delay: 1500,
  body: (params) => {
    // @ts-ignore
    const id = params.taskId;

    return {
      task_id: id,
      comments,
      pagination: {
        page: 1,
        items_per_page: 10,
        total_pages: 1,
        total: comments.length,
      },
    };
  }
});
