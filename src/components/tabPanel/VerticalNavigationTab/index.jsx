import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';

// icons
import { MdOutlineDesignServices } from 'react-icons/md';
import { AiOutlineFontSize } from 'react-icons/ai';
import { PiUpload, PiShapesBold } from 'react-icons/pi';
import { GoPencil } from 'react-icons/go';
import { FaFileExport } from 'react-icons/fa';

// components
import SearchBar from '../../searchbar';
import FeaturePitchCard from '../../EditPD-Comp/FeaturePitchCard'

// style
import './style.css';

const VerticalNavigationTab = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleSelect = (selectedKey) => {
        setActiveTab(selectedKey);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const fileNameLabel = document.getElementById('fileName');
        if (file) {
            fileNameLabel.textContent = `Selected file: ${file.name}`;
        } else {
            fileNameLabel.textContent = 'No file selected';
        }
    };

    return (
        <div className="vertical-nav-container">
            <Nav
                variant="pills"
                activeKey={activeTab}
                onSelect={handleSelect}
                className="flex-column"
            >
                <Nav.Item>
                    <Nav.Link eventKey="tab1">
                        <MdOutlineDesignServices />
                        <p>Theme</p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="tab2">
                        <PiShapesBold />
                        <p>Elements</p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="tab3">
                        <AiOutlineFontSize />
                        <p>Text</p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="tab4">
                        <PiUpload />
                        <p>Upload</p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="tab5">
                        <GoPencil />
                        <p>Draw</p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="tab6">
                        <FaFileExport />
                        <p>Export</p>
                    </Nav.Link>
                </Nav.Item>
                {/* Add more tabs as needed */}
            </Nav>
            <div className="tab-content">
                <div className={`tab-pane ${activeTab === 'tab1' ? 'active' : ''}`} id="tab1">
                    <SearchBar />
                    <FeaturePitchCard />
                </div>
                <div className={`tab-pane ${activeTab === 'tab2' ? 'active' : ''}`} id="tab2">
                    <SearchBar />
                </div>
                <div className={`tab-pane ${activeTab === 'tab3' ? 'active' : ''}`} id="tab3">
                    <SearchBar />
                </div>
                <div className={`tab-pane ${activeTab === 'tab4' ? 'active' : ''}`} id="tab4">
                    <div className="d-flex gap-10 flex-column">
                        <div>
                            <h3>Upload Deck</h3>
                            <input type="file" id="fileInput" onChange={handleFileChange} />
                            <SearchBar />
                            <div id="fileName">No file selected</div>
                        </div>
                        <div>
                            <h3>Upload Images</h3>
                            <SearchBar />
                            <input type="file" id="fileInput" onChange={handleFileChange} />
                            <div id="fileName">No file selected</div>
                        </div>
                    </div>
                </div>
                <div className={`tab-pane ${activeTab === 'tab5' ? 'active' : ''}`} id="tab5">
                    <SearchBar />
                </div>
                <div className={`tab-pane ${activeTab === 'tab6' ? 'active' : ''}`} id="tab6">
                    <h3>Export Deck</h3>

                </div>
                {/* Add more tab content as needed */}
            </div>
        </div>
    );
};

export default VerticalNavigationTab;
