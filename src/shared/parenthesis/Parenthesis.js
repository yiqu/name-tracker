import React from 'react';

const Parenthesis = (props) => {

  return (
    <React.Fragment>
      ({ props.children })
    </React.Fragment>
  );
};

export default Parenthesis;