import React, { useState } from "react";
import "./Contactstyle.scss";
import image from "./Elpimage.png";
import Redbox from "../Redbox/Redbox";
import { ContactUsEnquire } from "../utils/apicalls";

function Contact () {
  const [data, setData] = useState({
    fullName: "",
    subject: null,
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      fullName: data.fullName,
      subject: data.subject,
      phoneNumber: data.phoneNumber,
      email: data.email,
      message: data.message,
    };
    console.log(payload);
    ContactUsEnquire((res) => {
        console.log(res.message)
    }, payload);
  };
  return (
    <>
      <div className="cont">
        <div className="cont__contain">
          <div className="cont__contain__children">
            <h2>Contact Us</h2>
            <h2>
              From Concept to Completion: The Journey of Our Exceptional Work
            </h2>
            <p>
              We would love to answer any queries you might have about how we
              can help you. Kindly fill up the form below or choose any mode of
              communication given below.
            </p>
          </div>
          <div className="cont__contain__forms">
            <form>
              <input
              placeholder="Full Name *"
              name="fullName"
              value={data.fullName}
              onChange={handleInputChange}
              required
              />

              <div className="cont__contain__forms__area">
                <input
                placeholder="Enter Phone No *"
                name="phoneNumber"
                value={data.phoneNumber}
                onChange={handleInputChange}
                  required
                />
                <input
                placeholder="Enter email *"
                name="email"
                value={data.email}
                onChange={handleInputChange}
                  required
                />
              </div>

              <textarea
              placeholder="Enter message"
              name="message"
              value={data.message}
              rows={3}
              onChange={handleInputChange}
                required
              />
              <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
          </div>
        </div>
        <div className="cont__child">
          <img src={image} alt="" />
        </div>
      </div>
      <Redbox />
    </>
  );
}

export default Contact;




// const Contact = () => {
//   const [data, setData] = useState({
//     fullName: "",
//     subject: null,
//     phoneNumber: "",
//     email: "",
//     message: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setData({ ...data, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const payload = {
//       fullName: data.fullName,
//       subject: data.subject,
//       phoneNumber: data.phoneNumber,
//       email: data.email,
//       message: data.message,
//     };
//     console.log(payload);
//     ContactUsEnquire((res) => {
//         console.log(res.message)
//     }, payload);
//   };

//   return (
//     <div>
//       <form>
//         <div className="contact__left__form__inputs flex">
//           <input
//             placeholder="Full Name *"
//             name="fullName"
//             value={data.fullName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="contact__left__form__inputs flex">
//           <input
//             placeholder="subject *"
//             name="subject"
//             value={data.subject}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="contact__left__form__inputs">
//           <input
//             placeholder="Enter email *"
//             name="email"
//             value={data.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="contact__left__form__inputs">
//           <input
//             placeholder="Enter Phone No *"
//             name="phoneNumber"
//             value={data.phoneNumber}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="contact__left__form__inputs">
//           <input
//             placeholder="Enter message"
//             name="message"
//             value={data.message}
//             rows={3}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="contact__left__form__button">
//           <button onClick={(e) => handleSubmit(e)}>Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Contact;
