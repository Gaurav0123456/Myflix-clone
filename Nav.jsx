import bgimg from "../assets/banner.jpg";
const Nav = () => {
  return (
    <>
      <div className="px-30 py-5 bg-black  text-white z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${bgimg})` }}
        ></div>
        <div className="relative z-0">
          <div className="flex justify-between items-center ">
            <div className="text-4xl text-red-600">Netflex</div>
            <div className="flex">
              <div>
                <select
                  className=" pr-20 border p-1 mr-2 border-gray-500"
                  name=""
                  id=""
                >
                  <option className="text-black" value="English">
                    English
                  </option>
                  <option className="text-black" value="Hindi"> 
                    Hindi
                  </option>
                </select>
              </div>
              <button className="bg-red-600 px-5 py-1 rounded">Sign In</button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-screen text-center">
            <div className="text-6xl font-bold max-w[600px] ">
              Unlimited films, series and more
            </div>
            <div className="py-7 font-bold text-[18px]">
              Starts at NOK 99. Cancel at any time
            </div>
            <p>
              Ready to Watch? Enter your email to create or restart your
              membership
            </p>
            <div className="py-5">
              <input
                className="border p-2 border-grey-500 pr-30 mr-4"
                type="text"
                placeholder="Email Address"
              />
              <button className="bg-red-600 p-2 px-4 rounded">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
