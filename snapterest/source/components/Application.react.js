
var React = require('react');
var Stream = require('./Stream.react');
var Collection = require('./Collection.react');

var Application = React.createClass({

    getInitialState: function () {
        return {
            collectionTweets: {}
        };
    },

    addTweetToCollection: function (tweet) {
        var collectionTweets = this.state.collectionTweets;
        collectionTweets[tweet.id] = tweet;

        this.setState({
            collectionTweets: collectionTweets
        });

    },

    removeTweetFromCollection: function (tweet) {
        // Get the current collection of tweets from the state
        var collectionTweets = this.state.collectionTweets;

        // Add or update the tweet in the collection using the tweet's id as the key
        delete collectionTweets[tweet.id];

        // Update the state with the new collection of tweets
        this.setState({
            collectionTweets: collectionTweets
        })

    },

    removeAllTweetsFromCollection: function () {
        this.setState({
            collectionTweets: {}
        });
    },

    render: function () {
        return (
            <div className="container-fluid">
                <div classname="row">
                    <div className="col-md-4 text center">

                        <Stream onAddTweetToCollection={this.addTweetToCollection}/>

                    </div>
                    <div className="col-md-8">

                        <Collection
                            tweets={this.state.collectionTweets}
                            onRemoveTweetFromCollection={this.removeTweetFromCollection}
                            onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection}/>

                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Application;