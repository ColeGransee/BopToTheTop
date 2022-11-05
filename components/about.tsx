export const About = () => {
  return (
      <div className="bg-egg">
        {/*<div className="text-4xl text-center font-serif font-bold text-gray-900 py-6">*/}
        {/*  About*/}
        {/*</div>*/}
        <div className="grid justify-items-center py-6">
          <div className="flex flex-col px-2 md:px-20">
            <div className="flex justify-start text-4xl font-serif text-gray-700 font-bold py-4">
              About us
            </div>
            <div className="flex justify-center text-lg font-serif text-gray-600">
              BopTotheTop is a game site focused on selecting clothes featured in the given category of
              ShopBop's apperal selection. With the image, users select one of each top, bottom, shoe,
              and accessory based on random assortments of clothing items from Shopbop.
              ToptotheBop brings recurring value and can create a delightful habit-forming product for the end user,
              this game will involve creating a recurring way to discover and experience new items on Shopbop.
              Our goal is to let users discover the latest apparel, activewear, shoes & accessories
              from established and emerging designers in Shopbop.
              We appeal to audiences of all ages.
              We bring laughter and friendship to young people to love to dress up.
              We also bring memories to older people who reminisce about dressing up dolls when they were young.
            </div>

            <div className="flex justify-start text-4xl font-serif text-gray-700 font-bold py-4">
              how to play
            </div>
            <div className="flex justify-start text-lg font-serif text-gray-600">
              1. the program provides the category of the items
            </div>
            <div className="flex justify-start text-lg font-serif text-gray-600">
              2. user selects each top, bottom, shoe and accessory
            </div>
            <div className="flex justify-start text-lg font-serif text-gray-600">
              3. submit the user outfit to the leaderboard
            </div>
            <div className="flex justify-start text-lg font-serif text-gray-600">
              4. user upvote outfits among the leaderboard.
            </div>
          </div>
        </div>
      </div>
  );
};
