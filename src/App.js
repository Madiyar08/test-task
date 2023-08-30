import React from "react";
import { useEffect, useState } from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import "./styles/App.css";
import telegram from "./images/telegram.svg";
import whatsapp from "./images/whatsapp.svg";
import vr from "./images/360.png";
import vrTwo from "./images/360-02.png";
import vrThree from "./images/360-03.png";
import vrFour from "./images/360-04.png";
import Loader from "./components/Loader";
import Header from "./components/Header";
function App() {
  const [open, setOpen] = useState(false);
  const [openParkVr, setOpenParkVr] = useState(false);
  const [openMansionVr, setOpenMansionVr] = useState(false);
  const [openRoadVr, setOpenRoadVr] = useState(false);
  const [showOffer, setShowOffer] = useState(false);

  const toggleVr = (stateVar) => {
    stateVar((prevState) => !prevState);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="App">
          <div
            style={{
              backdropFilter:
                open || openParkVr || openMansionVr || openRoadVr || showOffer
                  ? "blur(5px)"
                  : " ",
              backgroundColor:
                open || openParkVr || openMansionVr || openRoadVr || showOffer
                  ? "rgba(0, 0, 0, 0.90)"
                  : " ",
            }}
            className="background "
          >
            <Header />
            <div
              style={{
                display:
                  open || openParkVr || openMansionVr || openRoadVr || showOffer
                    ? "none"
                    : "block",
              }}
              className="map"
            >
              <button
                onClick={() => toggleVr(setOpen)}
                className="dots-modal__dot apartments "
              >
                <div className="dots-modal__title mark">
                  <h4>M1</h4>
                </div>
                <div className="dots-modal__text">
                  <p>Apartments</p>
                </div>
              </button>

              <button
                onClick={() => toggleVr(setOpenParkVr)}
                className="dots-modal__dot park "
              >
                <div className="dots-modal__title mark">
                  <h4>P1</h4>
                </div>
                <div className="dots-modal__text">
                  <p>Park</p>
                </div>
              </button>

              <button
                onClick={() => toggleVr(setOpenMansionVr)}
                className="dots-modal__dot mansions "
              >
                <div className="dots-modal__title mark">
                  <h4>M1</h4>
                </div>
                <div className="dots-modal__text">
                  <p>Mainsons</p>
                </div>
              </button>

              <button
                onClick={() => toggleVr(setOpenRoadVr)}
                className="dots-modal__dot road "
              >
                <div className="dots-modal__title mark">
                  <h4>R1</h4>
                </div>
                <div className="dots-modal__text">
                  <p>Road</p>
                </div>
              </button>
            </div>

            {/* Panorama */}
            <div
              className="panorama"
              style={{ display: open ? "block" : "none" }}
            >
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
            {/* Panorama */}

            <button
              className="main__brochure open-brochure"
              onClick={() => toggleVr(setShowOffer)}
              style={{
                display:
                  open || openParkVr || openMansionVr || openRoadVr || showOffer
                    ? "none"
                    : "block",
              }}
            >
              <div className="main__brochure_btn">
                <p>Download brochure</p>
                <div>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.84277 10.335L9.49998 14.9922L14.1572 10.335"
                      stroke="white"
                      strokeWidth="1.3"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    ></path>
                    <mask
                      id="mask0_1077_772"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="19"
                      height="19"
                    >
                      <path
                        d="M0 8.39233e-05H18.9999V19H0V8.39233e-05Z"
                        fill="white"
                      ></path>
                    </mask>
                    <g mask="url(#mask0_1077_772)">
                      <path
                        d="M9.5 14.3242V0.742246"
                        stroke="white"
                        strokeWidth="1.3"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M0 18.2578H18.9999"
                        stroke="white"
                        strokeWidth="1.3"
                        strokeMiterlimit="10"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </button>

            <div
              className="offer"
              style={{ display: showOffer ? "flex" : "none" }}
            >
              <div className="offer-unique">
                <h2 className="unique-offer">Don't Miss The Unique Offer</h2>
                <p>
                  Be the first to experience the beauty of Keturah Resort at our
                  exclusive private screening event! Leave your contact
                  information below to receive an invitation to our special
                  event.
                </p>
                <div className="offer-unique__contacts">
                  <a href="#">
                    <img
                      src={telegram}
                      className="social-icon"
                      alt="telegram-icon"
                    />
                  </a>
                  <a className="#">Telegram</a>

                  <a href="#">
                    <img
                      src={whatsapp}
                      className="social-icon"
                      alt="whatsapp-icon"
                    />
                  </a>
                  <a href="#">Whatsapp</a>
                </div>
              </div>

              <div className="offer-form">
                <form>
                  <div className="user-box">
                    <input
                      className="input-border"
                      type="text"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="user-box">
                    <input
                      className="input-border"
                      type="email"
                      placeholder="Your e-mail"
                    />
                  </div>

                  <div className="user-box">
                    <input
                      className="input-border"
                      step="0.01"
                      type="number"
                      placeholder="Phone number"
                    />
                  </div>

                  <div className="join">JOIN NOW</div>
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
      )}
    </div>
  );
}

export default App;
