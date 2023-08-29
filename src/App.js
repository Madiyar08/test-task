import { useState } from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import React from "react";
import "./styles/App.css";
import logo from "./images/logo.svg";
import telegram from "./images/telegram.svg";
import whatsapp from "./images/whatsapp.svg";
import arrow from "./images/arrow-down.svg";
import vr from "./images/360.png";
import vrTwo from "./images/360-02.png";
import vrThree from "./images/360-03.png";
import vrFour from "./images/360-04.png";
function App() {
  const [open, setOpen] = useState(false);
  const [openParkVr, setOpenParkVr] = useState(false);
  const [openMansionVr, setOpenMansionVr] = useState(false);
  const [openRoadVr, setOpenRoadVr] = useState(false);
  const [showOffer,setShowOffer] = useState(false)
  const toggleVr = (stateVar) => {
    stateVar((prevState) => !prevState);
  };

  return (
    <div className="App">
      <div
        style={{
          backgroundColor:
          open || openParkVr || openMansionVr || openRoadVr || showOffer
              ? "rgba(0, 0, 0, 0.90)"
              : " ",
        }}
        className="background"
      >
        <header className="App-header">
          <nav>
            <div className="logo">
              <a>
                <img src={logo} alt="Logo" />
              </a>
            </div>

            <div className="contacts">
              <div className="social-icons">
                <a>
                  <img
                    src={telegram}
                    className="social-icon"
                    alt="telegram-icon"
                  />
                </a>

                <a>
                  <img
                    src={whatsapp}
                    className="social-icon"
                    alt="whatsapp-icon"
                  />
                </a>
              </div>

              <div className="phone-number">
                <a href="tel:+99899 xxx xx xx">+99899 xxx xx xx</a>
              </div>
            </div>
          </nav>
        </header>

        <div className="map">
          <div onClick={() => toggleVr(setOpen)} className="apartments">
            <span className="mark">M1</span>
            <span>Apartments</span>
          </div>

          <div onClick={() => toggleVr(setOpenParkVr)} className="park">
            <span className="mark">P1</span>
            <span>Park</span>
          </div>

          <div
          style={{
            display:
              open || openParkVr || openMansionVr || openRoadVr || showOffer
                ? "none"
                : "block",
          }}
          onClick={() => toggleVr(setOpenMansionVr)} className="mansions">
            <span className="mark">M1</span>
            <span>Mainsons</span>
          </div>

          <div
          style={{
            display:
              open || openParkVr || openMansionVr || openRoadVr || showOffer
                ? "none"
                : "block",
          }}
           onClick={() => toggleVr(setOpenRoadVr)} className="road">
            <span className="mark">R1</span>
            <span>Road</span>
          </div>
        </div>

        <div className="panorama" style={{ display: open ? "block" : "none" }}>
          <svg
            onClick={() => toggleVr(setOpen)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="close-mark"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <ReactPhotoSphereViewer
            src={vr}
            maxWidth="1251px"
            height="500px"
          ></ReactPhotoSphereViewer>
        </div>

        <div
          className="panorama"
          style={{ display: openParkVr ? "block" : "none" }}
        >
          <svg
            onClick={() => toggleVr(setOpenParkVr)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="close-mark"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <ReactPhotoSphereViewer
            src={vrTwo}
            maxWidth="1251px"
            height="500px"
          ></ReactPhotoSphereViewer>
        </div>

        <div
        
          className="panorama"
          style={{ display: openMansionVr ? "block" : "none" }}
        >
          <svg
            onClick={() => toggleVr(setOpenMansionVr)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="close-mark"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <ReactPhotoSphereViewer
            src={vrThree}
            maxWidth="1251px"
            height="500px"
          ></ReactPhotoSphereViewer>
        </div>

        <div
          className="panorama"
          style={{ display: openRoadVr ? "block" : "none" }}
        >
          <svg
            onClick={() => toggleVr(setOpenRoadVr)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="close-mark"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <ReactPhotoSphereViewer
            src={vrFour}
            maxWidth="1251px"
            height="500px"
          ></ReactPhotoSphereViewer>
        </div>

        <div
        onClick={() => toggleVr(setShowOffer)}
          style={{
            display:
              open || openParkVr || openMansionVr || openRoadVr || showOffer
                ? "none"
                : "block",
          }}
          className="brochure"
        >
          <span>Download brochure</span>
          <img src={arrow} alt="arrow" />
        </div>

        <div className="offer" style={{ display: showOffer ? "flex" : "none" }}>
          <div className="offer-unique">
            <h2 className="unique-offer">Don't Miss The Unique Offer</h2>
            <p>
              Be the first to experience the beauty of Keturah Resort at our
              exclusive private screening event! Leave your contact information
              below to receive an invitation to our special event.
            </p>
            <div className="offer-unique__contacts">
              
                <a href="#">
                  <img
                    src={telegram}
                    className="social-icon"
                    alt="telegram-icon"
                  />
                  
                </a>
                <span>Telegram</span>

                <a href="#">
                  <img
                    src={whatsapp}
                    className="social-icon"
                    alt="whatsapp-icon"
                  />
                  
                </a>
                <span>Whatsapp</span>
            </div>
          </div>

          <div className="offer-form"> 
              <form>
                <div class="user-box">
                  <input type="text" placeholder="Your name" />
                </div>
                <div class="user-box">
                  <input type="email"  placeholder="Your e-mail"/>
                </div>

                <div class="user-box">
                  <input step="0.01" type="number" placeholder="Phone number" />
                </div>

                <center>
                  <a href="#">
                    JOIN NOW
                  </a>
                </center>
              </form>
          </div>

          <svg
            onClick={() => toggleVr(setShowOffer)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="close-mark"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
         
        </div>
        
      </div>
    </div>
  );
}

export default App;
