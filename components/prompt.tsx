export const Prompt = () => {
  return (
    <div className="bg-[url('/prompt.jpg')] py-8 px-4 bg-cover bg-blend-multiply flex justify-center md:justify-start text-center bg-center">
      <div className="relative bg-gradient-to-r from-pink-700/75 via-pink-500/75 to-purple-900/75 w-3/4 md:w-1/2 py-8 m-4 rounded-lg bg-cover bg-blend-multiply border-2 border-pink-600 flex justify-center text-center">
        <div className="flex flex-col p-14">
          <div className="text-white p-3 font-['Oswald'] font-extrabold text-4xl md:text-5xl">
            FLAUNT YOUR STYLE
          </div>
          <div className="text-white p-3 font-serif text:2xl md:text-3xl font-bold">
            Design your fit for:
          </div>
          <div className="text-white p-3 font-bold text:4xl md:text-5xl italic">
            A NIGHT OUT
          </div>
        </div>
      </div>
    </div>
  );
};
