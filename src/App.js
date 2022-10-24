import LoginUser from './pages/auth/login/LoginUser';
import Dashboard from './pages/home/Dashboard';
import EntryData from './pages/entryData/EntryData';
import UserDetails from './pages/User details/UserDetails'
import NotFound from './pages/notFoundPage/NotFound';
import PrivateRoute from './pages/PrivateRoute';
import Root from './pages/root/Root'
import { BrowserRouter, Routes, Route, } from "react-router-dom";

 function App() {
  const user_1 =true;
  const dd = user_1 ? (<Route path="/" exact element={<Dashboard />} /> ):(<Route path="/loginUser" exact element={<LoginUser />} />  )
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/loginUser" exact element={<LoginUser />} />
          <Route path="*" element={<NotFound />} />

          <Route element={<PrivateRoute />}>
            <Route element={<Root />}>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/entryData" exact element={<EntryData />} />
            <Route path="/userDetails" exact element={<UserDetails />} />
             </Route>
          </Route>
        </Routes>
 
      </div>
    </BrowserRouter>

  );
}

export default App;
