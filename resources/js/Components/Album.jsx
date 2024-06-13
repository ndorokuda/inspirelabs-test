import Tracks from "./Tracks";
import { toast } from "react-toastify";

const Album = ({ albumInfo }) => {
    const name = albumInfo && albumInfo.albumName;
    const artist = albumInfo && albumInfo.artistName;

    const submitAlbum = async () => {
        try {
            const res = await fetch("/album", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "X-CSRF-TOKEN": document.querySelector(
                        'meta[name="csrf-token"]'
                    ).content,
                },
                body: JSON.stringify({
                    name,
                    artist,
                }),
            });
            console.log(name);
            console.log(artist);

            if (res.ok) {
                toast.success("Album saved successfully");
                console.log(res);
            } else {
                alert("Error saving album");
                console.log(res);
            }
        } catch (error) {
            console.log("Error saving the album", error);
            toast.error("Error Saving Album");
        }
    };
    return (
        <>
            {albumInfo && (
                <section className=" w-[90%] my-10 mx-auto  bg-white rounded-xl shadow-lg  p-7  ">
                    <div className="w-[800px] h-[600px] my-0 mx-auto p-7">
                        <img
                            src={
                                albumInfo.imageUrl === ""
                                    ? "/images/no-img.jpg"
                                    : albumInfo.imageUrl
                            }
                            alt="album-artwork"
                            className="w-full h-full rounded-xl shadow-md "
                        />
                    </div>
                    <section className="text-white mt-7  bg-black p-12 rounded-xl">
                        {/* General Album Information */}

                        <section className="text-3xl flex gap-28 justify-center border-b border-gray-700 pb-10">
                            {/* Labels */}

                            <div className=" flex flex-col gap-7">
                                <label
                                    htmlFor="albumName"
                                    className=" text-ashGray"
                                >
                                    Title:
                                </label>
                                <label
                                    htmlFor="artistName"
                                    className="  text-ashGray"
                                >
                                    Artist:
                                </label>
                                <label
                                    htmlFor="releaseDate"
                                    className="  text-ashGray"
                                >
                                    Released On:
                                </label>
                                <label
                                    htmlFor="listeners"
                                    className="  text-ashGray"
                                >
                                    Listeners:
                                </label>
                                <label
                                    htmlFor="views"
                                    className="  text-ashGray"
                                >
                                    Views:
                                </label>
                            </div>

                            {/* Values */}
                            <div className="flex flex-col gap-7">
                                <p name="albumName" className="font-bold">
                                    {albumInfo.albumName}
                                </p>
                                <p name="artistName" className=" font-bold">
                                    {albumInfo.artistName}
                                </p>
                                <p name="releaseDate" className=" font-bold">
                                    {albumInfo.releasedate === undefined
                                        ? "N/A"
                                        : albumInfo.releasedate}
                                </p>
                                <p name="listeners" className=" font-bold">
                                    {albumInfo.listeners}
                                </p>
                                <p name="views" className=" font-bold">
                                    {albumInfo.playcount}
                                </p>
                            </div>
                        </section>

                        {/* Description */}

                        <section className="p-10 ">
                            <h3 className="mb-5 text-3xl font-bold">
                                Description
                            </h3>
                            <p className="text-lg tracking-wide leading-8 text-center">
                                {albumInfo.wiki === undefined
                                    ? "No Description"
                                    : `${albumInfo.wiki.content}`}
                            </p>
                        </section>

                        {/* Tracks */}
                        <section>
                            <h3 className="mb-7 text-3xl font-bold">Tracks</h3>
                            {albumInfo.tracks.length > 0 ? (
                                <Tracks tracks={albumInfo.tracks} />
                            ) : (
                                <p className="text-center font-bold text-3xl">
                                    Album have no tracks
                                </p>
                            )}
                        </section>

                        {/* Button to add album to favorites */}
                        <div className="my-14 w-full   ">
                            <button
                                type="submit"
                                className=" w-full mx-auto border border-white rounded-full py-5 px-4 text-xl font-bold hover:bg-white hover:text-black"
                                onClick={submitAlbum}
                            >
                                Add album to Favorites
                            </button>
                        </div>
                    </section>
                </section>
            )}
        </>
    );
};

export default Album;
