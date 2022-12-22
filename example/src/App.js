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
// import marker from "./assets/marker.svg";
import marker from "./assets/marker.png";
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

// const widgets = [
//   {
//     type: "banner",
//     image: detailImg,
//     title: "HYLO ground floor",
//     text: "Welcome to London’s future workplace.",
//   },
//   {
//     type: "details",
//     items: [
//       {
//         title: "About",
//         list: [
//           {
//             icon: logo1,
//             label: "Available:",
//             value: "November 1",
//           },
//           {
//             icon: logo2,
//             label: "Floor #:",
//             value: "Ground Floor",
//           },
//           {
//             icon: logo3,
//             label: "Size:",
//             value: "26,685 sqft",
//           },
//           {
//             icon: logo4,
//             label: "Seat #:",
//             value: "Undefined Seats",
//           },
//           {
//             icon: logo5,
//             label: "Enquire:",
//             link: "Lorem@ipsum.com",
//           },
//         ],
//       },
//       {
//         title: "Whats Included",
//         list: [
//           {
//             text: "Lorem ipsum dolor sit amet",
//           },
//           {
//             text: "consectetur adipiscing elit ",
//           },
//           {
//             text: "Nisi, nulla id viverra pharetra",
//           },
//           {
//             text: "Eget leo vitae mattis leo",
//           },
//           {
//             text: "Risus etiam nisl",
//           },
//           {
//             text: "Sit turpis sed vestibulum dignissim",
//           },
//         ],
//       },
//       {
//         title: "Further Information",
//         list: [
//           {
//             logo: download,
//             button_label: "Download Flyer",
//             button_link: "/",
//             on_button_click: () => console.log("download flyer"),
//           },
//           {
//             logo: download,
//             button_label: "Download Images",
//             button_link: "/",
//             on_button_click: () => console.log("download images"),
//           },
//           {
//             logo: download,
//             button_label: "Download Floor Plan",
//             button_link: "/",
//             on_button_click: () => console.log("download flor plan"),
//           },
//         ],
//       },
//     ],
//   },
//   {
//     type: "text_image_slider",
//     items: [
//       {
//         title: "London’s future workspace",
//         text: "Knotel at HYLO offers 27,000 square feet of premium office space across 4 floors and access to 17,000 sq ft of retail space. One of London’s most exciting new buildings, HYLO boasts high rise tower floors, roof gardens and new public space. Welcome to London’s future workplace.",
//         button_label: "Schedule a tour",
//         // button_url: "/",
//         on_button_click: () =>
//           document.getElementById("enquireTrigger")?.click(),
//         image_position: "right",
//         caption: "HYLO groundfloor",
//         list: [{ image: rightBg }, { image: rightBg }, { image: rightBg }],
//       },
//     ],
//   },
//   {
//     type: "text_image_slider",
//     hideBorder: "bottom",
//     items: [
//       {
//         title: "Old & new collide",
//         text: "This is a place where old and new collide; from cutting-edge-cool Old Street and Shoreditch to the historically influenced City of London. The area is the epicentre of London’s creative and collaborative industries and is more popular than ever with many of London’s forward-thinking financial and professional occupiers. ",
//         button_label: "Request information",
//         button_url: "/",
//         on_button_click: () =>
//           document.getElementById("enquireTrigger")?.click(),
//         list: [{ image: rightBg }, { image: rightBg }, { image: rightBg }],
//         image_position: "left",
//         bg_color: "green",
//         caption: "Image caption goes here",
//         white_button: true,
//       },
//     ],
//   },
//   {
//     type: "map",
//     address: "103–105 Bunhill Row, 8th floor",
//     APIKey: "",
//     markerIcon: marker,
//     loc: {
//       lat: 30.26555,
//       lng: -97.7497,
//     },
//   },
// ];

// const widgets = [
//   {
//     type: "left_right_banner",
//     image: bannerImg,
//     bg_color: "green",
//     title: "Ullamcorper purus",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant ullamcorper placerat neque, pretium tortor.",
//     button_label: "Location",
//     button_url: "/",
//     border_line: true,
//   },
//   {
//     type: "text",
//     bg_color: "lightblue",
//     text: "<span>Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit. Orci rhoncus auctor duis suscipit lobortis id diam. Tortor eu feugiat euismod tempor eget sed cras.",
//   },
//   {
//     type: "image_slider",
//     options: ["All", "UK", "Europe", "America"],
//     items: [
//       {
//         location: "america",
//         image: leftBg,
//         title: "Atlanta",
//         link: "",
//       },
//       {
//         location: "Europe",
//         image: rightBg,
//         title: "Austin",
//         link: "",
//       },
//       {
//         location: "uk",
//         image: leftBg,
//         title: "Berlin",
//         link: "",
//       },
//       {
//         location: "america",
//         image: rightBg,
//         title: "Atlanta",
//         link: "",
//       },
//       {
//         location: "Europe",
//         image: leftBg,
//         title: "Austin",
//         link: "",
//       },
//       {
//         location: "uk",
//         image: leftBg,
//         title: "Berlin",
//         link: "",
//       },
//     ],
//   },
//   {
//     type: "amenities",
//     heading: "Amenities",
//     items: [
//       {
//         image: leftBg,
//         title: "Amenity name",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem arcu porta nisl sollicitudin posuere gravida rhoncus.",
//       },
//       {
//         image: rightBg,
//         title: "Amenity name",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem arcu porta nisl sollicitudin posuere gravida rhoncus.",
//       },
//       {
//         image: leftBg,
//         title: "Amenity name",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem arcu porta nisl sollicitudin posuere gravida rhoncus.",
//       },
//     ],
//   },
// ];

const widgets = (mapCenter, setCenter) => [
  {
    type: "filters",
    options: [
      "City",
      "Neighbourhood",
      "Square Feet",
      "Date Range",
      "Seat #",
      "Floor #",
    ],
    APIKey: "AIzaSyA7QhLNGYH_eg6-ZtPhfZlkh6dBSBNpcdk",
    markerIcon: marker,
    mapCenter,
    setCenter,
    onMarkerPress: (lat, lng) => {},
    cityOptions: {
      "hylo-first-floor": "HyLO",
    },
    city: "Amsterdam",
    defaultFilters: {},
    onMouseOverListing: (e) => {},
    onFilterChanged: (values) => console.log("filter changed -->", values),
    items: [
      {
        image: leftBg,
        link: "",
        country: "London",
        place: "HYLO, Ground Floor",
        address: "Bunhill Row, Greater London, United Kingdom",
        lat: 6.5244,
        lng: 3.3792,
        floor: "1",
        seat: "1000",
        square_feet: "26685",
        available_date: 1670025000,
        list: [
          {
            icon: logo1,
            label: "Available:",
            value: "December 3",
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
            value: "1000 Seats",
          },
          {
            icon: logo5,
            label: "Enquire:",
            link: "Lorem@ipsum.com",
          },
        ],
      },
      {
        image: leftBg,
        link: "",
        country: "London",
        place: "80 Old Street, 3rd Floor",
        address: "80, Old Street, Greater London, United Kingdom",
        lat: 51.507224,
        lng: -0.1277,
        seat: "0",
        floor: "1",
        square_feet: "16685",
        available_date: 1670025000,
        list: [
          {
            icon: logo1,
            label: "Available:",
            value: "December 3",
          },
          {
            icon: logo2,
            label: "Floor #:",
            value: "Ground Floor",
          },
          {
            icon: logo3,
            label: "Size:",
            value: "16,685 sqft",
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
        image: rightBg,
        link: "",
        country: "Conventry",
        place: "Clerks Court",
        address: "Dorset, United Kingdom",
        lat: 51.50722,
        lng: -0.1273,
        floor: "1",
        seat: "10",
        square_feet: "26685",
        available_date: 1667300455,
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
            value: "10 Seats",
          },
          {
            icon: logo5,
            label: "Enquire:",
            link: "Lorem@ipsum.com",
          },
        ],
      },
      {
        image: rightBg,
        link: "",
        country: "London",
        place: "80 Old Street, 3rd Floor",
        address: "80, Old Street, Greater London, United Kingdom",
        lat: 51.507224,
        lng: -0.1277,
        floor: "3",
        seat: "2000",
        square_feet: "36685",
        available_date: 1667300455,
        list: [
          {
            icon: logo1,
            label: "Available:",
            value: "November 1",
          },
          {
            icon: logo2,
            label: "Floor #:",
            value: "Thrid Floor",
          },
          {
            icon: logo3,
            label: "Size:",
            value: "36,685 sqft",
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
    ],
  },
];
const footerLinks = [
  {
    title: "Company",
    links: [
      {
        label: "Press",
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
  const [mapCenter, setCenter] = useState(null);

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
      widgets={widgets(mapCenter, setCenter)}
    />
  );
};

export default App;
