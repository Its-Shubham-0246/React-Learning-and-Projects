import {createStore} from 'redux';

import { todoreducer} from './reducer';

// export const store = createStore(todoReducer);

export const store = configureStore(
 {
  reducer:
  {
   todo:todoreducer
  }
 }
)