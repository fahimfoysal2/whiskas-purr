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
                <br /> Feed their Purr.{" "}
              </h3>
            </div>
            <div className="music-player-tabs-wrap">
              <Tabs>
                <TabList>
                  <Tab>Watch the Purr</Tab>
                  <Tab>Listen to the Purr</Tab>
                </TabList>

                <TabPanel>
                  <div className="youtube-player-area">
                    <iframe
                      width="564"
                      height="400"
                      src="https://www.youtube.com/embed/ByH9LuSILxU"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
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
