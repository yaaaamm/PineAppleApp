import { applyMiddleware, createStore } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createRootReducer from './redusers';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history'



export const history = createBrowserHistory();


const middleware =[thunk];


export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
      composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
          ...middleware,
      ),
    ),
  );

  return store
}



/*
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;*/
