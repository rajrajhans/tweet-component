import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let testTweet = {
    message : "Array.map explained in 4 Levels of Difficulty by @yazeedBee is just amazing! Must read for new JavaScript devs. @yazeedBee Hats off to you and can't wait to read more of your blog posts.",
    avatar : "https://pbs.twimg.com/profile_images/1149381211006988288/FCE1yMEa.jpg",
    author : {
        handle : "rajrajhans",
        name : "Raj Rajhans"
    },
    likes : 2,
    retweets :  1,
    timestamp : "2018-07-21 21:24:37"
};


class Tweet extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="tweet">
                <Avatar />
                <div className={"content"}>
                    <NameWithHandle />
                    <Time/>
                    <Message />


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
        <img src={"https://pbs.twimg.com/profile_images/1149381211006988288/FCE1yMEa.jpg"} alt="User Avatar" className="avatar" />
        )
    }
}

class NameWithHandle extends React.Component{
    render(){
        return(
            <span className={"name-with-handle"}>
                <span className={"name"}> Raj Rajhans </span>
                <span className={"handle"}> @rajrajhans </span>
            </span>
        );
    }
}

class Message extends React.Component{
    render(){
        return(
            <div className={"message"}>
                Array.map explained in 4 Levels of Difficulty by @yazeedBee is just amazing! Must read for new JavaScript devs. @yazeedBee Hats off to you and can't wait to read more of your blog posts.
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

const Time = () => (
    <span className={"time"}> 3h ago </span>
);

ReactDOM.render(<Tweet tweet={ testTweet }/>, document.getElementById('root')); //Renders the component to the window
