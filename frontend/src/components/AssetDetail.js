import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { API_URLS } from '../constants';

const AssetDetail = ({ match }) => {
  const [asset, setAsset] = useState();
  const [formData, setFormData] = useState();
  const url = `${API_URLS.ASSETS}${match.params.pk}/`
  useEffect(() => {
    axios.get(url)
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
    axios.put('http://127.0.0.1:8000/api/assets/${match.params.pk}/', formData)
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
