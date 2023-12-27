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
      <div className=" ">
        <div className=" max-w-6xl mx-auto px-2 my-9 ">
          <div className="   grid grid-cols-2       gap-14   ">
            <div>
              <div className="border-t-2 border w-10  border-yellow-500  mb-2  "></div>
              <div className="   mb-3  ">
                <h2 className=" text-3xl font-semibold text-teal-900 ">
                  "12 Angry Men": Exploring Justice and Humanity
                </h2>
              </div>

              <div>
                <article className="font-semibold text-gray-900 text-base ">
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
            <div className=" flex justify-center    ">
              <img
                className=" self-center   w-[450px] "
                src="public/12 angry men (1).jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <AboutSha />
    </>
  );
}

export default About;
