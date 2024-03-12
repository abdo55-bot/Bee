import { useRef } from 'react'
import { HiOutlineUser, HiOutlineMail, RiLockPasswordLine } from '../../helpers/icons'
import { Form, Link, useNavigate } from 'react-router-dom'
import HideShowPassword from '../../helpers/HideShowPassword'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import jwt_decode from 'jwt-decode';
import { ErrorMessage, Field, Formik } from 'formik'
import { resgisterValidation } from './script'
import axios from 'axios'
import 'react-notifications-component/dist/theme.css'
import { ReactNotifications } from 'react-notifications-component'
import { Store } from 'react-notifications-component';

const Register = () => {

  const navigate = useNavigate();

  const handleSuccess = (res) => {
    let {name, email} =  jwt_decode(res.credential);
    localStorage.setItem('userAuth', JSON.stringify({ name, email }));
    navigate('/')
  }

  const responseGoogle = (response) => {
    console.log(response);
  }

  const registerAuth = async (values) => {
    delete values.cpassword;
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/register`, values, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    let data = res.data[0];

    if (data.success) {
      const data = res.data[0];
      console.log(data);
    } else {
      const data = res.data[0];
      console.log(data);
      console.log(typeof data.message)
      if(typeof data.message !== 'object'){
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
      }else{
        for( let key in data.message){
          Store.addNotification({
            title: "Failure!",
            message: data.message[key][0],
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
        }
      }

    }
  }
  return (
    <>
      <ReactNotifications />
      <div className='register flex justify-center items-center bg-lightBlack h-auto  text-white'>
        <div className="container flex justify-center items-center">

          <div className="content my-5 shadow-lg rounded-md  py-8 px-10 flex flex-col gap-4 justify-center text-center">
            <div className="header flex flex-col gap-2">
              <div className="font-bold text-3xl"> أنشئ حساب جديد</div>
            </div>

            <GoogleOAuthProvider
              clientId="220219003066-u0lr1e73ldf20274uvordl8tuf8li3nl.apps.googleusercontent.com"
              className="flex"
            >

              <div className="google flex items-center gap-2 justify-between  w-full mx-auto rounded-md bg-[#30313D] p-3">
                <GoogleLogin
                  type='icon'
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
              onSubmit={registerAuth}
              initialValues={{
                first_name: 'mohammed',
                last_name: 'farrag',
                username: 'memo',
                email: 'memothetop633@gmail.com',
                password: '1234',
                password_confirmation: '1234',
                gender: 'male',
                dob: '1996-12-24',
                phone: '01118451081',
                terms: true
              }}
              validationSchema={resgisterValidation}
            >
              {({ submitForm, isValid, resetForm }) => (
                <Form className="form flex flex-col gap-3">

                  <div className="flex justify-between">
                    <div className="left">

                      <div className="main-auth-input-parent !w-44">
                        <Field
                          name="first_name"
                          className='form-input'
                          type="text"
                          authcomplete="off"
                          placeholder='اسم الاول ' />
                        <HiOutlineUser className='text-2xl' />

                      </div>
                      <ErrorMessage component="div" className='text-red-500' name="first_name" />
                    </div>

                    <div className="right">
                      <div className="main-auth-input-parent !w-44">
                        <Field
                          name="last_name"
                          className='form-input'
                          type="text"
                          authcomplete="off"
                          placeholder='اسم الاخير ' />
                        <HiOutlineUser className='text-2xl' />
                      </div>
                      <ErrorMessage component="div" className='text-red-500' name="last_name" />
                    </div>
                  </div>

                  <div className="main-auth-input-parent ">
                    <Field
                      name="username"
                      autoComplete="off"
                      className='form-input'
                      type="text"
                      authcomplete="off"
                      placeholder='اسم المستخدم ' />
                    <HiOutlineUser className='text-2xl' />
                  </div>
                  <ErrorMessage component="div" className='text-red-500' name="username" />

                  <div className="main-auth-input-parent">
                    <HiOutlineMail className='text-2xl' />
                    <Field
                      name="email"
                      className='form-input'
                      type="email"
                      authcomplete="new-password"
                      placeholder='الايميل' />
                  </div>
                  <ErrorMessage component="div" className='text-red-500' name="email" />

                  <div className="main-auth-input-parent">
                    <HiOutlineUser className='text-2xl' />
                    <Field
                      as="select"
                      name="gender"
                      className='form-input'>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Field>
                  </div>
                  <ErrorMessage component="div" className='text-red-500' name="gender" />

                  <div className="main-auth-input-parent">
                    <RiLockPasswordLine className='text-2xl' />
                    <Field
                      name="password"
                      className='form-input'
                      type="password"
                      authcomplete="off"
                      placeholder=' كلمة المرور' />
                    <div >
                      <HideShowPassword />
                    </div>
                  </div>
                  <ErrorMessage component="div" className='text-red-500' name="password" />

                  <div className="main-auth-input-parent">
                    <RiLockPasswordLine className='text-2xl' />
                    <Field
                      name="password_confirmation"
                      className='form-input'
                      type="password"
                      authcomplete="off"
                      placeholder=' تأكيد كلمة المرور' />
                    <div>
                      <HideShowPassword />
                    </div>
                  </div>
                  <ErrorMessage component="div" className='text-red-500' name="password_confirmation" />

                  <div className="main-auth-input-parent">
                    <Field
                      name="dob"
                      className='form-input'
                      type="date"
                      authcomplete="off"
                      pattern="\d{4}-\d{2}-\d{2}"
                      placeholder='تاريخ الميلاد' />
                  </div>
                  <ErrorMessage component="div" className='text-red-500' name="dob" />

                  <div className="main-auth-input-parent">
                    <Field
                      name="phone"
                      className='form-input'
                      type="phone"
                      authcomplete="off"
                      placeholder="phone" />
                  </div>
                  <ErrorMessage component="div" className='text-red-500' name="phone" />

                  <div className="text-sm text-grey py-2 ">
                    <div className="remember flex justify-between items-center gap-1">
                      <span>أوافق على الشروط و الاحكام</span>
                      <Field
                        name="terms"
                        type="checkbox"
                        className='appearance-none border-2 border-grey w-4 h-4 checked:bg-grey checked:border-grey' />
                    </div>
                    <ErrorMessage component="div" className='text-red-500' name="terms" />
                  </div>

                  <div className="main-auth-input-parent text-grey py-2 ">
                    <button
                      type="button"
                      disabled={!isValid}
                      className='!bg-[#544DF6] rounded-md px-4 py-2 mx-auto text-white text-center'
                      onClick={() => { submitForm().then(() => resetForm()) }}>
                      إنشاء حساب
                    </button>
                  </div>

                  <div className="flex justify-center flex-row-reverse items-center gap-1 text-white text-sm">
                    <span> لديك حساب؟</span>
                    <Link to="/login" className='!text-primary'>سجل دخول الان؟</Link>
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

export default Register