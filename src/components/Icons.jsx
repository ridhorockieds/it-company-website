const Icons = (props) => {
  return (
    <div className={`${props.size} rounded-md grid place-items-center`}>
      {props.children}
    </div>
  );
};

export default Icons;
