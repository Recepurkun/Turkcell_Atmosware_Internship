import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import UserDisplay from "./components/UserDisplay";
import ErrorDisplay from "./components/ErrorDisplay";
import Loading from "./components/Loading";

function App() {
  const dispatch = useDispatch();
  //statelerimizi seçiyoruz.
  const user = useSelector((state) => state.user);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [value, setValue] = useState(1); //bir sonraki kullanıcının verilerini çekebilmek için basit bir state tanımlıyoruz.

  //kullanıcı verilerini çekme fonksiyonumuz
  const fetchUser = async () => {
    dispatch({ type: "USER_FETCH_REQUESTED", payload: { userId: value } });
    setValue(value + 1);
  };

  return (
    <>
      <h1>REDUX - SAGA</h1>
      <button onClick={fetchUser} disabled={loading}>
        {loading ? <Loading /> : "Get User"}
      </button>
      <ErrorDisplay error={error} />
      <UserDisplay user={user} />
    </>
  );
}

export default App;
