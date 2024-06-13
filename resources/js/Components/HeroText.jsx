import { Link } from "@inertiajs/react";
import React from "react";

const HeroText = () => {
    return (
        <div>
            {/* Site Motto */}
            <h1 className="text-7xl font-bold mt-36 mb-10 ">
                Where melodies meet the world
            </h1>

            {/* Site Description */}
            <p className="text-gray-500 text-lg mb-10">
                Unleash the power of music with Snap. Discover a boundless world
                of melodies, rhythms, and harmonies that will captivate your
                senses and transform your listening experience. Explore emerging
                artists, curate personalized favorite artists and albums, and
                let the music soundtrack your life.
            </p>

            {/* Call to Action Button */}
            <Link
                href="albums"
                className="text-white bg-black p-4 rounded-xl font-semibold text-lg absolute bottom-0 transition duration-100 ease-in-out hover:bg-white hover:text-black hover:border border-black"
            >
                Explore More
            </Link>
        </div>
    );
};

export default HeroText;
