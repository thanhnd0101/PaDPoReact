import account from "./../modules/account/reducers/index";
import conversation from "./../modules/chatBox/reducers/index";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  account: account,
  conversation: conversation,
});

const configureStore = () => {
  return createStore(rootReducer, compose(applyMiddleware(thunk)));
};

export default configureStore;
