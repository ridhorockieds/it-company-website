import Icons from "../../Icons";

const CardServices = (props) => {
  return (
    <div className="bg-slate-100 p-6 rounded-lg relative">
      <h1 className="text-6xl font-bold absolute top-0 right-3 opacity-20">
        {props.id && "0" + props.id}
      </h1>
      <Icons size="bg-white w-16 h-16">{props.children}</Icons>
      <h2 className="font-bold text-xl pt-4 text-primary">{props.title}</h2>
      <div className="flex py-4 gap-3">
        <span className="py-1 bg-secondary rounded-lg w-16"></span>
        <span className="py-1 bg-secondary rounded-lg w-6"></span>
      </div>
      <p>{props.text}</p>
    </div>
  );
};

export default CardServices;
