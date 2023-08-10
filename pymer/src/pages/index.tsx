import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ScrollComponent from '@/components/ScrollComponent';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>PYMER Portfolio</title>
        <link rel="icon" href="/rempen_icon.svg" type="image/x-icon"/>
      </Head>
      <body>
      <Image
        className={styles.backgroundImage}
        src={'/img.png'}
        alt={'papercraft_background_black_&_white'}
        width={1393}
        height={869}
      />
      <main className={`${styles.main}`}>
          <div className={styles.pageWrapper}> 
            <div className={styles.description}>
              <h1>
                <Image className={styles.img} src={'/pymer_logo.svg'} alt={'pymer_astronaut_logo'} width={91} height={134} />
                <style> @import url('https://fonts.googleapis.com/css2?family=Imbue:opsz@10..100&family=Istok+Web&display=swap');</style>
                <div className={styles.a}>PYMER</div>
              </h1>
            </div>
            <div className={styles.container}>
              <div className={styles.title}>MY - PORT FOLIO</div>
              <div className={styles.title1}>MY - PORT FOLIO</div>
            </div>
            </div>
        <div className={styles.containerGroup}>
          <div className={styles.cube}>
            <h2 className={styles.text}>
              Welcome ! My name is Pymer, I am a software developer with experience in web development and design !
            </h2>
          </div>
          <div className={styles.secondCube}>
          <p className={styles.name}>REMY</p> 
          <p className={styles.lastname}>PENICHON</p>
          </div>
          </div>
        <div className={styles.pageWrapper}>
          <div className={styles.contain}>
          <a href="/CV_Alternance_Web_Design_Front-end.pdf" download>
            <div className={styles.downloadcv} style={{ cursor: "pointer" }}>
              <div className={styles.downloadcv1}>
                <img className={styles.sphere3} src="/tiny_orange.svg"/>
                <img className={styles.sphere} src="/black_sphere.svg"/>
                DOWNLOAD CV</div></div></a>
              </div>
          <div className={styles.contain}>
          <a href="mailto:rpenichon18@gmail.com">
            <div className={styles.contactme} style={{ cursor: "pointer" }}>
              <img className={styles.sphere2} src="/tiny_grey.svg"/>
              <img className={styles.sphere1} src="/orange_sphere.svg"/>
              <div className={styles.contactme1}>CONTACT ME</div></div></a>
          </div>
        </div>
        <div className={styles.rect}>
        <ScrollComponent />
        </div>
        <div className={styles.rect1}>
          <div id='about_me' className={styles.tile}>ABOUT ME
          Who I am ?
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.textblock}>
            Hi, my name is Remy and i'm a front end developer based in Paris 
            specialised in creating responsive websites using HTML5, CSS3
            JavaScript (ES6+), ReactJS / VueJs frameworks.<br/>I enjoy building user
            interfaces that are visually appealing while also being functional
            with efficient code structures to ensure scalability of the website's features.</div><hr />
          </div>
       {/* <p>
         <code>/insert/icon &nbsp;</code> 
          <span>-&gt;</span>
        </p> */}
        </main>
      </body>
    </>
  )
}
