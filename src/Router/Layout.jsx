import {Outlet} from 'react-router-dom'
import Copyright from '../Pages/Copyright'
 
function Layout() {
    return (
      <>
        <div className='w-dvw h-dvh bg-zinc-200 flex flex-col'>
          <Outlet />
          <Copyright />
        </div>
      </>
    );
}

export default Layout;