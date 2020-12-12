import React from 'react'
import { StaticQuery, graphql} from 'gatsby'
import Layout from "../layouts/index.js"
import EmblaCarousel from "../common/EmblaCarousel.js";
import cakeImage from '../media/valentaine.png';
import Banner1 from '../media/banner-1.png';
import Banner3 from '../media/banner-3.png'
import ladduImage from '../media/laddu.png';
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
        <div> <img src={Banner1} /> </div>
           <div> <img src={ladduImage}  /> </div>
          <div> <img src={cakeImage}  /> </div>
          <div> <img src={Banner3}  /> </div>
          <div> <img src={cupcakeImage}  /> </div>
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
