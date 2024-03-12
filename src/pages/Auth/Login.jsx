import { BsBookmark } from '../../helpers/icons'
import { Form, Link, useNavigate } from 'react-router-dom'
import HideShowPassword from '../../helpers/HideShowPassword'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import './style.scss'
import { useAuth } from '../../context/Auth';
import { ErrorMessage, Field, Formik } from 'formik';
import axios from 'axios';
import { loginValidation } from './script';
import 'react-notifications-component/dist/theme.css'
import { ReactNotifications } from 'react-notifications-component'
import { Store } from 'react-notifications-component';
const Login = () => {
  const { setAuthUser, setIsLogged } = useAuth();
  const navigate = useNavigate();


  const handleSuccess = (res) => {
    let {name, email} =  jwt_decode(res.credential);
    localStorage.setItem('userAuth', JSON.stringify({ name, email }));
    navigate('/')
  }
  const responseGoogle = (response) => {
    console.log(response);
  }


  const loginAuth = async (values) => {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/login`, values)

    const data = res.data[0]
    if (data.success) {
      let token = res.data[0].token;
      let userData = res.data[0].data;
      let userAuth = { ...userData, token }
      setIsLogged(true)
      setAuthUser(userAuth)
      localStorage.setItem("userAuth", JSON.stringify(userAuth ));
      Store.addNotification({
        title: "Wonderful!",
        message: "You Loged in successfully",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      })
      navigate('/')
    } else {
      Store.addNotification({
        title: "Failure!",
        message: data.message,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      })
      console.log(data)
    }
  }
  return (
    <>
      <ReactNotifications />
      <div className='login flex justify-center items-center bg-lightBlack min-h-[100vh]  h-full text-white'>
        <div className="container flex justify-center items-center">

          <div className="content rounded-md  shadow-lg py-8 px-10 flex flex-col gap-4 justify-center text-center">
            <div className="header flex flex-col gap-2">
              <div className="font-bold text-3xl">تسجيل دخول</div>
            </div>

            <GoogleOAuthProvider
              clientId="220219003066-u0lr1e73ldf20274uvordl8tuf8li3nl.apps.googleusercontent.com"
              className="flex google"
            >
              <div className="flex justify-between gap-2 items-center my-5 bg-[#30313D] p-3 rounded-md">

                {/* <img src="img/goo.png" onClick={() => console.log(googleref )} className='w-12' alt="" /> */}
                <GoogleLogin
                  type='icon'
                  className="w-0"
                  style={{ width: '0' }}
                  onSuccess={handleSuccess}
                  onError={responseGoogle}
                  useOneTap
                />
                الاستمرار بحساب جوجل
              </div>


            </GoogleOAuthProvider>


            <div className="splitter bg-white h-[2px] w-20 mx-auto relative">
              <span className='absolute -top-4 bg-lightBlack px-1 left-1/2 -translate-x-1/2'>أو</span>
            </div>


            <Formik
              onSubmit={loginAuth}
              initialValues={{ email: '', password: '' }}
              validationSchema={loginValidation}
            >
              {({ submitForm, isValid, resetForm }) => (
                <Form className="form flex flex-col gap-3">

                  <div className="main-auth-input-parent">
                    <BsBookmark />
                    <Field
                      name="email"
                      className='form-input'
                      type="email"
                      placeholder='البريد الالكترونى '
                    />
                  </div>  
                  <ErrorMessage component="div" className='text-red-500' name="email" />

                  <div className="main-auth-input-parent">
                    <BsBookmark />
                    <Field
                      name="password"
                      className='form-input'
                      type="password"
                      placeholder='كلمة المرور'
                    />
                    <div >
                      <HideShowPassword />
                    </div>
                  </div>
                  <ErrorMessage component="div" className="text-red-500" name="password" />
                  
                  <div className='text-right'>
                   
                    <Link to="/forget" className='text-grey '>هل نسيت كلمة المرور؟</Link>

                  </div>
                  <div className="main-auth-input-parent ">
                    <button
                      type="buttom"
                      disabled={!isValid}
                      onClick={() => { submitForm().then(() => resetForm()) }}
                      className='bg-[#544DF6] rounded-md px-4 py-2 mx-auto text-white text-center '>
                      تسجيل دخول
                    </button>
                  </div>

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

export default Login