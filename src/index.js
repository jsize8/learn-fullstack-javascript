import React from 'react';
import reactDOM from 'react-dom';

const Header = ({ message }) => {
  return (
    <h2 className="Header text-center">
      {message}
    </h2>
  );
};

Header.propTypes = {
  message: React.PropTypes.string
};

const App = () => {
  return (
    <div className="App">
      <Header message = "Naming Contests" />
      <div>
        ...
      </div>
    </div>
  );
};

reactDOM.render(
  <App />,
  document.getElementById('root')
);
