const AboutMe = () => {
    return (
      <main className="bg-mainWhite pt-[4rem] ">
        <section className=" container mx-auto h-[120rem] ">
          <div className=" flex justify-between mt-[8rem] ">
            {/* left side */}
            <div className="w-1/3 h-[20rem] sticky top-[13rem] flex justify-center items-center">
              <div>
                <h2 className="text-5xl uppercase mb-[2rem]  ">About Me</h2>
                <p className=" uppercase ">pasionate Mern stack developer </p>
                <button className=" py-2 px-4 bg-darkBlue text-mainWhite mt-[1rem] rounded-xl hover:bg-skyblue hover:text-darkBlue transition-all duration-500 ease-out capitalize font-semibold tracking-wider ">
                  donload cv
                </button>
              </div>
            </div>
  
            {/* right side */}
            <div className="md:w-[25rem] lg:w-[30rem] overflow-hiddenhidden ">
              <section className="h-[25rem] mt-[4rem] ">
                <h2 className="text-3xl font-semibold ">Who I Am</h2>
                <p className="text-lg ">
                  I am a software developer with expertise in creating dynamic and
                  responsive websites. My passion lies in building projects that
                  blend functionality with design.
                </p>
              </section>
              <section className="h-[50rem] flex flex-col justify-center ">
                <h2 className="text-3xl font-semibold   ">My Journey</h2>
                <p className="text-lg ">
                  My journey started with learning basic HTML and CSS, which soon
                  expanded to mastering JavaScript frameworks like React and
                  Next.js. Over time, I developed skills in API integration,
                  performance optimization, and accessibility.
                </p>
              </section>
              <section className=" h-[40rem] mt-[3rem] ">
                <h2 className="text-3xl font-semibold ">Hobbies</h2>
                <p className="text-lg ">
                  When I'm not coding, I enjoy hiking, photography, and exploring
                  new technologies.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
    );
  };
  
  export default AboutMe;