function SelectTimline({ timeline, settimeline }) {
  return (
    <div className=" place-items-center grid grid-cols-2 border-b pt-4">
      <div
        className={
          timeline === "all" && " text-lg font-semibold text-gray-950   "
        }
      >
        <button onClick={() => settimeline("all")}>Timline</button>
        {timeline === "all" && (
          <div className=" border-t-2 border-teal-950"></div>
        )}
      </div>
      <div
        className={
          timeline === "following" && " text-lg font-semibold text-gray-950   "
        }
      >
        <button onClick={() => settimeline("following")}>Following</button>
        {timeline === "following" && (
          <div className=" border-t-2 border-teal-950"></div>
        )}
      </div>
    </div>
  );
}

export default SelectTimline;
