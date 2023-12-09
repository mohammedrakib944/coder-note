import React from "react";
import { MdStickyNote2, MdLibraryBooks } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="menu px-6 py-2 w-[350px] min-h-full bg-base-200 text-base-content">
      <div>
        <img src="/logo.svg" className="w-[200px]" alt="Logo" />
      </div>
      <div className="mt-5">
        <input
          className="w-full py-2 px-5 rounded-xl bg-base-100 border border-neutral focus:outline-none"
          type="text"
          placeholder="Search...   "
        />
      </div>
      <p className="mt-8 text-neutral font-semibold uppercase">Lessons</p>
      {/* Menu */}
      <ul className="menu text-base font-semibold rounded-box p-0 mt-4">
        <li>
          <details open>
            <summary className="text-neutral">
              <MdLibraryBooks /> Interview Preparation
            </summary>
            <ul>
              <li>
                <a>
                  <MdStickyNote2 /> JavaScript
                </a>
              </li>
              <li>
                <a>
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
              <MdLibraryBooks /> Practice
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
              <MdLibraryBooks /> Preparation
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
