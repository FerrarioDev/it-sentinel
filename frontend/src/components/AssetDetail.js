import React from 'react';

const AssetDetail = ({ asset }) => {
  return (
    <div>
      <h2>Asset Details</h2>
      <p>ID: {asset.id}</p>
      <p>Model: {asset.model || 'N/A'}</p>
      <p>User: {asset.user || 'N/A'}</p>
      <p>Asset Number: {asset.asset_number || 'N/A'}</p>
      <p>Serial Number: {asset.serial_number || 'N/A'}</p>
      <p>Drive Serial Number: {asset.drive_serialnumber || 'N/A'}</p>
      <p>Status: {asset.status || 'N/A'}</p>
      <p>Location: {asset.location || 'N/A'}</p>
      <p>Device Type: {asset.device_type || 'N/A'}</p>
    </div>
  );
};

export default AssetDetail;
