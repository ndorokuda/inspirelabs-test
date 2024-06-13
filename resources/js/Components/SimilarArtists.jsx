import React from "react";

const SimilarArtists = ({ similarArtists }) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-4">
                {similarArtists.map((artist, index) => (
                    <div key={index}>
                        <div className="h-[250px] w-[280px]">
                            <img
                                src={artist.image[3]["#text"]}
                                alt="artist-img"
                                className="w-full h-full"
                            />
                            <p className="text-center font-bold text-lg mt-3">
                                {artist.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SimilarArtists;
