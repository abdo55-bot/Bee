import { BsBookmark } from '../../helpers/icons'
import { Form, Link, useNavigate } from 'react-router-dom'
import { HiOutlineUser, HiOutlineMail, RiLockPasswordLine } from '../../helpers/icons'
import HideShowPassword from '../../helpers/HideShowPassword'
import { useRef } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import './style.scss'
import { useAuth } from '../../context/Auth';
import { Field, Formik } from 'formik';
import axios from 'axios';
import { loginValidation } from './script';
import 'react-notifications-component/dist/theme.css'
import { ReactNotifications } from 'react-notifications-component'
import { Store } from 'react-notifications-component';


function ForgetPassword() {
    const { authUSer, setAuthUser, isLogged, setIsLogged } = useAuth();
    const navigate = useNavigate();


    const forgetPassord = async(values) => {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/forgot-password`, values);

        console.log(res)
    }

  return (
    <>
      <ReactNotifications />
      <div className='forget flex justify-center items-center bg-lightBlack  min-h-[100vh] h-full text-white'>
        <div className="container flex justify-center items-center">

          <div className="content rounded-md  shadow-lg py-8 px-10 flex flex-col gap-4 justify-center text-center">
            <div className="header flex flex-col gap-2">
              <div className="font-bold text-3xl"> تعديل كلمة المرور</div>
            </div>



            <Formik
              onSubmit={forgetPassord}
              initialValues={{ email: '' }}
              validationSchema={loginValidation}
            >
              {({ submitForm, resetForm }) => (
                <Form className="form flex flex-col gap-3">

                  <div className="main-auth-input-parent">
                    <HiOutlineMail  className='text-2xl' />
                    <Field
                      name="email"
                      className='form-input'
                      type="email"
                      placeholder='البريد الالكترونى '
                    />
                  </div>

                 
                    <button
                      type="buttom"
                      onClick={() => { submitForm().then(() => resetForm()) }}
                      className='bg-[#544DF6] rounded-md px-4 py-2 mx-auto text-white text-center '>
                        تعديل كلمة المرور
                    </button>

                  <div className="flex justify-center flex-row-reverse items-center gap-1 text-white text-sm">
                    <span>ليس لديك حساب؟</span>
                    <Link to="/register" className='!text-primary'>أنشئ حساب جديد</Link>
                  </div>
                </Form>
              )}
            </Formik>


          </div>
        </div>
      </div>
    </>
  )
}

export default ForgetPassword