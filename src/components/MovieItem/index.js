import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <>
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <button
              type="button"
              className="close-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
            <div className="video-container">
              <ReactPlayer
                url={videoUrl}
                width="100%"
                height="100%"
                controls
                playing
              />
            </div>
          </>
        )}
      </Popup>
    </>
  )
}

export default MovieItem
