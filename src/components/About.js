import "./About.css"
import profilePhoto from "../assets/mirai-tower-top.jpg"

export default function About() {
  return (
    <div className="about-us" id="about-top">
      <h2>About Koshobai</h2>
      <div className="about-content">
        <img src={profilePhoto} alt="mirai-tower" className="about-photo" />
        <div className="about-text">
          <p>
            Koshobai (コショバイ) is a business venture that was created to
            bridge cultures and create opportunities within Japan for game
            company owners from overseas.
          </p>
          <p>
            We have a direct partnership with&nbsp;
            <strong>
              <a href="https://newborn.co.jp/index.html#sec04">
                NewBorn Honsya
              </a>
            </strong>
            , an established business consultancy and licensed realtor based in
            Nagoya.
          </p>
          <p>
            Together, we provide expert guidance for those looking to navigate
            Japan's unique business and real estate landscape.
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  )
}
