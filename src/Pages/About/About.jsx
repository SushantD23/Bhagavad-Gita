import React from "react";
import "./About.css";
import bg from "../../assets/bg.webp";

function About() {
  return (
    <>
      <div className="mainwrapper">
        <div className="heading">
          <h1>
            About <span> Bhagavad Gita </span>
          </h1>
        </div>
        <img src={bg} alt="krishna_image" />
        <div className="aboutwrapper">
          <div className="overview">
            <h2>A Sacred Dialogue of Eternal Wisdom:</h2>
            <p>
              Welcome to the Bhagavad Gita, a profound spiritual text that
              transcends time and place. Embedded within the epic Mahabharata,
              the Gita is a cherished dialogue between Prince Arjuna and Lord
              Krishna, who serves as his divine charioteer. Set against the
              dramatic backdrop of the Kurukshetra battlefield, this sacred
              conversation emerges as Arjuna faces a moral and existential
              crisis, leading to a revelation that resonates through the ages.
            </p>
          </div>
          <div className="context">
            <h2>A Moment of Divine Guidance:</h2>
            <p>
              On the brink of a great war, Arjuna finds himself overwhelmed by
              doubt and conflict. At this critical juncture, Krishna imparts
              timeless wisdom, guiding Arjuna through his confusion. This
              dialogue is not just about the battlefield but about the inner
              struggles of every human being, offering insights into the nature
              of duty, righteousness, and spiritual fulfillment.
            </p>
          </div>
          <div className="outcome">
            <h2>Essence of the Teachings:</h2>
            <ul style={{ listStyleType: "circle" }}>
              <li>
                <span>Dharma (Duty)</span>: Discover the essence of fulfilling
                one's duty with honor and integrity, regardless of personal
                stakes.
              </li>
              <li>
                <span>Yoga (Pathways to Enlightenment)</span>: Explore the
                diverse paths to spiritual enlightenment, including Karma Yoga
                (the Yoga of Selfless Action), Bhakti Yoga (the Yoga of
                Devotion), and Jnana Yoga (the Yoga of Knowledge).
              </li>
              <li>
                <span>Detachment</span>: Embrace the art of performing one's
                duties with detachment, focusing on action rather than the
                fruits of labor.
              </li>
            </ul>
          </div>
          <div className="structure">
            <h2>The Heart of the Gita:</h2>
            <p>
              The Gita is beautifully structured into 18 chapters, each known as
              a “Yoga” — a discipline or path. Each chapter reveals a unique
              aspect of life, duty, and spirituality, offering a holistic view
              of the human experience and spiritual growth.
            </p>
          </div>
          <div className="impact">
            <h2>A Beacon of Inspiration:</h2>
            <p>
              The Bhagavad Gita is more than a scripture; it is a beacon of
              wisdom that transcends time and culture. Its teachings have
              inspired countless souls across the globe, enriching minds and
              nurturing hearts with its universal truths.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
