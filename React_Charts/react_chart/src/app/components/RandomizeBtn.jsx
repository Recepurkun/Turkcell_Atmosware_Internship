"use client";

const RandomizeBtn = ({ randomizeData }) => {
  return (
    <button
      title="Randomize"
      className="cursor-pointer flex items-center bg-purple-600 hover:bg-purple-700 rounded-md duration-100 p-2 my-3"
      onClick={randomizeData}
    >
      <svg
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        className="text-white"
      >
        <path d="M21.67 3.955l-2.825-2.202.665-.753 4.478 3.497-4.474 3.503-.665-.753 2.942-2.292h-4.162c-3.547.043-5.202 3.405-6.913 7.023 1.711 3.617 3.366 6.979 6.913 7.022h4.099l-2.883-2.247.665-.753 4.478 3.497-4.474 3.503-.665-.753 2.884-2.247h-4.11c-3.896-.048-5.784-3.369-7.461-6.858-1.687 3.51-3.592 6.842-7.539 6.858h-2.623v-1h2.621c3.6-.014 5.268-3.387 6.988-7.022-1.72-3.636-3.388-7.009-6.988-7.023h-2.621v-1h2.623c3.947.016 5.852 3.348 7.539 6.858 1.677-3.489 3.565-6.81 7.461-6.858h4.047z" />
      </svg>
      <span className="text-sm text-white font-bold pr-1 ps-3">
        Randomize Data
      </span>
    </button>
  );
};

export default RandomizeBtn;
