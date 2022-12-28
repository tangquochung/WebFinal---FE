import Logo from "./logo192.svg";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../service/user.service";
import eventBus from "../../common/EventBus";


import "./Header.scss";

function Header() {
  
  const [isUser, setIsUser] = useState(undefined);
  const [isAdmin, setIsAdmin]= useState(false)

  useEffect(()=>{
    const user = authService.getCurrentUser()
    
    if (user){
      setIsUser(user)
      if(user.roles[1]==='ROLE_ADMIN')
      {
        setIsAdmin(true)
      }
    }
    
    eventBus.on("logout", () => {
      logOut();
    });
    return () => {
      eventBus.remove("logout");
    };
    
  },[]);

  let navigate=useNavigate()
    const logOut = () => {
      authService.logout();
      setIsUser(undefined);
      navigate("/login")
        window.location.reload();
    };


  return (
    <div className="header">
      <div className="header__left">
        <Link to="/homepage">
          <img src={Logo} alt="Logo" className="header__left-logo" />
        </Link>
      </div>
      <div className="header__mid">
        <ul className="header__mid-list">
          <li className="header__mid-list__item">
            {" "}
            <Link className="header__mid-list__item-link" to="/homepage">
              Home
            </Link>
          </li>
          <li className="header__mid-list__item">
            {" "}
            <Link className="header__mid-list__item-link" to="/about">
              Introduction
            </Link>
          </li>
          <li className="header__mid-list__item">
            {" "}
            <Link className="header__mid-list__item-link" to="/shopping">
              Store
            </Link>
          </li>
          <li className="header__mid-list__item">
            {" "}
            <Link className="header__mid-list__item-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="header__right">
        <i class="fa fa-search"></i>
        {isUser ? (
          <div className="user">
            <i class="fa fa-user"></i>

            <ul className="user-list">
              <li className="user-list--item"><Link className="item-link" to='/thongtincanhan'>Information</Link></li>
              <li className="user-list--item"><Link className="item-link">Change password</Link></li>
              {isAdmin ?<>
                <li className="user-list--item"><Link className="item-link" to="/quanlykhachhang">Manage customer</Link></li>
              <li className="user-list--item"><Link className="item-link"  to="/quanlysanpham">Manage product</Link></li>
              </> : <></>}
              
              <li className="user-list--item"><Link className="item-link">Settings</Link></li>
              <li className="user-list--item"><Link className="item-link" onClick={logOut}>Sign out</Link></li>
            </ul>
          </div>
        ) : (
          <Link className="header__right-btn" to="/login">
            Sign in / Sign up
          </Link>
        )}

        <Link className="header__right-btn" to="/cart">
          Your cart
          <i class="fa fa-shopping-bag"></i>
        </Link>
      </div>
    </div>
  );
}

export default Header;
