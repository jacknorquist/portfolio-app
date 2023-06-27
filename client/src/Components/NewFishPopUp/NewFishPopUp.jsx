import React from 'react';
import '/home/ubuntu/portfolio-app/portfolio-app/client/src/Components/NewFishPopUp/NewFishPupup.css'


const NewFishPopup = ({setIsPopupOpen})=> {



        return (<form className='fish-form' onSubmit={() => setIsPopupOpen(false)}>
            <h1>Add Your Trohpy Catch</h1>
            <div className="form-div">
                <h3>Fist Name</h3>
                <input type="text" />
            </div>
            <div className="form-div">
                <h3>Last Name</h3>
                <input type="text" />
            </div>
            <div className="form-div">
            <input type="text" />
            </div>
            <div className="form-div">
            <input type="number" />
            </div>
            <div className="form-div">
            <input type="radio" name="fish-type" />
            <input type="radio" name='fish-type' />
            <input type="radio" name="fish-type" />
            </div>
            <input type="submit" />
        </form>
        )
    }

export default NewFishPopup;