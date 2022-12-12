import React, { useState } from "react";
import bannerImg from "./assets/hero.jpg";
import bannerlogo from "./assets/bannerlogo.svg";
import leftBg from "./assets/office.jpg";
import rightBg from "./assets/workclub.jpg";
import detailImg from "./assets/detailImg.jpg";
import chevronDown from "./assets/chevronDown.svg";
import Logo from "./assets/Logo.svg";

import Page from "knotel-website-ui";
import "knotel-website-ui/dist/index.css";
import "knotel-website-ui/dist/css/style.css";
import "knotel-website-ui/dist/css/pagination.css";

// const widgets = [
//   {
//     type: "hero_banner",
//     desktop_image: bannerImg,
//     title: "Introducing",
//     title_image: bannerlogo,
//     button_label: "Enquire",
//     button_url: "/",
//   },
//   {
//     type: "text",
//     bg_color: "green",
//     text: "<span> Workclub </span> hubs with access to your own branded <span> private office </span> in key gateway cities across the globe.",
//   },
//   {
//     type: "menu_section",
//     items: [
//       {
//         image: leftBg,
//         title: "Office",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing eliti",
//         link: "/offices",
//       },
//       {
//         image: rightBg,
//         title: "Workclub",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing eliti",
//         link: "/workclubs",
//       },
//     ],
//   },
//   {
//     type: "text_image_block",
//     items: [
//       {
//         title: "Lorem ipsum dolor",
//         sub_title: "Tempus scelerisque felis",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus scelerisque felis lobortis commodo quis. Pulvinar leo ac, lacinia nibh tincidunt. ",
//         button_label: "Learn more",
//         button_url: "/",
//         image: detailImg,
//         image_position: "right",
//       },
//       {
//         title: "Lorem ipsum dolor",
//         sub_title: "Tempus scelerisque felis",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus scelerisque felis lobortis commodo quis. Pulvinar leo ac, lacinia nibh tincidunt. ",
//         button_label: "Learn more",
//         button_url: "/",
//         image: detailImg,
//         image_position: "left",
//       },
//     ],
//   },
// ];

const widgets = [
  {
    type: "left_right_banner",
    image: bannerImg,
    bg_color: "green",
    title: "Ullamcorper purus",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant ullamcorper placerat neque, pretium tortor.",
    button_label: "Location",
    button_url: "?g=location",
    border_line: true,
    icon: chevronDown,
  },
  {
    type: "text",
    bg_color: "lightblue",
    text: "<span>Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit. Orci rhoncus auctor duis suscipit lobortis id diam. Tortor eu feugiat euismod tempor eget sed cras.",
  },
  {
    id: "location",
    type: "image_slider",
    options: ["All", "UK", "Europe", "America"],
    items: [
      {
        location: "america",
        image: leftBg,
        title: "Atlanta",
        link: "https://www.deskeo.com/",
      },
      {
        location: "europe",
        image: rightBg,
        title: "Austin",
        link: "https://www.deskeo.com/",
      },
      {
        location: "uk",
        image: leftBg,
        title: "Berlin",
        link: "https://www.deskeo.com/",
      },
      {
        location: "america",
        image: rightBg,
        title: "New York",
        link: "https://www.deskeo.com/",
      },
      {
        location: "europe",
        image: leftBg,
        title: "Munich",
        link: "https://www.deskeo.com/",
      },
      {
        location: "uk",
        image: rightBg,
        title: "Scotland",
        link: "",
      },
      {
        location: "america",
        image: leftBg,
        title: "Houston",
        link: "",
      },
      {
        location: "europe",
        image: rightBg,
        title: "Oslo",
        link: "",
      },
      {
        location: "uk",
        image: leftBg,
        title: "Wales",
        link: "",
      },
      {
        location: "america",
        image: rightBg,
        title: "Los Angeles",
        link: "",
      },
      {
        location: "europe",
        image: leftBg,
        title: "Athens",
        link: "",
      },
      {
        location: "uk",
        image: rightBg,
        title: "Dublin",
        link: "",
      },
    ],
  },
  {
    type: "amenities",
    heading: "Amenities",
    items: [
      {
        image: leftBg,
        title: "Amenity name",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem arcu porta nisl sollicitudin posuere gravida rhoncus.",
      },
      {
        image: rightBg,
        title: "Amenity name",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem arcu porta nisl sollicitudin posuere gravida rhoncus.",
      },
      {
        image: leftBg,
        title: "Amenity name",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem arcu porta nisl sollicitudin posuere gravida rhoncus.",
      },
    ],
  },
];

const footerLinks = [
  {
    title: "Company",
    links: [
      {
        label: "Presxs",
        link: "/",
      },
      {
        label: "Careers",
        link: "/",
      },
      {
        label: "Blog",
        link: "/",
      },
    ],
  },
  {
    title: "Partners",
    links: [
      {
        label: "Brokers",
        link: "/brokers",
      },
      {
        label: "Landlords",
        link: "/landlords",
      },
      {
        label: "Customers",
        link: "/",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Privacy policy",
        link: "/",
      },
      {
        label: "Terms of use",
        link: "terms-of-use",
      },
      {
        label: "Customer terms & conditions",
        link: "/",
      },
    ],
  },
];

const socials = [
  {
    icon: "fab fa-linkedin-in",
    link: "/",
  },
  {
    icon: "fab fa-instagram",
    link: "/",
  },
  {
    icon: "fab fa-facebook-f",
    link: "/",
  },
  {
    icon: "fab fa-twitter",
    link: "/",
  },
];

const subscribeLabel = "Subscribe";
const contactEmail = "hellohello@knotel.com";
const footerLeftText =
  "Flexible workspace to power your people, productivity, and business.";
const footerRightText = "Copyright © 2022 Knotel. All rights reserved.";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };
  return (
    <Page
      headerProps={{
        logo: Logo,
        links: [
          {
            text: "Office",
            url: "/office",
          },
          {
            text: "WorkClub",
            url: "/workclub",
          },
        ],
        contactForm: {
          content: {
            form_title: "How can we help you?",
            form_text:
              "<span>Torem ipsum dolor sit amet,</span> consectetur adipiscing elit. Enim quam tortor volutpat egestas.",
            button_label: "Submit",
            feedback:
              "<span>Thank you for your response </span><p> We will be in touch soon.<p/> ",
          },
          onSubmit: handleSubmit,
          submitting: loading,
          submitted,
          sizeOptions: ["0-10", "11-20", "35-50"],
          locationOptions: { Nigeria: "Nigeria", Abia: "Abia" },
          interestOptions: ["Events", "WorkClub", "Office", "Others"],
        },
      }}
      footerProps={{
        logo: Logo,
        footerLinks,
        socials,
        subscribeLabel,
        contactEmail,
        footerLeftText,
        footerRightText,
        newsLetterForm: {
          content: {
            title: "Newsletter",
            text: "<span> Sign up for the good stuff.</span> Break up your emails with the odd update from us. We hate spam too, so we promise to only send you good things.",
            feedback:
              "<span>Thank you for subscribing</span><p> We will be in touch soon.<p/> ",
            button_label: "Sign up",
            button_url: "/",
            image: bannerImg,
          },
          onSubmit: handleSubmit,
          submitting: loading,
          submitted: submitted,
        },
      }}
      widgets={widgets}
    />
  );
};

export default App;
