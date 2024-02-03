import "./App.css";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
