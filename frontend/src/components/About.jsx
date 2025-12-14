import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
             Delicious food dishes bring joy to everyone and make every meal special. Around the world, there are countless tasty dishes that people love. In India, dishes like butter chicken, biryani, samosas, and paneer tikka are famous for their rich flavors and spices. Internationally, foods like pizza, pasta, sushi, and burgers are loved for their unique taste and variety. Each dish has its own story, ingredients, and cooking style that make it special. Good food not only satisfies our hunger but also brings people together and creates happy memories. </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
