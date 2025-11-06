import React from 'react';
import './css/variables.css';
import './css/style.css';
import './css/custom.css';
import { useTranslation } from 'react-i18next';
import { Button, Dropdown, Flag, Modal } from 'semantic-ui-react';

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}
const weddingImages = importAll(require.context('./images/gallery', false, /\.(png|jpe?g|svg)$/));

function App() {
  const { t, i18n } = useTranslation();

  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      {/* <div className="fh5co-loader"></div> */}
      <div id="page">
        <nav className="fh5co-nav" role="navigation">
          <div className="container">
            <div className="row">
              <div className="col-xs-2">
                <div id="fh5co-logo">
                  <a href="/">
                    {t('jarvicilia')}
                    <strong>.</strong>
                  </a>
                </div>
              </div>
              <div className="col-xs-10 text-right menu-1">
                <Dropdown
                  className="select-lan-dropdown"
                  text={
                    <div className="select-lan">
                      <Flag name={i18n.language == 'vn' ? 'vn' : 'us'} /> {i18n.language}
                    </div>
                  }
                >
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        i18n.changeLanguage('vn');
                        localStorage.setItem('lan', 'vn');
                      }}
                      text={
                        <span>
                          <Flag name="vn" /> vn
                        </span>
                      }
                    />
                    <Dropdown.Item
                      onClick={() => {
                        i18n.changeLanguage('en');
                        localStorage.setItem('lan', 'en');
                      }}
                      text={
                        <span>
                          <Flag name="us" /> en
                        </span>
                      }
                    />
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </nav>

        <header
          id="fh5co-header"
          className="fh5co-cover header-container"
          role="banner"
          data-stellar-background-ratio={'0.5'}
        >
          <div
            className="header-background"
            style={{ backgroundImage: `url(${require('./images/bg.jpg')})` }}
          >
            <iframe
              className="header-video"
              src="https://www.youtube.com/embed/mrNVZZB9LSI?controls=0&autoplay=1&showinfo=0&mute=1&playsinline=1&loop=1&playlist=mrNVZZB9LSI"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div className="container header-content">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <div className="display-t">
                  <div className="display-tc animate-box header-action">
                    <h1>
                      {t('jarvis')} &amp; {t('ceci')}
                    </h1>

                    {/* <h2>{t('header_married')}</h2> */}
                    {/* <div className="simply-countdown simply-countdown-one"></div> */}

                    <Modal
                      className="video-modal"
                      closeIcon
                      basic
                      onClose={() => setOpen(false)}
                      onOpen={() => setOpen(true)}
                      open={open}
                      size="fullscreen"
                      trigger={
                        <div className="header-play">
                          <img src={require('./images/play.png')} />
                        </div>
                      }
                    >
                      <Modal.Content>
                        <iframe
                          className="video-full"
                          src="https://www.youtube.com/embed/mrNVZZB9LSI?controls=1&autoplay=1"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </Modal.Content>
                    </Modal>

                    {/* <p>
                      <a href="#" className="btn btn-default btn-sm">
                        {t('header_save_the_date')}
                      </a>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div id="fh5co-couple">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                {/* <span>{t('intro_subheader')}</span> */}
                <h2>{t('intro_hello')}</h2>
                {/* <h3>{t('intro_location')}</h3> */}
                {/* <p>{t('intro_text')}</p> */}
              </div>
            </div>

            <div className="row couple-wrap animate-box">
              <div className="couple-half">
                <div className="groom">
                  <img src={require('./images/groom.jpg')} alt="groom" className="img-responsive" />
                </div>
                <div className="desc-groom">
                  <h3>{t('jarvis')}</h3>
                  <p>{t('intro_groom')}</p>
                </div>
              </div>
              <p className="heart text-center">
                <i className="icon-heart2"></i>
              </p>
              <div className="couple-half">
                <div className="bride">
                  <img src={require('./images/bride.jpg')} alt="bride" className="img-responsive" />
                </div>
                <div className="desc-bride">
                  <h3>{t('ceci')}</h3>
                  <p>{t('intro_bride')}</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 col-md-offset-0">
                <ul className="timeline animate-box">
                  {[require('./images/story-1.jpg'), require('./images/story-2.jpg')].map(
                    (v, idx) => {
                      return (
                        <li
                          className={`animate-box ${idx % 2 == 1 ? 'timeline-inverted' : ''}`}
                          key={idx}
                        >
                          <div
                            className="timeline-badge"
                            style={{ backgroundImage: `url(${v})` }}
                          ></div>
                          <div className="timeline-panel">
                            <div className="timeline-heading">
                              {/* <h3 className="timeline-title">First We Meet</h3> */}
                              {/* <span className="date">December 25, 2015</span> */}
                            </div>
                            <div className="timeline-body">
                              <p>{t(`intro_text_${idx}`)}</p>
                            </div>
                          </div>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          id="fh5co-event"
          className="fh5co-bg"
          style={{ backgroundImage: `url(${require('./images/propose.jpg')})` }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                <h2>{t('event_title')}</h2>
                <p className="event_loc">{t('event_location')}</p>
                <p className="event_time">{t('event_time')}</p>
              </div>
            </div>
            <div className="row">
              <div className="display-t">
                <div className="display-tc">
                  <div className="col-md-10 col-md-offset-1">
                    <div className="col-md-6 col-sm-6 text-center">
                      <div className="event-wrap animate-box">
                        <h3>{t('wedding_location')}</h3>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.5346490690476!2d105.84322055107512!3d21.051297985917476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb3bc3a75a9%3A0x8d7d3e603a3d6572!2sSoftWater%20Restaurant!5e0!3m2!1sen!2s!4v1668451146102!5m2!1sen!2s"
                          width="100%"
                          height="300px"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 text-center">
                      <div className="event-wrap animate-box">
                        <h3>{t('wedding_agenda')}</h3>

                        <div className="wedding-plan-container">
                          {[
                            [require('./images/photo-camera.png'), '16:30'],
                            [require('./images/wedding-rings.png'), '17:30'],
                            [require('./images/champagne.png'), '18:00'],
                            [require('./images/microphone.png'), '19:00']
                          ].map(([i, time], idx) => {
                            return (
                              <div className="wedding-plan" key={idx}>
                                <img src={i} />
                                <div className="wedding-plan-info">
                                  <div className="time">{time}</div>
                                  <div>{t(`wedding_${idx}`)}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="fh5co-gallery">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                <h2>{t('joinus_header')}</h2>
                <p>{t('joinus_text')}</p>
              </div>
            </div>

            <div className="row row-bottom-padded-md">
              <div className="col-md-12 text-center">
                <Button
                  basic
                  color="teal"
                  size="massive"
                  onClick={() => {
                    window.open('https://forms.gle/p4UTv3cEkHJXC9su6', '_blank');
                  }}
                >
                  {t('joinus_btn')}
                </Button>
              </div>
            </div>

          </div>
        </div>

        <div id="fh5co-gallery" className="fh5co-section-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                <span>{t('gallery_sub')}</span>
                <h2>{t('gallery_header')}</h2>
              </div>
            </div>
            <div className="row row-bottom-padded-md">
              <div className="col-md-12">
                <div className="gallery">
                  {Object.values(weddingImages).map((i, idx) => {
                    return (
                      <img
                        key={idx}
                        src={i}
                        onClick={() => {
                          window.open(i, '_blank');
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer id="fh5co-footer" role="contentinfo">
          <div className="container">
            <div className="row copyright">
              <div className="col-md-12 text-center">
                <p>
                  <small className="block">&copy; 2022. jarvicilia | forever love</small>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="gototop js-top">
        <a href="#" className="js-gotop">
          <i className="icon-arrow-up"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
