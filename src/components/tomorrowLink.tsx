import { Link } from "react-router";


const TomorrowLink = () => {
  return (
    <div className="mt-8">
      <Link
        to="/tomorrow"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
      >
        Se morgondagens väder
      </Link>
    </div>
  );
};

export default TomorrowLink;