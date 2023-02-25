import { Card, CardContent, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/system';
import LikeLight from '../../Assets/LikeLight.png';
import LikeDark from '../../Assets/LikeDark.png';
import './ModalCard.css';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseIcon from '@mui/icons-material/Close';

export const ItemCard = ({ data, setModal }) => {
  const theme = useTheme();

  return (
    <Card className="modal-container">
      <CloseIcon
        className="closeButton"
        onClick={() => {
          setModal({ showModal: false });
        }}
      />
      <img className="photo-regular" src={data.urls.small} alt="green iguana" />
      <div className="image-options">
        <div className="row">
          <Button
            style={{ borderColor: 'white', color: 'white' }}
            variant="outlined"
            startIcon={<ShareOutlinedIcon />}
          >
            Share
          </Button>
          <Button
            style={{ borderColor: 'white', color: 'white', marginLeft: '5%' }}
            variant="outlined"
            startIcon={<InfoOutlinedIcon />}
          >
            Info
          </Button>
        </div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#3cb46e',
            color: 'white',
          }}
        >
          Download
        </Button>
      </div>

      <CardContent sx={{ maxHeight: '100px' }} className="card-content">
        <div className="row">
          <img
            className="profile-img"
            src={data.user.profile_image.small}
            alt="author"
          />

          <div className="col">
            <div className="author-name">{data.user.first_name}</div>
            <Typography className="tag" color="text.secondary">
              @{data.user.username}
            </Typography>
          </div>

          {/* Instagram and Twitter */}

          <div className="row tags">
            {data.user.instagram_username ? (
              <Typography className="tag" color="text.secondary">
                <InstagramIcon />/{data.user.instagram_username}
              </Typography>
            ) : null}
            {data.user.twitter_username ? (
              <Typography className="tag" color="text.secondary">
                <TwitterIcon /> /{data.user.twitter_username}
              </Typography>
            ) : null}
          </div>
        </div>
        <div className="row">
          <img
            className="like"
            alt="like "
            src={theme.palette.mode === 'light' ? LikeLight : LikeDark}
          />
          <div className="like-amt">{data.likes} </div>
        </div>
      </CardContent>
    </Card>
  );
};
