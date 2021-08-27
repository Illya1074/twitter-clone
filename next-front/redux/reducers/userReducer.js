import { client } from '../api/client'


const userReducer = (state =  {}, action) => {
    switch (action.type) {
      case 'user/login': {
        return {
          authorized: true,
          jwt: action.payload.access_token,
          info: action.payload.info,
        };
      }  
      case 'user/userLoaded': {
          return {
            ...state
          };
      }
      case 'user/userUpdate': {
        
          return {
            ...state,
            info: {
              ...state.info,
              location: action.payload.location,
              desc: action.payload.desc,
              username: action.payload.username,
            }
          };
      }
      case 'user/userLocalStorage': {
          return {
            ...action.payload
          };
      }
      case 'user/userLogout': {
          return {};
      }
      default:
        return state;
    }
    // console.log(data)
};

export function getUser({email, jwt}) {
  // And then creates and returns the async thunk function:
  return async function getUserThunk(dispatch, getState) {
    // ✅ Now we can use the text value and send it to the server
    const response = await client('http://localhost:1374/get-user', { 
      body: {
        email: email,
      },  
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    })
    dispatch({ type: 'user/userLoaded', payload: response })
  }
}

export function updateProfile({email, location, desc, username, jwt}) {
  // And then creates and returns the async thunk function:
  return async function updateProfileThunk(dispatch, getState) {
    // ✅ Now we can use the text value and send it to the server
    const response = await client('http://localhost:1374/user-profile-update', { 
      body: {
        email,
        location,
        desc,
        username,
      },  
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    })

    // console.log(response)
    const previousState = JSON.parse(localStorage.getItem('user'))
    
    if(response){
      localStorage.setItem('user',JSON.stringify({
          ...previousState,
          info: {
            ...previousState.info,
            location: response.location,
            desc: response.desc,
            username: response.username,
          }
      }))

      dispatch({ type: 'user/userUpdate', payload: response })
    }
    // dispatch({ type: 'user/userLoaded', payload: response })
  }
}

export function logout() {
  return async function logoutThunk(dispatch, getState) {
    // ✅ Now we can use the text value and send it to the server
    localStorage.removeItem("user");
    console.log('here')
    dispatch({ type: 'user/userLogout' })
  }
}

export function login(data) {
  // And then creates and returns the async thunk function:
  return async function loginThunk(dispatch, getState) {
    // ✅ Now we can use the text value and send it to the server
    const response = await client.post('http://localhost:1374/auth/login', { ...data })
    if(response){
      localStorage.setItem('user',JSON.stringify({
          authorized: true,
          jwt: response.access_token,
          info: response.info
        }))

      dispatch({ type: 'user/login', payload: response })
    }
  }
}

export function signup(data) {
  // And then creates and returns the async thunk function:
  return async function signupThunk(dispatch, getState) {
    // ✅ Now we can use the text value and send it to the server
    const response = await client.post('http://localhost:1374/create-user', { ...data })
    console.log(response)
  }
}


export default userReducer;
