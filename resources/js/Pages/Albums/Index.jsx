import Album from "@/Components/Album";
import AlbumSearch from "@/Components/AlbumSearch";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import Spinner from "@/Components/Spinner";

const Index = ({ isAuthenticated }) => {
    const [albumInfo, setAlbumInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [albumFound, setAlbumFound] = useState(true);

    // Fetching Albums from the Last.fm API
    const fetchAlbums = async (album, artist) => {
        setIsLoading(true);
        setAlbumFound(true);
        try {
            const res = await fetch(
                `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=45a75c813f430ef2503905f8dd33d0a2&artist=${artist}&album=${album}&format=json`
            );
            const data = await res.json();

            // Extracting Album Information
            const {
                name: albumName,
                artist: artistName,
                releasedate,
                image,
                mbid: id,
                wiki,
                playcount,
                listeners,
            } = data.album;

            let tracks = [];
            if (data.album.tracks && data.album.tracks.track) {
                tracks = data.album.tracks.track.map((track) => track);
            }

            // Setting Album Info state
            setAlbumInfo({
                albumName,
                artistName,
                tracks,
                releasedate,
                id,
                imageUrl: image[3]["#text"],
                wiki,
                playcount,
                listeners,
            });
        } catch (error) {
            console.log("Error Occured", error);
            setAlbumFound(false);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Head title="Dashboard" />
            <GuestLayout isAuthenticated={isAuthenticated}>
                <AlbumSearch fetchAlbums={fetchAlbums} />
                {albumFound ? (
                    <Album albumInfo={albumInfo} />
                ) : (
                    <p className="font-bold text-center text-5xl mt-28">
                        <FaExclamationTriangle className="inline text-black mr-5 mb-3 text-5xl" />
                        Album Not Found
                    </p>
                )}
                {isLoading && (
                    <div>
                        <Spinner loading={isLoading} />
                    </div>
                )}
            </GuestLayout>
        </>
    );
};

export default Index;
