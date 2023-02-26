import { useTheme } from '@mui/system';
import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import './SearchInput.css';
export const SearchInput = ({
  height,
  width,
  placeholderText,
  backgroundColor,
  borderColor,
  color,
  setData,
  setLoader,
  realTime,
}) => {
  const [Search, setSearch] = useState('');
  const theme = useTheme();

  const FetchQuery = (query) => {
    if (!query.length) {
      setData({ data: [], searchedTerm: '' });
      setLoader(false);
      return;
    }
    setLoader(true);
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=gjT9-O_3jyduVX922hmqeteCSK4XCoFVdrpuTUtu_LI`
    )
      .then((res) => res.json())
      .then((data) => {
        setData({ data: data.results, searchedTerm: Search });
        setLoader(false);
      });
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (realTime) FetchQuery(Search);
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [Search]);

  return (
    <>
      <TextField
        value={Search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            FetchQuery(Search);
          }
        }}
        variant="outlined"
        className="searchContainer"
        sx={{
          '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #C4C4C4 !important',
          },
          '.MuiOutlinedInput-root': {
            display: 'flex',
            flexDirection: 'row',
            outline: 'none',
            borderColor: borderColor ? borderColor : theme.inputBorderColor,
            backgroundColor: backgroundColor
              ? backgroundColor
              : theme.inputBackColor,
            height: height,
            width: width,
            caretColor: '#4F4F4F',
            color: color ? color : theme.color,
          },
          '& .MuiOutlinedInput-root.Mui-focused': {
            backgroundColor: '#fafafa',
            color: '#4F4F4F',
          },
        }}
        InputProps={{
          startAdornment: (
            <img
              className="SearchIcon"
              alt="searchIcon"
              src={
                theme.palette.mode === 'light'
                  ? 'LightSearchIcon.png'
                  : 'DarkSearchIcon.png'
              }
            />
          ),
        }}
        placeholder={placeholderText}
        type={'text'}
      />
      {/* <AutoCompleteModal query={Search} width={width} setSearch={setSearch} /> */}
    </>
  );
};
