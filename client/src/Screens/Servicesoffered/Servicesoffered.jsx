import { Link } from "react-router-dom";

export default function Servicesoffered() {
  return (
    <div>
      <h2>Services</h2>
      <div className="service-card-container">
        <div className="service-palm-card">
          <img className="service-palm-img" src="https://imgur.com/HUfWU3t" />
          <h4>One Palm Reading $35</h4>
          <h4>Two Ralm Reading $50</h4>
          <p>
            Palm reading is the art of reading charcters through not only lines
            in the hand, but the shape and length of the fingers. Palm readings
            help give insight into yourself and what is happening in your life
            at the present moment.
          </p>
        </div>
        <div className="service-tarot-card">
          <img className="service-tarot-img" src="https://imgur.com/IS7kn3m" />
          <h4>Tarot Cards $65</h4>
          <p>
            This type of reading can offer the client a very detailed spread of
            events. Specifically giving you guidance and direction in love,
            marriage, and career. This reading will give you a better sense of
            where you’re headed in life.
          </p>
        </div>
        <div className="service-psychic-card">
          <img
            className="service-psychic-img"
            src="https://images.unsplash.com/photo-1616785550406-0fd04cac3c24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGFyb3QlMjBjYXJkc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <h4>Psychic Reading $85</h4>
          <p>
            These readings are preformed by picking up the energy of a specific
            individuals aura. This reading will inform you of your past,
            present, and future events. Elements of your life such as family,
            career, success, love, and marriage will be revealed to you
          </p>
        </div>
        <div className="service-life-card">
          <img
            className="service-life-img"
            src="https://images.unsplash.com/photo-1548391350-968f58dedaed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          />
          <h4>Full Life Reading</h4>
          <p>
            This kind of reading answers all your burning questions on all
            things paranormal and spiritual. Everything you want to know about
            past, present, future, love, business, career, and so much more can
            be covered in this reading. You can re-unite with the one you love,
            heal a broken heart, and gain the confidence and peace of mind that
            comes from finally having answers.
          </p>
        </div>
        <div className="service-meditation-card">
          <img
            className="service-meditation-img"
            src="https://images.squarespace-cdn.com/content/v1/54d50dd9e4b00e8840853b7f/1589581234285-R2I6LW8KIVAPHEY4NS63/woman+meditating+with+candles?format=1000w"
          />
          <h4>Meditation Session $90 </h4>
          <p>
            Meditation is renouned for its many benefits. With the help of
            singing bowls, this meditation session will help clear up stagnant
            and or blocked energy and emotions, as well as bring clarity and
            bring peace from within, gain a new perspective on stressful
            situations, and increase self-awareness. This session also incudes a
            free Palm reading, as well as a free candle and salt bath to take
            home to continue working on the flow of energy.
          </p>
        </div>
      </div>
      <Link to="/home">
        <p>Back</p>
      </Link>
    </div>
  );
}
