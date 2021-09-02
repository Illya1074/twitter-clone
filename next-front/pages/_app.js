import '../styles/globals.css'
import Layout from '../components/layout/layout'
import {Provider} from 'react-redux'
import store from '../redux/store'
// store.dispatch(fetchTweets)

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Component {...pageProps} /> 
    </Provider>
  )
}

export default MyApp
