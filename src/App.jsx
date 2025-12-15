import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import SidebarMenu from "./components/SideBarMenu";
import { menuItems } from "./lib/data";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppLayout>
            <SidebarMenu menu={menuItems} />
          </AppLayout>
        }
      >
        <Route path="/setting" element={<div> setting</div>} />
      </Route>
    </Routes>
  );
}

export default App;
