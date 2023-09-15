import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConversionAndGoalAnalysis = ({ apiKey, siteId }) => {
    const [conversionData, setConversionData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        // Construct the API URL for Conversion and Goal Analysis
        const apiUrl = `https://api.clicky.com/api/stats/4?site_id=${siteId}&sitekey=${apiKey}&type=goals&output=json`;

        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                console.log(response.data[0].items[0]);
                setConversionData(response.data[0]);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Extracting the data items from the response using a for loop
    const conversionItems = [];
    for (let i = 0; i < conversionData.length; i++) {
        const item = conversionData[i];
        const date = item.dates[0].items[0].date;
        const value = item.dates[0].items[0].value;
        conversionItems.push({ date, value });
    }

    // Rendering the table using a for loop
    const tableRows = [];
    for (let i = 0; i < conversionItems.length; i++) {
        const item = conversionItems[i];
        tableRows.push(
            <tr key={i}>
                <td>{item.date}</td>
                <td>{item.value}</td>
            </tr>
        );
    }

    return (
        <div>
            <h1>Conversion and Goal Analysis</h1>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Conversion Value</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    );
};

export default ConversionAndGoalAnalysis;
