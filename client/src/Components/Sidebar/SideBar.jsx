import React, { useState } from 'react';
import './sidebar.css';
import NewFishPopup from '../NewFishPopUp/NewFishPopUp';

const SideBar = () => {
    const [isPopUpOpen, setIsPopupOpen] = useState(false);
    return(
        <div class = "y">
           <div class="sidebar">
                <a class="nav-item"href="">Walleye</a>
                <a class="nav-item"href="">Northern</a>
                <a class="nav-item"href="">Crappie</a>
                <button onClick={() => setIsPopupOpen(true)}>Add Your Fish</button>
            </div>
            <div class = "x">
            {isPopUpOpen && <NewFishPopup setIsPopupOpen={setIsPopupOpen}/>
        
    }
            </div>
        </div>
    );
    }
export default SideBar 