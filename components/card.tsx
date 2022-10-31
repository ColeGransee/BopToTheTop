export const Card = (props: any) => {
  return (
    <div
      key={props.title}
      className="flex flex-col flex-shrink-1 flex-wrap m-5 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={props.imageUrl} alt="" />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-dustypink">
            <a href={props.category.href} className="hover:underline">
              {props.category.name}
            </a>
          </p>
          <a href={props.href} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{props.title}</p>
            <p className="mt-3 text-base text-gray-500">{props.description}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="ml-3">
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={props.datetime}>{props.date}</time>
              <span aria-hidden="true">&middot;</span>
              <span>ALLISON LEE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
