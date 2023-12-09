import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { DotLoader } from "react-spinners";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };
  const sendEmail = async (e) => {
    try {
      e.preventDefault();
      const data = { name, email, message };
      setLoading(true);
      await axios.post(`${window.location.origin}/send-email`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast("Email sent");
      setDone(true);
      resetForm();
    } catch (error) {
      console.log(error.repsonse.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DotLoader
            color={"red"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="contact-form" id="contact">
          <div className="w-left">
            <div className="awesome">
              {/* darkMode */}
              <span style={{ color: darkMode ? "white" : "" }}>
                Get in Touch
              </span>
              <span>Contact me</span>
              <div
                className="blur s-blur1"
                style={{ background: "#ABF1FF94" }}
              ></div>
            </div>
          </div>
          <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                className="user"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="user_email"
                className="user"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name="message"
                className="user"
                placeholder="Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <input type="submit" value="Send" className="button" />
              <span>{done && "Thanks for Contacting me"}</span>
              <div
                className="blur c-blur1"
                style={{ background: "var(--purple)" }}
              ></div>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
