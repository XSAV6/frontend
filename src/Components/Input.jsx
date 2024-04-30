import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import DateRangePicker from "./DateRangePicker";

const Input = ({ label, placeholder, type, name, required, tripIsOffered }) => {
    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
    };
    return (
        <div className="flex align-middle justify-center mb-4 w-full">
            <label
                htmlFor={name}
                className="block  flex items-center align-middle flex-1 text-base w-auto font-medium text-gray-700 "
            >
                <span className="whitespace-no-wrap inline-block align-middle">
                    {label}
                </span>
            </label>
            {tripIsOffered ? (
                <div className="flex-3 flex flex-row">
                    <div className="w-[300px] text-gray-900 mr-1">
                        <div className="relative w-full group">
                            <button
                                type="button"
                                className="py-2.5 px-3 w-full md:text-sm text-site bg-transparent border border-gray-300 focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded-md font-semibold"
                            >
                                One Time
                                <IoIosArrowDown />
                            </button>
                            <div className="absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-max peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 bg-white m-1  border border-dimmed text-xs md:text-sm">
                                <div className=" w-full block cursor-pointer hover:bg-white  hover:text-link px-3 py-2 rounded-md">
                                    One Time
                                </div>
                                <div className=" w-full block cursor-pointer hover:bg-white  hover:text-link px-3 py-2 rounded-md">
                                    Recurring Trip
                                </div>
                            </div>
                        </div>
                    </div>
                    <DateRangePicker />
                </div>
            ) : (
                <input
                    name={name}
                    type={type}
                    id={name}
                    className="shadow-sm transition-all duration-300 rounded-md flex-3 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder={placeholder}
                    required={required}
                />
            )}
        </div>
    );
};

export default Input;
