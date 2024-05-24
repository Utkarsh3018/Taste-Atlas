import React, { useEffect, useState } from "react";
import flag from "../assets/image 6.png";
import searchImages from "../api";

const RecipeCard = (props) => {
    const [imageUrl, setImageUrl] = useState("");
    const [showModal, setShowModal] = useState(false);

    const search = async () => {
        const response = await searchImages(props.dish);
        setImageUrl(response);
    };

    search();

    return (
        <div className="w-72 m-16 rounded-xl overflow-hidden shadow-lg bg-[#FFFFFF] justify-center content-center flex flex-col ">
            <img className="w-full h-48" src={imageUrl} alt="image" />
            <div className="flex flex-col pl-4 pb-6 ">
                <div className="relative">
                    <div className="flex flex-col items-center rounded-full w-20 h-20 shadow-2xl m-auto justify-center absolute -top-10 left-20">
                        <img
                            crossOrigin="anonymous"
                            className="w-10"
                            src={`https://countryflagsapi.com/png/${props.country}`}
                            alt=""
                        />
                    </div>
                    <h1 className="text-[#191919] text-3xl font-bold items-center mt-12">
                        {props.dish}
                    </h1>
                </div>
                <div className="items-start mb-3">
                    <h2
                        className={
                            props.category === "Veg"
                                ? "font-bold text-sm mb-2 text-[#04BF00]"
                                : "font-bold text-sm mb-2 text-[#a91b0d]"
                        }
                    >
                        {props.category}
                    </h2>
                    <h2 className="font-bold text-sm mb-2 text-[#7E7E7E] pt-5">
                        by {props.user}
                    </h2>
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white  font-medium py-2 px-6 rounded-xl w-36 mx-auto"
                    onClick={() => setShowModal(true)}
                >
                    Full Recipe
                </button>
            </div>

            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Dish Name
                                    </h3>
                                    {/* <button
                                        className="p-1 ml-auto  border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}>
                                        <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            × 
                                        </span>
                                    </button> */}
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex flex-col">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        {props.description}
                                    </p>
                                    <a
                                        className="bg-red-600 w-1/4 text-center text-white active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 cursor-pointer inline-block self-center"
                                        href={props.link}
                                        target="_blank"
                                    >
                                        Video Link
                                    </a>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
};

export default RecipeCard;
