import './App.css';
import logo from './images/logo.svg'
import telegram from './images/telegram.svg'
import whatsapp from './images/whatsapp.svg'
import arrow from './images/arrow-down.svg'
import vr from './images/360.png'
function App() {
  
  return (
    <div className="App">

      <header className="App-header">
      <nav>
        <div className="logo">
          <a>
            <img src={logo} alt="Logo" />
          </a> 
        </div>

        <div className="contacts">
          <div className='social-icons'>
            <a>
              <img src={telegram} className='social-icon' alt='telegram-icon'/>
            </a>

            <a>
              <img src={whatsapp} className='social-icon' alt='whatsapp-icon'/>
            </a>
          </div>

          <div className='phone-number'>
              <a href='tel:+99899 xxx xx xx'>+99899 xxx xx xx</a>
          </div>  
        </div>
      </nav>
      </header>
          <div className='map'>
              <div className='apartments'>
                <span className='mark'>M1</span>
                <span>Apartments</span>
              </div>

              <div className='park'>
                <span className='mark'>P1</span>
                <span>Park</span>
              </div>

              <div className='mansions'>
                <span className='mark'>M1</span>
                <span>Mainsons</span>
              </div>

              <div className='road'>
                  <span className='mark'>R1</span>
                  <span>Road</span>
              </div>

          </div>
          <iframe className='iframe' allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" src="https://panoraven.com/en/embed/GbXpOcXjAe"></iframe>
      <div className='brochure'>
          <span>Download brochure</span>
          <img src={arrow} alt='arrow'/>
      </div>
    
    </div>
  );
}

export default App;
