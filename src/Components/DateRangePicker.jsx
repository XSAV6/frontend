import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";

const DateRangePicker = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    return (
        <div className="relative ">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                <input
                    type="text"
                    // value={startDate}
                    placeholder="Start Date"
                    readOnly
                    onClick={() => setShowCalendar(true)}
                    className="w-1/2 py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none"
                />
                <input
                    type="text"
                    // value={endDate}
                    placeholder="End Date"
                    readOnly
                    onClick={() => setShowCalendar(true)}
                    className="w-1/2 py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none"
                />
                <div className="p-2 ">
                    <SlCalender className="h-5 w-5" aria-hidden="true" />
                </div>
            </div>
            {showCalendar && (
                <div className="absolute z-10 top-full mt-2 bg-white border border-gray-300 shadow-lg rounded-md">
                    {/* Render your calendar component here */}
                </div>
            )}
        </div>
    );
};

export default DateRangePicker;
