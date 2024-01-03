import { TextInput, Textarea } from "flowbite-react";

function publicComment() {
  return (
    <div className="   ">
      <div className=" flex  py-4      gap-1 mb-2  ">
        <img
          className="  w-8   h-8     rounded-full "
          src="../../public/Gravity-023.jpg  "
        />
        <div className="  flex w-[50rem] ">
          <textarea
            cols={50}
            rows={2}
            className="  f focus:border-white focus:outline-none border  border-gray-300 rounded-xl bg-gray-50"
          />
          <div className=" self-end">
            <button className="text-sm     w-24 text-center   p-2  font-semibold  text-white  border    bg-teal-950   rounded-full ">
              post
            </button>
          </div>
        </div>
      </div>
      <div className=" border-b "></div>
    </div>
  );
}

export default publicComment;
