const Display = (props) => {
  return (
    <div className="display p-3 d-flex flex-column align-items-end justify-content-center">
      <div className="p-2 mb-4 expression w-100 text-end ">
        {props.expression}
      </div>
      <div className="p-2 fw-bold result w-100 text-end">{props.result}</div>
    </div>
  );
};

export default Display;
