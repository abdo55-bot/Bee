import * as yup from 'yup'
import "yup-phone";
import "yup-phone-lite";

export const resgisterValidation = yup.object().shape({
    username: yup.string().required('username is required'),
    first_name: yup.string().required('first name is required'),
    last_name: yup.string().required('last name is required'),
    email: yup.string().required('email is required'),
    password: yup.string().required('password is required'),
    password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    dob: yup.string().required('Date of Birth is required'),
    phone: yup.string().required('Phone is required').phone("EG", "Must be phone valid"),
    terms: yup.boolean().oneOf([true], "You need to accept our Terms")
})
export const loginValidation = yup.object().shape({
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required'),
    
})


