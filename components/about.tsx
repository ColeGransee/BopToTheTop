export const About = () => {
  return (
    <div>
      <div className="bg-egg border-b-2 border-double border-gray-600">
        {/*<div className="text-4xl text-center font-serif font-bold text-gray-900 py-6">*/}
        {/*  About*/}
        {/*</div>*/}
        <div className="grid justify-items-center py-6">
          <div className="flex flex-col px-2 md:px-20">
            <div className="flex justify-center text-4xl font-serif text-gray-700 font-bold py-4">
              What is BopToTheTop?
            </div>
            <div className="flex text-left justify-center text-lg font-serif text-gray-600">
              BopToTheTop is a web app focused on selecting clothes featured in
              the given category of ShopBop's apparel selection. With the image,
              users select one of each: a top, bottom, and accessory.
              BopToTheTop features ways in which you can create and discover new
              outfits each week. The goal is to let users discover the latest
              apparel, activewear, shoes & accessories from established and
              emerging designers in Shopbop in exchange for rewards. We
              excitement to people looking to discover a new love for designing
              outfits. Engage with other creators through the leaderboard by
              upvoting other outfits!
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-2 py-6 border-b-2 border-gray-600">
        <div className="md:flex flex-row">
          <img className="py-6" src="aboutimage.jpg" />
          <div className="px-4">
            <div className="flex justify-center text-4xl font-serif text-gray-700 font-bold py-4">
              how to play
            </div>
            <div>
              <div className="flex justify-start text-xl font-serif text-gray-700">
                1. Weekly Prompt
              </div>
              <div className="flex justify-start text-md font-serif text-gray-600">
                Each week users will receive the same weekly prompt in which
                they will create their own outfit based on said prompt.
              </div>
            </div>
            <div>
              <div className="flex justify-start text-xl font-serif text-gray-700">
                2. Design Outfit
              </div>
              <div className="flex justify-start text-md font-serif text-gray-600">
                Using the Shopbop catalog, design an outfit using a top, a
                bottom, and an accessory.
              </div>
            </div>
            <div>
              <div className="flex justify-start text-xl font-serif text-gray-700">
                3. Publish Outfit
              </div>
              <div className="flex justify-start text-md font-serif text-gray-600">
                Once you've finished choosing your outfit, publish it to your
                page.
              </div>
            </div>
            <div>
              <div className="flex justify-start text-xl font-serif text-gray-700">
                4. Vote
              </div>
              <div className="flex justify-start text-md font-serif text-gray-600">
                Go to the leaderboard and vote for your favorite outfits. One
                user can only vote for 3 outfits total.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
