import Sidebar from "@/components/home/Sidebar";
import Editor from "@/components/home/Editor";
import { MdNotes } from "react-icons/md";

export default function Home() {
  return (
    <main className="text-secondary">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content px-3 md:px-6">
          {/* Page content */}
          <div className="text-sm breadcrumbs py-2 lg:py-3 sticky top-0 lg:top-0 bg-base-100 z-50">
            {/* Hamburger */}

            <label
              htmlFor="my-drawer-2"
              className="drawer-button lg:hidden cursor-pointer text-xl"
            >
              <MdNotes />
            </label>
            <ul className="mt-3 lg:mt-0">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Documents</a>
              </li>
            </ul>
          </div>

          {/* Editor */}
          <Editor />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <Sidebar />

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="AddNewItem" className="modal-toggle" />
          <div className="modal" role="dialog">
            <form className="modal-box">
              <h3 className="text-neutral">Add new Leasson/Page</h3>
              <input
                type="text"
                className="w-full bg-transparent p-3 border border-accent focus:outline-none mt-4 rounded-lg"
                placeholder="Give a title ..."
              />
              <div className="modal-action">
                <label htmlFor="AddNewItem" className="btn btn-sm bg-base-200">
                  Close!
                </label>
                <button className="btn btn-sm bg-base-200">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
