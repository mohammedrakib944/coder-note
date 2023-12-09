import Sidebar from "@/components/home/Sidebar";
import { MdNotes } from "react-icons/md";

export default function Home() {
  return (
    <main className="text-secondary">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content py-4 px-6">
          {/* Hamburger */}
          <label
            htmlFor="my-drawer-2"
            className="drawer-button lg:hidden cursor-pointer text-xl"
          >
            <MdNotes />
          </label>

          {/* Page content */}
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Documents</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
