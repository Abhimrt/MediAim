import React from "react";

const Dropdown = (props) => {
  return (
    <li>
      <button
        id="dropdownNavbarLink"
        data-dropdown-toggle={props.data.title}
        className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto "
      >
        {props.data.title}
        <svg
          className="w-5 h-5 ml-1"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div
        id={props.data.title}
        className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-400"
          aria-labelledby="dropdownLargeButton"
        >
          {props.data.dropdown.map((e, i) => (
            <li key={i}>
              <a href={e.link} className="block px-4 py-2 hover:bg-gray-200  ">
                {e.title}
              </a>
              <hr  className="w-5/6 m-auto" />
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Dropdown;
