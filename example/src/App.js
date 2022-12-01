import React from 'react'
import bannerImg from './assets/hero.jpg'
import bannerlogo from './assets/bannerlogo.svg'
import leftBg from './assets/office.jpg'
import rightBg from './assets/workclub.jpg'
import detailImg from './assets/detailImg.jpg'
import Logo from './assets/Logo.svg'

import { HomePage } from 'knotel-website-ui'
import 'knotel-website-ui/dist/index.css'
import 'knotel-website-ui/dist/css/style.css'
import 'knotel-website-ui/dist/css/pagination.css'

const widgets = [
  {
    type: 'hero_banner',
    desktop_image: bannerImg,
    title: 'Introducing',
    title_image: bannerlogo,
    button_label: 'Enquire',
    button_url: '/'
  },
  {
    type: 'text',
    bg_color: 'green',
    text: '<span> Workclub </span> hubs with access to your own branded <span> private office </span> in key gateway cities across the globe.'
  },
  {
    type: 'menu_section',
    items: [
      {
        image: leftBg,
        title: 'Office',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing eliti'
      },
      {
        image: rightBg,
        title: 'Workclub',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing eliti'
      }
    ]
  },
  {
    type: 'text_image_block',
    items: [
      {
        title: 'Lorem ipsum dolor',
        sub_title: 'Tempus scelerisque felis',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus scelerisque felis lobortis commodo quis. Pulvinar leo ac, lacinia nibh tincidunt. ',
        button_label: 'Learn more',
        button_url: '/',
        image: detailImg,
        image_position: 'right'
      },
      {
        title: 'Lorem ipsum dolor',
        sub_title: 'Tempus scelerisque felis',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus scelerisque felis lobortis commodo quis. Pulvinar leo ac, lacinia nibh tincidunt. ',
        button_label: 'Learn more',
        button_url: '/',
        image: detailImg,
        image_position: 'left'
      }
    ]
  }
]

const footerLinks = [
  {
    title: 'Company',
    links: [
      {
        label: 'Presxs',
        link: '/'
      },
      {
        label: 'Careers',
        link: '/'
      },
      {
        label: 'Blog',
        link: '/'
      }
    ]
  },
  {
    title: 'Partners',
    links: [
      {
        label: 'Brokers',
        link: '/brokers'
      },
      {
        label: 'Landlords',
        link: '/landlords'
      },
      {
        label: 'Customers',
        link: '/'
      }
    ]
  },
  {
    title: 'Legal',
    links: [
      {
        label: 'Privacy policy',
        link: '/'
      },
      {
        label: 'Terms of use',
        link: 'terms-of-use'
      },
      {
        label: 'Customer terms & conditions',
        link: '/'
      }
    ]
  }
]

const socials = [
  {
    icon: 'fab fa-linkedin-in',
    link: '/'
  },
  {
    icon: 'fab fa-instagram',
    link: '/'
  },
  {
    icon: 'fab fa-facebook-f',
    link: '/'
  },
  {
    icon: 'fab fa-twitter',
    link: '/'
  }
]

const subscribeLabel = 'Subscribe'
const contactEmail = 'hellohello@knotel.com'
const footerLeftText =
  'Flexible workspace to power your people, productivity, and business.'
const footerRightText = 'Copyright © 2022 Knotel. All rights reserved.'

const App = () => {
  return (
    <HomePage
      headerProps={{
        logo: Logo,
        links: [
          {
            text: 'Office',
            url: '/office'
          },
          {
            text: 'WorkClub',
            url: '/workclub'
          }
        ]
      }}
      footerProps={{
        logo: Logo,
        footerLinks,
        socials,
        subscribeLabel,
        contactEmail,
        footerLeftText,
        footerRightText
      }}
      widgets={widgets}
    />
  )
}

export default App
