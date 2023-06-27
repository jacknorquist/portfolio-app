import React, { useState } from 'react';
import './sidebar.css';
import NewFishPopup from '../NewFishPopUp/NewFishPopUp';
import '/home/ubuntu/portfolio-app/portfolio-app/client/src/Components/NewFishPopUp/NewFishPupup.css'

const SideBar = () => {
  const [isPopUpOpen, setIsPopupOpen] = useState(false);
  
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <a className="nav-item" href="">Walleye</a>
        <a className="nav-item" href="">Northern</a>
        <a className="nav-item" href="">Crappie</a>
        <button onClick={() => setIsPopupOpen(true)}>Add Your Fish</button>
      </div>

      {isPopUpOpen && (
        <div className="popup-container">
          <NewFishPopup setIsPopupOpen={setIsPopupOpen} />
        </div>
      )}
    </div>
  );
};

export default SideBar;
