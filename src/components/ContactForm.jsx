import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useAuth0 } from "@auth0/auth0-react";

const ContactForm = () => {
  const { user } = useAuth0();
  const [name, setName] = useState(user.given_name);
  const [email, setEmail] = useState(user.email);
  const [message, setMessage] = useState("");
  const [showSuccesMessage, setShowSuccesMessage] = useState(false);
  const [showWrongMessage, setShowWrongMessage] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    let templateParams = {
      name: name,
      message: message,
      email: email,
    };
    emailjs
      .send(
        "service_lcxd5ji",
        "template_r741jkh",
        templateParams,
        "xm768EdEMyzz9n9xF"
      )

      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setShowSuccesMessage(true);
          setTimeout(() => {
            setShowSuccesMessage(false);
          }, 2000);
        },
        () => {
          setShowWrongMessage(true);
          setTimeout(() => {
            setShowWrongMessage(false);
          }, 2000);
        }
      );
  }

  return (
    <>
      <form
        onSubmit={sendEmail}
        className=" bg-gray-700  p-4 mx-auto w-full sm:w-3/4 md:w-2/3 l:w-1/2 2xl:w-1/2"
      >
        <h1 className="text-white text-xl font-bold mb-4">Contact Form</h1>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block font-medium text-gray-300 mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block font-medium text-gray-300 mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block font-medium text-gray-300 mb-2"
          >
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="text-white font-bold px-14 mr-2 py-2  border border-gray-400 rounded-lg focus:outline-none focus:ring-2 bg-blue-900 hover:bg-blue-800"
          >
            Send
          </button>
          {showSuccesMessage && (
            <p className="text-green-500">
              Thank you :) the email has been sent.
            </p>
          )}
          {showWrongMessage && (
            <p className="text-red-500">
              The message was not sent :( We apologize.
            </p>
          )}
        </div>
      </form>
    </>
  );
};

export default ContactForm;
