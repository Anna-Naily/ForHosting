import "./App.css";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Spinner } from "./components/Spinner/Spinner";
import { Router } from "./components/Router/Router";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Spinner />}>
          <Router />
        </PersistGate>
      </Provider>
    </div>
  );
}
export default App;
