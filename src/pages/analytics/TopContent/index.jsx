import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Table from 'react-bootstrap/Table';

function TopContent({ siteId, apiKey }) {
    const [pageData, setPageData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                // Define the Clicky API endpoint for retrieving page data
                const apiUrl = `https://api.clicky.com/api/stats/4?site_id=${siteId}&sitekey=${apiKey}&type=pages&output=json`;

                // Make a GET request to the Clicky API using async/await
                const response = await axios.get(apiUrl);

                // Extract the page data from the API response
                const pages = response.data;

                // Set the page data in the component state
                setPageData(pages);
            } catch (error) {
                console.error('Error fetching Clicky data TopContent:', error);
            }
        }

        fetchData();
    }, [siteId, apiKey]);

    return (
        <div>
            {(() => {
                const pageElements = [];
                for (let index = 0; index < pageData.length; index++) {
                    const page = pageData[index];
                
                    if (page && page.dates && page.dates[0] && page.dates[0].items && page.dates[0].items[0]) {
                        const item = page.dates[0].items[0];
                        pageElements.push(
                            <div key={index} style={{ color: 'black' }}>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Value:</td>
                                            <td>{item.value}</td>
                                        </tr>
                                        <tr>
                                            <td>Value Percent:</td>
                                            <td>{item.value_percent}</td>
                                        </tr>
                                        <tr>
                                            <td>Title:</td>
                                            <td>{item.title}</td>
                                        </tr>
                                        <tr>
                                            <td>Stats URL:</td>
                                            <td><a href={item.stats_url} target="_blank" rel="noopener noreferrer">More details</a></td>
                                        </tr>
                                        <tr>
                                            <td>URL:</td>
                                            <td><a href={item.url} target="_blank" rel="noopener noreferrer">Website link</a></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        );
                    }
                }
                
                return pageElements;
            })()}
        </div>
    );
}

export default TopContent;
