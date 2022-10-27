import { Outlet } from "react-router-dom";
import SidebarMenu from '../../components/sidebar/Sidebar';
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import './root.css';
import { useSelector } from 'react-redux';
 

import SideBarTest from "../../components/sidebar/SideBarTest";
const Root = () => {
  // const togglee = false
  const { dirction } = useSelector(state => state.dirction);
  console.log('dirction',dirction)
  const { witchSidebar } = useSelector(state => state.switchSidebar);
 
  return (
    <div className={dirction === 'ar' ? 'rtlDir  wrapper' : 'wrapper'}  >
      <div className='main'>

        <div style={{zIndex:'99'}} className='scrollbar'>
        <SidebarMenu />
        {/* <SideBarTest/> */}
        </div>
        
        <div className={dirction==="en"? witchSidebar? "main-container-close": 'main-container-open':witchSidebar? "main-container-ar-close": 'main-containe-ar-open'}>
          <Header />
          <div className="main-outlet">
            <Outlet />
          </div>
          <Footer />
        </div>

      </div>

    </div>

  );
};

export default Root;