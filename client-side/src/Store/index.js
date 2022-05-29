import { configureStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../Reducers';

const Store = configureStore(rootReducer, composeWithDevTools());

export default Store;
