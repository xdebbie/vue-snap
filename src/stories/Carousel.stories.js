import { boolean } from '@storybook/addon-knobs'

// Mocks
import carouselMock from '../mocks/carousel.js'

// Custom directive
import lazy from '../directives/lazy'

// Custom Demo CSS
import '../assets/_examples.scss'

export default {
  title: 'Carousel'
}

// Needs to be a function, its not working with simple object between stories
const commonProps = () => ({
  isNavigationKnob: {
    default: boolean('Navigation', true)
  },
  isVerticalKnob: {
    default: boolean('Vertical', false)
  },
  isScrollPageKnob: {
    default: boolean('Scroll per page', false)
  }
})

export const Default = () => ({
  data: () => ({ carouselMock }),
  props: commonProps(),
  template: `
    <carousel
      class="example-default"
      :navigation="isNavigationKnob"
      :vertical="isVerticalKnob"
      :scroll-page="isScrollPageKnob"
    >
      <slide
        v-for="{ id, content } in carouselMock"
        :key="id"
      >
        {{ content }}
      </slide>
    </carousel>
  `
})

export const Multiple = () => ({
  data: () => ({ carouselMock }),
  props: commonProps(),
  template: `
    <carousel
      class="example-multiple example-default"
      :navigation="isNavigationKnob"
      :vertical="isVerticalKnob"
      :scroll-page="isScrollPageKnob"
    >
      <slide
        v-for="{ id, content } in carouselMock"
        :key="id"
      >
        {{ content }}
      </slide>
    </carousel>
  `
})

export const Images = () => ({
  data: () => ({ carouselMock }),
  props: commonProps(),
  template: `
    <carousel
      class="example-images example-multiple"
      :navigation="isNavigationKnob"
      :vertical="isVerticalKnob"
      :scroll-page="isScrollPageKnob"
    >
      <slide
        v-for="{ id, content, image, name } in carouselMock"
        :key="id"
      >
        <img
          class="example-images__image"
          :src="image"
          :alt="name"
        />
      </slide>
    </carousel>
  `
})

export const Lazy = () => ({
  data: () => ({
    carouselMock
  }),
  directives: { lazy },
  props: commonProps(),
  template: `
    <carousel
      class="example-lazy example-images example-multiple"
      :navigation="isNavigationKnob"
      :vertical="isVerticalKnob"
      :scroll-page="isScrollPageKnob"
    >
      <slide
        v-for="{ id, content, image, name } in carouselMock"
        :key="id"
      >
        <img
          v-lazy="image"
          class="example-images__image example-lazy__image"
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          :alt="name"
        />
      </slide>
    </carousel>
  `
})