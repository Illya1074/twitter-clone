import { client } from '../api/client'

const tweetsReducer = (state = {tweets: []}, action) => {
    
    // console.log(data)
    switch (action.type) {
        case 'tweets/tweetsLoaded': {
            return {
                tweets: action.payload
            }
        }
        case 'tweets/addNewTweet': {
            return {
                tweets: [...state.tweets,action.payload ]
            }
        } 
        case 'tweets/likeTweet': {
            return {
                tweets: action.payload
            }
        } 
        default:
            return {
                ...state
            };
    }
};

// Thunk function
export function fetchTweets(data) {
  return async function fetchTweetsThunk(dispatch, getState) {
    // ✅ Now we can use the text value and send it to the server
    const response = await client('http://localhost:1374/many-tweets', {
        headers: {
            Authorization: `Bearer ${data.jwt}`
        }
    })
    dispatch({ type: 'tweets/tweetsLoaded', payload: response })
  }
}

export function addNewTweet(data) {
  // And then creates and returns the async thunk function:
  return async function addNewTweetThunk(dispatch, getState) {
    // ✅ Now we can use the text value and send it to the server
    // console.log(data)
    const tweet = await client('http://localhost:1374/tweet', { 
        
        body: {
            ...data
        },
        headers: {
            Authorization: `Bearer ${data.jwt}`
        } 
    })
    const response = await client('http://localhost:1374/get-tweet', { 
        body: {
            tweetId: tweet.id
        },
        headers: {
            Authorization: `Bearer ${data.jwt}`
        } 
    })
    dispatch({ type: 'tweets/addNewTweet', payload: response })
  }
}

export function like(data) {
  // And then creates and returns the async thunk function:
  const { tweetId, userId, jwt } = data
  return async function likeThunk(dispatch, getState) {
    // ✅ Now we can use the text value and send it to the server
    await client('http://localhost:1374/like-tweet', { 
      body: {
        tweetId,
        userId
      },  
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    })
   
  }
}

export function comment(data) {
  // And then creates and returns the async thunk function:
  const { tweetId, username, content, jwt } = data
  return async function commentThunk(dispatch, getState) {
    // ✅ Now we can use the text value and send it to the server
    // console.log(tweetId,username,content )
    await client('http://localhost:1374/create-comment', { 
      body: {
        tweetId,
        username,
        content
      },  
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    })
   
  }
}

export function deleteTweet(data) {
  // And then creates and returns the async thunk function:
  return async function deleteTweetThunk(dispatch, getState) {
    // ✅ Now we can use the text value and send it to the server
    // console.log(data)
    const response = await client('http://localhost:1374/delete-tweets', { 
        body: {
            id: data.id
        },
        headers: {
            Authorization: `Bearer ${data.jwt}`
        } 
    })
  }
}

export default tweetsReducer;
