import trend1 from "../assets/trend1.jpg";
import trend2 from "../assets/trend2.jpg";
import trend3 from "../assets/trend3.jpg";
import trend4 from "../assets/trend4.jpg";

function Trends() {
  const movies = [
    {
      id: 1,
      url: trend1,
    },

    {
      id: 2,
      url: trend2,
    },

    {
      id: 3,
      url: trend3,
    },

    {
      id: 4,
      url: trend4,
    },

     {
      id: 5,
      url: trend1,
    },

    {
      id: 6,
      url: trend2,
    },

    {
      id: 7,
      url: trend3,
    },

    {
      id: 8,
      url: trend4,
    },
  ];
  return (
    <div className="">
      <div className="font-bold text-2xl -mt-10 mb-5">Trending now</div>
      <div className="flex gap-15 overflow-scroll hide-scrollbar">
        {movies.map((movie, index) => {
          return (
            <div key={index} className="pt-5 relative">
              <img className="rounded-2xl min-w-[150px]" src={movie.url} alt="" />
              <div className="text-9xl font-bold absolute bottom-0 left-[-25px] text-stoke-white">
                {movie.id}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Trends;
