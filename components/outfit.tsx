import { PropsWithChildren } from "react";
interface IOutfitProps {
  selectedTop: any;
  selectedBottom: any;
  selectedAccessory: any;
}
export const Outfit = (props: PropsWithChildren<IOutfitProps>) => {
  return (
    <div className="bg-egg p-4 md:px-8 pb-8 border-b-2 border-double border-gray-600">
      <div className="p-4 pl-14 font-serif font-bold text-3xl text-gray-900">
        Outfit
      </div>
      <div className="flex justify-center overflow-none">
        {!!props.selectedAccessory ||
        !!props.selectedTop ||
        !!props.selectedBottom ? (
          <div className="grid md:grid-cols-3">
            <div className="flex flex-wrap justify-center">
              <div className="px-4 py-2">
                {!!props.selectedAccessory ? (
                  <img
                    src={props.selectedAccessory}
                    alt="..."
                    className="object-scale-down shadow-lg rounded max-w-full h-auto align-middle border-none"
                  />
                ) : (
                  <div />
                )}
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="px-4 py-2">
                {!!props.selectedTop ? (
                  <img
                    src={props.selectedTop}
                    alt="..."
                    className="object-scale-down shadow-lg rounded max-w-full h-auto align-middle border-none"
                  />
                ) : (
                  <div />
                )}
              </div>
            </div>

            <div className="flex flex-wrap justify-center">
              <div className="px-4 py-2">
                {!!props.selectedBottom ? (
                  <img
                    src={props.selectedBottom}
                    alt="..."
                    className="object-scale-down shadow-lg rounded max-w-full h-auto align-middle border-none"
                  />
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="py-60" />
        )}
      </div>
    </div>
  );
};
