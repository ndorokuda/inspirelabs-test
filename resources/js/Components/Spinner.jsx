import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "100px auto",
};

const Spinner = ({ loading }) => {
    return (
        <ClipLoader
            color="black"
            loading={loading}
            cssOverride={override}
            size={200}
        />
    );
};

export default Spinner;