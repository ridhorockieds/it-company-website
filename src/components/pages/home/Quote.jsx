import quote from "./../../../assets/quote.png";
import Button from "./Button";

const Quote = () => {
  return (
    <div className="py-16 px-4 md:py-24">
      <div
        className={`container mx-auto w-full md:w-4/5 lg:w-3/5 text-center text-white bg-quote bg-cover bg-center rounded-lg overflow-hidden`}
        style={{ backgroundImage: `url(${quote})` }}
      >
        <div className="bg-blue-950 bg-opacity-80 py-12">
          <h2 className="text-3xl md:text-4xl px-2 md:px-4 pb-10 leading-10 w-full md:w-4/5 mx-auto font-bold">
            “Some of the History of Our Company is that we are Catching up
            through Video”
          </h2>
          <Button>Get In Touch</Button>
        </div>
      </div>
    </div>
  );
};

export default Quote;
