import React, { useState } from 'react';
import './ContactCard.css';

const ContactCard = ({ handleSubmit, login = true }) => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const isMessageEmpty = message.trim() === '';
    const isNameEmpty = name.trim() === '';
    const isEmailValid = isValidEmail(email);

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        if (!isValidEmail(newEmail)) {
            setEmailError('invalid email');
        } else {
            setEmailError('');
        }
    };

    const handleSubmission = () => {
        if (!login) {
            if (!isEmailValid) {
                setEmailError('invalid email');
                return;
            }
        }

        handleSubmit('Thanks for reaching out to us!', 'We will get back to you as soon as possible');
    };

    return (
        <div className="contact-form-container">
            <header className="contact-form-header">
                <div className="contact-form-header-content">
                    <p className='get'>Get in
                        <span className="contact-highlight"> Contact with us </span>
                        for your
                    </p>
                    <span>queries!</span>
                </div>
            </header>

            <div className="contact-form-body">
                <div className="contact-form-field">
                    <p className="contact-form-label">Your Name
                        {!login && <span>{astrix()}</span>}
                    </p>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="contact-form-input" 
                        placeholder="Enter your name" 
                    />
                </div>

                {!login && (
                    <div className="contact-form-field">
                        <p className="contact-form-label">Your Email
                            <span>{astrix()}</span>
                        </p>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="contact-form-input"
                            placeholder="Enter your Email"
                        />
                        {emailError && <p className="contact-form-error">{emailError}</p>}
                    </div>
                )}

                {!login && (
                    <div className="contact-form-field">
                        <p className="contact-form-label">Your Mobile number</p>
                        <input 
                            type="tel" 
                            maxLength={10} 
                            value={mobile} 
                            onChange={(e) => setMobile(e.target.value)} 
                            className="contact-form-input" 
                            placeholder="Enter your number" 
                        />
                    </div>
                )}

                <div className="contact-form-field">
                    <p className="contact-form-label">What would you like to ask?
                        <span>{astrix()}</span>
                    </p>
                    <textarea 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        className={`contact-form-textarea ${login ? 'contact-form-textarea-large' : 'contact-form-textarea-small'}`} 
                        placeholder="Write here..." 
                    />
                </div>

                
            </div>
            <button 
                    onClick={handleSubmission} 
                    disabled={isMessageEmpty || isNameEmpty || (!login && !isEmailValid)} 
                    className={`contact-form-submit ${isMessageEmpty || isNameEmpty || (!login && !isEmailValid) ? "contact-form-submit-disabled" : ""}`}
                >
                    Submit
                </button>
        </div>
    );
}

export default ContactCard;

function astrix() {
    return (
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.00013 4V12M11.4641 6L4.53613 10M4.53613 6L11.4641 10" stroke="#FD443A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
