import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'
const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            At Aesthetic Homes, our story is one of passion, vision, and a deep appreciation for the art of transforming living spaces. Founded five years ago, our journey began with the belief that a home should be a reflection of individual style. From the outset, we dedicated ourselves to curating a collection of exceptional dinnerware and furniture, meticulously chosen for their ability to seamlessly blend aesthetics and functionality.

Over the years, Aesthetic Homes has evolved into a destination for those seeking unparalleled elegance in their homes. Our commitment to quality and timeless design has shaped our identity, and our curated selections have found their way into homes where personal style is celebrated.

As we mark our five-year milestone, our story continues to unfold with a dedication to inspire and empower individuals in their pursuit of creating homes that resonate with their unique essence. Join us on this journey, where each piece tells a story, and every home becomes a canvas for self-expression. Aesthetic Homes – where style meets substance, and your story becomes part of ours.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
