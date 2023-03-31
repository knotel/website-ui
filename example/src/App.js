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
//     title_text: "<h1>Old Sessions House <h1>",
//     button_label: "Enquire",
//     onButtonClick: () => console.log("button clicked -->"),
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
//         onButtonClick: () => console.log("on button clicked -->"),
//         image: detailImg,
//         image_position: "right",
//       },
//       {
//         title: "Lorem ipsum dolor",
//         sub_title: "Tempus scelerisque felis",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus scelerisque felis lobortis commodo quis. Pulvinar leo ac, lacinia nibh tincidunt. ",
//         button_label: "Learn more",
//         button_url: "/",
//         onButtonClick: () => console.log("on button clicked -->"),
//         image: detailImg,
//         image_position: "left",
//       },
//     ],
//   },
// ];

// office detail
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
//         type: "text",
//         text: `h1>HTML Ipsum Presents</h1>
// <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
//         <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
// <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
// 				<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>`,
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
//             button_type: "blue_hover",
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
//             link: "https://www.facebook.com",
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
//         title: "HYLO's Ground Floor",
//         type: "details",
//         list_tems: [
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
//             linkLabel: "sample link label",
//           },
//         ],
//         text: "Knotel at HYLO offers 27,000 square feet of premium office space across 4 floors and access to 17,000 sq ft of retail space. One of London’s most exciting new buildings, HYLO boasts high rise tower floors, roof gardens and new public space. Welcome to London’s future workplace.",
//         button_label: "Schedule a tour",
//         // button_url: "/",
//         on_button_click: () => console.log("button clicked --->"),
//         image_position: "right",
//         caption: "HYLO groundfloor",
//         list: [{ image: rightBg }, { image: rightBg }, { image: rightBg }],
//       },
//     ],
//   },
//   {
//     type: "text_image_slider",
//     items: [
//       {
//         title: "HYLO's 1st Floor",
//         type: "details",
//         button_type: "blue_hover",
//         list_tems: [
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
//         text: "Knotel at HYLO offers 27,000 square feet of premium office space across 4 floors and access to 17,000 sq ft of retail space. One of London’s most exciting new buildings, HYLO boasts high rise tower floors, roof gardens and new public space. Welcome to London’s future workplace.",
//         button_label: "Schedule a tour",
//         // button_url: "/",
//         on_button_click: () => console.log("button clicked --->"),
//         image_position: "right",
//         caption: "HYLO groundfloor",
//         list: [{ image: rightBg }, { image: rightBg }, { image: rightBg }],
//       },
//     ],
//   },
//   {
//     type: "text_image_slider",
//     items: [
//       {
//         title: "HYLO's Ground Floor",
//         type: "details",
//         list_tems: [
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
//         text: "",
//         button_label: "Schedule a tour",
//         // button_url: "/",
//         on_button_click: () => console.log("button clicked --->"),
//         image_position: "right",
//         caption: "HYLO groundfloor",
//         list: [{ image: rightBg }, { image: rightBg }, { image: rightBg }],
//       },
//     ],
//   },
//   {
//     type: "text_image_slider",
//     hideBorder: "bottom",
//     preview_type: "pdf",
//     // items: [
//     //   {
//     //     title: "Old & new collide",
//     //     text: "This is a place where old and new collide; from cutting-edge-cool Old Street and Shoreditch to the historically influenced City of London. The area is the epicentre of London’s creative and collaborative industries and is more popular than ever with many of London’s forward-thinking financial and professional occupiers. ",
//     //     button_label: "Request information",
//     //     button_type: "blue_hover",
//     //     button_url: "/",
//     //     on_button_click: () => console.log("button clicked --->"),
//     //     list: [
//     //       {
//     //         image:
//     //           "https://assets.ctfassets.net/5tq979orlb7f/EnX0vXCBJ8evXVKoMjNdF/3d98d7fa048aa766968e1cb8816c97a8/18_-_20_Farringdon_Lane__Clerks_Court__LOWERGROUND_FULL_-_Floor_Plan__1_.pdf",
//     //         caption: "HYLO 1st Floor",
//     //       },
//     //       {
//     //         image:
//     //           "https://assets.ctfassets.net/5tq979orlb7f/EnX0vXCBJ8evXVKoMjNdF/3d98d7fa048aa766968e1cb8816c97a8/18_-_20_Farringdon_Lane__Clerks_Court__LOWERGROUND_FULL_-_Floor_Plan__1_.pdf",
//     //         caption: "HYLO 2nd Floor",
//     //       },
//     //       {
//     //         image:
//     //           "https://assets.ctfassets.net/5tq979orlb7f/EnX0vXCBJ8evXVKoMjNdF/3d98d7fa048aa766968e1cb8816c97a8/18_-_20_Farringdon_Lane__Clerks_Court__LOWERGROUND_FULL_-_Floor_Plan__1_.pdf",
//     //         caption: "HYLO 3rd Floor",
//     //       },
//     //     ],
//     //     image_position: "left",
//     //     bg_color: "green",
//     //     caption: "Image caption goes here",
//     //     white_button: true,
//     //   },
//     // ],
//     items : []
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
//     forPage: "membership",
//     items: [
//       {
//         title: "Mauris Fusce",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet etiam blandit ultrices risus nulla nisi, risus. Odio ac in vivamus non integer nunc, dolor neque scelerisque. Ultricies eu duis enim tincidunt a mauris odio.",
//         button_label: "Call To Action",
//         button_type: "blue_hover",
//         on_button_click: () => console.log("button clicked"),
//         button_url: "/",
//       },
//       {
//         title: "Lorem Ipsum Dolor",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet etiam blandit ultrices risus nulla nisi, risus. Odio ac in vivamus non integer nunc, dolor neque scelerisque. Ultricies eu duis enim tincidunt a mauris odio.",
//         button_label: "Call To Action",
//         on_button_click: () => console.log("button clicked"),
//         button_type: "blue_hover",
//         button_url: "/",
//       },
//     ],
//   },
// ];

// club landing page
// const widgets = () => [
//   {
//     type: "banner",
//     image:
//       "https://downloads.ctfassets.net/5tq979orlb7f/6YCtkdrd1VVEo9umAb9BXn/fb0866eeb7293311f513c318d4aa9786/OSH_Press_Preview0222.jpg",
//     title_text: "<h1> Some More</h1>",
//     // logo: "https://images.ctfassets.net/5tq979orlb7f/34d7UjPVS0S7kt36ld1XYT/539cdf15164af0dcdb6f5484f1993689/bannerlogo.f89582d8571b0f1449963b62e5802d2f.svg",
//     border_line: true,
//   },
//   {
//     type: "text",
//     bg_color: "red",
//     text: '<p data-reactroot=""><span style="line-height:inherit">Workclub </span>hubs with access to your own branded <span style="line-height:inherit">private office </span>in key gateway cities across the globe.</p>',
//   },
//   {
//     type: "text_image_slider",
//     items: [
//       {
//         title: "WYNcatcher",
//         text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
//         button_label: "Find Out More",
//         button_url: "workclub/berlin/wyncatcher",
//         image_position: "right",
//         on_button_click: () => console.log("button clicked --->"),
//         list: [
//           {
//             image:
//               "https://images.ctfassets.net/5tq979orlb7f/2ODTPRZAxXOwFaN62Sdink/2508ff3e7938627230c62ffc5e4525af/121-King-Street-West-Toronto-office-4.jpeg",
//           },
//           {
//             image:
//               "https://images.ctfassets.net/5tq979orlb7f/xdmqYIuNdt69aT3xmshLA/57bc716916b967e12a98f481ff8e82ee/121_King_St_W_Toronto_Office_4___image_2.jpeg",
//           },
//           {
//             image:
//               "https://images.ctfassets.net/5tq979orlb7f/17hhTjgdEARqnmNx2c6m1U/4b7ce12bcbb5f079ef2b7f8fb7da0f11/1015_2nd_Avenue_Federal_Reserve_office_8_9.jpeg",
//           },
//         ],
//       },
//       {
//         title: "Old Sessions House",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit turpis donec eu amet, id. Volutpat in dis sagittis velit mauris.",
//         button_label: "Find Out More",
//         button_url: undefined,
//         button_type: "blue_hover",
//         image_position: "left",
//         on_button_click: () => console.log("button clicked --->"),
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
//       },
//     ],
//   },
// ];

// club detail
const widgets = () => [
  {
    type: "banner",
    image:
      "https://images.ctfassets.net/5tq979orlb7f/5xmHEAh50S2kgsa0ngGg3E/c120a56c3964b931846ff322dc17b4b0/workclub.jpg",
    title: "Old Sessions House",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Lacus.",
  },
  {
    type: "details",
    pageFor: "club detail",
    items: [
      {
        title: "About",
        className: "aboutUs",
        list: [
          {
            icon: "/svgs/location.svg",
            label: "Location:",
            value: "21, Clerkenwell Close Greater London, United Kingdom 1",
          },
          {
            icon: "/svgs/hours.svg",
            label: "Hours:",
            hours: true,
            open: "OPEN",
            openDays: "Mon - Fri",
            closedDays: "Sat - Sun",
            timing: "8:00am - 8:00pm",
            close: "CLOSED",
          },
          {
            icon: "/svgs/logo5.svg",
            label: "Enquire:",
            type: "mailto",
            link: "Lorem@ipsim.com",
          },
        ],
      },
      {
        title: "Whats Included",
        list: [
          { text: "Knotel Art Club" },
          { text: "Pool" },
          { text: "Roof Terrace" },
        ],
      },
      {
        title: "Further Information",
        list: [
          {
            icon: "/svgs/tel.svg",
            type: "tel",
            label: "Tel:",
            link: "0203 678 2234",
          },
          {
            icon: "/svgs/logo5.svg",
            label: "Enquire:",
            type: "mailto",
            link: "info@sessions.com",
          },
          {
            hover: "coral",
            icon: "/svgs/memberships.svg",
            label: "Memberships:",
            linkLabel: "Explore memberships",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    type: "amenities",
    heading: "Workclub Amenities",
    max_length: 3,
    close_icon: listIcon,
    hide_bottom_border: true,
    items: [
      {
        image:
          "https://images.ctfassets.net/5tq979orlb7f/3QxEPYD4yQstPW8MuLcwbM/81aff0c6d98e09be21722955dae9629d/old_session_real.jpeg",
        title: "Knotel Art Club",
        text: "Knotel Arts Club is about to open as an urban sanctuary that sits in the old Judges’ Dining Room at Sessions House. This magnificent Victorian room with its added mezzanine is lit by natural flame from two log fires as well as restored gas lit chandeliers. The room is also surrounded by outdoor terraces with fireplaces, rooftop bar, secret garden and swimming pool. Created with a studio ethos, it is a restaurant, wine bar and performance space that moves and shifts with the season. The modern European cuisine is headed by acclaimed chef Florence Knight who will base the offering on fresh local produce.",
        description:
          "Knotel Arts Club is about to open as an urban sanctuary that sits in the old Judges’ Dining Room at Sessions House. This magnificent Victorian room with its added mezzanine is lit by natural flame from two log fires as well as restored gas lit chandeliers. The room is also surrounded by outdoor terraces with fireplaces, rooftop bar, secret garden and swimming pool. Created with a studio ethos, it is a restaurant, wine bar and performance space that moves and shifts with the season. The modern European cuisine is headed by acclaimed chef Florence Knight who will base the offering on fresh local produce.",
      },
      {
        image:
          "https://images.ctfassets.net/5tq979orlb7f/4EIMKXMrVscETXbwhbzz0l/ce6e2f2bc48c1165042e09183a6c6184/sessions_pool.jpeg",
        title: "Pool",
        text: "As another truly unique feature, the only one of its kind on the roof of a grade II* listed property, the terrace also offers a circa 250 sq. ft. corner infinity pool from which one can view the cityscape watching the world go by. The turquoise water is heated all year around and can be enjoyed at a comfortable 33 degrees even in winter or for a refreshing plunge in the summer months. Using natural Portland stone, it has been designed to seamlessly integrate with the terrace materials and the Georgian stone façade below. A state of the art filtering and treatment system creates exceptionally pure water to reduce the need of chlorine and other chemicals.",
        description:
          "As another truly unique feature, the only one of its kind on the roof of a grade II* listed property, the terrace also offers a circa 250 sq. ft. corner infinity pool from which one can view the cityscape watching the world go by. The turquoise water is heated all year around and can be enjoyed at a comfortable 33 degrees even in winter or for a refreshing plunge in the summer months. Using natural Portland stone, it has been designed to seamlessly integrate with the terrace materials and the Georgian stone façade below. A state of the art filtering and treatment system creates exceptionally pure water to reduce the need of chlorine and other chemicals. As another truly unique feature, the only one of its kind on the roof of a grade II* listed property, the terrace also offers a circa 250 sq. ft. corner infinity pool from which one can view the cityscape watching the world go by. The turquoise water is heated all year around and can be enjoyed at a comfortable 33 degrees even in winter or for a refreshing plunge in the summer months. Using natural Portland stone, it has been designed to seamlessly integrate with the terrace materials and the Georgian stone façade below. A state of the art filtering and treatment system creates exceptionally pure water to reduce the need of chlorine and other chemicals As another truly unique feature, the only one of its kind on the roof of a grade II* listed property, the terrace also offers a circa 250 sq. ft. corner infinity pool from which one can view the cityscape watching the world go by. The turquoise water is heated all year around and can be enjoyed at a comfortable 33 degrees even in winter or for a refreshing plunge in the summer months. Using natural Portland stone, it has been designed to seamlessly integrate with the terrace materials and the Georgian stone façade below. A state of the art filtering and treatment system creates exceptionally pure water to reduce the need of chlorine and other chemicals",
      },
      {
        image:
          "https://images.ctfassets.net/5tq979orlb7f/2EqnA7UfZIpWrVrtbT2N4F/f4211afd3bcaf36ec1c26f1e9d5181e2/old_session_home.jpeg",
        title: "Roof Terrace",
        text: "A hidden oasis is perhaps the best way to describe the roof garden on this majestic Georgian building on which to enjoy the island site’s expansive panoramic views of the London Skyline. An evergreen hedge, olive trees, rosemary and a small vineyard all have their part in transporting its guests to a relaxing Mediterranean landscape. The old chimneys have been fitted with gas fired open flame flambeaux to light the terrace with natural fire and there is even an outdoor fireplace to cosy up in front of.",
        description:
          "A hidden oasis is perhaps the best way to describe the roof garden on this majestic Georgian building on which to enjoy the island site’s expansive panoramic views of the London Skyline. An evergreen hedge, olive trees, rosemary and a small vineyard all have their part in transporting its guests to a relaxing Mediterranean landscape. The old chimneys have been fitted with gas fired open flame flambeaux to light the terrace with natural fire and there is even an outdoor fireplace to cosy up in front of.",
      },
      {
        image:
          "https://images.ctfassets.net/5tq979orlb7f/2EqnA7UfZIpWrVrtbT2N4F/f4211afd3bcaf36ec1c26f1e9d5181e2/old_session_home.jpeg",
        title: "The Gradeout",
        text: "A hidden oasis is perhaps the best way to describe the roof garden on this majestic Georgian building on which to enjoy the island site’s expansive panoramic views of the London Skyline. An evergreen hedge, olive trees, rosemary and a small vineyard all have their part in transporting its guests to a relaxing Mediterranean landscape. The old chimneys have been fitted with gas fired open flame flambeaux to light the terrace with natural fire and there is even an outdoor fireplace to cosy up in front of.",
        description:
          "A hidden oasis is perhaps the best way to describe the roof garden on this majestic Georgian building on which to enjoy the island site’s expansive panoramic views of the London Skyline. An evergreen hedge, olive trees, rosemary and a small vineyard all have their part in transporting its guests to a relaxing Mediterranean landscape. The old chimneys have been fitted with gas fired open flame flambeaux to light the terrace with natural fire and there is even an outdoor fireplace to cosy up in front of.",
      },
      {
        image:
          "https://images.ctfassets.net/5tq979orlb7f/2EqnA7UfZIpWrVrtbT2N4F/f4211afd3bcaf36ec1c26f1e9d5181e2/old_session_home.jpeg",
        title: "Shootout Spot",
        text: "A hidden oasis is perhaps the best way to describe the roof garden on this majestic Georgian building on which to enjoy the island site’s expansive panoramic views of the London Skyline. An evergreen hedge, olive trees, rosemary and a small vineyard all have their part in transporting its guests to a relaxing Mediterranean landscape. The old chimneys have been fitted with gas fired open flame flambeaux to light the terrace with natural fire and there is even an outdoor fireplace to cosy up in front of.",
        description:
          "A hidden oasis is perhaps the best way to describe the roof garden on this majestic Georgian building on which to enjoy the island site’s expansive panoramic views of the London Skyline. An evergreen hedge, olive trees, rosemary and a small vineyard all have their part in transporting its guests to a relaxing Mediterranean landscape. The old chimneys have been fitted with gas fired open flame flambeaux to light the terrace with natural fire and there is even an outdoor fireplace to cosy up in front of.",
      },
      {
        image:
          "https://images.ctfassets.net/5tq979orlb7f/2EqnA7UfZIpWrVrtbT2N4F/f4211afd3bcaf36ec1c26f1e9d5181e2/old_session_home.jpeg",
        title: "Player Thub",
        text: "A hidden oasis is perhaps the best way to describe the roof garden on this majestic Georgian building on which to enjoy the island site’s expansive panoramic views of the London Skyline. An evergreen hedge, olive trees, rosemary and a small vineyard all have their part in transporting its guests to a relaxing Mediterranean landscape. The old chimneys have been fitted with gas fired open flame flambeaux to light the terrace with natural fire and there is even an outdoor fireplace to cosy up in front of.",
        description:
          "A hidden oasis is perhaps the best way to describe the roof garden on this majestic Georgian building on which to enjoy the island site’s expansive panoramic views of the London Skyline. An evergreen hedge, olive trees, rosemary and a small vineyard all have their part in transporting its guests to a relaxing Mediterranean landscape. The old chimneys have been fitted with gas fired open flame flambeaux to light the terrace with natural fire and there is even an outdoor fireplace to cosy up in front of.",
      },
      {
        image:
          "https://images.ctfassets.net/5tq979orlb7f/2EqnA7UfZIpWrVrtbT2N4F/f4211afd3bcaf36ec1c26f1e9d5181e2/old_session_home.jpeg",
        title: "The Kitchen",
        text: "A hidden oasis is perhaps the best way to describe the roof garden on this majestic Georgian building on which to enjoy the island site’s expansive panoramic views of the London Skyline. An evergreen hedge, olive trees, rosemary and a small vineyard all have their part in transporting its guests to a relaxing Mediterranean landscape. The old chimneys have been fitted with gas fired open flame flambeaux to light the terrace with natural fire and there is even an outdoor fireplace to cosy up in front of.",
        description:
          "A hidden oasis is perhaps the best way to describe the roof garden on this majestic Georgian building on which to enjoy the island site’s expansive panoramic views of the London Skyline. An evergreen hedge, olive trees, rosemary and a small vineyard all have their part in transporting its guests to a relaxing Mediterranean landscape. The old chimneys have been fitted with gas fired open flame flambeaux to light the terrace with natural fire and there is even an outdoor fireplace to cosy up in front of.",
      },
      {
        image:
          "https://images.ctfassets.net/5tq979orlb7f/2EqnA7UfZIpWrVrtbT2N4F/f4211afd3bcaf36ec1c26f1e9d5181e2/old_session_home.jpeg",
        title: "Thumbnail Things",
        text: "A hidden oasis is perhaps the best way to describe the roof garden on this majestic Georgian building on which to enjoy the island site’s expansive panoramic views of the London Skyline. An evergreen hedge, olive trees, rosemary and a small vineyard all have their part in transporting its guests to a relaxing Mediterranean landscape. The old chimneys have been fitted with gas fired open flame flambeaux to light the terrace with natural fire and there is even an outdoor fireplace to cosy up in front of.",
        description:
          "A hidden oasis is perhaps the best way to describe the roof garden on this majestic Georgian building on which to enjoy the island site’s expansive panoramic views of the London Skyline. An evergreen hedge, olive trees, rosemary and a small vineyard all have their part in transporting its guests to a relaxing Mediterranean landscape. The old chimneys have been fitted with gas fired open flame flambeaux to light the terrace with natural fire and there is even an outdoor fireplace to cosy up in front of.",
      },
    ],
  },
  {
    type: "image_with_text",
    className: "paddingClass",
    items: [
      {
        image:
          "https://images.ctfassets.net/5tq979orlb7f/3KhdJKXfGh35YGZs9UNsv2/2d12586c24a104178b3167fa167389ec/membership-hero.jpg",
        title: "Memberships",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam enim turpis ut quam interdum neque mauris quis. Mi, lorem egestas neque sagittis pulvinar dolor, commodo.",
        button_label: "Explore Memberships",
        button_url: "workclub/membership",
        image_position: "right",
        cream_btn: true,
        button_type: "white_border_hover",
        bg_color: "red",
      },
    ],
  },
  {
    type: "text_image_slider",
    items: [
      {
        title: "The Neighbourhood",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit turpis donec eu amet, id. Volutpat in dis sagittis velit mauris.",
        hide_button: true,
        button_label: "Enquire",
        caption: "Sample Caption Works",
        button_url: "/",
        list: [
          {
            image:
              "https://images.ctfassets.net/5tq979orlb7f/10qmuHIivpEIlIqZuUzehm/6a6b6f3e29f814366b7343e231892d6d/hero.jpg",
          },
          {
            image:
              "https://images.ctfassets.net/5tq979orlb7f/5xmHEAh50S2kgsa0ngGg3E/c120a56c3964b931846ff322dc17b4b0/workclub.jpg",
          },
          {
            image:
              "https://downloads.ctfassets.net/5tq979orlb7f/6YCtkdrd1VVEo9umAb9BXn/fb0866eeb7293311f513c318d4aa9786/OSH_Press_Preview0222.jpg",
          },
        ],
        image_position: "left",
      },
    ],
  },
  {
    type: "find_us",
    title: "Find Us",
    address: "21, Clerkenwell Close Greater London, United Kingdom 1",
    apiKey: "",
    markerIcon: marker,
    loc: {
      lat: 30.26555,
      lng: -97.7497,
    },
    items: [
      {
        icon: "/svgs/bus.svg",
        label: "Bus:",
        value: "3 Blocks from __ bus stop",
      },
      {
        icon: "/svgs/rail.svg",
        label: "Rail:",
        value: "Kings Cross St Pancras - 15 min via tube",
      },
      {
        icon: "/svgs/cycle.svg",
        label: "Cycle:",
        value: "3 Blocks from __station",
      },
      {
        icon: "/svgs/plane.svg",
        label: "Airport:",
        value: "Heathrow - 1 hour via public transport",
      },
      {
        icon: "/svgs/tube.svg",
        label: "Tube:",
        value: "Holborn Tube - 2 min walk",
      },
    ],
  },
];

// offices landing page
// const widgets = () => [
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
//     forPage: "offices",
//     items: [
//       {
//         image: leftBg,
//         title: "Amenity name",
//         onButtonClick: () => document.getElementById("enquireTrigger")?.click(),
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem arcu porta nisl sollicitudin posuere gravida rhoncus.",
//       },
//       {
//         image: rightBg,
//         title: "Amenity name",
//         onButtonClick: () => document.getElementById("enquireTrigger")?.click(),
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem arcu porta nisl sollicitudin posuere gravida rhoncus.",
//       },
//       {
//         image: leftBg,
//         title: "Amenity name",
//         onButtonClick: () => document.getElementById("enquireTrigger")?.click(),
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem arcu porta nisl sollicitudin posuere gravida rhoncus.",
//       },
//     ],
//   },
// ];

// offices by city / filters page
// const widgets = (mapCenter, setCenter, filters, setFilters) => [
//   {
//     type: "filters",
//     labels: {
//       city: { label: "City", name: "city" },
//       neighborhood: { label: "Neighbourhood", name: "neighborhood" },
//       sizeInSqft: { label: "Square Feet", name: "sizeInSqft" },
//       sizeInM2: { label: "Square Meters", name: "sizeInSqm" },
//       date: { label: "Date Range", name: "availableFrom" },
//       seat: { label: "Seat", name: "seatCapacity" },
//       floor: { label: "Floor", name: "floor" },
//     },
//     APIKey: "AIzaSyA7QhLNGYH_eg6-ZtPhfZlkh6dBSBNpcdk",
//     markerIcon: marker,
//     mapCenter,
//     setCenter,
//     unitOfMeasurement: "SQM",
//     onMarkerPress: (lat, lng) => {},
//     cityOptions: {
//       "hylo-first-floor": "HyLO",
//     },
//     neighborhoodOptions: {
//       ketu: "ketu",
//       alapere: "alapere",
//     },
//     sizeInSqftOptions: {
//       50: "500",
//       70: "350",
//     },
//     sizeInM2Options: {
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
//     onMouseLeaveListingsSection: () => {
//       console.log("mouse left listing section --->");
//     },
//     onFilterChanged: (values) => setFilters(values),
//     items: [
//       {
//         image: leftBg,
//         link: "",
//         country: "London",
//         place: "HYLO, Ground Floor",
//         contactEmail: "brokers@knotel.com",
//         address: "Bunhill Row, Greater London, United Kingdom",
//         lat: 6.5244,
//         lng: 3.3792,
//         floor: "1",
//         seat: "1000",
//         square_feet: "26685",
//         available_date: 1670025000,
//         list: [
//           {
//             label: "Hylo, 1st Floor",
//           },
//           {
//             label: "Hylo, 2nd Floor",
//           },
//           {
//             label: "Hylo, 3rd Floor",
//           },
//           {
//             label: "+ 3 more",
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
//         contactEmail: "brokers@knotel.com",
//         floor: "1",
//         square_feet: "16685",
//         available_date: 1670025000,
//         list: [
//           {
//             label: "1st Floor",
//           },
//           {
//             label: "2nd Floor",
//           },
//           {
//             label: "3rd Floor",
//           },
//           {
//             label: "+3 more",
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
//         contactEmail: "brokers@knotel.com",

//         available_date: 1667300455,
//         list: [
//           {
//             label: "Available:",
//           },
//           {
//             label: "Floor #:",
//           },
//           {
//             label: "Size:",
//           },
//           {
//             label: "Seat #:",
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
//         contactEmail: "brokers@knotel.com",
//         available_date: 1667300455,
//         list: [
//           {
//             label: "Available:",
//           },
//           {
//             label: "Floor #:",
//           },
//           {
//             label: "Size:",
//           },
//           {
//             label: "Seat #:",
//           },
//         ],
//       },
//     ],
//   },
// ];

// const widgets = (mapCenter, setCenter, filters, setFilters) => [
//   {
//     type: "filters",
//     labels: {
//       city: { label: "City", name: "city" },
//       neighborhood: { label: "Neighborhood", name: "neighborhood" },
//       sizeInSqft: { label: "Square Feet", name: "sizeSqft" },
//       sizeInM2: { label: "Meters Squared", name: "sizeM2" },
//       date: { label: "Date Range", name: "availableFrom" },
//       seat: { label: "People", name: "seatCapacity" },
//       floor: { label: "Floors", name: "floor" },
//     },
//     APIKey: "AIzaSyA7QhLNGYH_eg6-ZtPhfZlkh6dBSBNpcdk",
//     markerIcon: "/icons/marker_new.png",
//     close_icon: "/svgs/closeIcon.svg",
//     listIcon: "/svgs/list.svg",
//     arrow: "/svgs/map_arrow.svg",
//     funnel: "/svgs/filterfunnel.svg",
//     bi_map: "/svgs/bi_map.svg",
//     mapCenter: null,
//     defaultFilters: {},
//     cityOptions: {
//       amsterdam: "Amsterdam",
//       austin: "Austin",
//       berlin: "Berlin",
//       dallas: "Dallas",
//       dublin: "Dublin",
//       london: "London",
//       "los-angeles": "Los Angeles",
//       miami: "Miami",
//       "new-york-city": "New York City",
//       paris: "Paris (Deskeo)",
//       "san-francisco": "San Francisco",
//       seattle: "Seattle",
//       toronto: "Toronto",
//     },
//     neighborhoodOptions: { "City Fringe": "City Fringe" },
//     seatOptions: {
//       "1_to_15": "1-15",
//       "16_to_30": "16-30",
//       "31_to_45": "31 - 45",
//       "46_to_60": "46 - 60",
//       "60_to_": "60 +",
//     },
//     sizeInSqftOptions: {
//       _to_2000: "Under 2000 sqft",
//       "2001_to_5000": "2001 - 5000 sqft",
//       "5001_to_8000": "5001 - 8000 sqft",
//       "8000_to_": "+8000 sqft",
//     },
//     sizeInM2Options: {
//       _to_185: "Under 185 ㎡",
//       "186_to_470": "186 - 470 ㎡",
//       "471_to_750": "471 - 750 ㎡",
//       "750_to_": "+750 ㎡",
//     },
//     floorOptions: {
//       "0_to_10": "Ground - 10th Floor",
//       "10_to_20": "10th - 20th Floor",
//       "21_to_50": "21st - 50th Floor",
//     },
//     city: "London",
//     items: [
//       {
//         image:
//           "https://images.ctfassets.net/5tq979orlb7f/30JUqC92tLWSquD6v47TYV/8d338725aed573cc1a9a6771df619876/20200715-Socrates_Gilray_House-NO_06-Front_closeup.jpg",
//         link: "/offices/london/gilray-house",
//         country: "London",
//         address: "1 , 150 City Rd London EC1V 2NL , UK",
//         lat: 51.52707,
//         lng: -0.08866,
//       },
//     ],
//   },
// ];

// landlords;
// const widgets = () => [
//   {
//     type: "left_right_banner",
//     image: bannerImg,
//     bg_color: "green",
//     title: "Flexible solutions for your office portfolio.",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     button_label: "Submit your space",
//     button_url: "image_with_text",
//     button_type: "blue_hover",
//     onButtonClick: () => console.log("button clicked --->"),
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
//         button_type: "blue_hover",
//         onButtonClick: () => console.log("----> button clicked"),
//         image_position: "left",
//       },
//       {
//         image: leftBg,
//         title: "Mauris fusce.",
//         text: "Knotel works with landlords to design, build and operate office space for companies on flexible terms, while minimizing buildout disruption and maximizing long-term property value.",
//         button_label: "Submit your space",
//         button_type: "blue_hover",
//         onButtonClick: () => console.log("----> button clicked"),
//         button_url: "/",
//         image_position: "right",
//       },
//       {
//         image: leftBg,
//         title: "Mauris fusce.",
//         text: "Knotel works with landlords to design, build and operate office space for companies on flexible terms, while minimizing buildout disruption and maximizing long-term property value.",
//         button_label: "Submit your space",
//         onButtonClick: () => console.log("----> button clicked"),
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
//     bg_color: "cali",
//     title: "Flexible solutions to meet client needs.",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
//     button_label: "Get in touch",
//     button_url: "/",
//     button_type: "blue_hover",
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

// const widgets = () => [
//   {
//     type: "404",
//   },
// ];

// const widgets = () => [
//   {
//     type: "terms_menu",
//     items: [
//       { label: "Website terms of use", link: "/legal/terms" },
//       { label: "Privacy (US)", link: "/legal/privacy-policy" },
//       { label: "Privacy (Eur)", link: "/legal/european-privacy-addendum" },
//       {
//         label: "Personal information",
//         link: "/legal/do-not-sell-my-information",
//       },
//       { label: "Accessibility", link: "/legal/accessibility" },
//       {
//         label: "California data subject access request form",
//         link: "/california-rights-form",
//       },
//       {
//         label: "Notice for California Consumers",
//         link: "/legal/notice-for-california-consumers",
//       },
//     ],
//     pathname: "/legal/terms",
//   },
//   {
//     type: "text_editor",
//     text: ""`\n<h6>Effective Date of Current Policy:  March 24, 2023 \n    <h1 data-reactroot="">Knotel Website Terms</h1><p data-reactroot=""><b>YOU SHOULD READ THESE WEBSITE TERMS, THE </b><a href="/legal/privacy-policy"><u><b>PRIVACY NOTICE</b></u></a><b>  AND </b><a href="/legal/european-privacy-addendum"><u><b>EUROPEAN PRIVACY ADDENDUM</b></u></a><b> BEFORE USING THIS WEBSITE.</b></p><p data-reactroot="">By continuing to access and/or use this website (together with any and all other Knotel websites or subdomains, each, a “Site,” and collectively, the “Sites”) offered by Knotel Holdings, LLC and/or its affiliates (“Knotel”), you (which term, as used herein, includes you personally and any entity you represent and the company or organization on whose behalf Knotel grants you access) hereby expressly acknowledge and agree that you have read and agree to be bound by and a party to the terms and conditions set forth in these “Website Terms”, the Privacy Notice and European Privacy Addendum (collectively, the “Terms”). Knotel reserves the right to modify the Terms at any time upon posting to the Sites, so you should review the Terms whenever accessing and/or using the Sites. Continued use of or access to the Sites after the posting of modifications to the Terms, signifies your acceptance of the Terms, as modified. You may not access or use the Sites if, at any time, you do not wish to accept the terms and conditions set forth in the Terms. As used in the Terms, “include(s)” and “including” mean “including without limitation.”</p><p data-reactroot="">\n</p><p data-reactroot="">The Sites, and any and all content, information, data and materials made available on the Sites, including images, text and audio (collectively, the “Content”), as well as any and all intellectual property rights now or hereafter in and to any of the foregoing (collectively, the “Intellectual Property Rights”) are and shall at all times remain the sole and exclusive property of Knotel and are protected by applicable copyright, patent, trademark and other intellectual property laws. All other trademarks, if any, on the Sites are the property of their respective owners. You shall not remove any copyright, trademark or other notices or disclaimers contained in this Site and/or the Content. You acquire absolutely no rights or licenses in or to any of the Sites, the Content or the Intellectual Property Rights, other than the limited rights to access and use the Sites as expressly permitted by these Website Terms and in compliance with applicable laws, rules, regulations and Knotel’s instructions from time to time. You agree to protect the proprietary rights of Knotel and all others having rights in the Sites, any of the Content and/or any of the Intellectual Property Rights and to comply with all reasonable written or electronic requests made by Knotel or its suppliers of content or services or otherwise (collectively, “Suppliers”) to protect their and others’ contractual, statutory and common law rights in the Sites, the Content and/or the Intellectual Property Rights.</p><p data-reactroot="">You are entitled to view, copy and print any documents from the Sites, but only for your personal purposes or if you are using the Sites on behalf of the entity you represent or on behalf of the company or organization on whose behalf Knotel grants you access, only for such entity’s or company’s or organization’s internal business purposes. Any sale, transmission or redistribution of the Sites, the Content or the Intellectual Property Rights, and any copying, modification or other use of the Sites, the Content or the Intellectual Property Rights for any purposes other than your personal purposes, or, if you are using the Sites on behalf of the entity you represent or on behalf of the company or organization on whose behalf Knotel grants you access, such entity’s or company’s or organization’s internal business purposes, as applicable, are strictly prohibited. Except as specifically permitted by the terms of these Website Terms, you shall not use any of the Sites, the Content, or the Intellectual Property Rights, or any derivations of any of the foregoing, for any purposes whatsoever, without Knotel’ prior written approval. You agree to provide Knotel with prompt written notice of any unauthorized access and/or use of the Sites, any of the Content and/or any of the Intellectual Property Rights by any party or of any claim that any of the Sites, the Content and/or the Intellectual Property Rights infringes upon any intellectual property rights or other contractual, statutory or common law rights.\n</p><p data-reactroot="">YOU MAY NOT COPY, REPRODUCE, RECOMPILE, DECOMPILE, DISASSEMBLE, REVERSE ENGINEER, DISTRIBUTE, PUBLISH, DISPLAY, PERFORM, MODIFY, UPLOAD TO, CREATE DERIVATIVE WORKS FROM, TRANSMIT OR IN ANY WAY EXPLOIT ALL OR ANY PART OF THE SITES, EXCEPT AS EXPRESSLY PROVIDED HEREIN. THE CONTENTS OF THE SITES MAY NOT BE RECIRCULATED, REDISTRIBUTED OR PUBLISHED BY YOU WITHOUT KNOTEL’S PRIOR WRITTEN CONSENT. IF YOU DOWNLOAD ANY INFORMATION OR SOFTWARE FROM THE SITES, YOU AGREE THAT YOU WILL NOT COPY IT OR REMOVE OR OBSCURE ANY COPYRIGHT OR OTHER NOTICES OR LEGENDS CONTAINED IN ANY SUCH INFORMATION. MODIFICATION OF ANY OF THE CONTENT BY YOU WOULD BE A VIOLATION OF KNOTEL’S COPYRIGHT AND OTHER PROPRIETARY RIGHTS. YOU MAY NOT USE THE SITES FOR ANY ILLEGAL PURPOSE OR IN ANY MANNER INCONSISTENT WITH APPLICABLE LAW OR THESE WEBSITE TERMS. YOU MAY NOT OFFER ANY PART OF THE SITES FOR SALE OR DISTRIBUTE THEM OVER ANY OTHER MEDIUM INCLUDING BUT NOT LIMITED TO TELEVISION OR RADIO BROADCAST, A COMPUTER NETWORK OR HYPERLINK FRAMING ON THE INTERNET WITHOUT THE PRIOR WRITTEN CONSENT OF KNOTEL. YOU MAY NOT USE ANY OF KNOTEL’S TRADEMARKS, TRADE NAMES OR SERVICE MARKS IN A MANNER THAT SUGGESTS THAT SUCH NAMES AND MARKS BELONG TO OR ARE ASSOCIATED WITH YOU OR ARE USED WITH KNOTEL’S CONSENT, AND YOU ACKNOWLEDGE THAT YOU HAVE NO OWNERSHIP RIGHTS IN AND TO ANY OF THESE NAMES AND MARKS. YOU WILL NOT USE ANY OF THE SITES OR THE CONTENT IN UNSOLICITED MAILINGS OR SPAM MATERIAL. YOU WILL NOT SPAM OR SEND UNSOLICITED MAILINGS TO ANY PERSON OR ENTITY USING ANY OF THE SITES. YOU AGREE TO COMPLY WITH ANY OTHER APPLICABLE TERMS AND CONDITIONS SET FORTH ON THE SITES OR KNOTEL’S INSTRUCTION PROVIDED FROM TIME TO TIME.</p><p data-reactroot="">In connection with your use of and/or access to the Sites, Knotel from time to time may provide you with user names, passwords and/or other unique identifiers (collectively, “User Codes”). You are responsible for the security and confidentiality of the User Codes and agree not to disclose them to any third party, including, any other employee in your company or organization. You are responsible for any and all information provided, and any and all acts and/or omissions that occur, while User Codes are being used, in each case, whether by you or a third party. Knotel Parties (as defined below) are not</p><p data-reactroot="">responsible for any breach of security caused by your failure to maintain the confidentiality and security of any of the User Codes. You agree to notify Knotel immediately in the event of loss, theft or disclosure of any or all of the User Codes or if you believe the confidentiality or security of any or all of the User Codes has been compromised in any way. You are limited to one User Code. Duplicate User Codes may be revoked. Knotel reserves the right to revoke or modify the User Codes at any time.</p><p data-reactroot="">You represent and warrant that:</p><ul data-reactroot=""><li><p>you will not use or access our Sites or Content if you are not able to form legally binding contracts (for example, if you are under 18 years old);</p></li><li><p>you are the person to whom the User Codes you used to access the Sites were issued by us and the information you provided to us in connection with the issuance of the User Codes, if any, was and is true, accurate, current and complete;</p></li><li><p>if you are accessing the Sites on behalf of the entity you represent or the company or organization to whom the User Codes you used to access the Sites were issued by us, you are duly authorized by all necessary action and have all consents, rights and authority to bind that entity or company or organization to these Website Terms, and you agree to these Website Terms on that company’s or organization’s behalf;</p></li><li><p>you will not reverse engineer, de-compile or reverse compile any of our technology, including any software or Java applets associated with any of the Sites and/or the Content;</p></li><li><p>unless we expressly authorize you to do so in writing, you will not use, reproduce, duplicate, copy, sell, resell, distribute, publish or exploit for any commercial purposes any portion of any of the Sites and/or the Content;</p></li><li><p>you will access and use the Sites in compliance with any and all applicable law(s), rules(s) or regulation(s) (whether in the United States or other countries) and in accordance with these Website Terms; and</p></li><li><p>you have all consents, rights and authority to provide and submit any and all information and content provided and submitted by you using the User Codes, the Sites and/or the Content and all such information and content: (1) is true, accurate, current and complete and we may rely on such information and content; (2) is not libelous, defamatory, indecent, obscene, harassing, hateful or violent; (3) is not meant to harm any Knotel Parties or any third party; (4) does not constitute or include viruses or other harmful codes; (5) as well as its anticipated uses, does not violate, infringe or misappropriate any copyright, patent, trademark or other proprietary rights, or right of publicity or privacy of any Knotel Parties or any third party; and (6) does not violate these Website Terms, or any applicable law, rule or regulation (whether of the United States or other countries).</p></li></ul><p data-reactroot="">You acknowledge that your submission of any information or content to us is at your own risk. None of the Knotel Parties will assume any liability to you with regard to any loss or liability relating to such information in any way.</p><p data-reactroot="">The Sites are made available solely for information purposes and, with the exception of these Website Terms or as otherwise indicated, is not intended to, and shall not, constitute any offer or acceptance with the respect to any transactions or other matters. Except for these Website Terms, the Sites shall not create any legal relationship between you and Knotel.</p><p data-reactroot="">The Sites and the Content are subject to change at any time by Knotel without notice and Knotel reserves the right to modify, suspend, terminate or restrict any aspect or feature of any of the Sites and/or Content or your access to and/or use of the Sites and/or Content. If Knotel elects to modify, suspend, or discontinue any of the Sites, none of the Knotel Parties shall be liable to you or any third party. ANY USE OF THE SITES OR CONTENT IS AT YOUR OWN RISK. THE SITES AND THE CONTENT ARE PROVIDED “AS IS” WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, RELIABILITY, OR COMPLETENESS OF ANY OF THE SITES AND/OR THE CONTENT, OR IN RESPECT OF ANY MATERIALS OR PRODUCTS REFERRED TO ON THE SITES, OR NON-INFRINGEMENT. DIFFICULTIES IN ACCESS TO AND/OR USE OF THE SITES COULD INVOLVE, AMONG OTHERS, FAILURES, DELAYS, MALFUNCTION, SOFTWARE EROSION, INADVERTENT DISCLOSURE OF INFORMATION PROVIDED TO KNOTEL VIA THE SITES, OR HARDWARE DAMAGE, WHICH DIFFICULTIES COULD BE THE RESULT OF HARDWARE, SOFTWARE OR COMMUNICATION LINK INADEQUACIES OR OTHER CAUSES. SUCH DIFFICULTIES COULD LEAD TO POSSIBLE ECONOMIC AND/OR DATA LOSS. KNOTEL DOES NOT WARRANT THAT ANY OF THE SITES ARE COMPATIBLE WITH YOUR EQUIPMENT OR THAT ANY OF THE SITES ARE OR WILL BE FREE FROM LOSS, DESTRUCTION, DAMAGE, CORRUPTION, ATTACK, INTERFERENCE, HACKING, ERRORS, VIRUSES, WORMS, OR OTHER SECURITY INTRUSION. IN NO EVENT SHALL KNOTEL PARTIES BE LIABLE FOR ANY DAMAGE YOU MAY SUFFER AS A RESULT OF ANY OF THE FOREGOING DIFFICULTIES. ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, ARE HEREBY EXCLUDED TO THE EXTENT PERMITTED BY LAW.</p><p data-reactroot="">knotel and its partners, directors, officers, employees and agents (collectively, “Knotel Parties”) shall, to the extent permitted by law, have no liability, contingent or otherwise, whether caused by the negligence of any Knotel Parties, their subcontractors or Suppliers, or otherwise, to you or to any third parties for the accuracy, timeliness, completeness, reliability, performance or continued availability of any of the Sites or the Content or for delays or omissions in any of the foregoing, including, but not limited to, inaccuracies or errors in or omissions from quotes and/or financial data. Knotel Parties shall have no responsibility to maintain any of the Sites and/or the Content or to supply any corrections or updates in connection with any of the Sites and/or the Content. IN NO EVENT WILL KNOTEL PARTIES, THEIR SUBCONTRACTORS OR SUPPLIERS BE LIABLE TO YOU FOR ANY DIRECT, SPECIAL, INDIRECT, INCIDENTAL, EXEMPLARY, PUNITIVE OR CONSEQUENTIAL DAMAGES (INCLUDING, WITHOUT LIMITATION, LOSS OF BUSINESS, LOSS OF PROFIT, LOSS OR CORRUPTION OF DATA, LOSS OF GOODWILL OR REPUTATION OR WASTED MANAGEMENT TIME) WHICH MAY BE INCURRED OR EXPERIENCED ON ACCOUNT OF YOUR ACCESSING, USING AND/OR RELYING ON ANY OF THE SITES OR ANY CONTENT OR LINKS ON ANY OF THE SITES, EVEN IF KNOTEL HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. Any limitations or restrictions on liability in these Website Terms shall only apply to the extent permitted by applicable law.</p><p data-reactroot="">In no event shall Knotel Parties’ total liability to you for all damages, losses and causes of action (whether in contract, tort or otherwise, including but not limited to, negligence) exceed the amount paid by you to Knotel, if any, for accessing the Sites.</p><p data-reactroot="">Nothing set forth in the Sites should be construed as a recommendation to purchase or sell any product or instrument or to enter into any transaction, or as a representation that any particular product or instrument is suitable or appropriate for you. Many of the products described in the Sites involve significant risks and you should not enter into any transactions unless you fully understand all of these risks and have independently determined that the risks are acceptable to you and that the transactions are appropriate for you in light of your objectives, experience, financial and operational resources and other relevant circumstances. Any discussion of risks contained in the Sites, however, should not be considered to be a disclosure of the risks of particular transactions, or a complete discussion of the risks which are mentioned.</p><p data-reactroot="">You should not construe any of the Content as business, financial, investment, hedging, trading, legal, regulatory, tax or accounting advice and you should not make the Sites (or any portions thereof) the primary basis for any trading decisions. In providing the Sites and the Content and entering into any transactions in the products described in the Sites, Knotel is acting solely in the capacity of an arm’s length contractual counterparty and not as a financial advisor or a fiduciary. Under no circumstances should Knotel be considered your advisor or fiduciary and, if you require advice with respect to the products identified in any of the Sites or any contemplated transactions, you should consult your own business, financial, accounting or legal advisors.</p><p data-reactroot="">The Sites may provide links to certain other Sites sponsored, owned, operated and/or maintained by Knotel as well as those sponsored, owned, operated and/or maintained by third parties (“Third Party Websites”). Such Third Party Websites are publicly available and Knotel is providing access to such Third Party Websites through the Sites solely as a convenience to you. The content, data, information, services, goods or advertisements of such Third Party Websites that may be linked to any of the Sites are not sponsored, owned, operated, maintained or controlled by Knotel, and Knotel makes no representations or warranties concerning the content, data, information, services, goods or advertisements of such Third Party Websites, and the fact that access to such websites is provided does not constitute any endorsement, authorization or sponsorship of such websites or their sponsors, owners and/or operators by Knotel nor is there any affiliation between Knotel and any such sponsors, owners, and/or operators. Moreover, Third Party Websites are not reviewed, controlled, or examined by Knotel and Knotel is in no way responsible for the availability, content or accuracy of other websites (including any Third Party Websites), services or goods that may be linked to, or advertised on, any of the Sites and does not make any warranty, express or implied, with respect to the use of the links provided on, or to, any of the Sites or guarantee the accuracy, completeness, usefulness or adequacy of any other websites, services, goods or advertisements that may be linked on, or to, any of the Sites. You understand and agree that you will access and use such Third Party Websites, and rely on the content, services, goods or advertisements of such Third Party Websites, solely at your own risk and that Knotel does not grant to you any rights in respect of such Third Party Websites. In addition, please be aware that your use of any linked site (including any Third Party Website) is subject to the terms and conditions applicable to that website. Please direct any questions regarding such linked sites to the webmasters of such sites.</p><p data-reactroot="">In the course of your access to and/or use of any of the Sites, you may provide, or Knotel may otherwise obtain, information about you and/or your business activities. By using any of the Sites, you expressly consent to Knotel (1) using this information to assess the function and performance of the Sites, to assess the needs of its customers, to market Knotel&#x27;s products and/or services and for the other purposes set out in this paragraph, and (2) transferring this information to Knotel affiliates throughout the world for the purposes specified in (1) above. Any information which you provide or which Knotel otherwise obtains may be used by Knotel for any and all business purposes, provided however that personally identifiable information will be used (and shared) as described in the Privacy Notice and European Privacy Addendum. In the event that information is submitted through your access to any of the Sites erroneously, or you later determine that information should not have been submitted, for any reason, you accept full financial responsibility for such entry.</p><p data-reactroot="">You agree, at your own expense, to indemnify, defend and hold harmless Knotel Parties, their subcontractors and their Suppliers, from and against any and all claims, actions, proceedings, obligations, penalties, losses, liabilities, damages, costs and expenses (including reasonable legal and other professional fees and costs) directly or indirectly arising out of or related to your access to and/or use of any of the Sites and/or the Content, or, in the event that you are provided with User Codes, any access to and/or use of any of the Sites and/or the Content under such User Codes, including, but not limited to: (i) a claim that any use of any of the Sites and/or the Content by you (whether under the User Codes or otherwise) infringes any intellectual property or other proprietary rights of any third party, is libelous or defamatory, or otherwise results in injury or damage to any third party; (ii) any deletions, additions, insertions or alterations to, or any unauthorized use of, any of the Sites and/or the Content by you (whether under the User Codes or otherwise); (iii) any misrepresentation or breach of representation or warranty made by you contained herein; (iv) any breach of any covenant or agreement to be performed by you hereunder; or (v) your violation of any applicable law, rule, or regulation. </p><p data-reactroot="">Knotel may, in its sole discretion, seek your consent to the terms and conditions of these Website Terms by means of an electronic signature by requesting you to affirmatively check the box indicating your acceptance to these Website Terms, or affirmatively “click” on boxes containing the words “I Accept,” “I Agree” or other similar phrases (collectively, “Acceptance Terms”). If you “click” on the Acceptance Terms, your “click” will be deemed a legally binding electronic signature. You acknowledge and agree that you will carefully review any document or web page before making such an electronic signature. By electronically indicating your agreement to these Website Terms and/or registering for and/or accessing, browsing, and/or using any of the Sites and/or accessing, browsing, and/or using any of the Content, you acknowledge and agree: (i) that you intend to form a legally binding contract between you and Knotel; (ii) that you have read and agree to the terms and conditions of these Website Terms; (iii) that you agree and intend that these Website Terms to be the legal equivalent of signed, written contracts, and equally binding; (iv) that by electronically agreeing to these Website Terms, you acknowledge that you have received a copy of these Website Terms by your viewing a web page containing a hyperlink to the web page where these Website Terms are displayed or otherwise; and (v) that if you are executing these Website Terms on behalf of others (including the entity you represent or the company or organization on whose behalf Knotel grants you access to any of the Sites), you hereby certify that you are an authorized representative, duly authorized, including where applicable, by all required corporate action to act on behalf of such others.</p><p data-reactroot="">The terms of these Website Terms shall be governed by, and construed in accordance with, the laws of the State of New York applicable to contracts made and to be fully performed in such State without reference to principles of conflict of laws, and any action brought in relation to these Website Terms shall be brought in a Federal or State court in New York County, New York State. You hereby consent to personal jurisdiction in any applicable court for purposes of any such litigation and hereby waive any claim or defense that such forum is not convenient or proper. You hereby consent to service of process by any means authorized by New York law (other than by publication). You hereby waive any right to trial by jury with respect to any dispute, suit, action or proceeding arising out of or relating to these Website Terms.</p><p data-reactroot="">The terms of these Website Terms represent the complete and exclusive statement of the agreement and understanding between you and Knotel regarding your rights to access and/or use the Sites and/or the Content, and supersede representations (whether written or oral), regarding such subject matter. Except as herein provided, no waiver, modification or amendment of any provision of these Website Terms will be effective against Knotel unless the same is in writing and signed by one of Knotel’ executive officers. Should any term or provision of these Website Terms be deemed or held to be invalid or unenforceable, the remaining terms and provisions will continue in full force and effect. Knotel’ failure to insist at any time upon strict compliance with any term of these Website Terms, or any delay or failure on Knotel’s part to exercise any power or right given to Knotel in these Website Terms, or a continued course of such conduct on Knotel’s part will at no time operate as a waiver of such power or right, nor will any single or partial exercise preclude any other future exercise. All rights and remedies given to Knotel in these Website Terms and other terms and conditions that are subject to these Website Terms are cumulative and not exclusive of any other rights or remedies which Knotel otherwise has at law or equity. These Website Terms will be binding upon you and your executors, heirs, successors and assigns. The term “affiliate” as used in these Website Terms shall mean “affiliate existing from time to time. You may not assign or delegate rights, duties or obligations under these Website Terms without Knotel’s prior written consent. These Website Terms are in addition to, and does not nullify, any other agreement between you and Knotel governing the conduct of your relationship with Knotel.</p><p data-reactroot="">Important Legal Information</p><p data-reactroot="">Knotel does not intend the Content to be distributed to, or used by, any person or entity in any jurisdiction or country where such distribution or use would be contrary to law, rule or regulation or which would subject Knotel to any registration requirement within such jurisdiction or country. Neither the information, nor any opinion contained in any of the Sites constitutes a solicitation or offer by Knotel to buy or sell any securities, futures, options or other financial instruments or provide any investment advice or service.</p><p data-reactroot="">Some of the content, products, and services available through the Sites may include materials that belong to third parties. You acknowledge that none of the Knotel Parties will assume any responsibility for such content, products or services.</p><p data-reactroot="">Although some of the content, information or data made available to you on any of the Sites is obtained and/or compiled from sources Knotel believes to be reliable, Knotel cannot and does not guarantee the accuracy, validity, timeliness or completeness of any such content, information or data made available to you on any of the Sites for any particular purpose. Neither Knotel Parties nor any of their subcontractors or Suppliers will be liable or have any responsibility of any kind for any loss or damage that you incur in the event of any failure or interruption of any of the Sites, or resulting from the act or omission of any other party involved in making any of the Sites or the Content available to you, or from any other cause relating to your access to, or inability to access, or use of, or inability to use any of the Sites or the Content, whether or not the circumstances giving rise to such cause may have been within the control of any Knotel Parties or of any of their subcontractors or Suppliers.</p><p data-reactroot="">All property listing information contained within this site is subject to the possibility of errors, omissions, change of price, rental or other conditions, prior sale, lease or financing, or withdrawal without notice. Any projections, opinions, assumptions or estimates contained within the Sites are for example only, and such projections, opinions, assumptions or estimates may not represent current or future performance of a listed property. You and your tax and legal advisors should conduct your own investigation of any property listed on this site and any contemplated transaction concerning any property listed on the Sites.</p><p data-reactroot=""></p>\n`,
//   },
// ];
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
