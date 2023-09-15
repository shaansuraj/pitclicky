import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const SearchAnalysis = ({ apiKey, siteId }) => {
    const [searchData, setSearchData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        // Construct the API URL for Search Analysis
        const apiUrl = `https://api.clicky.com/api/stats/4?site_id=${siteId}&sitekey=${apiKey}&type=search&output=json`;

        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                setSearchData(response.data);
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
    const searchItems = [];
    for (let i = 0; i < searchData.length; i++) {
        const item = searchData[i];
        const date = item.dates[0].items[0].date;
        const value = item.dates[0].items[0].value;
        searchItems.push({ date, value });
    }

    // Get the current date
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();

    // Rendering the table using a for loop
    const tableRows = [];
    for (let i = 0; i < searchItems.length; i++) {
        const item = searchItems[i];
        tableRows.push(
            <tr key={i} style={{ color: 'black' }}>
                <td>{formattedDate}</td>
                <td>{item.value}</td>
            </tr>
        );
    }

    return (
        <Table>
            <thead>
                <tr style={{ color: 'black' }}>
                    <th>Date</th>
                    <th>Search Value</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </Table>
    );
};

export default SearchAnalysis;
