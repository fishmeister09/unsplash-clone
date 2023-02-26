import { Typography } from '@mui/material';
import { SearchInput } from '../NavBar/SearchInput/SearchInput';
import './MiddleSection.css';
export const MiddleSection = ({ setLoader, setData }) => {
  return (
    <div className="middleSection">
      <img alt="background" src="background.png" className="backgroundImg" />
      <div className="hower">
        <Typography
          variant="h4"
          style={{
            fontFamily: 'Montserrat',
            color: '#ffffff',
            fontWeight: 700,
          }}
        >
          Download High Quality Images by creators
        </Typography>
        <Typography
          style={{
            fontFamily: 'Montserrat',
            color: '#C4C4C4',
            fontWeight: 500,
            margin: '0.5% 0',
          }}
        >
          Over 2.4 million+ stock Images by our talented community
        </Typography>
        <SearchInput
          placeholderText={
            'Search high resolution Images, categories, wallpapers'
          }
          height="54px"
          width={'max(300px,50vw)'}
          backgroundColor="#FFFFFF"
          borderColor="#FFFFFF"
          realTime={false}
          setLoader={setLoader}
          setData={setData}
        />
      </div>
    </div>
  );
};
