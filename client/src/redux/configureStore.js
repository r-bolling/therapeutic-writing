import { applyMiddleware, createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const persistConfig = {
  key: "root",
  blacklist: ["users"],
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(preloadedState) {
  const store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  const persistor = persistStore(store);

  return { store, persistor };
}

// export default function configureStore(preloadedState) {
//   const store = createStore(
//     rootReducer,
//     compose(
//       applyMiddleware(thunk),
//       window.__REDUX_DEVTOOLS_EXTENSION__ &&
//         window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//   );

//   return { store };
// }
