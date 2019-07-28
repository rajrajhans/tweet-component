import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';

let testTweetList = [
    {
        id : 1,
        message : "Array.map explained in 4 Levels of Difficulty by @yazeedBee is just amazing! Must read for new JavaScript devs. @yazeedBee Hats off to you and can't wait to read more of your blog posts.",
        avatar : "https://pbs.twimg.com/profile_images/1149381211006988288/FCE1yMEa.jpg",
        author : {
            handle : "_rajrajhans",
            name : "Raj Rajhans"
        },
        timestamp : "2018-07-21 21:24:37"
    },

    {
        id : 2,
        message : "Learning ReactJS is fun! #100DaysOfCode",
        avatar : "https://pbs.twimg.com/profile_images/1149381211006988288/FCE1yMEa.jpg",
        author : {
            handle : "_rajrajhans",
            name : "Raj Rajhans"
        },
        timestamp : "2019-06-21 23:24:37"
    },

    {
        id : 3,
        message : "Just released a new blog post intended for beginners in ReactJS! Check out my website to know more about it.",
        avatar : "https://pbs.twimg.com/profile_images/1149381211006988288/FCE1yMEa.jpg",
        author : {
            handle : "_rajrajhans",
            name : "Raj Rajhans"
        },
        timestamp : "2019-07-28 01:24:37"
    },
];

class TweetList extends React.Component{
    // eslint-disable-next-line
     constructor(props){
        super(props)
    }

    render(){
         return(
             <div className={"container"}>
                 {this.props.tweets.map(tweet =>(
                        <Tweet key={tweet.id} tweet={tweet} />
                 ) )}
             </div>
         )
    }
}

class Tweet extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="tweet">
                <Avatar link = {this.props.tweet.avatar}/>
                <div className={"content"}>
                    <NameWithHandle author = {this.props.tweet.author} />
                    <Time timestamp = {this.props.tweet.timestamp}/>
                    <Message content = {this.props.tweet.message}/>


                    <div className={"buttons"}>
                        <ReplyButton />
                        <RetweetButton/>
                        <LikeButton/>
                        <MoreOptionsButton/>
                    </div>
                </div>
            </div>
        )
    }
}

class Avatar extends React.Component{
    render(){
        return(
        <img src={this.props.link} alt="User Avatar" className="avatar" />
        )
    }
}

class NameWithHandle extends React.Component{
    render(){
        return(
            <span className={"name-with-handle"}>
                <span className={"name"}> @{this.props.author.name} </span>
                <span className={"handle"}> {this.props.author.handle} </span>
            </span>
        );
    }
}

class Message extends React.Component{
    render(){
        return(
            <div className={"message"}>
                {this.props.content}
            </div>
        )
    }
}

const LikeButton = () => (
    <i className={"fa fa-heart like-button"} />
);

const RetweetButton = () => (
    <i className={"fa fa-retweet retweet-button"} />
);

const MoreOptionsButton = () => (
    <i className={"fa fa-ellipsis-h more-options-buton"} />
);

const ReplyButton = () => (
    <i className={"fa fa-reply reply-button"} />
);

const Time = (timestamp) => {
    const timeString = moment(timestamp).fromNow();
    return(
        <span className={"time"}>{timeString}</span>
    )
};

ReactDOM.render(<TweetList tweets={ testTweetList }/>, document.getElementById('root')); //Renders the component to the window
