import { Link } from "react-router-dom";

export default function Sessions() {
  return (
    <div>
      <header>
        <h2>Personalized Sessions</h2>
      </header>
      <div className="session-container">
        <div className="session-crystal-container">
          <h3>Crystals</h3>
          <div className="session-crystal">
            <img
              className="session-crystal-img"
              src="https://imgur.com/PPXLqFe"
            />
          </div>
          <div className="session-crystal-info">
            <p>
              Each crystal is said to have a different effect on the mind and
              body. Crystals’ vibrations are said to arise from the unique way
              their atoms and molecules move and interact. These vibrations and
              energies can then supposedly affect our human bodies—and minds.
              Humans have used stones for healing and energetic purposes for
              thousands of years, crystals are a unique way to help direct and
              influence that energy towards greater health when used with the
              right intention. Grace will take the energy of the specific
              crystal, clear it with intention and spiritual material and then
              use it to remove/ restore the negative energy based on the person,
              and or situation.
            </p>
          </div>
        </div>
        <div className="session-candle-container">
          <h3>Candles</h3>
          <div className="session-candle">
            <img
              className="sessions-candle-img"
              src="https://mindbodygreen-res.cloudinary.com/images/w_767,q_auto:eco,f_auto,fl_lossy/org/fbpim1pj7k9da6uyp/a-ritual-for-making-your-own-light-as-the-days-get-darker.jpg"
            />
          </div>
          <div className="sessions-candles-info">
            <p>
              The white candle represents the highest level of consciousness.
              Burning a white candle in conjointment with a meditative state is
              to seek protection, healing and purification. White represents
              truth, unity, harmony, and wholeness of spirit and can be a
              powerful tool when coupled with intention, meditation, and
              spiritual materials. Grace uses specific candles to connect better
              to source, when trying to clear energy and or connect to the
              energy of a specific person.
            </p>
          </div>
        </div>
        <div className="sessions-chakra-container">
          <h3>Chakras</h3>
          <div className="session-chakra">
            <img
              className="session-chakra-img"
              src="data:image/jpeg;base64,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"
            />
          </div>
          <div className="session-chakra-info">
            <p className="session-chakra-intro">
              Chakra (known and pronounced as “cha”-“kra”) is an ancient
              Sanskrit word that literally translates to mean wheel, circle or
              energy center. Within every living being exists seven centers
              located in their body with this spinning energy. It starts at the
              base of your spine and moves all the way up to the very top of
              your head. If you happen to have any blocked energy in the
              chakras, for any reason, it can and often leads to sickness, sore
              throat, heartburn, body pains, drained energy and even extreme
              levels to the point where you feel lifeless (colds, flu-like
              symptoms).
            </p>
            <p>
              The <span className="session-crown">Crown Chakra,</span> or
              seventh chakra, is located at the top of the head and is our
              direct connection to the Universe. It has also been seen as the
              center for deeper connection with ourselves and deeper connection
              with the very life force that is greater than ourselves. It is
              most known as the center for trust, inspiration, happiness,
              devotion and positivity. It signifies beauty, renewal, and also
              purity.
            </p>
            <p>
              Physically located between the eyebrows, the{" "}
              <span className="session-eye">Third Eye,</span> or sixth chakra,
              is said to rule organs including the pituitary gland, eyes, head,
              and lower part of the brain. governs your intuition—plus the
              ability to recognize and tap into it. What's more, the third eye
              is also said to be responsible for all things between you and the
              outside world, serving as a bridge between the two. It allows you
              to cut through any illusions and drama to see the clear picture.
            </p>
            <p>
              The <span className="session-throat">Throat Chakra,</span> or
              fifth chakra, is associated with the thyroid, parathyroid, jaw,
              neck, mouth, tongue, and larynx. Have zero problem saying how you
              feel? Your fifth chakra, which is all about speaking your inner
              truth—or specifically, ensuring that your inner truths are
              properly communicated—is likely well-balanced. When this chakra is
              in check, you're able to fully listen as well as speak and express
              yourself clearly.
            </p>
            <p>
              The <span className="session-heart">Heart Chakra,</span> or the
              fourth chakra, is located at the center of the chest,
              encapsulating the heart, the thymus gland (which plays a vital
              role in your endocrine and lymphatic system), the lungs, and the
              breasts. It represents where the physical and the spiritual meet,
              and as its name implies, is all about the love. It's believed that
              when your heart chakra is aligned and balanced, love and
              compassion are flowing freely—both in terms of giving it out and
              getting it back.
            </p>
            <p>
              The <span className="session-solar">Solar Plexus Chakra,</span> or
              the third chakra, can be found from the navel to about the
              ribcage, it reportedly governs all things metabolic, digestive,
              and stomach-related. It is said to be your source of individual
              power, ruling over self-esteem. It is the action and balance
              chakra that focuses on individual willpower, personal power, and
              commitment.
            </p>
            <p>
              The <span className="session-sacral">Sacral Chakra, </span> or the
              second chakra, houses our emotions, passions and pleasures–the
              things that emotionally satiate us and give us joy and is
              considered the creative and sexual energy center of the body. When
              your sacral chakra is aligned, you'll likely feel great: You're
              friendly, passionate, and successfully fulfilled while also
              eliciting feelings of wellness, abundance, pleasure, and joy. By
              honoring your body and expressing yourself creatively, you're
              keeping the energy wheels turning and fluid.
            </p>
            <p>
              The <span className="session-root">Root Chakra,</span> or the
              first chakra, is associated with the base of the spine, the pelvic
              floor, and the first three vertebrae. Think about your root chakra
              as the foundation of a house, except it is your body—when in
              balance it's sturdy, stabilizing, and supportive. As such, it's
              responsible for your sense of security and survival. It's also
              connected to whatever you use to ground yourself, including basic
              needs such as food, water, shelter, and safety, as well as your
              more emotional needs such as letting go of fear and feeling safe.
              As you well know, when these needs are met, you tend to worry
              less.
            </p>
          </div>
          <img className="session-bowls" src="https://imgur.com/xJWvW8g" />
          <p>
            Start your path to greater Fufillment <br />
            Want more information <br />
            <Link to="/contact">Contact us today</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
