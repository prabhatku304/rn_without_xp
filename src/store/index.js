
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

let composeConfigure= compose;
if(__DEV__){
composeConfigure = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const storeConfigure = ()=>{
                const store = createStore(rootReducer,
                    composeConfigure(applyMiddleware(thunk)))

                    return store;
}
export default storeConfigure;