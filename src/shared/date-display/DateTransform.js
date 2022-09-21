import React from "react";

export const withDateTransform = (Component) => (props) => {

  const dateDisplay = props?.date ? new Date(props.date ?? 0).toString() : 'None';

  return (
    <React.Fragment>
      <Component { ...props }>{ dateDisplay }</Component>
    </React.Fragment>
  );

};

export default withDateTransform;