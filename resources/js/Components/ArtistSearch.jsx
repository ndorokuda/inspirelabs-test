import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const ArtistSearch = ({ fetchArtist }) => {
    const [artist, setArtist] = useState("");
    const onChangeArtist = (artistQuery) => {
        setArtist(artistQuery);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetchArtist(artist);
    };
    return (
        <>
            <section className=" w-full mt-16 ">
                <form
                    action=""
                    onSubmit={handleFormSubmit}
                    className="flex justify-center"
                >
                    <div className=" flex items-center gap-20 justify-center border-2 border-gray-100 mt-12 rounded-lg">
                        {/* Input field to search artists */}
                        <div className="relative mx-auto">
                            <div className="absolute top-4 left-3">
                                <FaSearch className="inline text-black z-20 hover:text-gray-500" />
                            </div>
                            <input
                                type="text"
                                name="artist"
                                className="h-14 w-[500px] pl-10 pr-20 rounded-xl z-0 focus:shadow focus:outline-none"
                                placeholder="Enter Artist name..."
                                value={artist}
                                onChange={(e) => onChangeArtist(e.target.value)}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="h-10 font-semibold  rounded-full transition duration-100 ease-in-out  text-black border border-black hover:text-white hover:bg-black w-[150px] relative"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default ArtistSearch;
