import './index.css'
import TabItem from '../TabItem'
import ThumbnailItem from '../ThumbnailItem'

const GameProgress = props => {
  const {
    allImagesList,
    tabsList,
    thumbnailImages,
    activeTabId,
    currentImageId,
    onClickTab,
    onClickThumbnail,
  } = props

  // functions
  const getImage = () =>
    allImagesList.find(image => image.id === currentImageId)
  const renderTabs = () => (
    <ul className="tab-items-container">
      {tabsList.map(tab => (
        <TabItem
          tabDetails={tab}
          active={tab.tabId === activeTabId}
          onClick={onClickTab}
          key={tab.tabId}
        />
      ))}
    </ul>
  )
  const renderThumbnails = () => (
    <ul className="thumbnails-container">
      {thumbnailImages.map(thumbnail => (
        <ThumbnailItem
          thumbnail={thumbnail}
          key={thumbnail.id}
          onClickThumbnail={onClickThumbnail}
        />
      ))}
    </ul>
  )

  const {imageUrl} = getImage()
  return (
    <div className="game-container">
      <img className="match-image" src={imageUrl} alt="match" />
      {renderTabs()}
      {renderThumbnails()}
    </div>
  )
}

export default GameProgress
