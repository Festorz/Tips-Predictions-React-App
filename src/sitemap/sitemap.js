import App from '../App';
import {Generator} from 'react-router-sitemap-generator';
// import {rou} from 'react-router-dom'


const generator = new Generator(
    'https://react-router-sitemap-generator.com',
    App(),
  {
    lastmod: new Date().toISOString().slice(0, 10),
    changefreq:'monthly',
    priority: 0.8,
  }
);
generator.save('public/sitemap.xml');