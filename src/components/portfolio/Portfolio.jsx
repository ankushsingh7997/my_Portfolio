import React from 'react';
import chatGpt from '../../assets/chatGpt.jpeg';
import Amazon from '../../assets/amazon.png';
import weatherApp from '../../assets/weatherApp.png';
import urlShort from '../../assets/urlShortner.jpg';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'chatGpt',
      img: chatGpt,
      description:
        `ChatGPT is an AI language model capable of generating human-like text responses.`,
      technologies: 'ReactJs | NodeJs | MongoDb | expressJs |Aws S3 ',
      link: 'https://summer-code-project-front-end-mnio.vercel.app/',
      github: 'https://github.com/ankushsingh7997/ChatGptProjectBackend.git',
    },
    {
      id: 2,
      title: 'Amazon Clone',
      img: Amazon,
      description:
        'An impressive Amazon clone showcasing a fully functional e-commerce platform, featuring a wide range of products and seamless user experience.',
      technologies: 'Nodejs | ExpressJs | Mongodb | AWS S3',
      link: 'https://github.com/ankushsingh7997/Amazon_Clone.git',
      github: 'https://github.com/ankushsingh7997/Amazon_Clone.git',
    },
    {
      id: 3,
      title: 'Weather App',
      img: weatherApp,
      description: 'The weather app provides real-time weather information, forecasts, and intuitive user interface for easy access to weather data.',
      technologies: 'ReactJs | React Icons | JavaScript | css ',
      link: 'https://github.com/ankushsingh7997/weatherApp.git',
      github: 'https://github.com/ankushsingh7997/weatherApp.git',
    },
    {
      id: 4,
      title: 'Url Shortner',
      img: urlShort,
      description:
        'A URL shortener is a tool that takes long website addresses and creates shortened, concise URLs that are easier to share, remember, and track click-through rates for marketing purposes.',
      technologies: 'nodeJs | ExpressJs | Redis |MongoDb ',
      link: 'https://github.com/ankushsingh7997/myUrlShortner.git',
      github: 'https://github.com/ankushsingh7997/myUrlShortner.git',
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
