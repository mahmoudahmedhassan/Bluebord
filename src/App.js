import LoginUser from './pages/auth/login/LoginUser';
import Dashboard from './pages/home/Dashboard';
import NotFound from './pages/notFoundPage/NotFound';
import PrivateRoute from './pages/PrivateRoute';
import Root from './pages/root/Root'
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import SidebarMenu from './components/sidebar/Sidebar'
function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/loginUser" exact element={<LoginUser />} />
          <Route path="*" element={<NotFound />} />

          <Route element={<PrivateRoute />}>
            <Route element={<Root />}>
              <Route path="/" exact element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
 
      </div>
    </BrowserRouter>

  );
}

export default App;
