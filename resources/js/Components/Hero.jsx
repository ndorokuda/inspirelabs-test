const Hero = ({ children }) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 relative mt-12 gap-12">
                {children}
            </div>
        </>
    );
};

export default Hero;
