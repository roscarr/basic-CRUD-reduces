import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
function Heading() {
  return (
    <div>
      <div className="flex item-center mb-10">
        <Link to="/">
          <h5 className="text-gray-100 font-bold text-2xl">Task app</h5>
        </Link>
        <div className="flex-grow text-right px-4 py-2 m-2">
          <Link to="/add">
            <button
              className="bg-green-400 px-4 py-2 rounded-md hover:bg-green-500
             text-white font-semibold inline-flex items-center"
            >
              <IoMdAdd />
              Add employee
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Heading;
