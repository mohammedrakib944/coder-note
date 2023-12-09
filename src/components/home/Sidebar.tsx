import React from "react";
import { MdStickyNote2, MdLibraryBooks } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="menu px-6 py-2 w-[350px] min-h-full bg-base-200 text-base-content border-r border-accent">
      <div>
        <img src="/logo.svg" className="w-[200px]" alt="Logo" />
      </div>
      <div className="mt-5">
        <input
          className="w-full py-2 px-5 rounded-lg bg-base-100 border border-neutral focus:outline-none"
          type="text"
          placeholder="Search...   "
        />
      </div>
      <div className="mt-8 pl-4 text-neutral font-semibold uppercase flex items-center justify-between group">
        <span>Lessons</span>
        <label
          className="hidden cursor-pointer group-hover:block text-xl tooltip"
          data-tip="New"
          htmlFor="AddNewItem"
        >
          <IoIosAddCircleOutline />
        </label>
      </div>
      {/* Menu */}
      <ul className="menu text-base font-semibold rounded-box p-0 mt-4">
        <li>
          <details open>
            <summary className="text-neutral">
              <label
                className="text-xl tooltip cursor-pointer"
                data-tip="Add new"
                htmlFor="AddNewItem"
              >
                <IoIosAddCircleOutline />
              </label>
              <span>Interview Preparation</span>
            </summary>
            <ul>
              <li>
                <a>
                  <MdStickyNote2 /> JavaScript
                </a>
              </li>
              <li>
                <a className="active">
                  <MdStickyNote2 /> React.js
                </a>
              </li>
              <li>
                <a>
                  <MdStickyNote2 /> Low level Design
                </a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary className="text-neutral">
              <button className="text-xl tooltip" data-tip="Add new">
                <IoIosAddCircleOutline />
              </button>
              <span>Practice</span>
            </summary>
            <ul>
              <li>
                <a>
                  <MdStickyNote2 /> Node
                </a>
              </li>
              <li>
                <a>
                  <MdStickyNote2 /> Pattern
                </a>
              </li>
              <li>
                <a>
                  <MdStickyNote2 /> Closure
                </a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary className="text-neutral">
              <button className="text-xl tooltip" data-tip="Add new">
                <IoIosAddCircleOutline />
              </button>
              <span>GoLang</span>
            </summary>
            <ul>
              <li>
                <a>
                  <MdStickyNote2 /> None
                </a>
              </li>
              <li>
                <a>
                  <MdStickyNote2 /> awesome
                </a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
