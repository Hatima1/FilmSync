import AboutFI from "./AboutFI";
import AboutSe from "./AboutSe";
import AboutSha from "./AboutSha";

{
  /* <p className=" text-lg font-semibold text-gray-500 mb-12   ">
“It's not easy for me to ... send a boy off to die without talking
about it first.”
</p> */
}
function About() {
  return (
    <>
      <div className="  mb-14 md:mb-28">
        <div className=" max-w-6xl mx-auto px-2  ">
          <div>
            <h2 className="  inline-block   text-gray-800  font-semibold mb-5 md:mb-10 text-sm md:text-xl ">
              {" "}
              weekly movie recommendation{" "}
              <div className=" border-gray-900 border-t-2"></div>
            </h2>
          </div>

          <div className="border-t-2 border w-10  border-yellow-500  mb-2  "></div>
          <div className="   mb-7  ">
            <h2 className="  md:text-3xl text-lg font-semibold text-teal-900 ">
              "12 Angry Men": Exploring Justice and Humanity
            </h2>
          </div>
          <div className=" grid-cols-1    md:grid-cols-2    grid gap-9   md:gap-14   ">
            <div>
              <div>
                <article className="font-semibold text-gray-900  text-sm  md:text-base ">
                  <p className=" mb-3">
                    In a single sweltering room, the pulse of justice beats amid
                    heated deliberations. "12 Angry Men," a cinematic marvel,
                    etches an indelible mark on the realm of courtroom dramas.
                    Directed by Sidney Lumet, this film captivates audiences
                    through its gripping narrative and timeless exploration of
                    human nature.
                  </p>
                  <p className=" mb-3">
                    Set against the backdrop of a murder trial, the story
                    encapsulates the clash of ideologies and prejudices within a
                    diverse jury. Twelve men, each bearing unique perspectives,
                    converge to decide the fate of a young man accused of
                    murder. What ensues is a battle not merely of facts but of
                    personal biases and moral convictions.
                  </p>
                  <p className=" mb-3">
                    As the room's temperature rises, so does the intensity of
                    the deliberation. The film's brilliance lies in its ability
                    to unveil the intricacies of human behavior—how biases,
                    upbringing, and individual experiences mold beliefs and
                    judgments.
                  </p>
                  <p className=" mb-3">
                    At the story's core stands Juror #8, portrayed masterfully
                    by Henry Fonda, who questions the seemingly unanimous guilty
                    verdict. His unwavering pursuit of justice challenges the
                    status quo, unraveling layers of doubt and prompting a
                    gripping reexamination of the case.
                  </p>
                  <p>
                    With each impassioned argument, the film peels away societal
                    facades, laying bare the vulnerabilities and complexities of
                    the human psyche. It's a symphony of conflict, an intricate
                    dance of doubt and certainty, woven with remarkable dialogue
                    and compelling performances.
                  </p>
                </article>
              </div>
            </div>
            <div className=" flex justify-center  row-start-1 md:row-auto    ">
              <img
                className=" self-center   w-3/4    md:w-3/4 "
                src="public/12 angry men (1).jpg"
                alt="angry men imge"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <AboutSha />
      <AboutFI />
      <AboutSe />
    </>
  );
}

export default About;
