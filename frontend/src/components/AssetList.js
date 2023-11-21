import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AssetDetail from './AssetDetail';
import { API_URLS } from '../constants';
const AssetList = () => {
  const [assets, setAssets] = useState([]);
  const [selectedAsset, setSelectedAsset] = useState(null);

  useEffect(() => {
    async function fetchAssets() {
      try {
        const response = await axios.get(API_URLS.ASSETS);
        console.log(response.data);
        setAssets(response.data);
      } catch (e) {
        console.error('Error fetching assets:', e);
      }
    }
    fetchAssets();
  }, []);

  const handleAssetClick = (asset) => {
    setSelectedAsset(asset);
  }
  
  return (
    <div>
      <h1>Asset List</h1>
      { assets.length === 0 ? (
        <p>No assets found</p>
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
              <tr key={asset.id} >
                <td onClick={() => handleAssetClick(asset)}>{asset.id}</td>
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
    {selectedAsset && <AssetDetail asset={selectedAsset} />}
    </div>
  );
};

export default AssetList;
