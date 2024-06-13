import React from "react";
import Card from "./Card";

const AlbumHome = ({ album }) => {
    return (
        <div>
            <Card>
                <img
                    src={
                        album.image[3]["#text"]
                            ? album.image[3]["#text"]
                            : "images/no-img.jpg"
                    }
                    alt=""
                />
                <div className="space-y-3 mt-4">
                    <p className="text-ashGray">
                        Title:{" "}
                        <span className="font-bold text-white">
                            {album.name}
                        </span>
                    </p>
                    <p className="text-ashGray">
                        Artist:{" "}
                        <span className="font-bold text-white">
                            {album.artist}
                        </span>
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default AlbumHome;
