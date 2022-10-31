export const AboutHero = () => {
  return (
    <div className="bg-egg px-4 md:px-8 pb-8 pt-4">
      <div className="px-2 bg-offwhite rounded pb-4">
        <div className="grid justify-items-center">
          <div className="bg-egg w-3/4 text-5xl sm-text-3xl text-center font-serif text-dustypink outline outline-double outline-gray-400 rounded shadow py-6 my-6">
            About Me
          </div>
          <div className=" text-4xl font-serif text-gray-700 font-bold text-center pt-4 pb-2">
            Hi, I&apos;m Allie!
          </div>
          <div className="text-lg sm-text-md font-serif font-bold text-gray-700">
            {" "}
            welcome to my blog :-)
          </div>
          <img
            src="./profile.jpg"
            className="w-full md:w-1/2 rounded border border-gray-700"
            alt=""
          />
        </div>
        <div className="flex flex-col px-2 md:px-20">
          <div className="flex justify-start text-4xl font-serif text-gray-700 font-bold py-4">
            why the blog?
          </div>
          <div className="flex justify-center text-lg font-serif text-gray-600">
            I started aleekat to give myself a creative outlet to write about my
            experiences, interests, and lessons learned while navigating life in
            my twenties. My interest in studying computer science set in my
            sophomore year of college, when I decided to change my life plans
            and pursue the major. I hope to inspire other women in tech by
            sharing my journey.
          </div>
          <div className="flex justify-start text-4xl font-serif text-gray-700 font-bold py-4">
            who am I?
          </div>
          <div className="flex justify-center text-lg font-serif text-gray-600">
            I&apos;m an earth-loving, creative, goofy person. I love to
            adventure, try new things, and meet new people! I currently live in
            Madison, WI and am a senior at UW-Madison studying computer science
            and entrepreneurship. I hope to use these skills to make the world a
            better place. My family means the world to me and I would be lost
            without them.
          </div>

          <div className="grid justify-items-center mb-8">
            <div className="bg-[url('/floral.png')] rounded w-3/4 mt-10 p-4 border border-1 border-dustypink">
              <div className="bg-egg rounded p-4 border border-1 border-dustypink">
                <div className="flex justify-center text-2xl font-serif text-gray-700 font-bold pb-4">
                  fun facts about me:
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm font-serif text-gray-600 pt-2">
                  <div className="col-span-1 flex justify-center">
                    I have an 8 year old cat named Moses
                  </div>
                  <div className="col-span-1 flex justify-center">
                    My favorite movie as a kid was Finding Nemo
                  </div>
                  <div className="col-span-1 flex justify-center">
                    I have been a vegetarian since 5th grade :-)
                  </div>
                  <div className="col-span-1 flex justify-center">
                    My favorite color is terracotta orange
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid justify-items-center">
            <div className="grid grid-cols-3 gap-4 text-sm font-serif text-gray-600 pt-2 sm:w-full md:w-3/4">
              <img
                src="./family.jpg"
                className="outline outline-gray-600"
                alt=""
              />
              <img
                src="./concert.jpg"
                className="outline outline-dustypink"
                alt=""
              />
              <img
                src="./friends.jpg"
                className="outline outline-gray-600"
                alt=""
              />
              <img
                src="./seth.jpg"
                className="outline outline-dustypink"
                alt=""
              />
              <img
                src="./valpo.jpg"
                className="outline outline-gray-600"
                alt=""
              />
              <img
                src="./mosie.jpg"
                className="outline outline-dustypink"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
