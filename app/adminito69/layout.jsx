// components/Layout.js
import Navbars from '../ui/ADMIN/Navs';


const Layout = ({ children }) => {
  return (
    <div>
      <Navbars />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
