import { combineReducers } from 'redux';
import reducer from './main_reducer';

// export composed reducers
export default combineReducers({
    reducer: reducer
})