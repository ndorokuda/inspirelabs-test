import React from "react";

const Card = ({ children }) => {
    return (
        <div className="bg-black text-white rounded-xl p-5  hover:bg-gray-700 transform hover:scale-400 transition-transform duration-300 ease-in-out hover:shadow-md overflow-hidden">
            {children}
        </div>
    );
};

export default Card;
