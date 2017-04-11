import React from 'react';
import reactDOM from 'react-dom';

const App = (props) => {
  return (
    <h2 className="text-center">
      {props.headerMessage}
    </h2>
  );
};

App.propTypes = {
  headerMessage: React.PropTypes.string
};

App.defaultProps = {
  headerMessage: "Hello!!"
};

reactDOM.render(
  <App />,
  document.getElementById('root')
);
