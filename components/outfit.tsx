import { PropsWithChildren } from "react";
import { useRouter } from "next/router";

interface IOutfitProps {
  selectedTop: any;
  selectedBottom: any;
  selectedAccessory: any;
  username: any;
}
export const Outfit = (props: PropsWithChildren<IOutfitProps>) => {
  const router = useRouter();
  const username = props.username;
  const selectedTop = props.selectedTop;
  const selectedBottom = props.selectedBottom;
  const selectedAccessory = props.selectedAccessory;
  const user_submission = [selectedTop, selectedBottom, selectedAccessory];

  const handlePost = () => {
    if (props.username) {
      fetch("http://127.0.0.1:8000/submit/", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          top: selectedTop,
          bottom: selectedBottom,
          accessory: selectedAccessory,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data == -1) {
            console.log("already posted outfit");
          } else {
            console.log(data);
            router.push("/leaderboard");
          }
        });
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="bg-egg p-4 md:px-8 pb-8 border-b-2 border-double border-gray-600">
      <div className="p-4 pl-14 font-serif font-bold text-3xl text-gray-900">
        Outfit
      </div>
      <div className="flex justify-center overflow-none">
        {!!props.selectedAccessory ||
        !!props.selectedTop ||
        !!props.selectedBottom ? (
          <div className="relative grid md:grid-cols-3">
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
      <div className="flex justify-end">
        {!!props.selectedAccessory &&
        !!props.selectedTop &&
        !!props.selectedBottom ? (
          <button
            className="px-4 py-3 mx-3 my-4 bg-orange-400 hover:bg-orange-500 rounded font-serif text-gray-200"
            onClick={handlePost}
          >
            Post
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};
