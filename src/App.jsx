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
            {/* laptop screen */}
            <SidebarMenu menu={menuItems} />
          </AppLayout>
        }
      >
      </Route>
    </Routes>
  );
}

export default App;
