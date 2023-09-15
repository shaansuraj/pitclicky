import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Table from 'react-bootstrap/Table';

const TrafficSourcesAnalysis = ({ siteId, apiKey }) => {
    const [trafficSourcesData, setTrafficSourcesData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        // Construct the API URL for Traffic Sources Analysis
        const apiUrl = `https://api.clicky.com/api/stats/4?site_id=${siteId}&sitekey=${apiKey}&type=traffic-sources&output=json`;

        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                setTrafficSourcesData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [apiKey, siteId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Extracting the data items from the response using a for loop
    const trafficItems = [];

if (trafficSourcesData && trafficSourcesData.length > 0) {
    for (let i = 0; i < trafficSourcesData.length; i++) {
        const item = trafficSourcesData[i].dates[0].items[0];

        if (item && item.value) { // Check if 'item' and 'item.value' exist
            trafficItems.push(item);
        }
    }
}


    // Get the current date
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();

    // Rendering the table using a for loop
    const tableRows = [];
    for (let i = 0; i < trafficItems.length; i++) {
        const item = trafficItems[i];
        tableRows.push(
            <tr key={i} style={{ color: 'black' }}>
                <td>{formattedDate}</td>
                <td>{item.title}</td>
                <td>{item.value}</td>
            </tr>
        );
    }

    return (
        <div>
            <Table>
                <thead>
                    <tr style={{ color: 'black' }} >
                        <th>Date</th>
                        <th>Source</th>
                        <th>Traffic Value</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </Table>
        </div>
    );
};

export default TrafficSourcesAnalysis;
