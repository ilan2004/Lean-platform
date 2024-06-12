import React, { useState } from 'react';
import './Feedback.css'
const FeedbackCard = ({ handleSubmit, login = true }) => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [attachedFiles, setAttachedFiles] = useState([]);
    const [attachDisabled, setAttachDisabled] = useState(false);

    const isMessageEmpty = message.trim() === '';
    const isEmailValid = isValidEmail(email);

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        if (!isValidEmail(newEmail)) {
            setEmailError('Invalid email');
        } else {
            setEmailError('');
        }
    };

    const handleSubmission = () => {
        if (!login && !isEmailValid) {
            setEmailError('Invalid email');
            return;
        }

        handleSubmit('Thanks for your valuable feedback!');
    };

    const handleAttach = (event) => {
        const files = event.target.files;
        if (files.length > 0 && attachedFiles.length < 2) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.src = e.target.result;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = 50;
                    canvas.height = 50;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    const resizedDataUrl = canvas.toDataURL('image/jpeg');
                    setAttachedFiles([...attachedFiles, resizedDataUrl]);
                    if (attachedFiles.length === 1) {
                        setAttachDisabled(true);
                    }
                };
            };
            reader.readAsDataURL(file);
        }
    };

    const removeFile = (index) => {
        const updatedFiles = attachedFiles.filter((_, i) => i !== index);
        setAttachedFiles(updatedFiles);
        setAttachDisabled(false);
    };

    return (
        <div className="feedback-card">
            <header className="header">
                <p>Let us know your <span>Feedback</span> about us!</p>
            </header>
            <div className="content">
                <div className="textarea-container">
                    <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        className={`textarea ${login ? 'height-large' : 'height-small'}`}
                        placeholder="Write here..."
                        maxLength={1000}
                    />
                    <label className={`attach-label ${attachDisabled ? 'disabled' : ''}`}>
                        <span>{attach()}</span>
                        Attach
                        <input type="file" className="hidden" accept="image/*" onChange={handleAttach} />
                    </label>
                    <div className="attached-files">
                        {attachedFiles.map((file, index) => (
                            <div key={index} className="file">
                                <img src={file} alt="Attached" className="file-image" />
                                <button onClick={() => removeFile(index)} className="remove-file-button">
                                    {close()}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                {login && (
                    <div className="anonymous-checkbox">
                        <input type="checkbox" className="checkbox" />
                        <span>Send feedback anonymously</span>
                    </div>
                )}
                {!login && (
                    <div className="email-container">
                        <p>Enter your email to receive an update</p>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="email-input"
                            placeholder="Enter your Email"
                        />
                        {emailError && <p className="email-error">{emailError}</p>}
                    </div>
                )}
                <button
                    onClick={handleSubmission}
                    disabled={isMessageEmpty || (!login && !isEmailValid)}
                    className={`submit-button ${isMessageEmpty || (!login && !isEmailValid) ? 'disabled' : ''}`}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default FeedbackCard;

const attach = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 6.75V17.33C16.5 19.42 14.97 21.28 12.89 21.48C12.33 21.53 11.77 21.47 11.24 21.3C10.71 21.12 10.22 20.84 9.81 20.46C9.4 20.08 9.07 19.63 8.84 19.12C8.61 18.61 8.5 18.06 8.5 17.5V5.14C8.5 3.83 9.44 2.64 10.74 2.51C11.09 2.47 11.44 2.51 11.77 2.62C12.11 2.73 12.41 2.9 12.67 3.14C12.93 3.37 13.14 3.66 13.28 3.98C13.43 4.3 13.5 4.65 13.5 5V15.5C13.5 16.05 13.05 16.5 12.5 16.5C11.95 16.5 11.5 16.05 11.5 15.5V6.75C11.5 6.34 11.16 6 10.75 6C10.34 6 10 6.34 10 6.75V15.36C10 16.67 10.94 17.86 12.24 17.99C12.59 18.02 12.94 17.99 13.27 17.88C13.61 17.77 13.91 17.59 14.17 17.36C14.43 17.12 14.64 16.83 14.78 16.52C14.93 16.2 15 15.85 15 15.5V5.17C15 3.08 13.47 1.22 11.39 1.02C10.83 0.96 10.27 1.03 9.74 1.2C9.21 1.38 8.73 1.66 8.31 2.03C7.9 2.41 7.57 2.87 7.34 3.38C7.12 3.89 7 4.44 7 5V17.27C7 20.14 9.1 22.71 11.96 22.98C15.25 23.28 18 20.72 18 17.5V6.75C18 6.34 17.66 6 17.25 6C16.84 6 16.5 6.34 16.5 6.75Z" fill="#333"/>
    </svg>
);

const close = () => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.67 1.67L8.33 8.33M1.67 8.33L8.33 1.67" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
