import { useState } from "react";
import "./styles/App.css";
import logo from "./images/logo.svg";
import telegram from "./images/telegram.svg";
import whatsapp from "./images/whatsapp.svg";
import arrow from "./images/arrow-down.svg";
function App() {
  const [open, setOpen] = useState(false);

  function openVisitCard() {
    open ? setOpen(false) : setOpen(true);
  }
  return (
    <div className="App">
      <div style={{ backgroundColor: open ? "rgba(0, 0, 0, 0.65)" : " "}} className="background">
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
        <div
          onClick={openVisitCard}
          className="apartments"
        >
          <span className="mark">M1</span>
          <span>Apartments</span>
        </div>

        <div className="park">
          <span className="mark">P1</span>
          <span>Park</span>
        </div>

        <div className="mansions">
          <span className="mark">M1</span>
          <span>Mainsons</span>
        </div>

        <div className="road">
          <span className="mark">R1</span>
          <span>Road</span>
        </div>
      </div>
      
      <div style={{ display: open ? "block" : "none" }} className="panorama">
        <svg
          onClick={openVisitCard}
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
        <iframe className='iframe' allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" src="https://panoraven.com/en/embed/GbXpOcXjAe"></iframe>
      </div>

      <div style={{ display: open ? "none" : "block" }} className="brochure">
        <span>Download brochure</span>
        <img src={arrow} alt="arrow" />
      </div>
      </div>
      
    </div>
  );
}

export default App;
