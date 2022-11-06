export const About = () => {
  return (
    <div>
      <div className="bg-pink-100 px-4 py-2 border-b-2 border-double border-gray-600">
        <div className="grid justify-items-center py-6">
          <div className="flex flex-col px-2 md:px-20">
            <div className="flex justify-start text-3xl font-serif text-gray-700 font-bold py-4">
              what is "Bop to the Top"?
            </div>
            <div className="flex text-left justify-center text-md font-serif text-gray-600">
              "Bop to the Top" is a web game focused on allowing users to select
              clothing items featured in a given category (i.e. Beach) of
              Shopbop's apparel selection. In each category, contestants select
              one of the following: a top, bottom, and an accessory. "Bop to the
              Top" allows customers to create and discover new outfits in each
              contest.
            </div>
            <div className="flex pt-2 text-left justify-center text-md font-serif text-gray-600">
              The goal is to let contestants discover the latest apparel,
              activewear, shoes & accessories from established and emerging
              designers in Shopbop in exchange for rewards. We offer excitement
              to customers that are looking to design outfits and compete to
              create the best looks. Contestants engage with each other through
              the leaderboard by upvoting other outfits!
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-2 py-6 border-b-2 border-double border-gray-600">
        <div className="md:flex flex-row items-center">
          <div className="md:w-full lg:w-1/2 p-4 flex justify-center">
            <img
              className="object-scale-down shadow-lg rounded max-w-3/4 h-auto align-middle border-none"
              src="aboutimage.jpg"
            />
          </div>
          <div className="pr-10 pl-4 py-4">
            <div className="flex justify-start text-3xl font-serif text-gray-700 font-bold py-4">
              how to play
            </div>
            <div className="flex justify-start text-xl font-serif text-gray-700 py-2">
              1. weekly prompt
            </div>
            <div className="flex justify-start text-md font-serif text-gray-600 py-1">
              Each week contestants will receive the same weekly prompt in which
              they will create their own outfit based on said prompt.
            </div>
            <div className="flex justify-start text-xl font-serif text-gray-700 py-2">
              2. design outfit
            </div>
            <div className="flex justify-start text-md font-serif text-gray-600 py-1">
              Using the Shopbop catalog, design an outfit using a top, a bottom,
              and an accessory.
            </div>
            <div className="flex justify-start text-xl font-serif text-gray-700 py-2">
              3. publish outfit
            </div>
            <div className="flex justify-start text-md font-serif text-gray-600 py-1">
              Once you've finished choosing your outfit, publish it to your
              page.
            </div>
            <div className="flex justify-start text-xl font-serif text-gray-700 py-2">
              4. vote!
            </div>
            <div className="flex justify-start text-md font-serif text-gray-600 py-1">
              Go to the leaderboard and vote for your favorite outfits. Each
              contestant can vote for 3 outfits total.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-100 px-4 py-2 border-b-2 border-double border-gray-600">
        <div className="grid justify-items-center py-6">
          <div className="flex flex-col px-2 md:px-20">
            <div className="flex justify-start text-3xl font-serif text-gray-700 font-bold py-4">
              the perks
            </div>
            <div className="flex text-left justify-center text-md font-serif text-gray-600">
              At the end of every game period, contestants will be rewarded.
              Each customer will receive rewards points for participating. The
              winner, or most-highly voted contestant, of each round will
              receive a special Shopbop gift.
            </div>
            <div className="flex pt-2 text-left justify-center text-md font-serif text-gray-600">
              To be eligible for these rewards, the contestant must have a
              Shopbop account. Only one outfit submission is allowed per
              contest. Rewards may be redeemed through the customer's Shopbop
              account and applied at checkout.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
