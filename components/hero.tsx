import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <div className="bg-[url('/hero.jpg')] bg-cover bg-blend-multiply flex justify-center text-center">
      <div className="flex flex-col p-14">
        <div className="text-orange-300 p-2 font-serif text-xl">
          SEE WHAT'S OUT THERE
        </div>
        <div className="text-purple-300 p-2 font-serif text-5xl font-bold">
          shop the latest
        </div>
        <div className="text-gray-200 p-2 text-3xl italic">
          <Typewriter
            options={{
              strings: [
                "high fashion",
                "personalized picks",
                "everyday essentials",
                "top-shelf design",
              ],
              autoStart: true,
              loop: true,
            }}
          />{" "}
        </div>
      </div>
    </div>
  );
};
