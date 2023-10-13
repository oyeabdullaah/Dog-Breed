import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SelectedBreed } from '../../Redux/actions/action';

const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const SearchBar = () => {
  const dispatch = useDispatch();
  const [Breed, setBreed] = useState();

  useEffect(() => {
    ValueSelected();
  }, [Breed]);

  const ValueSelected = (value) => {
    if (value) {
      const selectedBreed = value.split(' - ')[0];
      const selectedSubBreed = value.split(' - ')[1]; // Extract sub-breed if available
      setBreed(selectedBreed);

      console.log(`Selected Breed: ${selectedBreed}`);
      if (selectedSubBreed) {
        console.log(`Selected Sub-Breed: ${selectedSubBreed}`);
      }

      // Pass both breed and sub-breed to the action
      dispatch(SelectedBreed({ breed: selectedBreed, subBreed: selectedSubBreed }));
    }
  };

  const { loading, data, error } = useSelector((state) => state.dataReducer);
  const arr = data.message && Object.entries(data.message);
  const flattenData = [];

  if (arr) {
    arr.forEach(([breed, subBreeds]) => {
      if (subBreeds.length === 0) {
        flattenData.push({ value: breed, label: breed });
      } else {
        subBreeds.forEach((subBreed) => {
          const fullBreedName = `${breed} - ${subBreed}`;
          flattenData.push({ value: fullBreedName, label: fullBreedName });
        });
      }
    });
  }

  return (
    <Select
      style={{
        margin: 'auto',
        display: 'block',
        width: '30%',
      }}
      showSearch
      placeholder="Select a breed"
      optionFilterProp="children"
      filterOption={filterOption}
      options={flattenData}
      onChange={ValueSelected}
    />
  );
};

export default SearchBar;
