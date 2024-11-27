import React from "react";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="who-are-we">
          <h2>Who Are We ?</h2>
          <p>
            Welcome to <bold>“YourYouthBook”!</bold> We are a special place
            where you can capture and cherish all the precious moments of your
            child. Whether it's the first smile, the first steps or birthday
            parties, here you can share and save everything.
          </p>
          <ul>
            <li>
              <div>
                <h3>Why YourYouthBook ?</h3>
                <p>
                  Safe and Private: You have complete control over who can
                  access the website. Only you and your immediate family can
                  view the memories .
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Easy to Use</h3>
                <p>
                  Our intuitive interface makes it easy to add photos and
                  stories. No technical knowledge required!
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Eternal Love</h3>
                <p>
                  This is a gift your child will cherish forever. A digital
                  treasure chest full of love and emotions.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="feature-description">
          <ul>
            <li>
              <div className="feature-image-container">
                <i className="icofont-question-circle"></i>
              </div>
              <div>
                <h3>How does it work?</h3>
                <p>
                  Photos and Videos: Upload photos and videos of your child.
                  From cute baby photos to school performances, anything is
                  welcome!
                </p>
              </div>
            </li>
            <li>
              <div className="feature-image-container">
                <i className="icofont-meetme"></i>
              </div>
              <div className="feature-description">
                <h3>Special Moments</h3>
                <p>
                  Write about the milestones and special moments in your child's
                  life. Think about the first time they lost a tooth, their
                  favorite bedtime stories, or funny things they said.
                </p>
              </div>
            </li>
            <li>
              <div className="feature-image-container">
                <i className="icofont-ui-lock"></i>
              </div>
              <div className="feature-description">
                <h3>History</h3>
                <p>
                  We keep everything safe, so that your child can look back on a
                  beautiful history on their 18th birthday. A gift full of love
                  and memories!
                </p>
              </div>
            </li>
            <li>
              <div className="feature-image-container">
                <i className="icofont-edit-alt"></i>
              </div>
              <div className="feature-description">
                <h3>Manage your account</h3>
                <p>
                  Manage who you invite to also write/post on your child's page.
                  Think of Grandpa and Grandma but also the teacher of the
                  primary school or the maternity care.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div className="join-us">
        <h3>Join us!</h3>
        <button className="hero__button join">
          Register now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            className="hero__arrow"
          >
            <path d="M16.671,9.998 L12.997,9.998 L16.462,6.000 L5.000,6.000 L5.000,4.000 L16.462,4.000 L12.997,0.002 L16.671,0.002 L21.003,5.000 L16.671,9.998 ZM17.000,5.379 L17.328,5.000 L17.000,4.621 L17.000,5.379 ZM-0.000,4.000 L3.000,4.000 L3.000,6.000 L-0.000,6.000 L-0.000,4.000 Z"></path>
          </svg>
        </button>
        <p>
          Register today and start documenting your child's beautiful journey.
          "YourYouthBook" - because every smile, every tear and every moment
          counts.
        </p>
      </div>
    </>
  );
};

export default About;
