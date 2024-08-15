import "./App.css";
import Counter from "./component/Counter/index";

//headlessui/react
//classnames
//dayjs

function App() {
  return (
    <>
      <h2>Hello Cypress</h2>
      <Counter initialValue={10} />
    </>
  );
}

export default App;
