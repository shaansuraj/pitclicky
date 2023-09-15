import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Table from 'react-bootstrap/Table';

function VisitorsMostActive({ siteId, apiKey }) {
    const [visitorData, setVisitorData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.clicky.com/api/stats/4?site_id=${siteId}&sitekey=${apiKey}&type=visitors-most-active&output=json`)

                if (response.status >= 200 && response.status < 300) {
                    // Assuming the response contains an array of visitor data
                    setVisitorData(response.data[0]?.dates[0]?.items || []); // Extract the items array
                    setLoading(false);
                } else {
                    setError(`Error: Unexpected response status ${response.status}`);
                    setLoading(false);
                }

            } catch (error) {
                setError(`Error fetching Clicky data: ${error.message}`);
                setLoading(false);
            }
        };

        fetchData();
    }, [siteId, apiKey]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // Rendering the table using a for loop
    const tableRows = [];
    for (let index = 0; index < visitorData.length; index++) {
        const visitor = visitorData[index];
        tableRows.push(
            <tr key={index}>
                <td>{visitor.value}</td>
                <td>{visitor.value_percent}</td>
                <td>{visitor.title}</td>
                <td><a href={visitor.stats_url}>More Details</a></td>
            </tr>
        );
    }

    return (
        <div style={{ color: 'black' }}>
            <Table>
                <thead>
                    <tr>
                        <th>Value</th>
                        <th>Value Percent</th>
                        <th>Title</th>
                        <th>Stats URL</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </Table>
        </div>
    );
}

export default VisitorsMostActive;
