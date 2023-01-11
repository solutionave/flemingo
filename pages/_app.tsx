import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../layouts/navbar/navbar'

export default function App({ Component, pageProps }: AppProps) {
  return <div className='pageBody'>
  <Navbar/>
  <Component {...pageProps} />
  </div>
}
