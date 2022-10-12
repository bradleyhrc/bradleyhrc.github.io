import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import '../styles/ExpCard.scss';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginRight: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function ExpCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} onClick={handleExpandClick}>
      <CardContent>
        <Typography className="date" variant="body2" color="text.secondary">
          May - Aug. 2022
        </Typography>

        <Typography className="company" variant="h5" component="div">
          {props.logoImgUrl ? (
            <img className="logo" src={props.logoImgUrl} alt="company logo" />
          ) : (
            <></>
          )}
          {props.company}
        </Typography>

        <Typography className="position" color="text.secondary">{props.position}</Typography>
            
        <Typography className="card-txt">{props.preview}</Typography>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography className="card-txt">{props.description}</Typography>
        </Collapse>

      </CardContent>
      
        <ExpandMore
          expand={expanded}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      
    </Card>
  );
}
