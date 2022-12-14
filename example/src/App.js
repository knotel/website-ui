import React, { useState } from "react";
import bannerImg from "./assets/hero.jpg";
import bannerlogo from "./assets/bannerlogo.svg";
import leftBg from "./assets/office.jpg";
import rightBg from "./assets/workclub.jpg";
import detailImg from "./assets/detailImg.jpg";
import download from "./assets/download.svg";
import logo1 from "./assets/logo1.svg";
import logo2 from "./assets/logo2.svg";
import logo3 from "./assets/logo3.svg";
import logo4 from "./assets/logo4.svg";
import logo5 from "./assets/logo5.svg";
import marker from "./assets/marker.svg";
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
    type: "banner",
    image: detailImg,
    title: "HYLO ground floor",
    text: "Welcome to London’s future workplace.",
  },
  {
    type: "details",
    items: [
      {
        title: "About",
        list: [
          {
            icon: logo1,
            label: "Available:",
            value: "November 1",
          },
          {
            icon: logo2,
            label: "Floor #:",
            value: "Ground Floor",
          },
          {
            icon: logo3,
            label: "Size:",
            value: "26,685 sqft",
          },
          {
            icon: logo4,
            label: "Seat #:",
            value: "Undefined Seats",
          },
          {
            icon: logo5,
            label: "Enquire:",
            link: "Lorem@ipsum.com",
          },
        ],
      },
      {
        title: "Whats Included",
        list: [
          {
            text: "Lorem ipsum dolor sit amet",
          },
          {
            text: "consectetur adipiscing elit ",
          },
          {
            text: "Nisi, nulla id viverra pharetra",
          },
          {
            text: "Eget leo vitae mattis leo",
          },
          {
            text: "Risus etiam nisl",
          },
          {
            text: "Sit turpis sed vestibulum dignissim",
          },
        ],
      },
      {
        title: "Further Information",
        list: [
          {
            logo: download,
            button_label: "Download Flyer",
            button_link: "/",
            on_button_click: () => console.log("download flyer"),
          },
          {
            logo: download,
            button_label: "Download Images",
            button_link: "/",
            on_button_click: () => console.log("download images"),
          },
          {
            logo: download,
            button_label: "Download Floor Plan",
            button_link: "/",
            on_button_click: () => console.log("download flor plan"),
          },
        ],
      },
    ],
  },
  {
    type: "text_image_slider",
    items: [
      {
        title: "London’s future workspace",
        text: "Knotel at HYLO offers 27,000 square feet of premium office space across 4 floors and access to 17,000 sq ft of retail space. One of London’s most exciting new buildings, HYLO boasts high rise tower floors, roof gardens and new public space. Welcome to London’s future workplace.",
        button_label: "Schedule a tour",
        // button_url: "/",
        on_button_click: () =>
          document.getElementById("enquireTrigger")?.click(),
        image_position: "right",
        caption: "HYLO groundfloor",
        list: [{ image: rightBg }, { image: rightBg }, { image: rightBg }],
      },
    ],
  },
  {
    type: "text_image_slider",
    items: [
      {
        title: "Old & new collide",
        text: "This is a place where old and new collide; from cutting-edge-cool Old Street and Shoreditch to the historically influenced City of London. The area is the epicentre of London’s creative and collaborative industries and is more popular than ever with many of London’s forward-thinking financial and professional occupiers. ",
        button_label: "Request information",
        button_url: "/",
        on_button_click: () =>
          document.getElementById("enquireTrigger")?.click(),
        list: [{ image: rightBg }, { image: rightBg }, { image: rightBg }],
        image_position: "left",
        bg_color: "green",
        caption: "Image caption goes here",
        white_button: true,
      },
    ],
  },
  {
    type: "map",
    address: "103–105 Bunhill Row, 8th floor",
    APIKey: "",
    markerIcon: marker,
    loc: {
      lat: 30.26555,
      lng: -97.7497,
    },
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
