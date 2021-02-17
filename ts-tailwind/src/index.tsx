import "windi.css";
import { render } from "solid-js/web";

import App from "./App";

const dispose = render(() => <App />, document.getElementById("root"));

if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(dispose);
}
