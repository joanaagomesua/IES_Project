import React from "react";

const NotFound = () => {
  return (
    <div class="grid place-content-center px-4">
      <div class="text-center">
        <img src="/src/assets/images/404.jpg" width="800vw" height="800vh"/>

        <p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p class="mt-4 text-black">Looks like you travelled too far away!</p>

        <a
          href="/"
          class="mt-6 inline-block rounded bg-info px-5 py-3 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
