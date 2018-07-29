import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    })
  }
  // TODO: shouldComponentUpdate()
  // TODO: componentWillReceiveProps()
  componentWillReceiveProps(nextProps) {
    const tw = this.state.tweets
    const twer = nextProps.newTweets
    let tweetArray = []

    for(const tweeter of twer) {
      tweetArray.push(tweeter)
    }
    for(const tweet of tw) {
      tweetArray.push(tweet)
    }
    this.setState({
      tweets: tweetArray
    })
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
