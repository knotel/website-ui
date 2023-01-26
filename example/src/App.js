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
import listIcon from "./assets/list.svg";
import arrow from "./assets/map_arrow.svg";
import funnel from "./assets/filterfunnel.svg";
import bi_map from "./assets/bi_map.svg";
// import marker from "./assets/marker.svg";
import marker from "./assets/marker.png";
import Logo from "./assets/Logo.svg";

import Page from "knotel-website-ui";
import "knotel-website-ui/dist/index.css";
import "knotel-website-ui/dist/css/style.css";
import "knotel-website-ui/dist/css/pagination.css";
import "knotel-website-ui/dist/css/swiper.css";

// const widgets = () => [
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

// const widgets = () => [
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

// membership page
// const widgets = () => [
//   {
//     type: "banner",
//     image:
//       "https://images.ctfassets.net/5tq979orlb7f/3KhdJKXfGh35YGZs9UNsv2/2d12586c24a104178b3167fa167389ec/membership-hero.jpg",
//     title: "Memberships",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     type: "membership_features",
//     title: "Membership Features",
//     bg_color: "red",
//     items: [
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       "Faucibus hac velit molestie nibh amet facilisi.",
//       "Vel, rhoncus cursus consectetur urna quis pharetra",
//     ],
//   },
//   {
//     type: "call_to_action",
//     items: [
//       {
//         title: "Mauris Fusce",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet etiam blandit ultrices risus nulla nisi, risus. Odio ac in vivamus non integer nunc, dolor neque scelerisque. Ultricies eu duis enim tincidunt a mauris odio.",
//         button_label: "Call To Action",
//         button_url: "/",
//       },
//       {
//         title: "Lorem Ipsum Dolor",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet etiam blandit ultrices risus nulla nisi, risus. Odio ac in vivamus non integer nunc, dolor neque scelerisque. Ultricies eu duis enim tincidunt a mauris odio.",
//         button_label: "Call To Action",
//         button_url: "/",
//       },
//     ],
//   },
// ];

// const widgets = () => [
//   {
//     type: "banner",
//     image:
//       "https://images.ctfassets.net/5tq979orlb7f/5xmHEAh50S2kgsa0ngGg3E/c120a56c3964b931846ff322dc17b4b0/workclub.jpg",
//     title: "Old Sessions House",
//     text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Lacus.",
//   },
//   {
//     type: "details",
//     items: [
//       {
//         title: "About",
//         className: "aboutUs",
//         list: [
//           {
//             icon: "/svgs/location.svg",
//             label: "Location:",
//             value: "21, Clerkenwell Close Greater London, United Kingdom 1",
//           },
//           {
//             icon: "/svgs/hours.svg",
//             label: "Hours:",
//             hours: true,
//             open: "OPEN",
//             openDays: "Mon - Fri",
//             closedDays: "Sat - Sun",
//             timing: "8:00am - 8:00pm",
//             close: "CLOSED",
//           },
//           {
//             icon: "/svgs/logo5.svg",
//             label: "Enquire:",
//             type: "mailto",
//             link: "Lorem@ipsim.com",
//           },
//         ],
//       },
//       {
//         title: "Whats Included",
//         list: [
//           { text: "Knotel Art Club" },
//           { text: "Pool" },
//           { text: "Roof Terrace" },
//         ],
//       },
//       {
//         title: "Further Information",
//         list: [
//           {
//             icon: "/svgs/tel.svg",
//             type: "tel",
//             label: "Tel:",
//             link: "0203 678 2234",
//           },
//           {
//             icon: "/svgs/logo5.svg",
//             label: "Enquire:",
//             type: "mailto",
//             link: "info@sessions.com",
//           },
//           {
//             icon: "/svgs/memberships.svg",
//             label: "Memberships:",
//             linkLabel: "Explore memberships",
//             link: "/",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     type: "amenities",
//     heading: "Amenities",
//  close_icon: close_icon,
//     items: [
//       {
//         image:
//           "https://images.ctfassets.net/5tq979orlb7f/3QxEPYD4yQstPW8MuLcwbM/81aff0c6d98e09be21722955dae9629d/old_session_real.jpeg",
//         title: "Knotel Art Club",
//         text: "Knotel Arts Club is about to open as an urban sanctuary that sits in the old Judges’ Dining Room at Sessions House. This magnificent Victorian room with its added mezzanine is lit by natural flame from two log fires as well as restored gas lit chandeliers. The room is also surrounded by outdoor terraces with fireplaces, rooftop bar, secret garden and swimming pool. Created with a studio ethos, it is a restaurant, wine bar and performance space that moves and shifts with the season. The modern European cuisine is headed by acclaimed chef Florence Knight who will base the offering on fresh local produce.",
//       },
//       {
//         image:
//           "https://images.ctfassets.net/5tq979orlb7f/4EIMKXMrVscETXbwhbzz0l/ce6e2f2bc48c1165042e09183a6c6184/sessions_pool.jpeg",
//         title: "Pool",
//         text: "As another truly unique feature, the only one of its kind on the roof of a grade II* listed property, the terrace also offers a circa 250 sq. ft. corner infinity pool from which one can view the cityscape watching the world go by. The turquoise water is heated all year around and can be enjoyed at a comfortable 33 degrees even in winter or for a refreshing plunge in the summer months. Using natural Portland stone, it has been designed to seamlessly integrate with the terrace materials and the Georgian stone façade below. A state of the art filtering and treatment system creates exceptionally pure water to reduce the need of chlorine and other chemicals.",
//       },
//       {
//         image:
//           "https://images.ctfassets.net/5tq979orlb7f/2EqnA7UfZIpWrVrtbT2N4F/f4211afd3bcaf36ec1c26f1e9d5181e2/old_session_home.jpeg",
//         title: "Roof Terrace",
//         text: "A hidden oasis is perhaps the best way to describe the roof garden on this majestic Georgian building on which to enjoy the island site’s expansive panoramic views of the London Skyline. An evergreen hedge, olive trees, rosemary and a small vineyard all have their part in transporting its guests to a relaxing Mediterranean landscape. The old chimneys have been fitted with gas fired open flame flambeaux to light the terrace with natural fire and there is even an outdoor fireplace to cosy up in front of.",
//       },
//     ],
//   },
//   {
//     type: "image_with_text",
//     className: "paddingClass",
//     items: [
//       {
//         image:
//           "https://images.ctfassets.net/5tq979orlb7f/3KhdJKXfGh35YGZs9UNsv2/2d12586c24a104178b3167fa167389ec/membership-hero.jpg",
//         title: "Memberships",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam enim turpis ut quam interdum neque mauris quis. Mi, lorem egestas neque sagittis pulvinar dolor, commodo.",
//         button_label: "Explore Memberships",
//         button_url: "workclub/membership",
//         image_position: "right",
//         cream_btn: true,
//         bg_color: "red",
//       },
//     ],
//   },
//   {
//     type: "text_image_slider",
//     items: [
//       {
//         title: "The Neighbourhood",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit turpis donec eu amet, id. Volutpat in dis sagittis velit mauris.",
//         button_label: "Enquire",
//         caption: "Sample Caption Works",
//         button_url: "/",
//         list: [
//           {
//             image:
//               "https://images.ctfassets.net/5tq979orlb7f/10qmuHIivpEIlIqZuUzehm/6a6b6f3e29f814366b7343e231892d6d/hero.jpg",
//           },
//           {
//             image:
//               "https://images.ctfassets.net/5tq979orlb7f/5xmHEAh50S2kgsa0ngGg3E/c120a56c3964b931846ff322dc17b4b0/workclub.jpg",
//           },
//           {
//             image:
//               "https://downloads.ctfassets.net/5tq979orlb7f/6YCtkdrd1VVEo9umAb9BXn/fb0866eeb7293311f513c318d4aa9786/OSH_Press_Preview0222.jpg",
//           },
//         ],
//         image_position: "left",
//       },
//     ],
//   },
//   {
//     type: "find_us",
//     title: "Find Us",
//     address: "21, Clerkenwell Close Greater London, United Kingdom 1",
//     apiKey: "",
//     markerIcon: marker,
//     loc: {
//       lat: 30.26555,
//       lng: -97.7497,
//     },
//     items: [
//       {
//         icon: "/svgs/bus.svg",
//         label: "Bus:",
//         value: "3 Blocks from __ bus stop",
//       },
//       {
//         icon: "/svgs/rail.svg",
//         label: "Rail:",
//         value: "Kings Cross St Pancras - 15 min via tube",
//       },
//       {
//         icon: "/svgs/cycle.svg",
//         label: "Cycle:",
//         value: "3 Blocks from __station",
//       },
//       {
//         icon: "/svgs/plane.svg",
//         label: "Airport:",
//         value: "Heathrow - 1 hour via public transport",
//       },
//       {
//         icon: "/svgs/tube.svg",
//         label: "Tube:",
//         value: "Holborn Tube - 2 min walk",
//       },
//     ],
//   },
// ];

const widgets = () => [
  {
    type: "left_right_banner",
    image: bannerImg,
    bg_color: "green",
    title: "Ullamcorper purus",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant ullamcorper placerat neque, pretium tortor.",
    button_label: "Location",
    button_url: "/",
    border_line: true,
  },
  {
    type: "text",
    bg_color: "lightblue",
    text: "<span>Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit. Orci rhoncus auctor duis suscipit lobortis id diam. Tortor eu feugiat euismod tempor eget sed cras.",
  },
  {
    type: "image_slider",
    options: ["All", "UK", "Europe", "America"],
    items: [
      {
        location: "america",
        image: leftBg,
        title: "Atlanta",
        link: "",
      },
      {
        location: "Europe",
        image: rightBg,
        title: "Austin",
        link: "",
      },
      {
        location: "uk",
        image: leftBg,
        title: "Berlin",
        link: "",
      },
      {
        location: "america",
        image: rightBg,
        title: "Atlanta",
        link: "",
      },
      {
        location: "Europe",
        image: leftBg,
        title: "Austin",
        link: "",
      },
      {
        location: "uk",
        image: leftBg,
        title: "Berlin",
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

// const widgets = (mapCenter, setCenter, filters, setFilters) => [
//   {
//     type: "filters",
//     options: [
//       "City",
//       "Neighbourhood",
//       "Square Feet",
//       "Date Range",
//       "Seat #",
//       "Floor #",
//     ],
//     APIKey: "",
//     markerIcon: marker,
//     mapCenter,
//     setCenter,
//     onMarkerPress: (lat, lng) => {},
//     cityOptions: {
//       "hylo-first-floor": "HyLO",
//     },
//     neighborhoodOptions: {
//       ketu: "ketu",
//       alapere: "alapere",
//     },
//     sizeOptions: {
//       50: "500",
//       70: "350",
//     },
//     city: "Amsterdam",
//     close_icon: bi_map,
//     listIcon,
//     arrow,
//     funnel,
//     bi_map,
//     defaultFilters: filters,
//     onMouseOverListing: (e) => {},
//     onFilterChanged: (values) => setFilters(values),
//     items: [
//       {
//         image: leftBg,
//         link: "",
//         country: "London",
//         place: "HYLO, Ground Floor",
//         address: "Bunhill Row, Greater London, United Kingdom",
//         lat: 6.5244,
//         lng: 3.3792,
//         floor: "1",
//         seat: "1000",
//         square_feet: "26685",
//         available_date: 1670025000,
//         list: [
//           {
//             icon: logo1,
//             label: "Available:",
//             value: "December 3",
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
//             value: "1000 Seats",
//           },
//           {
//             icon: logo5,
//             label: "Enquire:",
//             link: "Lorem@ipsum.com",
//           },
//         ],
//       },
//       {
//         image: leftBg,
//         link: "",
//         country: "London",
//         place: "80 Old Street, 3rd Floor",
//         address: "80, Old Street, Greater London, United Kingdom",
//         lat: 51.507224,
//         lng: -0.1277,
//         seat: "0",
//         floor: "1",
//         square_feet: "16685",
//         available_date: 1670025000,
//         list: [
//           {
//             icon: logo1,
//             label: "Available:",
//             value: "December 3",
//           },
//           {
//             icon: logo2,
//             label: "Floor #:",
//             value: "Ground Floor",
//           },
//           {
//             icon: logo3,
//             label: "Size:",
//             value: "16,685 sqft",
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
//         image: rightBg,
//         link: "",
//         country: "Conventry",
//         place: "Clerks Court",
//         address: "Dorset, United Kingdom",
//         lat: 51.50722,
//         lng: -0.1273,
//         floor: "1",
//         seat: "10",
//         square_feet: "26685",
//         available_date: 1667300455,
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
//             value: "10 Seats",
//           },
//           {
//             icon: logo5,
//             label: "Enquire:",
//             link: "Lorem@ipsum.com",
//           },
//         ],
//       },
//       {
//         image: rightBg,
//         link: "",
//         country: "London",
//         place: "80 Old Street, 3rd Floor",
//         address: "80, Old Street, Greater London, United Kingdom",
//         lat: 51.507224,
//         lng: -0.1277,
//         floor: "3",
//         seat: "2000",
//         square_feet: "36685",
//         available_date: 1667300455,
//         list: [
//           {
//             icon: logo1,
//             label: "Available:",
//             value: "November 1",
//           },
//           {
//             icon: logo2,
//             label: "Floor #:",
//             value: "Thrid Floor",
//           },
//           {
//             icon: logo3,
//             label: "Size:",
//             value: "36,685 sqft",
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
//     ],
//   },
// ];

// landlords
// const widgets = () => [
//   {
//     type: "left_right_banner",
//     image: bannerImg,
//     bg_color: "darkblue",
//     title: "Flexible solutions for your office portfolio.",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     button_label: "Submit your space",
//     button_url: "image_with_text",
//     whiteButton: true,
//   },
//   {
//     type: "image_with_text",
//     items: [
//       {
//         image: leftBg,
//         title: "Mauris fusce.",
//         text: "Knotel works with landlords to design, build and operate office space for companies on flexible terms, while minimizing buildout disruption and maximizing long-term property value.",
//         button_label: "Submit your space",
//         onButtonClick: () => console.log("----> button clicked"),
//         image_position: "left",
//       },
//       {
//         image: leftBg,
//         title: "Mauris fusce.",
//         text: "Knotel works with landlords to design, build and operate office space for companies on flexible terms, while minimizing buildout disruption and maximizing long-term property value.",
//         button_label: "Submit your space",
//         button_url: "/",
//         image_position: "right",
//       },
//       {
//         image: leftBg,
//         title: "Mauris fusce.",
//         text: "Knotel works with landlords to design, build and operate office space for companies on flexible terms, while minimizing buildout disruption and maximizing long-term property value.",
//         button_label: "Submit your space",
//         button_url: "/",
//         image_position: "left",
//       },
//     ],
//   },
// ];

// brokers;
// const widgets = () => [
//   {
//     type: "left_right_banner",
//     image: bannerImg,
//     bg_color: "darkblue",
//     title: "Flexible solutions to meet client needs.",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
//     button_label: "Get in touch",
//     button_url: "/",
//     onButtonClick: () => console.log("button clicked --->"),
//   },
//   {
//     type: "text_table",
//     items: [
//       {
//         title: "Build client trust",
//         text: "A partner who respects your relationships. We provide you with the optionality for all the ways your clients work.",
//       },
//       {
//         title: "Increase revenue",
//         text: "Transparent compensation, timely payments. Close deals faster with our simple, proven sales process. Earn more with each renewal and expansion.",
//       },
//       {
//         title: "Grow together",
//         text: "Maintain your client relationships as they scale in the Knotel portfolio. Advise your clients on strategy, from Series A to IPO. Earn compensation on all expansion and renewal business.",
//       },
//     ],
//   },
// ];

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
  const [filters, setFilters] = useState({});
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
        close_icon: bi_map,
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
          close_icon: bi_map,
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
      widgets={widgets(mapCenter, setCenter, filters, setFilters)}
    />
  );
};

export default App;
