import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import purchaseReducer from 'reducers/purchaseReducer';
const reducers = combineReducers({
    form: formReducer,
    purchases: purchaseReducer
});
export default reducers;
