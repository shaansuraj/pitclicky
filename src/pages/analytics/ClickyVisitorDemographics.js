import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'ol/ol.css';

import Table from 'react-bootstrap/Table';

const ClickyVisitorDemographics = ({ siteId, apiKey }) => {
    const [visitorData, setVisitorsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Visitors List
                const visitorsListResponse = await axios.get(
                    `https://api.clicky.com/api/stats/4?site_id=${siteId}&sitekey=${apiKey}&type=visitors-list&visitor-details=ip_address,geolocation,web_browser,operating_system&output=json`
                );

                const visitorsData = visitorsListResponse.data;
                if (visitorsData && visitorsData.length > 0) {
                    setVisitorsData(visitorsData);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error('Error fetching Clicky data:', error);
                setIsLoading(false);
            }
        };

        fetchData(); // Call the fetchData function here

    }, [apiKey, siteId]); // Empty dependency array to run this effect only once

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>IP Address</th>
                                <th>Platform</th>
                                <th>Device</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(() => {
                                const tableRows = [];
                                for (let index = 0; index < visitorData.length; index++) {
                                    const visitor = visitorData[index];
                                    for (let itemIndex = 0; itemIndex < visitor.dates[0].items.length; itemIndex++) {
                                        const item = visitor.dates[0].items[itemIndex];
                                        tableRows.push(
                                            <tr key={`${index}-${itemIndex}`}>
                                                <td>{item.ip_address}</td>
                                                <td>{item.web_browser}</td>
                                                <td>{item.operating_system}</td>
                                                <td>{item.geolocation}</td>
                                            </tr>
                                        );
                                    }
                                }
                                return tableRows;
                            })()}
                        </tbody>
                    </Table>
                </div>
            )}
        </div>
    );
};

export default ClickyVisitorDemographics;
