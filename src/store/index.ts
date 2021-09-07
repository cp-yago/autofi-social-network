import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import { IFeedState } from './modules/feed/types';

export interface IState {
  feed: IFeedState;
}

const store = createStore(rootReducer);

export default store;
