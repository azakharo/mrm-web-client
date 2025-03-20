export const ROUTE__LOGIN = '/login';
export const ROUTE__LOGIN_CALLBACK = '/login-callback/:providerId';
export const ROUTE__DASHBOARD = '/dashboard';
export const ROUTE__DASHBOARD_MAIN = `${ROUTE__DASHBOARD}/main`;
export const ROUTE__TK_STATISTICS = `${ROUTE__DASHBOARD_MAIN}/tk-statistics/:tkId`;
export const ROUTE__MY_TASKS = `${ROUTE__DASHBOARD}/my-tasks`;
export const ROUTE__MY_TASK_DETAIL = `${ROUTE__MY_TASKS}/:id`;
export const ROUTE__MY_TASK_DETAIL__SUB_TASKS = `${ROUTE__MY_TASKS}/:id/sub-tasks`;
