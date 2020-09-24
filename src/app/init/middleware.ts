// Core
import { compose, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare const window: ExtendedWindow;

export const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: (action): string => (action.error ? 'firebrick' : 'deepskyblue'),
    prevState: (): string => '#1C5FAF',
    action: (): string => '#149945',
    nextState: (): string => '#A47104',
    error: (): string => '#ff0005',
  },
});

const composeEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const __DEV__ = process.env.NODE_ENV === 'development';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history);
// const composeEnhancers =
// (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose;

const middleware: Middleware[] = [sagaMiddleware, routerMiddleware];

if (__DEV__) {
  middleware.push(logger);
}

export { history, composeEnhancers, middleware, sagaMiddleware };
