import AlbumHome from "./AlbumHome";
import { Link } from "@inertiajs/react";

const LatestAlbums = ({ albums, loading }) => {
    return (
        <>
            <section className="mt-20">
                <h3 className="text-xl font-semibold">Latest Albums</h3>
                <section>
                    {loading ? (
                        "Loading"
                    ) : albums.length > 0 ? (
                        <section className="grid grid-cols-1 md:grid-cols-4 mt-10 w-[90%] gap-10 mx-auto">
                            {albums.map((album) => (
                                <a href="#" key={album.url}>
                                    {" "}
                                    <AlbumHome album={album} />
                                </a>
                            ))}
                        </section>
                    ) : (
                        <div className="mx-auto text-center mt-10">
                            <p className="font-bold text-3xl">
                                No Albums found
                            </p>
                        </div>
                    )}
                </section>
                <div className="my-14 text-center">
                    <Link
                        href="/albums"
                        className="text-white bg-black p-4 rounded-xl font-semibold text-lg  transition duration-100 ease-in-out hover:bg-white hover:text-black hover:border border-black"
                    >
                        Search More Albums
                    </Link>
                </div>
            </section>
        </>
    );
};

export default LatestAlbums;
