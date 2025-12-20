import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import SidebarMenu from "./components/SideBarMenu";
import { menuItems } from "./lib/data";
import SimpleTable from "./ui/SimpleTable";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppLayout>
            {/* laptop screen */}
            <SidebarMenu menu={menuItems} />
          </AppLayout>
        }
      >
        <Route path="/notification" element={<h1>اعلان ها</h1>} />
        <Route path="/setting" element={<h1>تنظیمات</h1>} />
        <Route
          path="/data-extraction"
          element={
            <div>استخراج داده</div>
            // <SimpleTable />
          }
        />
        <Route
          path="/data-transformation"
          element={<h1>تبدیل و پردازش داده</h1>}
        />
        <Route path="/data-storage" element={<h1>بانک داده</h1>} />
        <Route path="/pipelines" element={<h1>پایپ‌لاین‌ها</h1>} />
        <Route path="/monitoring" element={<h1>مانیتورینگ</h1>} />
        <Route path="/visualization" element={<h1>بصری سازی</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
