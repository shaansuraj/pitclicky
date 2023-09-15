import React, { useState, useEffect } from 'react';
import './engagement.css';

import Table from 'react-bootstrap/Table'

const Engagement = ({ siteId, apiKey }) => {
  const [engagementData, setEngagementData] = useState(null);

  // Use a timer to call fetchData every 3 seconds
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.clicky.com/api/stats/4?site_id=${siteId}&sitekey=${apiKey}&type=time-total-pretty,time-average-pretty,visitors,visitors-unique,visitors-online,visitors-most-active,actions-pageviews,actions,actions-average,bounce-rate&output=json`;

      try {
        const response = await fetch(url); // Await the fetch
        if (response.ok) {
          const data = await response.json(); // Await parsing JSON
          setEngagementData(data);
        } else {
          console.error('Error fetching data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiKey, siteId]);

  return (
    <div className="engagement-container">
      {engagementData && (
        <div className="engagement-data">
          <Table>
            <tbody>
              <tr>
                <td><b>Total Time Spent:</b> <br /> <small>Total amount of time spent on your site by all visitors combined</small></td>
                <td>{engagementData[0]?.dates[0]?.items[0]?.value}</td>
              </tr>
              <tr>
                <td>
                  <b>Average Time Spent:</b><br />
                  <small>Average time on site per visitor</small>
                </td>
                <td>{engagementData[1]?.dates[0]?.items[0]?.value}</td>
              </tr>
              <tr>
                <td>
                  <b>Total Users:</b><br />
                  <small>Number of visitors</small>
                </td>
                <td>{engagementData[2]?.dates[0]?.items[0]?.value}</td>
              </tr>
              <tr>
                <td>
                  <b>Unique Users:</b>
                  <br /><small>Total Unique viewers</small>
                </td>
                <td>{engagementData[3]?.dates[0]?.items[0]?.value}</td>
              </tr>
              <tr>
                <td><b>Online Viewers:</b>
                  <br /><small>Number of visitors currently active on your website. This value is always the "live" value; specifying a date has no effect</small></td>
                <td>{engagementData[4]?.dates[0]?.items[0]?.value}</td>
              </tr>
              <tr>
                <td><b>Active User:</b>
                  <br /><small>Visitors Most Active</small></td>
                <td>{engagementData[5]?.dates[0]?.items[0]?.value}</td>
              </tr>
              <tr>
                <td><b>Actions Page Views:</b> <br /><small>Number of page views</small></td>
                <td>{engagementData[6]?.dates[0]?.items[0]?.value}</td>
              </tr>
              <tr>
                <td><b>Total Actions:</b> <br /><small>average number of actions per visitor</small></td>
                <td>{engagementData[7]?.dates[0]?.items[0]?.value}</td>
              </tr>
              <tr>
                <td><b>Average Actions:</b> <br /><small>average number of actions per visitor</small></td>
                <td>{engagementData[8]?.dates[0]?.items[0]?.value}</td>
              </tr>
              <tr>
                <td><b>Bounce Rate:</b> <br /><small>percentage of visitors who only viewed one page</small></td>
                <td>{engagementData[9]?.dates[0]?.items[0]?.value}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Engagement;
