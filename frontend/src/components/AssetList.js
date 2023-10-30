import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AssetList = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/assets/')
      .then(response => {
        setAssets(response.data);
      })
      .catch(error => {
        console.error('Error fetching assets:', error);
      });
  }, []);

  return (
    <div>
      {assets.map(asset => (
        <div key={asset.id}>{asset.id} - {asset.model}</div>
      ))}
    </div>
  );
};

export default AssetList;