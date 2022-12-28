import "./Quanlykhachhang.scss";
import { useState } from "react";
function Quanlykhachhang() {
  const [status, setStatus] = useState(false);

  return (
    <div className="quanlykhachhang">
      <div className="quanlykhachhang-header">
        <div className="left">
          <p className="text">Tất cả khách hàng</p>
          <p className="number">100</p>
        </div>
        <div className="right">
          <button className="box">
            <i class="fa fa-filter"></i>
            <p className="text">Lọc</p>
          </button>
          <button className="box active">
            <i class="fa fa-plus"></i>
            <p className="text">Thêm Khách Hàng</p>
          </button>
        </div>
      </div>


      <div className="container">
      <ul className="header-list">
          <input type="checkbox" />
          <li className="name">Tên Khách Hàng</li>
          <li className="role">Quyền</li>
          <li className="group">Nhóm</li>
          <li className="status">Tình Trạng</li>
          <li className="action">Thao Tác</li>
        </ul>
        <ul className="content-list">
        <li className="content-list--item">
            <input type="checkbox" />
            <div className="name-box">
                <div className="img-box">
                    <img
                    className="img"
                    src="https://xe360.com/uploads/forum/photo/ru/rul/rul3wx2liwmn.jpg"
                    alt="img Product"
                />
                </div>
             
              <div className="box-info">
                <p className="name">Truong Minh Khiet</p>
                <p className="email">Truong Minh Khiet</p>
              </div>
            </div>
            <p className="role">Admin</p>
            <p className="group">Falcons</p>
            <p className="status" onClick={() => setStatus(!status)}>
              {status ? <li className="active" onClick={() => setStatus(!status)}>Active</li>
               : 
               <li className="inactive" onClick={() => setStatus(!status)}>Inactive</li>}
            </p>
            <div className="action">
              <i class="fa fa-edit btn"></i>
              <i class="fa fa-trash btn"></i>
            </div>
          </li>
          <li className="content-list--item">
            <input type="checkbox" />
            <div className="name-box">
                <div className="img-box">
                    <img
                    className="img"
                    src="https://xe360.com/uploads/forum/photo/ru/rul/rul3wx2liwmn.jpg"
                    alt="img Product"
                />
                </div>
             
              <div className="box-info">
                <p className="name">Truong Minh Khiet</p>
                <p className="email">Truong Minh Khiet@ajksdhajsk</p>
              </div>
            </div>
            <p className="role">Admin</p>
            <p className="group">Falcons</p>
            <p className="status" onClick={() => setStatus(!status)}>
              {status ? <li className="active" onClick={() => setStatus(!status)}>Active</li>
               : 
               <li className="inactive" onClick={() => setStatus(!status)}>Inactive</li>}
            </p>
            <div className="action">
              <i class="fa fa-edit btn"></i>
              <i class="fa fa-trash btn"></i>
            </div>
          </li>
          <li className="content-list--item">
            <input type="checkbox" />
            <div className="name-box">
                <div className="img-box">
                    <img
                    className="img"
                    src="https://xe360.com/uploads/forum/photo/ru/rul/rul3wx2liwmn.jpg"
                    alt="img Product"
                />
                </div>
             
              <div className="box-info">
                <p className="name">Truong Minh Khiet</p>
                <p className="email">Truong Minh Khiet@ajksdhajsk</p>
              </div>
            </div>
            <p className="role">Admin</p>
            <p className="group">Falcons</p>
            <p className="status" onClick={() => setStatus(!status)}>
              {status ? <li className="active" onClick={() => setStatus(!status)}>Active</li>
               : 
               <li className="inactive" onClick={() => setStatus(!status)}>Inactive</li>}
            </p>
            <div className="action">
              <i class="fa fa-edit btn"></i>
              <i class="fa fa-trash btn"></i>
            </div>
          </li>
          <li className="content-list--item">
            <input type="checkbox" />
            <div className="name-box">
                <div className="img-box">
                    <img
                    className="img"
                    src="https://xe360.com/uploads/forum/photo/ru/rul/rul3wx2liwmn.jpg"
                    alt="img Product"
                />
                </div>
             
              <div className="box-info">
                <p className="name">Truong Minh Khiet</p>
                <p className="email">Truong Minh Khiet@ajksdhajsk</p>
              </div>
            </div>
            <p className="role">Admin</p>
            <p className="group">Falcons</p>
            <p className="status" onClick={() => setStatus(!status)}>
              {status ? <li className="active" onClick={() => setStatus(!status)}>Active</li>
               : 
               <li className="inactive" onClick={() => setStatus(!status)}>Inactive</li>}
            </p>
            <div className="action">
              <i class="fa fa-edit btn"></i>
              <i class="fa fa-trash btn"></i>
            </div>
          </li>
          
        


        </ul>
      </div>
    </div>
  );
}

export default Quanlykhachhang;
