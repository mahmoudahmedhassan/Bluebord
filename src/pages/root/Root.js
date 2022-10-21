import { Outlet } from "react-router-dom";
import SidebarMenu from '../../components/sidebar/Sidebar';
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import './root.css';
import { useSelector } from 'react-redux';

const Root = () => {
  // const togglee = false
  const { dirction } = useSelector(state => state.dirction);
  const { witchSidebar } = useSelector(state => state.switchSidebar);
  console.log(witchSidebar)

  return (
    <div className={dirction === 'ar' ? 'rtlDir  wrapper' : 'wrapper'}  >
      <div className='main'
      // className={!witchSidebar ? "open" : "close"}
      >

        {/* <div className={!witchSidebar ? 'openSidebar' : 'closeSidebar'}>
          <SidebarMenu />
        </div> */}
        
        <div className={dirction === 'ar'? "sidbar-fixed-sidebar-ar" :"sidbar-fixed-sidebar-en"}>
        <SidebarMenu />
        </div>
        
        <div className={witchSidebar? "main-container-close": 'main-container-open'}>
          <Header />
          <div className="main-outlet" style={{ minHeight: 'calc(100vh - 100px)' }}>
            <Outlet />
          </div>
          <Footer />
        </div>

      </div>

    </div>

  );
};

export default Root;