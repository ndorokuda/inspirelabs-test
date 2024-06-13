import React from "react";

const TopTracks = ({ topTracks }) => {
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
                    {topTracks.map((track, index) => (
                        <tr
                            key={index}
                            className="border-b border-gray-700 text-left "
                        >
                            <td className="px-4 py-5 font-bold text-lg">
                                {index + 1}
                            </td>
                            <td className="px-4 py-5 font-bold text-lg">
                                {track.name}
                            </td>
                            <td className="px-4 py-5 font-bold text-lg">
                                {track.playcount}
                            </td>
                            <td className="px-4 py-5 font-bold text-lg hover:text-ashGray">
                                <a href={`${track.url}`} target="_blank">
                                    {track.url}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default TopTracks;
