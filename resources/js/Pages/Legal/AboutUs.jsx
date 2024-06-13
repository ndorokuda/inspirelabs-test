import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const AboutUs = ({ isAuthenticated }) => {
    return (
        <>
            <Head title="About" />
            <GuestLayout isAuthenticated={isAuthenticated}>
                <div className="text-center my-10 text-lg">
                    <h1 className="text-4xl font-bold mb-4">About Snap</h1>
                    <p className="text-slate-700">
                        Snap is a music app that empowers you to unleash the
                        power of music and transform your listening experience.
                        Our mission is to connect you with a boundless world of
                        melodies, rhythms, and harmonies that will captivate
                        your senses and soundtrack your life.
                    </p>

                    <h2 className="my-6 font-bold text-4xl">Our Values</h2>
                    <ul className="text-slate-700 space-y-3">
                        <li>
                            Passion for Music: We are deeply passionate about
                            music and its ability to inspire, emote, and
                            transform lives.
                        </li>
                        <li>
                            Innovation: We are always exploring new technologies
                            and features to enhance the music listening
                            experience.
                        </li>
                        <li>
                            Personalization: We believe in empowering users to
                            curate their own music journeys and discover artists
                            they'll love.
                        </li>
                        <li>
                            Community: We strive to foster a vibrant community
                            of music lovers who can connect, share, and explore
                            music together.
                        </li>
                    </ul>
                </div>
            </GuestLayout>
        </>
    );
};

export default AboutUs;
