import { Outlet } from "react-router-dom";
import SidebarMenu from '../../components/sidebar/Sidebar'
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
 import './root.css'

  import { useSelector } from 'react-redux'

const Root = () => {
  const togglee = false
  const { dirction } = useSelector(state => state.dirction);

  // height: 100%;
  // top: 0;
  // right: 0;
  // overflow: auto;
  return (
    <div className={ dirction==='ar'? 'rtlDir  wrapper' :'wrapper'}  >
      <div className={togglee && "open"}>
        <SidebarMenu />
      </div>
      <div className={togglee ? "openn" : "closee"}>
        <Header />
        <div className="main" style={{minHeight:'calc(100vh - 100px)'}}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>

  );
};

export default Root;