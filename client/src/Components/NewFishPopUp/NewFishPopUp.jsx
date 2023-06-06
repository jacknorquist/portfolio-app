import React from 'react';

const NewFishPopup = ({setIsPopupOpen})=> {

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPopupOpen(false);
      };

        return (<form onSubmit={() => setIsPopupOpen(false)}>
            Name
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="radio" name="fish-type" />
            <input type="radio" name='fish-type' />
            <input type="radio" name="fish-type" />
            <input type="submit" />
        </form>
        )
    }

export default NewFishPopup;