import React, { useState } from "react";
import "./Quotestyle.scss";
import image from "./Elpimage.png";
import Redbox from "../Redbox/Redbox";

function Quote() {
  const [fullname, setFullName] = useState("");
  {
    /*SHOWS,SET THE NAME IN THE CONST,U GIVEN INSIDE THE VALUE*/
  }
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    const render = { fullname, phone, email, text };
    {
      /* SHOWS,SET THE NAME IN THE RENDER,U GIVEN INSIDE THE CONST*/
    }
    console.log(render);
    setFullName("");
    {
      /* SHOWS,IF WE GIVEN THIS; THE VALUE IN THE BOX BECOMES EMPTY -WHEN U CLICK SENDNOW BUTTON*/
    }
    setText("");
    setEmail("");
    setPhone("");
  };
  return (
    <>
    <div className="quote">
      <div className="quote__section">
        <div className="quote__section__head">
          <h2>Get a Quote</h2>
          <h2>
            Partner with us today for a successful and satisfying IT service
            experience.
          </h2>
          <p>
            We would love to answer any queries you might have about how we can
            help you. Kindly fill up the form below or choose any mode of
            communication given below.
          </p>
        </div>

        <div className="quote__section__sub">
          <form onSubmit={handleForm}>
            <input
              type="text"
              placeholder="FullName"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              required
            />

            <div className="quote__section__sub__part">
              <input
                type="number"
                placeholder="PhoneNumber"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <textarea
              type="text"
              placeholder="Your Message"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
            <button>Send Now</button>
          </form>
        </div>
      </div>

      <div className="quote__picture">
        <img className="pic" src={image} alt="" />
      </div>
    </div>
    <Redbox/>
    </>
  );
}

export default Quote;
