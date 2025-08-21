import React ,{ useContext } from 'react';
import { AuthContext } from '../backend/context/Auth';

const Sidebar = () => {
    const { logout } = useContext(AuthContext);
  return (
    <div className="col-md-3">
        <h3 className="sidebar-title">Sidebar</h3>
              <div className="list-group">
                <a href="/admin/dashboard" className="list-group-item list-group-item-action">Dashboard</a>
                <a href="/admin/projects" className="list-group-item list-group-item-action">Projects</a>
                
                <a href="/admin/services" className="list-group-item list-group-item-action">Services</a>
                <a href="/admin/blogs" className="list-group-item list-group-item-action">Blogs</a>
                <a href="/admin/contactus" className="list-group-item list-group-item-action">Contact Us</a>
                <button className="list-group-item list-group-item-action" onClick={logout}>Logout</button>
              </div>
            </div>
  )
}

export default Sidebar