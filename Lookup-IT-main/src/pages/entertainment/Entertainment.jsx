import React from "react";
import "./Entertainment.scss";
import entertainment from "../../Assets/images/entertainment.png";
import dots from "../../Assets/images/dots.png";
import line from "../../Assets/images/our line.png";
import rectangle1 from "../../Assets/images/Rectangle 36.png";
import rectangle2 from "../../Assets/images/Rectangle 37.png";
import rectangle3 from "../../Assets/images/Rectangle 38.png";
import rectangle4 from "../../Assets/images/Rectangle 39.png";
import Cdot from '../../Assets/images/Cdot.png'

const Entertainment = () => {
  return (
    <div className="entertainment">
      <div className="entertainment_container">
        <div className="entertainment_container_header">
          <div className="entertainment_container_header_content">
            <p className="heading_entertainment">Entertainment</p>
            <p className="content_entertainment">
              Unleash Your Imagination: Captivating Audiences, Shaping
              Experiences
            </p>
          </div>
        </div>
      </div>
      <div className="industry_container">
        <div className="industry_container_card">
          <div className="industry_container_card_content">
            <p className="industry_heading">Entertainment Industry</p>
            <p className="industry_content">
              Lookup It Solutions has developed unique concept based game
              application on web. Online portal provide online game for song.
              Games are created and controlled by a game show host. The host has
              an account that allows setting up of games by managing playlists
              and running the actual game event. Prior to the actual game event,
              the host needs to decide and, if needed, configure playlists. For
              the game, a song is played through the game host’s computer. The
              music is played back through a sound system dedicated to the
              environment. While the song is playing back, the song title and
              artist are obscured on the screen, and slowly revealed. Think
              Vanna White turning the letter blocks on Wheel of Fortune one at a
              time. Once the song starts to play, participants can submit
              guesses for the artist/title. A correct guess can earn a maximum
              of 100 points for the artist, and 100 points for the title.
              Players can enter guesses for both title and artist and submit
              both, or submit each guess separately. When the song starts, the
              point counter starts at 100 points for the artist and title and as
              more clues are revealed in the song artist and title, the points
              decrease down to zero. The game consists of two different modes,
              normal and tournament. Normal gameplay is a single game in which
              each contestant is submitting guesses, and an overall leader is
              established. Tournament play is where multiple rounds are used to
              reduce the number of players to a single champion. In tournament
              play, players with the lowest scores are prevented from continuing
              in the next round.
            </p>
            <p className="industry_heading2">
            Several external connections are present for various features, including:
            </p>
            <ul>
              <li>Dropbox for storing music files</li>
              <li> Com for monitoring</li>
              <li>Com for state communication with clients</li>
              <li> Com for staging hosting</li>
              <li>Stripe for payment API</li>
            </ul>
            <img src={entertainment} alt="" className="img1"/>
            <img src={dots} alt="" className="img2" />
            <img src={Cdot} alt="" className="img3" />
          </div>
        </div>
      </div>
      <div className="ourwork">
        <div className="ourwork_container">
          <div className="ourwork_container_heading">
            <p>Our Recent work</p>
          </div>
          <div className="ourwork_container_line">
            <img src={line} alt="" />
          </div>
        </div>
      </div>
      <div className="ourwork_container2">
        <div className="ourwork_container2_img">
          <img src={rectangle1} alt="" className="ourimg1" />
          <div>
            <img src={rectangle2} alt="" className="ourimg2" />
            <img src={rectangle3} alt="" className="ourimg3" />
            <img src={rectangle4} alt="" className="ourimg4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
