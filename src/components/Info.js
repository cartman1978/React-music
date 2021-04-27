import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons"

const Info = ({ song }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="info-song">
            { isVisible && <p>{song.info}</p>}
            <button onClick={() => setIsVisible(!isVisible)}>Song info
             <FontAwesomeIcon icon={faBookOpen} />
            </button>


        </div>
    )
}

export default Info;