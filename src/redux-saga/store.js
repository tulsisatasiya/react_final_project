import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootSaga } from "./saga";
import rootReducers from "./rootReducer";


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga)

export default store