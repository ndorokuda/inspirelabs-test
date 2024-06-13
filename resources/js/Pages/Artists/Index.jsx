import Artist from "@/Components/Artist";
import ArtistSearch from "@/Components/ArtistSearch";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import Spinner from "@/Components/Spinner";

const Index = ({ isAuthenticated }) => {
    const [artistInfo, setArtistInfo] = useState(null);
    const [topTracks, setTopTracks] = useState([]);
    const [similarArtists, setSimilarArtists] = useState([]);
    const [topAlbums, setTopAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [artistFound, setArtistFound] = useState(true);

    const fetchArtist = async (artist) => {
        setIsLoading(true);
        setArtistFound(true);
        try {
            // Fetching Artist Info from Last.fm API
            const artistResponse = await fetch(
                `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=45a75c813f430ef2503905f8dd33d0a2&format=json`
            );
            const artistData = await artistResponse.json();

            // Destructuring artist data
            const { name: artistName, bio, image } = artistData.artist;

            // Setting artist state
            setArtistInfo({
                artistName,
                bio: bio.content,
                imageUrl: image[4]["#text"],
            });

            // Fetching Top tracks
            const topTracksResponse = await fetch(
                `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=45a75c813f430ef2503905f8dd33d0a2&format=json&limit=10`
            );

            const topTracksData = await topTracksResponse.json();

            const tracks = topTracksData.toptracks.track;

            // Setting top tracks state
            setTopTracks(tracks);

            // Fetching Top albums
            const topAlbumsResponse = await fetch(
                `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=45a75c813f430ef2503905f8dd33d0a2&format=json&limit=10`
            );

            const topAlbumsData = await topAlbumsResponse.json();

            const albums = topAlbumsData.topalbums.album;

            // Setting top albums state
            setTopAlbums(albums);

            // Fetching Similar Artists
            const similarArtistsResponse = await fetch(
                `https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${artist}&api_key=45a75c813f430ef2503905f8dd33d0a2&format=json&limit=4`
            );

            const similarArtistsData = await similarArtistsResponse.json();

            const artists = similarArtistsData.similarartists.artist;
            console.log(artists);

            // Setting Similar Artists State

            setSimilarArtists(artists);
        } catch (error) {
            console.log("Error fetching artist: ", error);
            setArtistFound(false);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Head title="Artists" />
            <GuestLayout isAuthenticated={isAuthenticated}>
                <ArtistSearch fetchArtist={fetchArtist} />
                {artistFound ? (
                    <Artist
                        artistInfo={artistInfo}
                        topTracks={topTracks}
                        similarArtists={similarArtists}
                        topAlbums={topAlbums}
                    />
                ) : (
                    <p className="font-bold text-center text-5xl mt-28">
                        <FaExclamationTriangle className="inline text-black mr-5 mb-3 text-5xl" />
                        Artist Not Found
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
