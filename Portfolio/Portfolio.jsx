import React from 'react'
import "./portfolio.css"
import Immersed from "../../assets/immersed1.png"

const Portfolio = () => {
  const data = [
    {
      id:1,
      image: Immersed,
      title : "Immersed",
      github: "https://github.com/rafaxluvi/Comments",
      demo: "https://immersed.azurewebsites.net"
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
       {
        data.map(({id, image, title, github, demo}) => {
          return(
          <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt= ""/>
          </div>
          <h3>{title}</h3>
        <div className='portfolio__item-cta'>
        <a href={github} className='btn'  target='_blank' rel="noreferrer">Github</a>
          <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
        </article>)
        })
       }
        
      </div>
    </section>
  )
}

export default Portfolio
