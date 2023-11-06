import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import './style.css'

function Register() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleSubmit = (event)=> {
    event.preventDefault();
    axios.post('http://localhost:8081/Register', values)
    .then(res => {
      if(res.data.Status === "Thành công!"){
        navigate('/Success')
      }
      else{
        alert("Error");
      }
    })
    .then(err => console.log(err));
  }

  return (
    <div>
      <section className="vh-100" style={{backgroundColor: '#eee'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: 25}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Đăng ký</p>
                
                {/* Form */}
                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />

                    {/* Tên đăng nhập */}
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example1c">Tên người dùng:</label>
                      <input type="text" id="form3Example1c" className="form-control" name='name' onChange={e => setValues({...values, name: e.target.value})} placeholder='abcxyz'/>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example3c">Email:</label>
                      <input type="email" id="form3Example3c" className="form-control" name='email' onChange={e => setValues({...values, email: e.target.value})} placeholder='example@gmail.com'/>
                    </div>
                  </div>

                  {/* Mật khẩu */}
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example4c">Mật khẩu:</label>
                      <input type="password" id="form3Example4c" className="form-control" name='password' onChange={e => setValues({...values, password: e.target.value})} placeholder='********'/>
                    </div>
                  </div>

                  {/* Nút đăng ký */}
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Đăng ký</button>
                  </div>

                  {/* Route sang trang Login */}
                  <p className="text-center text-muted mt-3 mb-0">
                    Bạn đã có tài khoản? 
                    <Link to="/Login" className="fw-bold text-body">
                        <u style={{marginLeft: 10}}>Đăng nhập</u>
                    </Link>
                  </p>
                  <p className="text-center text-muted mt-2 mb-0">
                    Quay lại trang chủ ---
                    <Link to="/" className="fw-bold text-body">
                        <u style={{marginLeft: 5}}>FabFourFashion</u>
                    </Link>
                  </p>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img src="https://genk.mediacdn.vn/thumb_w/640/2015/2-1440133142840.gif" className="img-fluid" alt="Sample image" style={{borderRadius: "10px"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Register