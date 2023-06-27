import React from "react";
import './Crappie.css';


const CrappieArchive = ({setCrappieIsOpen})=>{
    return (
        <div className="crappie-archive">
            <button type="submit" onSubmit={() =>setCrappieIsOpen (false)}></button>

        </div>
    )
}
export default CrappieArchive;