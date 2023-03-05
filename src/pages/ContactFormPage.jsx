import React from "react";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";

const ContactFormPage = () => {
  return (
    <>
      <div className="h-screen bg-gray-700">
        <Navbar />
        <ContactForm />
      </div>
    </>
  );
};

export default ContactFormPage;
