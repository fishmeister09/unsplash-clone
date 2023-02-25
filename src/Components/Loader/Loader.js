import { Typography } from '@mui/material';
import Lottie from 'react-lottie';
import loader from '../../Assets/loader.json';
import './Loader.css';
export const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="loader">
      <Lottie
        isClickToPauseDisabled={true}
        options={defaultOptions}
        height={400}
        width={400}
      />
      <Typography color="text.secondary" className="loaderText">
        Loading some awesome
      </Typography>
      <Typography color="text.secondary" className="loaderText">
        Images...
      </Typography>
    </div>
  );
};
