import { Outlet } from "react-router-dom";
import SidebarMenu from '../../components/sidebar/Sidebar'
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { useSelector } from 'react-redux'
import './root.css'

const Root = () => {
  const { toggle } = useSelector(state => state.toggle);
  console.log(toggle)
  const togglee = false


  return (
    <div className="wrapper" style={{ display: 'flex' }} >
      <div className={togglee ? "open" : "close"}>
        <SidebarMenu />
      </div>
      <div className={togglee ? "openn" : "closee"}>
        <Header />
        <div className="main">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>

  );
};

export default Root;