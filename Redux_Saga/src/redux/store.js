import { configureStore } from "@reduxjs/toolkit" //eğer redux kullansaydık createStore ve applyMiddleware'lari import edip bunlara ihtiyacımız olacaktı fakat dökümanda da toolkit seçeneği olduğu için bunu seçip configureStore import edip kullanıyoruz.
import createSagaMiddleware from "redux-saga"
import rootReducer from "./reducers/userReducer"
import rootSaga from "./sagas/userSaga"

const sagaMiddleware = createSagaMiddleware()  //saga middleware'imizi oluşturuyoruz.

//ve redux store'u configureStore kullanarak oluşturup ve saga middleware'i ekliyoruz
const store = configureStore({
    reducer: rootReducer, // Reducer'i belirtiyoruz
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware) // Middleware'i ekliyoruz
}
)

sagaMiddleware.run(rootSaga) // saga'mızı koşturuyoruz

export default store;
