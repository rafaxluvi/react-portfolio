import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5> What skills i have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
             <div>
             <h4>HTML</h4>
              <small className="text-light">Experienced</small>
             </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>React</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Javascript</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>JSON</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* end of front end */}
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>SQL</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Node.js</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>.NET</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>RESTful API</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>C#</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
          </div>
      </div>
    </section>
  );
};

export default Experience;
