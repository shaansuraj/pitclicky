// import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const SearchBar = () => {

    // const [searchQuery, setSearchQuery] = useState('');

    return (
        <Form style={{ width: '100%' }} >
            <Form.Control
                type="search"
                placeholder="eg, Article writing and contennt shortner"
                className=""
                aria-label="Search"
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            />
        </Form>
    )
}

export default SearchBar;