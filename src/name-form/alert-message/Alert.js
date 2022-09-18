

const Alert = (props) => {


  let content = (
    <div></div>
  );

  if (props.hasAlert) {
    content = (<div className="alert alert-danger" role="alert">
      { props.message }
    </div>);
  }

  return (
    content
  );

};

export default Alert;