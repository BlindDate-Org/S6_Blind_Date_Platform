import React from "react";
import {
  UserIcon,
  BookmarkIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import PostQuestion from '../../components/PostQuestion'
const MySwal = withReactContent(Swal)

const Home = () => {
  return (
    <div className="h-screen">
        <button onClick={sweetalert} className="block w-full h-1/2 text-white text-6xl bg-pink-400">
          Ask a question
        </button>
      <div className="flex absolute inset-0 pointer-events-none">
        <div className="flex h-36 w-36 m-auto justify-center rounded-full bg-white">
          <h1 className="self-center text-center text-4xl font-medium">Or</h1>
        </div>
      </div>
      <Link to="/questions">
        <button className="block w-full h-1/2 text-white text-6xl bg-blue-500">
          Answer a question
        </button>
      </Link>
      <div className="flex absolute left-0 bottom-0 p-4">
        <Link to="/profile">
          <div className="flex flex-col cursor-pointer">
            <UserIcon className="h-14 fill-white" />
            <p className="text-white font-medium">My Profile</p>
          </div>
        </Link>
      </div>

      <div className="flex absolute center right-28 bottom-0 p-4">
        <Link to="/bookmarks">
          <div className="flex flex-col cursor-pointer">
            <BookmarkIcon className="h-14 fill-white" />
            <p className="text-white font-medium">My Bookmarks</p>
          </div>
        </Link>
      </div>

      <div className="flex absolute right-0 bottom-0 p-4">
        <Link to="/myquestions">
          <div className="flex flex-col cursor-pointer">
            <BookOpenIcon className="h-14 fill-white" />
            <p className="text-white font-medium">My Questions</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

function sweetalert() {
  MySwal.fire({
    title: <p>Post a Question</p>,
    html: <PostQuestion />,
    showCloseButton: true,
    showConfirmButton: false
  });
};

export default Home;
