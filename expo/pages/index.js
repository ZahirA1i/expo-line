import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Map from '../comps/Map'
import Logo from '../public/logo.png'

export default function Home() {
  return (
    <>
      <center><img src='logo.png' width={200} height={100} /></center>
      <center> <h1 className="heading">Expo Line</h1></center>
      <p>The Expo Line operates two routes:

        Waterfront Station (Downtown Vancouver) to King George Station (Surrey)

        Waterfront Station (Downtown Vancouver) to Production Way–University Station (Burnaby)

        Transfer to the Millennium Line at the following stations:

        Commercial–Broadway Station

        Lougheed Town Centre Station

        Production Way–University Station

        Use Columbia Station to transfer to and from a train going to either King George or Production Way–University.

        Use Waterfront Station to transfer to the Canada Line, SeaBus, or West Coast Express.</p>

      <main>
        <Map />
      </main>
      <footer>
        <center><h4>All rights reserved to Translink -- developed by Zahir Ali
        </h4></center>

        <center><a href="https://github.com/ZahirA1i/expo-line">Github</a></center>

      </footer>
    </>
  )
}
