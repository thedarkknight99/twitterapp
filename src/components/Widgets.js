import React from 'react'
import './Widgets.css';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets-input">
                <SearchIcon className="widgets-searchicon" />
                <input placeholder="Search twitter" type="text" />
            </div>
            <div className="widgets-container">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1406671585541427204"} />
                <TwitterTweetEmbed tweetId={'933354946111705097'}/>
                <TwitterTimelineEmbed sourceType="profile" screenName="BCCi" options={{height: 400}} />
            </div>
        </div>
    )
}

export default Widgets
