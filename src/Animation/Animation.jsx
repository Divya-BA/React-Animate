import React, { useState } from "react";
import downloadImage from './image.png';
import styles from "./styles.module.css";

const Animation = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleAnimation = () => {
        setIsAnimating((prev) => !prev);
    };

    return (
        <div className={styles.ani_container}>
            <div className={styles.ani_form_container}>
                <div className={styles.left}>
                    <div className={`${styles.box} ${isAnimating ? styles.animate : ""}`} style={{ backgroundImage: `url(${downloadImage})` }}></div>
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container}>
                        <h1>Select your model shape in one click</h1>
                        <p>In this article we will build a quick and simple sprite animation in JavaScript without using any external libraries.</p>
                        <button type="button" onClick={toggleAnimation} className={styles.green_btn}>
                            {isAnimating ? "Stop Animation" : "Start Animation"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Animation;
