import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames/bind"
import styles from "./StarRating.module.scss";

const cx = classNames.bind(styles)

const StarRating = ({value}) => {
    const [rating, setRating] = useState(value);
    const [hover, setHover] = useState(null);

    return (
    <div>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
                <label className={cx("white_bg")}>
                    <input 
                        type="radio" 
                        name="rating" 
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}

                    />
                    <FontAwesomeIcon icon={faStar}
                        className={cx("star", "white_bg")}
                        color={ratingValue <= (hover || rating) ? "#ffc107": "#e4e5e9"} 
                        
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                    />
                </label>
            );
        })}
    </div>
    );
}

export default StarRating;