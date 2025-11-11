import "./Event.css"
import profilePhoto from "../assets/mirai-tower-top.jpg"

export default function Event() {
  return (
    <div className="event" id="css">
      <h2>About Koshobai</h2>
      <div className="about-content">
        <img src={profilePhoto} alt="mirai-tower" className="about-photo" />
        <div className="about-text">
          <p>
            Koshobai (コショバイ) is a business venture that was created to
            bridge cultures and create opportunities within Japan for game
            company owners from overseas.
          </p>
          <p>Come hang out with us at Second Home on Mr Miyamoto's birthday!</p>
          <p>Sunday, November 16th 2025 at 1pm in Fushimi, Nagoya, Japan.</p>
          <div
            className="map-container"
            style={{ width: "100%", overflow: "hidden" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.564423091887!2d136.89685197595227!3d35.16748235802432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037778911752c1%3A0x5fb5c2cbda9967bc!2sSecond%20Home!5e0!3m2!1sen!2sjp!4v1762826755237!5m2!1sen!2sjp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Embedded Google Map of Second Home"
            ></iframe>
          </div>
          <p>
            This event is a casual gathering for game developers and enthusiasts
            of language learning. Whether you're a seasoned developer or just
            starting out, everyone is welcome to join us for an evening of fun
            and networking. This Sunday we will be celebrating the birthday of
            Shigeru Miyamoto, the legendary game designer behind iconic
            franchises like Mario, Zelda, and Donkey Kong.
          </p>

          <a href="https://youtu.be/VtHiBZ3jn8g">
            Give <strong>this conference call </strong>on ludology a listen if
            you have the time.
          </a>

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
