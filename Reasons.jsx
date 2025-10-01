import { LuMonitor } from "react-icons/lu";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { HiMiniSwatch } from "react-icons/hi2";
import { PiSmiley } from "react-icons/pi";
function Reasons() {
  const reasons = [
    {
      title: "Enjoy on your TV",
      detail:
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      icon: <LuMonitor />,
    },

    {
      title: "Download your shows to watch offline",
      detail:
        "Save your favourites easily and always have something to watch.",
      icon: <FaCloudDownloadAlt />,
    },

    {
      title: "Watch everywhere",
      detail:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
      icon:<HiMiniSwatch />,
    },

    {
      title: "Create profiles for kids",
      detail:
        "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      icon: <PiSmiley />,
    },
  ];
  return (
    <div className="mt-5">
      <div className="font-bold text-2xl mt-10 mb-5">More reasons to join</div>

      <div className=" flex gap-10">
        {reasons.map((reason, index) => {
          return (
            <div className="w-[450px] h-[320px] rounded-2xl p-10 bg-gradient-to-b from-blue-950 to-gray-900 relative ">
              <div className="font-bold text-xl">{reason.title}</div>
              <div className="py-5 text-gray-400">
                {reason.detail}
              </div>
              <div className="text-7xl right-0 mr-5 absolute opacity-60 bottom-0 mb-5">
                {reason.icon}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reasons;
