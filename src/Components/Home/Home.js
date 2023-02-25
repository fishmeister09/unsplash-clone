import React, { useState } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { Loader } from '../Loader/Loader';
import { MiddleSection } from '../MiddleSection/MiddleSection';
import './Home.css';
import { MasonryGallery } from '../Masonry/MasonryGallery';
import { Box } from '@mui/material';

const Home = ({ isDarkTheme, changeTheme }) => {
  const [data, setData] = useState({ data: [], searchedTerm: '' });
  const [loader, setLoader] = useState(true);
  return (
    <div className="Main">
      <NavBar
        changeTheme={changeTheme}
        isDarkTheme={isDarkTheme}
        setData={setData}
        setLoader={setLoader}
      />
      {loader && <Loader />}
      {!loader && data.searchedTerm.length === 0 && (
        <MiddleSection setLoader={setLoader} setData={setData} />
      )}
      {data.searchedTerm.length > 0 && (
        <Box className="SearchTerm">{data.searchedTerm}</Box>
      )}

      <MasonryGallery
        SearchedData={data}
        loader={loader}
        setLoader={setLoader}
      />
    </div>
  );
};

export default Home;
