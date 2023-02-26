import { Card, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/system';

export const RenderItem = ({ item, setModal }) => {
  const theme = useTheme();

  return (
    <Card
      className="grid-images"
      onClick={() => {
        setModal({ data: item, showModal: true });
      }}
    >
      <img className="photo" src={item.urls.small} alt="green iguana" />
      <CardContent sx={{ maxHeight: '100px' }} className="card-content">
        <div className="row">
          <img
            className="profile-img"
            src={item.user.profile_image.medium}
            alt="author"
          />
          <div className="col">
            <div className="author-name">{item.user.first_name}</div>

            <Typography className="tag" color="text.secondary">
              @{item.user.username}
            </Typography>
          </div>
        </div>
        <div className="row">
          <img
            className="like"
            alt="like "
            src={
              theme.palette.mode === 'light' ? 'LikeLight.png' : 'LikeDark.png'
            }
          />
          <div className="like-amt">{item.likes}</div>
        </div>
      </CardContent>
    </Card>
  );
};
