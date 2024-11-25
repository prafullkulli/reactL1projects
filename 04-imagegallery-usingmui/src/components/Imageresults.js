import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    // width:1000,
    // height: 700,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));



const ImageResults = ({images}) => {
  const classes = useStyles();

  return (
    // <div><img src={images[4].largeImageURL}/></div>
    <div>
      <div className={classes.root}>
      <ImageList rowHeight={300} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Result</ListSubheader>
        </ImageListItem>
        {images.map((image, index) => (
          <ImageListItem key={index}>
            <img src={image.largeImageURL} alt={image.id} />
            <ImageListItemBar
              title={image.user}
              subtitle={<span>by: {image.type}</span>}
              actionIcon={
                <IconButton>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
          
        ))}
      </ImageList>
    </div>
    </div>
  )
}

export default ImageResults