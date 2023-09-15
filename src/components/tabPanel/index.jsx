import React, { useState, useEffect } from 'react';

// react bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// components
import IconCard from '../cards/toolCard';

// featured data
import featureData from '../../pages/pitch-ai/tools'
import dataArticleNBlog from '../../pages/pitch-ai/ArticleNBlogs/dataArticleNBlog';
import dataGeneralWriting from '../../pages/pitch-ai/GeneralWriting/dataGeneralWriting';
import dataAudio from '../../pages/pitch-ai/audio/dataAudio';
import dataPhotoSonic from '../../pages/pitch-ai/photoSonic/dataPhotoSonic';

// scroller
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

// style 
import './style.css';

const TabPanel = ({ searchQuery }) => {

    const [activeTab, setActiveTab] = useState(1);
    const [showContent, setShowContent] = useState(true);

    const handleTabChange = (tabIndex) => {
        setActiveTab(tabIndex);
        setShowContent(true);
    };


    const filteredData = featureData.filter(
        (item) =>
            item.titleText.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.childText.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filteredDataArticleNBlog = dataArticleNBlog.filter(
        (item) =>
            item.titleText.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.childText.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filteredDataGeneralWriting = dataGeneralWriting.filter(
        (item) =>
            item.titleText.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.childText.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filteredDataAudio = dataAudio.filter(
        (item) =>
            item.titleText.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.childText.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filteredDataPhotoSonic = dataPhotoSonic.filter(
        (item) =>
            item.titleText.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.childText.toLowerCase().includes(searchQuery.toLowerCase())
    );
    useEffect(() => {
        setShowContent(true);
    }, [searchQuery]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, []);
    return (
        <>
            <div>
                <div className='d-flex justify-content-between px-5 mb-1'>
                    <button
                        className={activeTab === 1 ? 'active' : ''}
                        onClick={() => handleTabChange(1)}
                    >
                        All Template
                    </button>
                    <button
                        className={activeTab === 2 ? 'active' : ''}
                        onClick={() => handleTabChange(2)}
                    >
                        Article Writing
                    </button>
                    <button
                        className={activeTab === 3 ? 'active' : ''}
                        onClick={() => handleTabChange(3)}
                    >
                        General Writing
                    </button>
                    <button
                        className={activeTab === 4 ? 'active' : ''}
                        onClick={() => handleTabChange(4)}
                    >
                        Audio
                    </button>
                    <button
                        className={activeTab === 5 ? 'active' : ''}
                        onClick={() => handleTabChange(5)}
                    >
                        Photo Sonic
                    </button>
                </div>
                <div
                    className='active-tab-indicator'
                    style={{ left: `${(activeTab - 1) * 25}%` }}
                />
            </div>

            <SimpleBar
                className={`fade-in ${isLoaded ? 'active' : ''}`}
                style={{
                    height: '61vh',
                    width: '100%',
                    // overflowY: 'scroll',
                    // border: '1px solid white',
                    // borderRadius: '1rem',
                }}>
                <div className={`tab-content ${showContent ? 'show' : ''}`}>
                    <div className={`tab-pane ${activeTab === 1 ? 'active' : ''}`}>
                        <Row>
                            {filteredData.map((item, index) => (
                                <Col key={index} lg={4} md={4} sm={12}>
                                    <IconCard
                                        redirectLink={item.link}
                                        icon={item.icon}
                                        titleText={item.titleText}
                                        childText={item.childText}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>
                    <div className={`tab-pane ${activeTab === 2 ? 'active' : ''}`}>
                        <Row>
                            {filteredDataArticleNBlog.map((item, index) => (
                                <Col key={index} lg={4} md={4} sm={12}>
                                    <IconCard
                                        redirectLink={item.link}
                                        icon={item.icon}
                                        titleText={item.titleText}
                                        childText={item.childText}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>
                    <div className={`tab-pane ${activeTab === 3 ? 'active' : ''}`}>
                        <Row>
                            {filteredDataGeneralWriting.map((item, index) => (
                                <Col key={index} lg={4} md={4} sm={12}>
                                    <IconCard
                                        redirectLink={item.link}
                                        icon={item.icon}
                                        titleText={item.titleText}
                                        childText={item.childText}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>
                    <div className={`tab-pane ${activeTab === 4 ? 'active' : ''}`}>
                        <Row>
                            {filteredDataAudio.map((item, index) => (
                                <Col key={index} lg={4} md={4} sm={12}>
                                    <IconCard
                                        redirectLink={item.link}
                                        icon={item.icon}
                                        titleText={item.titleText}
                                        childText={item.childText}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>
                    <div className={`tab-pane ${activeTab === 5 ? 'active' : ''}`}>
                        <Row>
                            {filteredDataPhotoSonic.map((item, index) => (
                                <Col key={index} lg={4} md={4} sm={12}>
                                    <IconCard
                                        redirectLink={item.link}
                                        icon={item.icon}
                                        titleText={item.titleText}
                                        childText={item.childText}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </SimpleBar>
        </ >
    );
};

export default TabPanel;
