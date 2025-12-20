import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout({ children }) {
  return (
    <div className=" w-full xl:max-w-400  mx-auto overflow-x-hidden">
      <div className="grid justify-center h-screen grid-rows-[auto_1fr] grid-cols-[auto_1fr]">
        {/*⬇︎ منو در حالت تبلت و دستکتاب */}
        <div className="border-l border-gray-100  row-span-2 overflow-y-auto">
          {children}
        </div>
        <div className="border-b container flex w-full justify-center items-center mx-auto border-gray-200">
          <Header />
        </div>
        <div className=" bg-gray-50 sm:p-8 p-4 overflow-y-auto">
          <div className="mx-auto max-w-5xl flex flex-col gap-y-12">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AppLayout;
