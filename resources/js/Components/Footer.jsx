import { Link } from "@inertiajs/react";
import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="w-full h-[200px] bg-black  text-white p-10 fixed bottom-0 left-0 ">
                <div className="grid grid-cols-4 w-[90%] mx-auto">
                    <div>
                        {/* Social Media Icons */}
                        <h3 className="font-bold text-lg">Socials</h3>
                        <div className="mt-3 flex gap-3">
                            <a href="#">
                                <img
                                    src="images/icon-facebook.svg"
                                    alt="icon-facebook"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="images/icon-instagram.svg"
                                    alt="icon-instagram"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="images/icon-pinterest.svg"
                                    alt="icon-pinterest"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="images/icon-twitter.svg"
                                    alt="icon-twitter"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="images/icon-youtube.svg"
                                    alt="icon-youtube"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <a href="#">About Us</a>
                        <a href="#">Contact Us</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms and Conditions</a>
                    </div>
                    <div>
                        {/* Call to Action Button */}
                        <Link
                            href="/albums"
                            className="text-white text-lg bg-black p-4 rounded-xl font-semibold  transition duration-100 ease-in-out hover:bg-white hover:text-black border border-white py-5"
                        >
                            Explore More
                        </Link>
                    </div>
                </div>
                <p className="text-center mt-10 text-ashGray ">
                    Copyright &copy; 2024, All Rights reserved
                </p>
            </footer>
        </>
    );
};

export default Footer;
