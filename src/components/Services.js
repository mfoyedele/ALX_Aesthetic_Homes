import React from 'react'
import styled from 'styled-components'
// import { services } from '../utils/constants'
import { GiDiamondHard } from "react-icons/gi";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { GiDiamondTrophy } from "react-icons/gi";


const service = [
  {
    id: 1,
    icon: <GiDiamondTrophy />,
    title: 'mission',
    text: 'At Aesthetic Homes, our mission is to inspire and empower individuals to create homes that reflect their unique style and personality. We strive to curate a diverse range of high-quality dinnerware and furniture, fostering a seamless fusion of aesthetics and functionality. With a commitment to excellence, we aim to elevate everyday living and transform houses into true reflections of individuality and taste.'
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'As we look to the future, Aesthetic Homes envisions becoming the go-to destination for those seeking unparalleled home aesthetics. We aspire to continuously innovate and expand our curated collections, setting new standards for quality and design in the houseware industry. Our vision is to be a trusted source that empowers customers to express themselves through thoughtfully curated and meticulously crafted home essentials.'
  },
{
    id: 3,
    icon: <MdOutlineHistoryEdu />,
    title: 'history',
    text: 'Founded five years ago, Aesthetic Homes emerged from a passion for creating living spaces that resonate with personal style. Since our inception, we have been dedicated to sourcing and curating the finest dinnerware and furniture, establishing ourselves as a beacon of taste and quality. Over the years, we have grown from a vision into a thriving platform, connecting with individuals who share our appreciation for the art of home aesthetics.'
  }
]
const Services = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <article className='header'>
          <h3>
            custom furniture <br /> built only for you
          </h3>
          <p>
            Rooted in a passion for harmonizing style with functionality, we have curated a collection of exceptional dinnerware and furniture that embody the essence of individuality. 
          </p>
        </article>
        <div className='services-center'>
          {service.map((service) => {
            const { id, icon, title, text } = service
            return (
              <article className='service' key={id}>
                <span className='icon'>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;

  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`
export default Services
