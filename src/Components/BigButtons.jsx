import React, { useState } from "react";
import { CiLock, CiUnlock } from "react-icons/ci";

const BigButtons = ({ title1, p1, title2, p2 }) => {
    const [isFirst, setIsFirst] = useState(true);
    return (
        <div className="flex flex-row gap-4">
            <div
                onClick={() => setIsFirst(true)}
                className={` ${
                    isFirst ? "border-cyan-400" : "border-gray-100"
                } border-2 flex-1  flex rounded-md p-4 transition-all duration-300 cursor-pointer`}
            >
                <div>
                    <p>{title1}</p>
                    <p>{p1}</p>
                </div>
                <div>
                    <CiLock
                        className={`${
                            isFirst ? "text-cyan-500" : ""
                        } transition-all duration-300  `}
                        size={48}
                    />
                </div>
            </div>
            <div
                onClick={() => setIsFirst(false)}
                className={`${
                    isFirst ? "border-gray-100" : "border-cyan-500"
                } border-2 flex-1  flex rounded-md p-4 transition-all duration-300 cursor-pointer`}
            >
                <div>
                    <p>{title2}</p>
                    <p>{p2}</p>
                </div>
                <div>
                    <CiUnlock
                        className={`${
                            isFirst ? "" : "text-cyan-400"
                        } transition-all duration-300`}
                        size={48}
                    />
                </div>
            </div>
        </div>
    );
};

export default BigButtons;
