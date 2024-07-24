import { call, put, takeLatest, delay } from "redux-saga/effects"; //gerekli olan side-effectlerimizi import ediyoruz
import axios from "axios"

function* fetchUser(action) {
    try {
        yield delay(1000); // loading stateini görebilmek icin 1 sn bekletiyoruz
        const user = yield call(axios.get, `https://jsonplaceholder.typicode.com/users/${action.payload.userId}`)
        //call effecti ile axios kullanarak api isteği yapıyoruz
        yield put({ type: "USER_FETCH_SUCCEEDED", user: user.data })
        //eğer başarılı olursak USER_FETCH_SUCCEEDED action'ını dispatch ediyoruz.
    } catch (err) {
        //hata olursa da USER_FETCH_FAILED action'ını dispatch ediyoruz
        yield put({ type: "USER_FETCH_FAILED", message: err.message })
    }
}

// userSaga adında bir tane daha generic fonksiyon oluşturuyoruz ve USER_FETCH_REQUESTED action'ını dinleyip ve fetchUser fonksiyonunu çalıştırıyoruz.
function* userSaga() {
    yield takeLatest("USER_FETCH_REQUESTED", fetchUser)
}

export default userSaga