import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'
import db from './firebase'



function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("")
    
    const sendTweet = (e) => {
        e.preventDefault()

        db.collection('posts').add({
            displayName :"abhishek",
            username:"twitter-official",
            verified: true,
            text:tweetMessage,
            //image:"",
            avatar:"https://www.google.com/search?q=profile+iamges&sxsrf=ALeKk01JnPtAv5qN78Zd1iiDvUdEJPT4IQ:1624208398783&tbm=isch&source=iu&ictx=1&fir=B3G4vEo9lSBh0M%252Cy7i4Swccn0rqpM%252C_&vet=1&usg=AI4_-kT3BYwkVTU2qFIYzU_QIPNgxOVWGQ&sa=X&ved=2ahUKEwjfvZnl16bxAhVtwTgGHUOhC0kQ9QF6BAgTEAE&biw=1536&bih=722#imgrc=gRmIHR3owD_V0M"
            
        })
        setTweetMessage("")
    }
    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox-input">
                    <Avatar alt="Travis Howard" src="https://www.google.com/search?q=profile+iamges&sxsrf=ALeKk01JnPtAv5qN78Zd1iiDvUdEJPT4IQ:1624208398783&tbm=isch&source=iu&ictx=1&fir=B3G4vEo9lSBh0M%252Cy7i4Swccn0rqpM%252C_&vet=1&usg=AI4_-kT3BYwkVTU2qFIYzU_QIPNgxOVWGQ&sa=X&ved=2ahUKEwjfvZnl16bxAhVtwTgGHUOhC0kQ9QF6BAgTEAE&biw=1536&bih=722#imgrc=gRmIHR3owD_V0M" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        placeholder="What's happening?"
                        value={tweetMessage}
                        type="text">
                    </input>

                </div>
                <input className="tweetbox-input-image" placeholder="Enter Image URL" type="text"></input>
                <Button type="submit" onClick={sendTweet} className="tweetbox-btn">Tweet</Button>
                {/* <Button type="submit" onClick={sendTweet} className="tweetbox-btn">Tweet</Button> */}
            </form>
        </div>
    )
}

export default TweetBox





































// import React, { useState } from 'react'
// import './TweetBox.css'
// import { Avatar, Button } from '@material-ui/core'
// import db from './firebase'



// function TweetBox() {
//     const [tweetMessage, setTweetMessage] = useState("")
//     // const sendTweet = (e) => {
//     //     e.preventDefault()

//     //     db.collection('posts').add({
//     //         displayName :"abhishek",
//     //         username:"twitter-official",
//     //         verified: true,
//     //         text:tweetMessage,
//     //         image:"",
//     //         avatar:"https://www.google.com/search?q=profile+iamges&sxsrf=ALeKk01JnPtAv5qN78Zd1iiDvUdEJPT4IQ:1624208398783&tbm=isch&source=iu&ictx=1&fir=B3G4vEo9lSBh0M%252Cy7i4Swccn0rqpM%252C_&vet=1&usg=AI4_-kT3BYwkVTU2qFIYzU_QIPNgxOVWGQ&sa=X&ved=2ahUKEwjfvZnl16bxAhVtwTgGHUOhC0kQ9QF6BAgTEAE&biw=1536&bih=722#imgrc=gRmIHR3owD_V0M"
            
//     //     })
//     //     setTweetMessage("")
//     // }
//     return (
//         <div className="tweetbox">
//             <form>
//                 <div className="tweetbox-input">
//                     <Avatar alt="Travis Howard" src="https://www.google.com/search?q=profile+iamges&sxsrf=ALeKk01JnPtAv5qN78Zd1iiDvUdEJPT4IQ:1624208398783&tbm=isch&source=iu&ictx=1&fir=B3G4vEo9lSBh0M%252Cy7i4Swccn0rqpM%252C_&vet=1&usg=AI4_-kT3BYwkVTU2qFIYzU_QIPNgxOVWGQ&sa=X&ved=2ahUKEwjfvZnl16bxAhVtwTgGHUOhC0kQ9QF6BAgTEAE&biw=1536&bih=722#imgrc=gRmIHR3owD_V0M" />
//                     <input
//                         // onChange={(e) => setTweetMessage(e.target.value)}
//                         placeholder="What's happening?">
//                         {/* value={tweetMessage} */}

//                     </input>

//                 </div>
//                 <input className="tweetbox-input-image" placeholder="Enter Image URL" type="text"></input>
//                 <Button type="submit" className="tweetbox-btn">Tweet</Button>
//                 {/* <Button type="submit" onClick={sendTweet} className="tweetbox-btn">Tweet</Button> */}
//             </form>
//         </div>
//     )
// }

// export default TweetBox
