import React, { useState } from 'react'
import "./StarRating.css"

const StarRating = ({ starCount = 5 }) => {
    const [starValue, setStarValue] = useState(0);
    const [onHoverValue, setOnHoverValue] = useState(0);

    // console.log(starValue);
    // console.log(onHoverValue);

    return (
        <>
            <div className='container'>
                {new Array(starCount).fill(0).map((value, index) => {
                    return (
                        <span
                            key={index}
                            onClick={() => setStarValue(index + 1)}
                            className={index < (onHoverValue || starValue) ? "gold" : ""}
                            onMouseEnter={() => setOnHoverValue(index + 1)}
                            onMouseLeave={() => setOnHoverValue(0)}
                        >
                            &#9733;
                        </span>
                    )
                })}
            </div>
        </>
    )
}

export default StarRating
