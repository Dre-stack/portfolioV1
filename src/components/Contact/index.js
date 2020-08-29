import React, { useState } from 'react';
import Header from '../Header';
import emailjs from 'emailjs-com';
import { css } from '@emotion/core';
import { BeatLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Contact() {
  const [formError, setFormError] = useState({
    status: false,
    message: '',
  });
  const [data, setData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    html_message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState({
    status: false,
    messageType: '',
  });

  const renderSuccess = () => {
    if (success.status && success.messageType === 1) {
      return (
        <div className="message-wrapper">
          <div className="message">
            Your message was well received, I will get back to you as
            soon possible.
            <div className="thank-you">THANK YOU</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="message-wrapper">
          <div className="message">
            Unfortunately the message could not be sent, Please reach
            out to me directly at 'oludareodedoyin@gmail.com'
            <div className="thank-you">THANK YOU</div>
          </div>
        </div>
      );
    }
  };

  const validateForm = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!data.from_name) {
      setFormError({
        status: true,
        message: 'Please enter your name',
      });
      return false;
    }
    if (!data.from_email) {
      setFormError({
        status: true,
        message: 'Please enter your email',
      });
      return false;
    }
    if (data.from_email && !re.test(data.from_email.toLowerCase())) {
      setFormError({
        status: true,
        message: 'Please enter a valid email',
      });
      return false;
    }

    if (!data.html_message) {
      setFormError({
        status: true,
        message: 'Message cannot be empty',
      });
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setLoading(true);
      emailjs
        .sendForm(
          'gmail',
          'template_xDeQRN2o',
          e.target,
          'user_FguB7JNak28HitukIpQG0'
        )
        .then((data) => {
          setSuccess({ status: true, messageType: 1 });
          setLoading(false);
        })
        .catch((err) => {
          setSuccess({ status: true, messageType: 2 });
          setLoading(false);
        });
    }
  };

  return (
    <div>
      <Header />
      {loading ? (
        <div className="loader">
          <BeatLoader css={override} size={30} color={'#fd00da'} />
        </div>
      ) : (
        <div className="contact">
          {success.status ? (
            renderSuccess()
          ) : (
            <React.Fragment>
              <h1 className="contact__header"> contact Me</h1>
              <form
                className="contact__form"
                onSubmit={handleSubmit}
                onBlur={() =>
                  setFormError({ status: false, message: '' })
                }
              >
                {formError.status && (
                  <div className="contact__form-error">
                    {formError.message}
                  </div>
                )}
                <label className="contact__form-label">Name</label>
                <input
                  type="text"
                  className="contact__form-input"
                  value={data.from_name}
                  name="from_name"
                  onChange={handleChange}
                />
                <label className="contact__form-label">
                  Email Address
                </label>
                <input
                  type="text"
                  className="contact__form-input"
                  value={data.from_email}
                  name="from_email"
                  onChange={handleChange}
                />
                <label className="contact__form-label">Subject</label>
                <input
                  type="text"
                  className="contact__form-input"
                  value={data.subject}
                  name="subject"
                  onChange={handleChange}
                />
                <label className="contact__form-label">Message</label>
                <textarea
                  rows="6"
                  cols="50"
                  className="contact__form-input"
                  value={data.html_essage}
                  name="html_message"
                  onChange={handleChange}
                />
                <button type="submit" className="btn">
                  Send Message
                </button>
              </form>
            </React.Fragment>
          )}
        </div>
      )}
    </div>
  );
}

export default Contact;
