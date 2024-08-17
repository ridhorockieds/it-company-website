import getImgUrl from "../../../utils/utils";

const CardOurBlog = ({ thumbnail, title, ava, author, date }) => {
  return (
    <div className="max-w-lg rounded-lg drop-shadow-md shadow-sm bg-white p-3 md:p-4 hover:drop-shadow-xl">
      <div className="w-full">
        <img src={getImgUrl(thumbnail)} alt={author} className="w-full" />
      </div>
      <h2 className="py-4 text-secondary font-bold text-xl md:text-2xl">
        {title}
      </h2>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <img src={getImgUrl(ava)} width={40} alt={author} />
          <h4 className="md:text-lg font-semibold text-primary">{author}</h4>
        </div>
        <p className="font-semibold text-sm md:text-base text-gray-600">
          {date}
        </p>
      </div>
    </div>
  );
};

export default CardOurBlog;
