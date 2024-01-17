function DetilsImg({ movie }) {
  return (
    <div className=" mb-3   xl:mb-0  flex justify-center     ">
      <img
        className="  rounded-xl        w-1/2    xl:w-full    "
        src={movie?.Poster}
        alt=" post  photo"
        width="70"
        height="auto"
      />
    </div>
  );
}

export default DetilsImg;
