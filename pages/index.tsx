import Head from 'next/head';
import { NextPage } from 'next';
import React from 'react';

/* const slideImages = [
  '/assets/project-photos/image1.jpg',
  '/assets/project-photos/image2.jpg',
  '/assets/project-photos/image3.jpg',
  '/assets/project-photos/image4.jpg',
];

const properties = {
  duration: 2800,
  autoplay: true,
  transitionDuration: 1000,
  infinite: true,
  easing: 'ease',
  indicators: true,
  arrows: false,
  pauseOnHover: false,
}; */

const Home: NextPage = () => {
  /*  const slides = slideImages.map((slide, i) => (
    <div key={"X1EI_OPTl"+i} className="each-slide">
      <div
        style={{
          background: `linear-gradient(
            180deg, rgba(0,0,0,.35) 10%, rgba(217, 217, 217,.1) 90%  
      ),url(${slide})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="slide-text">
          <span className="title is-7">Godina</span>
          <h2 className="title is-2">Zgrada vijeća ministara</h2>
        </div>
      </div>
    </div>
  )); */
  return (
    <>
      <Head>
        <title>Home | AKSA d.o.o.</title>
      </Head>
      {/* <div className="fade-in"> <Slide {...properties}>{slides}</Slide> </div> */}

      <div className="fade-in">
        <video
          preload="auto"
          playsInline={true}
          autoPlay
          muted
          loop
          id="home-video"
          className="is-overlay">
          <source src="/assets/videos/aksa-home.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/*  <header className="viewport-header">
          <h1 className="title is-1">Make it possible.</h1>
        </header> */}
      </div>

      <style jsx global>{`
        html {
          overflow-y: hidden;
        }
      `}</style>
    </>
  );
};

export default Home;
