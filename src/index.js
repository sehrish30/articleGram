// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// // import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';

import Routes from 'routes';
import Topbar from 'components/topbar';

import { HashRouter as Router } from 'react-router-dom';
import { CurrentUserProvider } from './contexts/currentUser';
import CurrentUserChecker from 'pages/authentication/components/currentUserChecker.js';

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <Topbar />
          <Routes />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
