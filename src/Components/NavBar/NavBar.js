import { Switch, Box, Typography } from '@mui/material';
import './NavBar.css';
import { SearchInput } from './SearchInput/SearchInput';

export const NavBar = ({ isDarkTheme, changeTheme, setData, setLoader }) => {
  return (
    <div className="navBar">
      <Box
        sx={{
          fontSize: 'h4.fontSize',
          fontFamily: 'Pattaya',
          whiteSpace: 'nowrap',
        }}
      >
        Image gallery
      </Box>
      <SearchInput
        height={'43px'}
        width={'25vw'}
        placeholderText={'Search Images here'}
        setData={setData}
        setLoader={setLoader}
        realTime={true}
      />
      <div className="row">
        <img src={'DarkSearchIcon.png'} alt="menu" className="menuItem" />
        <img src={'Menu.png'} alt="menu" className="menuItem" />
      </div>

      <div className="Wrapper">
        <Box sx={{ fontWeight: 'bold' }}>Explore</Box>
        <Box sx={{ fontWeight: 'bold' }}>Collection</Box>
        <Box sx={{ fontWeight: 'bold' }}>Community</Box>
      </div>

      <div className="row darkThemeButton">
        <Typography
          sx={{
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            marginLeft: '15%',
          }}
        >
          Dark Theme
        </Typography>
        <Switch checked={isDarkTheme} onChange={changeTheme} />
      </div>
    </div>
  );
};
