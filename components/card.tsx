export const Card = (props: any) => {
  const handleImageSelect = () => {
    props.onSelect(props.imageUrl);
  };

  return (
    <div className="flex justify-center mb-4">
      <div
        key={props.title}
        className="w-3/4 flex flex-col flex-shrink-1 flex-wrap m-5 rounded-lg shadow-lg overflow-hidden"
      >
        <div className="flex-shrink-0">
          <img
            className="h-fit w-full object-cover"
            src={props.imageUrl}
            alt=""
          />
        </div>
        <div className="h-40 bg-white p-6 flex flex-col justify-between relative">
          <p className="text-sm font-medium text-orange-600">
            <a href={props.category.href} className="hover:underline">
              {props.category.name}
            </a>
          </p>
            <a href={props.href} className="block mt-2">
              <div>
                <p className="text-xl font-semibold text-gray-900">
                  {props.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {props.description}
                </p>
              </div>
            </a>
          <button
              className="absolute bottom-4 right-4 px-3 py-2 bg-orange-400 hover:bg-orange-500 rounded font-serif text-gray-200"
              onClick={handleImageSelect}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
