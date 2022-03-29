import React from "react";
import { Container } from "react-bootstrap";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./music-player.scss";
const MusicPlayer = () => {
  return (
    <div>
      <div className="music-playerinner-wrap">
        <Container>
          <div className="music-player-inner-content-wrap">
            <div className="music-player-content-top">
              <h3>
                Love the Purr, Feel the Purr,
                <br /> Feed their Purr.
              </h3>
            </div>
            <div className="music-player-tabs-wrap">
              <Tabs>
                <TabList>
                  <Tab>
                    <span>
                      <i className="fa-brands fa-youtube"></i>
                    </span>
                    Watch the Purr
                  </Tab>
                  <Tab>
                    <span>
                      <i className="fa-brands fa-spotify"></i>
                    </span>
                    Listen to the Purr
                  </Tab>
                </TabList>

                <TabPanel>
                  <div className="youtube-player-area">
                    <iframe
                      width="564"
                      height="400"
                      src="https://www.youtube.com/embed/ByH9LuSILxU"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </TabPanel>
                <TabPanel>
                  <iframe
                    src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
                    title="spotify music player"
                    width="564"
                    height="400"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MusicPlayer;
