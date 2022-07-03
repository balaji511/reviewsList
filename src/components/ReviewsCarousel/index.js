import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeId: 0}

  high = () => {
    this.setState(prevState => ({activeId: prevState.activeId + 1}))
  }

  low = () => {
    this.setState(prevState => ({activeId: prevState.activeId - 1}))
  }

  render() {
    const {activeId} = this.state
    const {reviewsList} = this.props
    const Item = reviewsList[activeId]
    console.log(Item)
    return (
      <div className="bgContainer">
        <div className="df">
          <button type="button" onClick={this.low}>
            left
          </button>
          <div className="dff">
            <img src={Item.imgUrl} className="img" alt={Item.username} />
            <p>{Item.username}</p>
            <p>{Item.description}</p>
          </div>
          <button type="button" onClick={this.high}>
            Right
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
