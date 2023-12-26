function comment() {
  return (
    <div className="  bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 ">
      <img
        className=" w-20 h-20   rounded-full mx-auto "
        src="../../public/Gravity-023.jpg  "
      />
      <div className="text-sky-500 dark:text-sky-400 inline-block ml-4">
        Sarah Dayan
      </div>
      <div className="text-slate-700 dark:text-slate-500 ">
        Staff Engineer, Algolia
      </div>
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium"></figcaption>
      </div>
    </div>
  );
}

export default comment;
