import {createBrowserHistory} from "history";

const browserHistory = createBrowserHistory();

browserHistory.listen((_) => {
  window.scrollTo(0, 0);
});

export default browserHistory;
