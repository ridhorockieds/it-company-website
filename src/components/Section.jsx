const Section = (props) => {
  return (
    <div className={`${props.css}`}>
      <div className="container mx-auto">
        <h2 className="text-secondary text-2xl md:text-3xl font-bold">
          \ {props.subtitle} \
        </h2>
        <h1
          className={`${props.cssTitle} text-3xl md:text-4xl lg:text-5xl font-bold py-2`}
        >
          {props.title}
        </h1>
        {props.children}
      </div>
    </div>
  );
};

export default Section;
