import Footer from "@/Components/Footer";
import logo from "/public/images/logo.svg";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { FaCog, FaLeaf } from "react-icons/fa";
import { useState } from "react";

const GuestLayout = ({ children, isAuthenticated }) => {
    const { post } = useForm();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const logout = () => {
        post(route("user.logout"));
        window.location.reload();
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="p-10 ">
                <div className="flex justify-between items-center font-semibold">
                    {/* Logo */}
                    <Link href="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    {/* NavBar */}
                    <nav>
                        <ul className="flex gap-10">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/albums">Albums</Link>
                            </li>
                            <li>
                                <Link href="/artists">Artists</Link>
                            </li>
                            {isAuthenticated && (
                                <div
                                    className="relative cursor-pointer "
                                    onClick={() => {
                                        setIsMenuOpen(
                                            (prevState) => !prevState
                                        );
                                    }}
                                >
                                    <li>
                                        <FaCog className="inline mr-2 mb-1" />
                                        Manage Favorites
                                        <img
                                            src={
                                                isMenuOpen
                                                    ? "images/icon-arrow-up.svg"
                                                    : "images/icon-arrow-down.svg"
                                            }
                                            alt="arrow"
                                            className="inline ml-2"
                                        />
                                    </li>
                                    <div
                                        className={
                                            isMenuOpen
                                                ? "space-y-1 mt-2 absolute top-5 left-0 z-10 bg-white w-full p-4 rounded-md shadow-md"
                                                : "hidden"
                                        }
                                    >
                                        <li>
                                            <Link href="/manage-albums">
                                                Manage Albums
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/manage-artists">
                                                Manage Artists
                                            </Link>
                                        </li>
                                    </div>
                                </div>
                            )}
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Login/Register */}
                    {!isAuthenticated && (
                        <>
                            <div className="space-x-6">
                                <Link href="/login">Login</Link>
                                <Link
                                    href="/register"
                                    className="border border-black py-3 px-4 rounded-full hover:bg-black hover:text-white transition ease-in-out duration-150 "
                                >
                                    Register
                                </Link>
                            </div>
                        </>
                    )}

                    {/* Logout Button */}

                    {isAuthenticated && (
                        <>
                            <div>
                                <button
                                    className="py-2 px-5 border border-black rounded-full hover:bg-black hover:text-white "
                                    onClick={logout}
                                >
                                    Logout
                                </button>
                            </div>
                        </>
                    )}
                </div>
                <main className="flex-grow overflow-y-auto mb-60">
                    {children}
                </main>
            </div>
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default GuestLayout;
