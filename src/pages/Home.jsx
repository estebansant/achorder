import React from 'react';
import '@styles/Home.scss';
import bannerMobile from '@images/banner_mobile.jpg';
import banner from '@images/main_banner.jpg';

const Home = () => {
  return (
    <main>
      <section className="banner">
        <div className="banner__container">
          
          <picture>
            <source media="(min-width:768px)" srcSet={banner} />
            <img src={bannerMobile} alt="music festival"/>
          </picture>

          <div className="banner__container--items">
            <h1>Tuning the chords <br/> of your rhythm.</h1>
            <p>Shop amazing guitars <br/> from our collection.</p>
          </div>

          <div className="banner__container--button">
              <a href="electric-guitars">
                <button>
                  Shop electric
                </button>
              </a>
              <a href="/acoustic-guitars">
                <button>
                  Shop acoustic
                </button>
              </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export { Home }