import React from "react";
import "../index.css";
import { MdOutlineSaveAlt } from "react-icons/md";

const PhotosUpload = () => {
    return (
        <div className="rounded border-dashed border ">
            <div className="rounded flex-col flex justify-center items-center photosUploadBgImg">
                <div>
                    <button
                        type="button"
                        className="opacity-100 mx-2 focus:outline-none hover:scale-110 hover:shadow-xl hover:border-2 duration-300 transition-all bg-gray-50 text-black rounded py-2 px-6 text-sm border border-cyan-400"
                    >
                        Search Photos Online
                    </button>
                    <button
                        type="button"
                        className="opacity-100 mx-2 focus:outline-none hover:scale-110 hover:shadow-xl hover:border-2 duration-300 transition-all bg-gray-50 text-black rounded py-2 px-6 text-sm border border-cyan-400"
                    >
                        Upload
                    </button>
                </div>
                <span className="text-black text-sm my-1">
                    Drag & drop photos here to upload{" "}
                </span>
                <MdOutlineSaveAlt className="block text-4xl mt-1" />
            </div>
        </div>
    );
};

export default PhotosUpload;
