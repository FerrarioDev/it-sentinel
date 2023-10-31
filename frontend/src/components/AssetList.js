import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AssetList = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    async function fetchAssets() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/assets/');
        console.log(response.data);
        setAssets(response.data);
      } catch (error) {
        console.error('Error fetching assets:', error);
      }
    }

    fetchAssets();
  }, []);

  return (
    <div>
      <h1>Asset List</h1>
      { assets.length === 0 ? (
        <p>No assets to display</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Model</th>
              <th>User</th>
              <th>Asset Number</th>
              <th>Serial Number</th>
              <th>Drive Serial Number</th>
              <th>Status</th>
              <th>Location</th>
              <th>Device Type</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset.id}>
                <td>{asset.id}</td>
                <td>{asset.model || 'N/A'}</td>
                <td>{asset.user || 'N/A'}</td>
                <td>{asset.asset_number || 'N/A'}</td>
                <td>{asset.serial_number || 'N/A'}</td>
                <td>{asset.drive_serialnumber || 'N/A'}</td>
                <td>{asset.status || 'N/A'}</td>
                <td>{asset.location || 'N/A'}</td>
                <td>{asset.device_type || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>    
    )}
    </div>
  );
};

export default AssetList;
