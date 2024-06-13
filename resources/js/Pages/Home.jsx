import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import Hero from "@/Components/Hero";
import HeroText from "@/Components/HeroText";
import HeroImage from "@/Components/HeroImage";
import LatestAlbums from "@/Components/LatestAlbums";
import { useState, useEffect } from "react";

const Home = ({ isAuthenticated }) => {
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const res = await fetch(
                    "https://ws.audioscrobbler.com/2.0/?method=album.search&album=king&api_key=45a75c813f430ef2503905f8dd33d0a2&format=json&limit=16"
                );
                const data = await res.json();

                setAlbums(data.results.albummatches.album);
            } catch (error) {
                console.log("Error fetching albums:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchAlbums();
    }, []);
    return (
        <>
            <Head title="Home" />
            <GuestLayout isAuthenticated={isAuthenticated}>
                {/* Hero Section */}
                <Hero>
                    <HeroText />
                    <HeroImage />
                </Hero>
                <LatestAlbums loading={isLoading} albums={albums} />
            </GuestLayout>
        </>
    );
};

export default Home;
