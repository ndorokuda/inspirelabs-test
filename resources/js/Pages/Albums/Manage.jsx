import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { FaTrash } from "react-icons/fa";
import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";

const Manage = ({ favoriteAlbums, isAuthenticated }) => {
    const { delete: deleteAlbum } = useForm();

    const handleDeleteAlbum = async (id) => {
        try {
            deleteAlbum(route("album.destroy", id));
            toast.success("Album Deleted Successfully");
        } catch (error) {
            console.log("Error Deleting artist", error);
            toast.error("Error Deleting album");
        }
    };
    return (
        <>
            <Head title="Manage Albums" />
            <GuestLayout isAuthenticated={isAuthenticated}>
                <section className="text-white mt-7  bg-black p-12 rounded-xl">
                    <table className="w-full border-collapse ">
                        <thead>
                            <tr className="bg-gray-700 text-left  ">
                                <th className="px-4 py-3">Album Name</th>
                                <th className="px-4 py-3">Artist</th>
                                <th className="px-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {favoriteAlbums.length > 0 ? (
                                <>
                                    {favoriteAlbums.map((album) => (
                                        <tr
                                            key={album.id}
                                            className="border-b border-gray-700 text-left"
                                        >
                                            <td className="px-4 py-5 font-bold text-lg">
                                                {album.name}
                                            </td>
                                            <td className="px-4 py-5 font-bold text-lg">
                                                {album.artist}
                                            </td>
                                            <td className="px-4 py-5 font-bold text-lg">
                                                <button
                                                    onClick={() =>
                                                        handleDeleteAlbum(
                                                            album.id
                                                        )
                                                    }
                                                    className="bg-red-500 py-1 px-3 text-black  hover:bg-gray-100"
                                                >
                                                    <FaTrash className="inline text-black mr-1 mb-1" />
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </>
                            ) : (
                                <tr>
                                    <td className="py-6">
                                        <p className="text-xl font-bold">
                                            No Favorite Albums
                                        </p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </section>
            </GuestLayout>
        </>
    );
};

export default Manage;
