import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Logout from "./Logout";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
      <Logout />
      <form
        onSubmit={sendEmail}
        className="p-5 mx-auto w-full sm:w-3/4 md:w-3/4 l:w-1/2 2xl:w-1/2"
      >
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
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
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
