import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';

import ClickyVisitorDemographics from './ClickyVisitorDemographics';
import Engagement from './Engagement';
import TrafficSourcesAnalysis from './TrafficSourcesAnalysis';
import SearchAnalysis from './SearchAnalysis';
import TopContent from './TopContent';
import VisitorsMostActive from './VisitorsMostActive';

import { Row, Col, Container } from 'react-bootstrap';

import { RiEditBoxFill } from 'react-icons/ri';

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import './style.css';

const siteId = '101425804';
const apiKey = 'ca8bf523fe292bbd';

function Analytics() {
  const [refreshCounter, setRefreshCounter] = useState(0);

  const refreshComponents = () => {
    setRefreshCounter((prevCounter) => prevCounter + 1);
  };

  console.log(refreshCounter);

  useEffect(() => {
    const intervalId = setInterval(refreshComponents, 60000); // 60,000 milliseconds = 1 minute

    return () => clearInterval(intervalId);
  }, []);

  const links = [
    {
      name: 'Visitor Demographics',
      navigate: 'demographics',
      icon: <RiEditBoxFill />,
    },
    {
      name: 'Engagement On Site',
      navigate: 'engagement',
      icon: <RiEditBoxFill />,
    },
    {
      name: 'Traffic Sources Analysis',
      navigate: 'traffic-sources-analysis',
      icon: <RiEditBoxFill />,
    },
    {
      name: 'Search Analysis',
      navigate: 'search-analysis',
      icon: <RiEditBoxFill />,
    },
    {
      name: 'Top Content',
      navigate: 'top-content',
      icon: <RiEditBoxFill />,
    },
    {
      name: 'Most Active Visitors ',
      navigate: 'visitors-most-active',
      icon: <RiEditBoxFill />,
    },
  ];

  const linkStyles = (linkIndex) => ({
    fontSize: '1.2rem',
    color: 'black',
    margin: '1rem 0',
    cursor: 'pointer',
    textDecoration: 'none',
    listStyle: 'none',
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="dashboard">
      <Row>
        <Col lg="3">
          <div className="d-flex flex-column" style={{ color: 'black' }}>
            <header className="header">
              <h1 className="title">Analytics Dashboard</h1>
            </header>
            <Container>
              {(() => {
                const linkElements = [];
                for (let index = 0; index < links.length; index++) {
                  const link = links[index];
                  linkElements.push(
                    <ScrollLink
                      key={index}
                      className="pl-5"
                      to={link.navigate}
                      style={linkStyles(index)}
                      smooth={true}
                      duration={500}
                    >
                      <div className="d-flex">
                        <div className="mx-3">{link.icon}</div>
                        {link.name}
                      </div>
                    </ScrollLink>
                  );
                }
                return linkElements;
              })()}
            </Container>
          </div>
        </Col>
        <Col lg="9">
          <SimpleBar
            style={{
              height: '80vh',
              width: '100%',
            }}
          >
            <Element name="demographics">
              <div className="section">
                <h2 className="section-title">Visitor Demographics</h2>
                <ClickyVisitorDemographics siteId={siteId} apiKey={apiKey} />
              </div>
            </Element>

            <Element name="engagement">
              <div className="section">
                <h2 className="section-title">Engagement and Time on Site</h2>
                <Engagement siteId={siteId} apiKey={apiKey} />
              </div>
            </Element>

            <Element name="traffic-sources-analysis">
              <div className="section">
                <h2 className="section-title">Traffic Sources Analysis</h2>
                <small>How visitors are arriving at your site</small>
                <TrafficSourcesAnalysis siteId={siteId} apiKey={apiKey} />
              </div>
            </Element>

            <Element name="search-analysis">
              <div className="section">
                <h2 className="section-title">Search Analysis</h2>
                <small>Search console score</small>
                <SearchAnalysis siteId={siteId} apiKey={apiKey} />
              </div>
            </Element>

            <Element name="top-content">
              <div className="section">
                <h2 className="section-title">Top Content</h2>
                <TopContent siteId={siteId} apiKey={apiKey} />
              </div>
            </Element>

            <Element name="visitors-most-active">
              <div className="section">
                <h2 className="section-title">Most Visitors Active</h2>
                <VisitorsMostActive siteId={siteId} apiKey={apiKey} />
              </div>
            </Element>
          </SimpleBar>
        </Col>
      </Row>
    </div>
  );
}

export default Analytics;
