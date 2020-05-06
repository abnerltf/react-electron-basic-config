import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routes from './routes';

const App = () => {

  return (
    <Routes></Routes>
  )
}

ReactDOM.render(<React.StrictMode><App></App></React.StrictMode>, document.getElementById('root'));