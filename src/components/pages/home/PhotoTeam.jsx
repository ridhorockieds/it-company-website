const PhotoTeam = ({ ava, name, profession }) => {
  return (
    <div className="">
      <div className="rounded-lg overflow-hidden">
        <img src={ava} alt={name} />
      </div>
      <div className="text-center py-2">
        <h3 className="text-xl text-secondary font-bold">{name}</h3>
        <p>{profession}</p>
      </div>
    </div>
  );
};

export default PhotoTeam;
