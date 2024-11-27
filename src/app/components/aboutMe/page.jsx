"use client";

const AboutMe = () => {
  const aboutMeInfo = [
    {
      title: "Who I Am",
      body: "My name is Masrafi Mondol a student of Green University of Bangladesh",
    },
    {
      title: "What I Do",
      body: "I am a software developer with expertise in creating dynamic and responsive websites. My passion lies in building projects that blend functionality with design.",
    },
    {
      title: "Hobbies",
      body: "I enjoy coding, playing video games, and exploring new technologies.",
    },
  ];

  return (
    <main className="bg-mainWhite pt-[4rem]">
      <section className="container mx-auto">
        <div className="flex justify-between mt-[8rem]">
          {/* left side */}
          <div className="w-1/3 h-[25rem] sticky top-[13rem] flex justify-center items-center">
            <div>
              <div>
                <h2 className="lg:text-5xl uppercase lg:mb-[2rem]">About Me</h2>
                <p className="uppercase">Passionate MERN stack developer</p>
                <button className="lg:py-2 lg:px-4 bg-darkBlue text-mainWhite mt-[1rem] rounded-xl hover:bg-skyblue hover:text-darkBlue transition-all duration-500 ease-out capitalize font-semibold tracking-wider">
                  Download CV
                </button>
              </div>
              <div className="lg:mt-[4rem]">
                <div className="lg:h-[8rem] lg:w-[12rem] lg:px-2 lg:py-3 lg:border-2 border-darkBlue rounded-md">
                  <h3 className="lg:text-2xl lg:font-semibold underline underline-offset-[2rem]">
                    18+
                  </h3>
                  <p>
                    months of <br />
                    <span className="uppercase lg:text-2xl">experience</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="md:w-[25rem] lg:w-[30rem] overflow-hidden">
            {aboutMeInfo.map((items, index) => {
              return (
                <section key={index} className="lg:h-[30rem] lg:mt-[4rem]">
                  <h2 className="text-3xl font-semibold">{items.title}</h2>
                  <p className="text-lg">{items.body}</p>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
