import React from "react";

const InfoBox = () => {
    return (
        <div className="relative flex-2  flex min-h-screen flex-col items-center justify-center overflow-hidden">
            <div className="relative mx-auto">
                <div className="group relative flex cursor-pointer m-2  after:shadow-lg after:shadow-black">
                    <div className="space-y-8 xl:row-span-2">
                        <figure className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                            <blockquote className="text-gray-900">
                                <p>
                                    “Juventus is against racism and this club
                                    has to celebrate whith different religions
                                    and other people.”
                                </p>
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-x-4">
                                <img
                                    className="h-10 w-10 rounded-full bg-gray-50"
                                    src="https://static.wikia.nocookie.net/442oonsorg/images/3/34/Juventus_logo.png/revision/latest/smart/width/250/height/250?cb=20210513093053"
                                    alt=""
                                />
                                <div>
                                    <div className="font-semibold">
                                        Juventus's old lady
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoBox;
