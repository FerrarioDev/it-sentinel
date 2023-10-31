import axios from 'axios';
import React, { useState, useEffect } from 'react';


const AssetDetail = ({ match }) => {
  const [asset, setAsset] = useState();
  const [formData, setFormData] = useState();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/${match.params.pk}/')
    .then(response => {
      setAsset(response.data)
    })
    .catch(e => {
      console.error('Error fetching asset:', e)
    });
  }, [match.params.pk])
  
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleFormSubmit = () => {
    axios.put('http://127.0.0.1:8000/api/${match.params.pk}/', formData)
    .then(response => {
      console.log('Asset updated:', response.data)
    })
    .catch(e => {
      console.error('Error updating asset:', e);
    });
  }

  return (
    <div>
    <h1>Asset Detail</h1>
    <p>ID: {asset.id}</p>
    <form onSubmit={handleFormSubmit}>
        <input type="text" name="user" value={formData.user || asset.user} onChange={handleFormChange} />
        <input type='choicefield' name="status" value={formData.status || asset.status} onChange={handleFormChange} />
        <input type="choicefield" name="location" value={formData.location || asset.location} onChange={handleFormChange} />
        <button type="submit">Update Asset</button>
    </form>
</div>
  );
};

export default AssetDetail;
