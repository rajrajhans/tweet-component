import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';

let testTweet = {
    message : "Array.map explained in 4 Levels of Difficulty by @yazeedBee is just amazing! Must read for new JavaScript devs. @yazeedBee Hats off to you and can't wait to read more of your blog posts.",
    avatar : "https://pbs.twimg.com/profile_images/1149381211006988288/FCE1yMEa.jpg",
    author : {
        handle : "_rajrajhans",
        name : "Raj Rajhans"
    },
    timestamp : "2018-07-21 21:24:37"
};


class Tweet extends React.Component{
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

ReactDOM.render(<Tweet tweet={ testTweet }/>, document.getElementById('root')); //Renders the component to the window
