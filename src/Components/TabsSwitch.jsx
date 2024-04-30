import React, { useState } from "react";

const TabsSwitch = () => {
    const [isNo, setIsNo] = useState(false);
    return (
        <div className="flex-1 ">
            <div className=" mx-auto">
                <div className=" flex space-x-4 p-2 bg-white rounded-lg myshadow">
                    <button
                        type="button"
                        className={`${
                            !isNo ? "bg-cyan-400 text-white" : ""
                        } flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300`}
                        onClick={() => setIsNo(false)}
                    >
                        Yes
                    </button>
                    <button
                        type="button"
                        className={`${
                            isNo ? "bg-cyan-400 text-white" : ""
                        } flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300`}
                        onClick={() => setIsNo(true)}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TabsSwitch;
