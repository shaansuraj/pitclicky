// icons 
import { AiOutlineCopy } from 'react-icons/ai';

// react bootstrap
import Button from 'react-bootstrap/Button'

// toster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const IdeaCard = ({ idea }) => {

    const wordCount = idea.split(' ').filter(word => word !== '').length;

    const handleCopyClick = () => {
        navigator.clipboard.writeText(idea)
            .then(() => {
                toast.success('Copied to clipboard successfully');
            })
            .catch(error => {
                toast.error('Try again!!');
            });
    };

    return (
        <div className="box">
            <h4 style={{ color: 'white' }} >{idea}</h4>
            <div className="d-flex justify-content-between">
                <p>{wordCount} words</p>
                <Button onClick={handleCopyClick} style={{ backgroundColor: 'inherit', border: 'none' }} >
                    <AiOutlineCopy />
                </Button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default IdeaCard;

