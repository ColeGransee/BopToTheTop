import { ArrowUpIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const OutfitCard = (props: any) => {
  const router = useRouter();

  const [username, setUsername] = useState<string>();
  const [upvotes, setUpvotes] = useState<string>(props.upvotes);

  useEffect(() => {
    // Perform localStorage action
    if (localStorage.getItem("userID") && localStorage.getItem("username")) {
      // @ts-ignore
      setUsername(localStorage.getItem("username"));
    }
    // empty dependency array means this effect will only run oncfe (like componentDidMount in classes)
  }, []);

  useEffect(() => {
    setUpvotes(upvotes);
    // empty dependency array means this effect will only run oncfe (like componentDidMount in classes)
  }, [upvotes]);

  const handleUpvote = () => {
    if (username) {
      fetch("http://127.0.0.1:8000/upvote/", {
        method: "POST",
        body: JSON.stringify({
          loggedin_user: username,
          n: 1,
          upvoted_user: props.title,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data == -1) {
            console.log("out of upvotes");
          } else {
            setUpvotes(data);
            console.log(data);
          }
        });
    } else {
      router.push("/login");
    }
  };
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
                <p className="text-md text-gray-700">{upvotes} votes</p>
              </div>
            </a>
            {!!props.enableVoting ? (
              <div>
                {props.title == username ? (
                  <button className="px-3 py-2 bg-orange-400 rounded font-serif text-gray-200">
                    <ArrowUpIcon className="flex-shrink-0 h-5 w-5 text-white" />
                  </button>
                ) : (
                  <button
                    className="px-3 py-2 bg-orange-400 hover:bg-orange-500 rounded font-serif text-gray-200"
                    onClick={handleUpvote}
                  >
                    <ArrowUpIcon className="flex-shrink-0 h-5 w-5 text-white" />
                  </button>
                )}
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
