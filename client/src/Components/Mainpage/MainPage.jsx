
// You can live edit this code below the import statements
import React, { useState} from 'react';
import Fade from 'react-reveal/Fade';
import './MainPage.css';
import CrappieArchive from '/home/ubuntu/portfolio-app/portfolio-app/client/src/Components/Fish Archives/Crappie/Crappie.jsx';


  const OpeningPage = () =>{
    const [isCrappieOpen, setCrappieIsOpen] = useState(false);
    const [isOpeningPageOpen, setIsOpeningPageOpen] = useState(true);

    
  const handleCrappieClick = () => {
    setCrappieIsOpen(true);
    setIsOpeningPageOpen(false);
  };
    return (
        <div>
          {isOpeningPageOpen ? (
            <div className='opening-page'>
                <div className='left'>
                  <div className='fish'>
                    <div className='category'>
                      <button>Walleye</button>
                    </div>
                    <div className='category'>
                      <button>Northern</button>
                    </div>
                    <div className='category'>
                      <button>Lake Trout</button>
                    </div>
                    <div className='category'>
                      <button>Smallmouth Bass</button>
                    </div>
                    <div className='category'>
                      <button>Largemouth Bass</button>
                    </div>
                    <div className='category'>
                      <button onClick={handleCrappieClick}>Crappie</button>
                    </div>
                    <div className='category'>
                      <button>Sunfish</button>
                    </div>
                    <div className='category'>
                      <button>Perch</button>
                    </div>
                    <div className='category'>
                      <button>Sturgeon</button>
                    </div>
                    <div className='other-fish'>
                    <div className='category'>
                      <button>Trout & Salmon</button>
                    </div>
                    <div className='category'>
                      <button>Rough Fish</button>
                    </div>
                    <div className='category'>
                      <button>Rock Bass</button>
                    </div>
                  </div>
                  </div>
                </div>
                <div className='right'>
                </div>
              </div>
          ) : null }
                {isCrappieOpen && (
                  <div className='crappie-archive'>
                    <CrappieArchive setCrappieIsOpen = {setCrappieIsOpen}/>
                  </div>
                )}
      </div>


    );
  }

export default OpeningPage;