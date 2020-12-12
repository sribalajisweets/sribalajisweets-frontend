import React from 'react'
import { StaticQuery, graphql, withPrefix, Link } from 'gatsby'
import Layout from "../layouts/index.js"
import EmblaCarousel from "../common/EmblaCarousel.js";
import cakeImage from '../media/valentaine.png';
import marriageCakeImage from '../media/cake_marriage.jpg';
import Banner1 from '../media/banner-1.png';
import Banner3 from '../media/banner-3.png'

import ladduImage from '../media/laddu.png';
import singleCake from '../media/singleCake.png';
import cupcakeImage from '../media/cupcakes.png';
import HealthyOption from '../media/HealthyOption1.jpg';
import jilebiImage from '../media/jilebi.jpg';
import specialOccasion from '../media/specialOccasion.jpg'

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default () => (
  <StaticQuery
    query={graphql`
      query CatalogueQuery {
        products: allDatoCmsProduct {
          edges {
            node {
              id
              name
              price
              image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}

    render={data => (
      <Layout site={data.site}>
        <EmblaCarousel autoplay delayLength={5000}  >
        <div> <img src={Banner1} alt="image" /> </div>
           <div> <img src={ladduImage} alt="image" /> </div>
           {/* <div> <img src={marriageCakeImage} alt="image" /> </div> */}
          <div> <img src={cakeImage} alt="image" /> </div>
          <div> <img src={Banner3} alt="image" /> </div>
          {/* <div> <img src={singleCake} alt="image" /> </div> */}
          <div> <img src={cupcakeImage} alt="image" /> </div>
        </EmblaCarousel>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="notification">
                <img src={HealthyOption} alt="image" />
                </div>
              </div>
              <div className="column">
                <div className="notification">
                <img src={jilebiImage} alt="image" />
                </div>
              </div>
              <div className="column">
                <div className="notification">
                <img src={specialOccasion} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )}
  />
)
