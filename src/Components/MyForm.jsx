import React from "react";
import colors from "../data/colors.json";
import InfoBox from "./InfoBox";
import Input from "./Input";
import PhotosUpload from "./PhotosUpload";
import TabsSwitch from "./TabsSwitch";
import BigButtons from "./BigButtons";

const MyForm = () => {
    return (
        <section className="flex transition-all duration-500 w-full max-w-screen-xl justify-center align-middle  ">
            <div className="flex-2"></div>
            <div className="flex-5">
                <div className="h-screen  flex items-center justify-center w-full ">
                    <div className="bg-white  myshadow rounded-xl px-8 py-6  w-full">
                        <form action="#">
                            <div>
                                <Input
                                    label="Trip Title"
                                    placeholder="e.g. Great Japan Trip!"
                                    type="text"
                                    name="trip-title"
                                    required={true}
                                />
                                <Input
                                    label="Destination"
                                    placeholder="What's the destination"
                                    type="text"
                                    required={true}
                                />
                                <Input
                                    label="Trip is offered"
                                    placeholder="What's the destination"
                                    type="text"
                                    required={true}
                                    tripIsOffered={true}
                                />
                            </div>
                            <hr className="my-6" />
                            <div>
                                <p>Photos</p>
                                <PhotosUpload />
                            </div>
                            <hr className="my-6" />
                            <div>
                                <div className="flex justify-between my-2">
                                    <span>Group Size</span>
                                    <span>Enable waitlist when sold out?</span>
                                </div>
                                <div className="flex justify-center flex-row align-middle items-center gap-3">
                                    <div className="flex-1">
                                        <input
                                            className="m-0 max-w-40 outline-none border rounded-md p-2"
                                            type="number"
                                            placeholder="Min: 1"
                                            min={1}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <input
                                            className="m-0 max-w-40 outline-none border rounded-md p-2"
                                            type="number"
                                            placeholder="Max: unlimited"
                                            min={2}
                                        />
                                    </div>
                                    <div className="flex-1 ">
                                        <span className="">0 sold</span>
                                    </div>
                                    <TabsSwitch />
                                </div>
                            </div>
                            <hr className="my-6" />
                            <div>
                                <p className="my-2">Who can see your trip?</p>
                                <BigButtons
                                    title1="Private"
                                    title2="Public"
                                    p1="Only people I invite via the private link"
                                    p2="The trip is indexed by search engines and shown on your profile"
                                />
                            </div>
                            <button
                                type="submit"
                                className=" my-6 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-500 hover:px-12 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                            >
                                Next
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex-2">
                <InfoBox />
            </div>
        </section>
    );
};

export default MyForm;
