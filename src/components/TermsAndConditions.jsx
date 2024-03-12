import React, { useContext } from 'react'
import { DarkThemeContext } from '../context/DarkTheme'

const TermsAndConditions = () => {
    const { dark } = useContext(DarkThemeContext)
    return (
        <div className='terms my-4 h-auto'>
            <div className="container">
                <div className={`flex flex-col justify-center gap-10 items-start ${dark ? 'text-white': 'text-lightBlack'}`}>
                    <div className="header text-3xl">  Terms and Conditions</div>
                    <div className="items">
                        <ul className='flex flex-col gap-3'>
                            <li>1. Collection of Personal Information:
                                We collect some personal information that you provide during registration to the web application, such as your name and email address.</li>
                            <li>
                                2. Use of Information:
                                We use the collected information to customize, enhance your experience within the web application and provide relevant content and advertisements. We may also use this information to communicate with you regarding updates, special offers, and important notifications.
                            </li>
                            <li>
                                3. Sharing of Information:
                                We do not sell or share your personal information with third parties without your consent unless it is necessary to provide the requested services.
                            </li>
                            <li>
                                4. Protection of Information:
                                We take reasonable security measures to protect your personal information from unauthorized access, use, alteration, or disclosure. However, you should also take measures to protect your personal information, such as not sharing your login credentials with untrusted third parties.
                            </li>
                            <li>
                                5. Privacy Rights:
                                You have the right to access, update, or delete the personal information we hold about you. You can also modify your privacy preferences in the application settings. If you have any inquiries or complaints about the privacy policy, please contact us for more information.
                            </li>
                        </ul>
                    </div>
                    <div className="user">
                        <div className="text-lg">User Analytics:</div>
                        <p>User analytics techniques may be used to understand how users use and improve the application.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsAndConditions