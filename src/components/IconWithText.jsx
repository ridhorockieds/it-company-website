import Icons from "./Icons";

const IconWithText = (props) => {
  return (
    <div className="flex gap-4 py-1 content-center">
      <Icons size="w-16 h-16 lg:w-20 lg:h-20 bg-gray-100">
        {props.children}
      </Icons>
      <div>
        {props.value1 && (
          <h1 className="md:text-xl font-bold text-secondary">
            {props.value1}
          </h1>
        )}
        {props.value2 && (
          <p
            className={`${props.textcolor} text-sm md:text-base font-semibold leading-tight`}
          >
            {props.value2}
          </p>
        )}
        {props.value3 && (
          <p
            className={`${props.textcolor} text-sm md:text-base font-semibold leading-tight`}
          >
            {props.value3}
          </p>
        )}
      </div>
    </div>
  );
};

export default IconWithText;
