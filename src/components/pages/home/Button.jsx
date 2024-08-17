const Button = ({ children }) => {
  return (
    <button className="bg-secondary hover:bg-red-600 text-base transition-all duration-150 py-3 px-6 lg:py-3 lg:px-7 rounded-md text-white ">
      {children}
    </button>
  );
};

export default Button;
