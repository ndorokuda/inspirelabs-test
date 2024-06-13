import React from "react";

const TopAlbums = ({ topAlbums }) => {
    return (
        <>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-700 text-left  ">
                        <th className="px-4 py-3 ">#</th>
                        <th className="px-4 py-3">Title</th>
                        <th className="px-4 py-3">Play Count</th>
                        <th className="px-4 py-3">Track URL</th>
                    </tr>
                </thead>
                <tbody>
                    {topAlbums.map((album, index) => (
                        <tr
                            key={index}
                            className="border-b border-gray-700 text-left "
                        >
                            <td className="px-4 py-5 font-bold text-lg">
                                {index + 1}
                            </td>
                            <td className="px-4 py-5 font-bold text-lg">
                                {album.name}
                            </td>
                            <td className="px-4 py-5 font-bold text-lg">
                                {album.playcount}
                            </td>
                            <td className="px-4 py-5 font-bold text-lg hover:text-ashGray">
                                <a href={`${album.url}`} target="_blank">
                                    {album.url}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default TopAlbums;
