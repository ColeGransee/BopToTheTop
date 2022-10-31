export const PostTitle = (props: any) => {
  return (
    <div className="grid justify-items-center">
      <div className="mt-2 relative sm:overflow-hidden w-3/4 border-2 border-double rounded">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover rounded"
            src={props.src}
            alt={props.alt}
          />
          <div className="absolute inset-0 bg-black mix-blend-saturation" />
        </div>
        <div className="relative sm:px-4 sm:py-12 lg:py-32 lg:px-8">
          <h1 className="bg-title-gray rounded p-4 m-4 lg:p-10 md:m-2 text-center text-xl font-serif tracking-tight sm:text-3xl lg:text-5xl">
            <span className="block text-white">{props.mainTitle}</span>
            <span className="block text-dustypink">{props.subTitle}</span>
            <span className="block text-gray-300 text-lg pt-3">
              updated: {props.date}
            </span>
            <span className="block text-gray-300 text-lg">Allison Lee</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
