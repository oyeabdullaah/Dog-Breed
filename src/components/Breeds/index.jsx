import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from 'antd';
import { HeartFilled } from '@ant-design/icons';

import { fetchDataAsync } from '../../Redux/actions/action';

const { Meta } = Card;

const Breeds = () => {
  const dispatch = useDispatch();

  // Assuming you have a slice in your Redux store named 'dataReducer' that holds the selected breed and sub-breed
  const Breed = useSelector((state) => state.dataReducer.Breed.breed);
  const Subbreed = useSelector((state) => state.dataReducer.Breed.subbreed);

  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = `https://dog.ceo/api/breed/${Breed}/images/random/16`;

        // If there's a selected sub-breed, update the API URL
        if (Subbreed) {
          apiUrl = `https://dog.ceo/api/breed/${Breed}/${Subbreed}/images/random/16`;
        }

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        // Store the fetched data in state
        setImageData(result.message);
      } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
      }
    };

    // Call fetchData whenever Breed or Subbreed changes
    if (Breed || Subbreed) {
      fetchData();
    }
  }, [Breed, Subbreed, dispatch]);

  // Initial data fetching on component mount
  useEffect(() => {
    // Dispatch an action to initiate the data fetching
    dispatch(fetchDataAsync());
  }, [dispatch]);

  const handleFavorites = (imageUrl) => {
    console.log(imageUrl, 'Test');
    // Implement your logic for handling favorites here
  };

  return (
    <div className="Cards" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between' }}>
      {imageData.map((imageUrl, index) => (
        <Card
          key={index}
          hoverable
          style={{ flex: '0 0 calc(25% - 20px)', marginBottom: '20px', borderRadius: '8px', width: 'calc(25% - 20px)' }}
          bodyStyle={{ padding: 0 }} // Remove default padding
        >
          <div style={{ position: 'relative', paddingTop: '75%', overflow: 'hidden', borderRadius: '8px' }}>
            <img
              alt="example"
              src={imageUrl}
              style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px' }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }} className="CardActions">
            <Meta title="Dog Breed" description={`Breed: ${Breed}${Subbreed ? ` - ${Subbreed}` : ''}`} />
            <Button onClick={() => handleFavorites(imageUrl)} icon={<HeartFilled />} style={{ backgroundColor: 'white' }} />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Breeds;
