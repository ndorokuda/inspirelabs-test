import React from "react";
import TopAlbums from "./TopAlbums";
import TopTracks from "./TopTracks";
import SimilarArtists from "./SimilarArtists";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

const Artist = ({ artistInfo, topTracks, similarArtists, topAlbums }) => {
    const name = artistInfo && artistInfo.artistName;

    const getCsrfToken = document.querySelector(
        'meta[name="csrf-token"]'
    ).content;

    const [csrfToken, setCsrfToken] = useState(getCsrfToken);
    useEffect(() => {
        setCsrfToken(getCsrfToken);
    }, [csrfToken]);

    console.log(csrfToken);
    const submitArtist = async () => {
        try {
            const res = await fetch("/artist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": csrfToken,
                },
                body: JSON.stringify({
                    name,
                }),
            });
            if (res.ok) {
                toast.success("Artist saved successfully");
            } else {
                alert("Error Saving artist!");
            }
        } catch (error) {
            console.log("Error saving artist", error);
            toast.error("Error saving artist");
        }
    };
    return (
        <>
            {artistInfo && (
                <section className="w-[90%] my-10 mx-auto  bg-white rounded-xl shadow-lg  p-7  ">
                    <div className="w-[800px] h-[600px] my-0 mx-auto p-7">
                        <img
                            src={artistInfo.imageUrl}
                            alt="album-artwork"
                            className="w-full h-full rounded-xl shadow-md "
                        />
                    </div>
                    <section className="text-center my-8">
                        <p className="text-5xl font-bold">
                            {artistInfo.artistName}
                        </p>
                    </section>
                    <section className="text-white mt-7  bg-black p-12 rounded-xl">
                        {/* Bio */}

                        <section className="p-10 ">
                            <h3 className="mb-5 text-3xl font-bold">
                                Biography
                            </h3>
                            <p className="text-lg tracking-wide leading-8 text-center">
                                {artistInfo.bio === undefined ||
                                artistInfo.bio === ""
                                    ? "No Biography"
                                    : `${artistInfo.bio}`}
                            </p>
                        </section>

                        {/* Top Albums */}
                        <section>
                            <h3 className="mb-7 text-3xl font-bold">
                                Top Albums
                            </h3>
                            {topAlbums.length > 0 ? (
                                <TopAlbums topAlbums={topAlbums} />
                            ) : (
                                <p className="text-center font-bold text-3xl">
                                    No top Albums
                                </p>
                            )}
                        </section>

                        {/* Top Tracks*/}
                        <section>
                            <h3 className="mb-7 mt-16 text-3xl font-bold">
                                Top Tracks
                            </h3>
                            {topTracks.length > 0 ? (
                                <TopTracks topTracks={topTracks} />
                            ) : (
                                <p className="text-center font-bold text-3xl">
                                    No top Tracks
                                </p>
                            )}
                        </section>

                        {/* Similar Artists*/}
                        <section>
                            <h3 className="mb-7 mt-16 text-3xl font-bold">
                                Similar Artists
                            </h3>
                            {similarArtists.length > 0 ? (
                                <SimilarArtists
                                    similarArtists={similarArtists}
                                />
                            ) : (
                                <p className="text-center font-bold text-3xl">
                                    No Similar Artists
                                </p>
                            )}
                        </section>

                        {/* Button to add Artist to favorites */}
                        <div className="mb-14 mt-40 w-full   ">
                            <button
                                type="submit"
                                className=" w-full mx-auto border border-white rounded-full py-5 px-4 text-xl font-bold hover:bg-white hover:text-black"
                                onClick={submitArtist}
                            >
                                Add artist to Favorites
                            </button>
                        </div>
                    </section>
                </section>
            )}
        </>
    );
};

export default Artist;
