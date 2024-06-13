import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const AlbumSearch = ({ fetchAlbums }) => {
    const [album, setAlbum] = useState("");
    const [artist, setArtist] = useState("");

    const onChangeAlbum = (albumQuery) => {
        setAlbum(albumQuery);
    };
    const onChangeArtist = (artistQuery) => {
        setArtist(artistQuery);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetchAlbums(album, artist);
    };

    return (
        <section>
            <form action="" onSubmit={handleFormSubmit}>
                <div className=" flex items-center gap-5 justify-center border-2 border-gray-100 mt-12 rounded-lg">
                    {/* Input field to search albums */}
                    <div className="relative">
                        <div className="absolute top-4 left-3">
                            <FaSearch className="inline text-black z-20 hover:text-gray-500" />
                        </div>
                        <input
                            type="text"
                            name="album"
                            className="h-14 w-full pl-10 pr-20 rounded-xl z-0 focus:shadow focus:outline-none"
                            placeholder="Enter Album name..."
                            value={album}
                            onChange={(e) => onChangeAlbum(e.target.value)}
                        />
                    </div>

                    {/* Input field to search artists */}
                    <div className="relative">
                        <div className="absolute top-4 left-3">
                            <FaSearch className="inline text-black z-20 hover:text-gray-500" />
                        </div>
                        <input
                            type="text"
                            name="artist"
                            className="h-14 w-full pl-10 pr-20 rounded-xl z-0 focus:shadow focus:outline-none"
                            placeholder="Enter Artist name..."
                            value={artist}
                            onChange={(e) => onChangeArtist(e.target.value)}
                        />
                    </div>

                    <div className="">
                        <button
                            type="submit"
                            className="h-10 w-20 font-semibold  rounded-full transition duration-100 ease-in-out  text-black border border-black hover:text-white hover:bg-black"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default AlbumSearch;
