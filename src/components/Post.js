import React from 'react'
import './Post.css';
import { Avatar, } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({ displayName, username, verified, text, avatar, }) {
    return (
        <div className="post">
            {/* Post component */}
            <div className="post-avatar">
                <Avatar src={avatar}/>
                {/* <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" /> */}
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="post-header-text">
                        <h3>
                            {/* Abhishek */}
                            {displayName}
                            <span className="post-header-span">
                                {verified && <VerifiedUserIcon className="post-badge" />} {username}
                            </span>
                        </h3>
                    </div>
                    <div className="post-description">
                        {/* <p>This is twitter frontend or UI design using react</p> */}
                        <p>{text}</p>
                    </div>
                </div>

                <div className="post-footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post
