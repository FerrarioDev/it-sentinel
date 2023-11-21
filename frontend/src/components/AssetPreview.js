import React, { useEffect, useState } from "react";
import axios from "axios";

const AssetPreview = () => {
    const [recentAssets, setRecentAssets] = useState([]);

    useEffect(() => {
        async function fetchRecentAssets() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/assets');
                setRecentAssets(response.data);
            } catch (e) {
                console.error('Error fetching assets:', e);
            }
        }
        fetchRecentAssets();
    }, []);

    return (
        <div>
            <h2>Asset Preview</h2>
            <ul>
                {recentAssets.map((asset) => (
                    <li key={asset.id}>
                        {asset.id || 'N/A'} - Updated at: {asset.updated_at}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AssetPreview