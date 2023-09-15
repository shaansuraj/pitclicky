import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';

const EditorField = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = {
        height: '80vh',
    };

    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={config} // Pass the config object to set the default text color
            tabIndex={1} // tabIndex of textarea
            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={newContent => { }}
        />
    );
}

export default EditorField;
