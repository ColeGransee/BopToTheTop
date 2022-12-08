import { ArrowUpIcon } from "@heroicons/react/20/solid";

export const OutfitCard = (props: any) => {
  const handleUpvote = () => {};
  return (
    <div className="flex justify-center mb-4">
      <div
        key={props.title}
        className="flex flex-col flex-shrink-1 flex-wrap m-5 rounded-lg shadow-lg overflow-hidden"
      >
        <div className="grid grid-cols-3">
          <img
            className="h-fit w-full object-cover"
            src={props.accessoryUrl}
            alt=""
          />
          <img
            className="h-fit w-full object-cover"
            src={props.topUrl}
            alt=""
          />
          <img
            className="h-fit w-full object-cover"
            src={props.bottomUrl}
            alt=""
          />
        </div>
        <div className="h-20 bg-white p-6 flex flex-col justify-between">
          <div className="flex justify-between">
            <a href={props.href} className="display:block">
              <div>
                <p className="text-xl font-semibold text-gray-900">
                  {props.title}
                </p>
                <p className="text-md text-gray-700">{props.upvotes} votes</p>
              </div>
            </a>
            {!!props.enableVoting ? (
              <button
                className="px-3 py-2 bg-orange-400 hover:bg-orange-500 rounded font-serif text-gray-200"
                onClick={handleUpvote}
              >
                <ArrowUpIcon className="flex-shrink-0 h-5 w-5 text-white" />
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
