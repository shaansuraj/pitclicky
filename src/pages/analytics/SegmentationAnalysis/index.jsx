import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SegmentationAnalysis({ siteId, apiKey }) {
    const [segmentedData, setSegmentedData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define your custom segmentation criteria here
        const segmentationCriteria = {
            location: 'India',
            referral_source: 'Google',
        };

        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.clicky.com/api/stats/4`, {
                    params: {
                        site_id: siteId,
                        type: 'segmentation',
                        output: 'json',
                        appkey: apiKey,
                        segmentation: JSON.stringify(segmentationCriteria),
                    }
                });

                console.log(response)
                if (response.status === 200) {
                    // Assuming the response contains segmented data
                    // setSegmentedData(response.data);
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

    // Extracting and rendering the data using a for loop
    const segmentedItems = [];
    for (let index = 0; index < segmentedData.length; index++) {
        const segment = segmentedData[index];
        segmentedItems.push(
            <li key={index}>
                {segment}
            </li>
        );
    }

    return (
        <div>
            <ul>
                {segmentedItems}
            </ul>
        </div>
    );
}

export default SegmentationAnalysis;
