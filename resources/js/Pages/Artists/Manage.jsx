import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { FaTrash } from "react-icons/fa";
import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";

const Manage = ({ favoriteArtists, isAuthenticated }) => {
    console.log(favoriteArtists);
    const { delete: deleteArtist } = useForm();

    const handleDeleteArtist = async (id) => {
        try {
            deleteArtist(route("artist.destroy", id));
            toast.success("Artist Deleted Successfully");
        } catch (error) {
            console.log("Error Deleting artist", error);
            toast.error("Error Deleting artist");
        }
    };
    return (
        <>
            <Head title="Manage Artists" />
            <GuestLayout isAuthenticated={isAuthenticated}>
                <section className="text-white mt-7  bg-black p-12 rounded-xl">
                    <table className="w-full border-collapse ">
                        <thead>
                            <tr className="bg-gray-700 text-left  ">
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Saved At</th>
                                <th className="px-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {favoriteArtists.length > 0 ? (
                                <>
                                    {favoriteArtists.map((artist) => (
                                        <tr
                                            key={artist.id}
                                            className="border-b border-gray-700 text-left"
                                        >
                                            <td className="px-4 py-5 font-bold text-lg">
                                                {artist.name}
                                            </td>
                                            <td className="px-4 py-5 font-bold text-lg">
                                                {artist.created_at}
                                            </td>
                                            <td className="px-4 py-5 font-bold text-lg">
                                                <button
                                                    onClick={() =>
                                                        handleDeleteArtist(
                                                            artist.id
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
                                            No Favorite Artists
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
