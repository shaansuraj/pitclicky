import Button from "react-bootstrap/Button";

const SingleTextButton = ({ btnColor, btnTextColor, text }) => {
    return (
        <Button style={{ backgroundColor: `${btnColor}`, color: `${btnTextColor}`, border: "none", outline: "none" }}>
            {text}
        </Button>
    );
}

export default SingleTextButton;
