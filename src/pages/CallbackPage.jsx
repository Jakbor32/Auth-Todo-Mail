import React from "react";

const CallbackPage = () => {
  return (
    <>
      <div className="bg-gray-700 flex flex-col pt-10 items-center h-screen z-50">
        <p className="text-white text-center font-bold text-xl">
          Page does not exist! <br />
          or you do not have access
        </p>
        <a className="text-blue-300 underline cursor-pointer" href="/">
          Go to Home
        </a>
      </div>
      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <p className=" text-red-100 text-9xl  animate-ping opacity-10">404</p>
      </div>
    </>
  );
};

export default CallbackPage;
