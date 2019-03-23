import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Icon from '@material-ui/core/Icon';
import Zoom from '@material-ui/core/Zoom'
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

class ImageResults extends Component {
  render() {
    let imageListContent;
    const {images} = this.props // Takes out the images from the props
    

    if(images){
      imageListContent = (
        <GridList cols={3}>
          {
            images.map(img => (
              <GridListTile 
                title={img.tags} 
                key={img.id} 
                subtitle = {
                <span>
                  by <strong>{img.user}</strong>
                </span>
                }
                actionIcon = {
                  <IconButton>
                    <Zoom>Zoom</Zoom>
                  </IconButton>
                }
              >
                <img src={img.largeImageURL} alt="" />
              </GridListTile>
            ))
          }
        </GridList>
      )
    } else{
      imageListContent = null
    }

    return (
      <div>
        {imageListContent}
      </div>
    )
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
}


export default ImageResults