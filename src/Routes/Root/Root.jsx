import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "../../index.css";
import { IoAirplaneSharp } from "react-icons/io5";
import MyForm from "../../Components/MyForm";

const Root = () => {
    const texts = ["together 🛫", "click me 👀", "easily❗"]; // Add your desired texts here
    const [isPlaneAnimated, setIsPlaneAnimated] = useState(false);
    const [flew, setFlew] = useState(false);
    const [hidden, setHidden] = useState(false);

    const handleClick = () => {
        setIsPlaneAnimated(true);
        setTimeout(() => {
            setFlew(true);
        }, 3000);
        setTimeout(() => {
            setHidden(true);
        }, 4000);
    };

    return (
        <div className="main flex align-middle justify-center h-full relative">
            {!hidden ? (
                <>
                    <h1
                        className={`text-center self-center font-bold  plane-animation ${
                            flew ? "vanish" : ""
                        } ${isPlaneAnimated ? "animate" : ""}`}
                    >
                        <IoAirplaneSharp />
                    </h1>
                    <h1
                        className={`text-center self-center font-bold text-8xl cursor-pointer relative border-bottom-hover title ${
                            flew ? "vanish" : ""
                        } ${isPlaneAnimated ? "animateTitle" : ""}`}
                        onClick={handleClick}
                    >
                        We travel{" "}
                        <Typewriter cursorBlinking cursor words={texts} loop />
                    </h1>{" "}
                </>
            ) : null}
            <div
                className={`flex w-full justify-center transition-all duration-500 align-middle my-24 ${
                    flew ? "opacity-100" : "opacity-0"
                } ${hidden ? "block" : "hidden"}`}
            >
                <MyForm />
            </div>
        </div>
    );
};

export default Root;
