import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import React__default, { useState, useEffect, useRef, createContext, useContext } from 'react';
import $ from 'jquery-slim';
import { get, isObject, isEmpty, chunk, isEqual } from 'lodash';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import { Form, Field } from 'react-final-form';
import { required, email } from 'redux-form-validators';
import { ReactSVG } from 'react-svg';
import 'react-date-range';
import moment from 'moment';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import DatePicker from 'react-datepicker';
import { EqualHeight, EqualHeightElement, EqualHeightContext } from 'react-equal-height/clean';
import { useRouter } from 'next/router';
import 'react-router-dom';
import { OnChange } from 'react-final-form-listeners';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import 'next/dynamic';
import { pdfjs } from 'react-pdf';
import GoogleMapReact from 'google-map-react';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var bannerImg = "hero~bcesRuIX.jpg";

var bannerlogo = "bannerlogo~AGeTcEgg.svg";

var leftBg = "office~hVAtwtAq.jpg";

var rightBg = "workclub~LzweSbZa.jpg";

var newsletterImg = "frame~eJKGtndt.jpg";

var detailImg = "detailImg~bawXGItB.jpg";

var landlordImage = "landlordImage~xMOEQrpy.jpg";

var image1 = "image1~hAleMPnp.jpg";

var image2 = "image2~bobMQFMR.jpg";

var image3 = "image3~kdmPTdrT.jpg";

var download = "download~OQomKudt.svg";

var logo1 = "logo1~SsxXLtsV.svg";

var logo2 = "logo2~lhrlnmzw.svg";

var logo3 = "logo3~WnFLVytJ.svg";

var logo4 = "logo4~msYyVIHh.svg";

var logo5 = "logo5~bmDmcJlH.svg";

var privacyMenu = [{
  label: "Website terms of use",
  link: "/terms-of-use"
}, {
  label: "Privacy (US)",
  link: "/privacy-us"
}, {
  label: "Privacy (Eur)",
  link: "/privacy-eur"
}, {
  label: "Personal information",
  link: "/personal-information"
}, {
  label: "Accessibility",
  link: "/accessibility"
}, {
  label: "California data subject access request form",
  link: "/data-access-request"
}];
var data = {
  home: [{
    type: "hero_banner",
    desktop_image: bannerImg,
    title: "Introducing",
    title_image: bannerlogo,
    button_label: "Enquire",
    button_url: "/"
  }, {
    type: "text",
    bg_color: "green",
    text: "<span> Workclub </span> hubs with access to your own branded <span> private office </span> in key gateway cities across the globe."
  }, {
    type: "menu_section",
    items: [{
      image: leftBg,
      title: "Office",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing eliti"
    }, {
      image: rightBg,
      title: "Workclub",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing eliti"
    }]
  }, {
    type: "text_image_block",
    items: [{
      title: "Lorem ipsum dolor",
      sub_title: "Tempus scelerisque felis",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus scelerisque felis lobortis commodo quis. Pulvinar leo ac, lacinia nibh tincidunt. ",
      button_label: "Learn more",
      button_url: "/",
      image: detailImg,
      image_position: "right"
    }, {
      title: "Lorem ipsum dolor",
      sub_title: "Tempus scelerisque felis",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus scelerisque felis lobortis commodo quis. Pulvinar leo ac, lacinia nibh tincidunt. ",
      button_label: "Learn more",
      button_url: "/",
      image: detailImg,
      image_position: "left"
    }]
  }],
  "enquire-form": [{
    type: "enquire_form",
    title: "Lets Connect",
    text: "<span> Lorem ipsum dolor sit amet, </span> consectetur adipiscing elit."
  }],
  news_letter: {
    title: "Newsletter",
    text: "<span> Sign up for the good stuff.</span> Break up your emails with the odd update from us. We hate spam too, so we promise to only send you good things.",
    feedback: "<span>Thank you for subscribing</span><p> We will be in touch soon.<p/> ",
    button_label: "Sign up",
    button_url: "/",
    image: newsletterImg
  },
  contact: {
    form_title: "How can we help you?",
    form_text: "<span>Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit. Enim quam tortor volutpat egestas.",
    button_label: "Submit",
    feedback: "<span>Thank you for your response </span><p> We will be in touch soon.<p/> "
  },
  office: [{
    type: "left_right_banner",
    image: bannerImg,
    bg_color: "green",
    title: "Ullamcorper purus",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant ullamcorper placerat neque, pretium tortor.",
    button_label: "Location",
    button_url: "/",
    border_line: true
  }, {
    type: "text",
    bg_color: "lightblue",
    text: "<span>Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit. Orci rhoncus auctor duis suscipit lobortis id diam. Tortor eu feugiat euismod tempor eget sed cras."
  }, {
    type: "image_slider",
    options: ["All", "UK", "Europe", "America"],
    items: [{
      location: "america",
      image: image1,
      title: "Atlanta",
      link: ""
    }, {
      location: "Europe",
      image: image2,
      title: "Austin",
      link: ""
    }, {
      location: "uk",
      image: image3,
      title: "Berlin",
      link: ""
    }, {
      location: "america",
      image: image1,
      title: "Atlanta",
      link: ""
    }, {
      location: "Europe",
      image: image2,
      title: "Austin",
      link: ""
    }, {
      location: "uk",
      image: image3,
      title: "Berlin",
      link: ""
    }]
  }, {
    type: "amenities",
    heading: "Amenities",
    items: [{
      image: image1,
      title: "Amenity name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem arcu porta nisl sollicitudin posuere gravida rhoncus."
    }, {
      image: image2,
      title: "Amenity name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem arcu porta nisl sollicitudin posuere gravida rhoncus."
    }, {
      image: image3,
      title: "Amenity name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem arcu porta nisl sollicitudin posuere gravida rhoncus."
    }]
  }],
  brokers: [{
    type: "left_right_banner",
    image: bannerImg,
    bg_color: "darkblue",
    title: "Flexible solutions to meet client needs.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    button_label: "Get in touch",
    button_url: "/",
    whiteButton: true
  }, {
    type: "text_table",
    items: [{
      title: "Build client trust",
      text: "A partner who respects your relationships. We provide you with the optionality for all the ways your clients work."
    }, {
      title: "Increase revenue",
      text: "Transparent compensation, timely payments. Close deals faster with our simple, proven sales process. Earn more with each renewal and expansion."
    }, {
      title: "Grow together",
      text: "Maintain your client relationships as they scale in the Knotel portfolio. Advise your clients on strategy, from Series A to IPO. Earn compensation on all expansion and renewal business."
    }]
  }],
  landlords: [{
    type: "left_right_banner",
    image: bannerImg,
    bg_color: "darkblue",
    title: "Flexible solutions for your office portfolio.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    button_label: "Submit your space",
    button_url: "/",
    whiteButton: true
  }, {
    type: "image_with_text",
    items: [{
      image: landlordImage,
      title: "Mauris fusce.",
      text: "Knotel works with landlords to design, build and operate office space for companies on flexible terms, while minimizing buildout disruption and maximizing long-term property value.",
      button_label: "Submit your space",
      button_url: "/",
      image_position: "left"
    }, {
      image: landlordImage,
      title: "Mauris fusce.",
      text: "Knotel works with landlords to design, build and operate office space for companies on flexible terms, while minimizing buildout disruption and maximizing long-term property value.",
      button_label: "Submit your space",
      button_url: "/",
      image_position: "right"
    }, {
      image: landlordImage,
      title: "Mauris fusce.",
      text: "Knotel works with landlords to design, build and operate office space for companies on flexible terms, while minimizing buildout disruption and maximizing long-term property value.",
      button_label: "Submit your space",
      button_url: "/",
      image_position: "left"
    }]
  }],
  detail: [{
    type: "banner",
    image: detailImg,
    title: "HYLO ground floor",
    text: "Welcome to London’s future workplace."
  }, {
    type: "details",
    items: [{
      title: "About",
      list: [{
        icon: logo1,
        label: "Available:",
        value: "November 1"
      }, {
        icon: logo2,
        label: "Floor #:",
        value: "Ground Floor"
      }, {
        icon: logo3,
        label: "Size:",
        value: "26,685 sqft"
      }, {
        icon: logo4,
        label: "Seat #:",
        value: "Undefined Seats"
      }, {
        icon: logo5,
        label: "Enquire:",
        value: "Lorem@ipsum.com",
        link: true
      }]
    }, {
      title: "Whats Included",
      list: [{
        text: "Lorem ipsum dolor sit amet"
      }, {
        text: "consectetur adipiscing elit "
      }, {
        text: "Nisi, nulla id viverra pharetra"
      }, {
        text: "Eget leo vitae mattis leo"
      }, {
        text: "Risus etiam nisl"
      }, {
        text: "Sit turpis sed vestibulum dignissim"
      }]
    }, {
      title: "Further Information",
      list: [{
        logo: download,
        button_label: "Download Flyer",
        button_link: "/"
      }, {
        logo: download,
        button_label: "Download Images",
        button_link: "/"
      }, {
        logo: download,
        button_label: "Download Floor Plan",
        button_link: "/"
      }]
    }]
  }, {
    type: "text_image_slider",
    items: [{
      title: "London’s future workspace",
      text: "Knotel at HYLO offers 27,000 square feet of premium office space across 4 floors and access to 17,000 sq ft of retail space. One of London’s most exciting new buildings, HYLO boasts high rise tower floors, roof gardens and new public space. Welcome to London’s future workplace.",
      button_label: "Schedule a tour",
      button_url: "/",
      image_position: "right",
      list: [{
        image: logo1
      }, {
        image: logo2
      }, {
        image: logo1
      }, {
        image: logo2
      }]
    }, {
      title: "Old & new collide",
      text: "This is a place where old and new collide; from cutting-edge-cool Old Street and Shoreditch to the historically influenced City of London. The area is the epicentre of London’s creative and collaborative industries and is more popular than ever with many of London’s forward-thinking financial and professional occupiers. ",
      button_label: "Request information",
      button_url: "/",
      list: [{
        image: logo2
      }, {
        image: logo1
      }, {
        image: logo2
      }, {
        image: logo1
      }],
      image_position: "left",
      bg_color: "green",
      white_button: true
    }]
  }],
  "terms-of-use": [{
    type: "terms_menu",
    items: privacyMenu,
    pathname: "/terms-of-use"
  }, {
    type: "text_editor",
    text: "\n            <h6>Effective Date of Current Policy: June 17, 2022</h6>\n            <h1>Website terms</h1>\n            <h3>Sessions Website Terms</h3>\n            <p>YOU SHOULD READ THESE WEBSITE TERMS, THE PRIVACY NOTICE AND EUROPEAN PRIVACY ADDENDUM BEFORE USING THIS WEBSITE.</p>\n            <p>\n                By continuing to access and/or use this website (together with any and all other Sessions websites or subdomains, each, a \"Site,\" and collectively, the \"Sites\")\n                offered by Knotel Holdings, LLC and/or its affiliates (\"Sessions\"), you (which term, as used herein, includes you personally and\n                any entity you represent and the company or organization on whose behalf Sessions grants you access) hereby expressly acknowledge and agree that you have read\n                and agree to be bound by and a party to the terms and conditions set forth in these \"Website Terms\", the Privacy Notice and European Privacy Addendum (collectively, the \"Terms\").\n                Sessions reserves the right to modify the Terms at any time upon posting to the Sites, so you should review the Terms whenever accessing and/or using the Sites.\n                Continued use of or access to the Sites after the posting of modifications to the Terms, signifies your acceptance of the Terms, as modified.\n                You may not access or use the Sites if, at any time, you do not wish to accept the terms and conditions set forth in the Terms. As used in the Terms, \"include(s)\" and \"including\" mean \"including without limitation.\"\n            </p>\n            <p>\n                The Sites, and any and all content, information, data and materials made available on the Sites, including images, text and audio (collectively, the \"Content\"), as well as any and all intellectual property\n                rights now or hereafter in and to any of the foregoing (collectively, the \"Intellectual Property Rights\") are and shall at all times remain the sole and exclusive property of Sessions and are\n                protected by applicable copyright, patent, trademark and other intellectual property laws. All other trademarks, if any, on the Sites are the property of their respective owners. You shall not\n                remove any copyright, trademark or other notices or disclaimers contained in this Site and/or the Content. You acquire absolutely no rights or licenses in or to any of the Sites, the Content or the\n                Intellectual Property Rights, other than the limited rights to access and use the Sites as expressly permitted by these Website Terms and in compliance with applicable laws, rules, regulations and Sessions'\n                instructions from time to time. You agree to protect the proprietary rights of Sessions and all others having rights in the Sites, any of the Content and/or any of the Intellectual Property Rights and to\n                comply with all reasonable written or electronic requests made by Sessions or its suppliers of content or services or otherwise (collectively, \"Suppliers\") to protect their and others' contractual, statutory\n                and common law rights in the Sites, the Content and/or the Intellectual Property Rights.\n            </p>\n            <p>\n                You are entitled to view, copy and print any documents from the Sites, but only for your personal purposes or if you are using the Sites on behalf of\n                the entity you represent or on behalf of the company or organization on whose behalf Sessions grants you access, only for such entity\u2019s or company\u2019s or organization\u2019s internal business purposes.\n                Any sale, transmission or redistribution of the Sites, the Content or the Intellectual Property Rights, and any copying, modification or other use of the Sites, the Content or the Intellectual Property\n                Rights for any purposes other than your personal purposes, or, if you are using the Sites on behalf of the entity you represent or on behalf of the company or organization on whose behalf Sessions grants you access,\n                such entity\u2019s or company\u2019s or organization\u2019s internal business purposes, as applicable, are strictly prohibited. Except as specifically permitted by the terms of these Website Terms, you shall not use any of the Sites,\n                the Content, or the Intellectual Property Rights, or any derivations of any of the foregoing, for any purposes whatsoever, without Sessions\u2019 prior written approval. You agree to provide Sessions with prompt written\n                notice of any unauthorized access and/or use of the Sites, any of the Content and/or any of the Intellectual Property Rights by any party or of any claim that any of the Sites, the Content and/or the\n                Intellectual Property Rights infringes upon any intellectual property rights or other contractual, statutory or common law rights.\n            </p>\n            <p>\n                YOU MAY NOT COPY, REPRODUCE, RECOMPILE, DECOMPILE, DISASSEMBLE, REVERSE ENGINEER, DISTRIBUTE, PUBLISH, DISPLAY, PERFORM, MODIFY, UPLOAD TO, CREATE DERIVATIVE WORKS FROM, TRANSMIT OR\n                IN ANY WAY EXPLOIT ALL OR ANY PART OF THE SITES, EXCEPT AS EXPRESSLY PROVIDED HEREIN. THE CONTENTS OF THE SITES MAY NOT BE RECIRCULATED, REDISTRIBUTED OR PUBLISHED BY YOU WITHOUT SESSIONS\u2019 PRIOR WRITTEN CONSENT.\n                IF YOU DOWNLOAD ANY INFORMATION OR SOFTWARE FROM THE SITES, YOU AGREE THAT YOU WILL NOT COPY IT OR REMOVE OR OBSCURE ANY COPYRIGHT OR OTHER NOTICES OR LEGENDS CONTAINED IN ANY SUCH INFORMATION. MODIFICATION OF\n                ANY OF THE CONTENT BY YOU WOULD BE A VIOLATION OF SESSIONS\u2019 COPYRIGHT AND OTHER PROPRIETARY RIGHTS. YOU MAY NOT USE THE SITES FOR ANY ILLEGAL PURPOSE OR IN ANY MANNER INCONSISTENT WITH APPLICABLE LAW OR THESE\n                WEBSITE TERMS. YOU MAY NOT OFFER ANY PART OF THE SITES FOR SALE OR DISTRIBUTE THEM OVER ANY OTHER MEDIUM INCLUDING BUT NOT LIMITED TO TELEVISION OR RADIO BROADCAST, A COMPUTER NETWORK OR HYPERLINK FRAMING ON THE\n                INTERNET WITHOUT THE PRIOR WRITTEN CONSENT OF SESSIONS. YOU MAY NOT USE ANY OF SESSIONS\u2019 TRADEMARKS, TRADE NAMES OR SERVICE MARKS IN A MANNER THAT SUGGESTS THAT SUCH NAMES AND MARKS BELONG TO OR ARE ASSOCIATED WITH\n                YOU OR ARE USED WITH SESSIONS\u2019 CONSENT, AND YOU ACKNOWLEDGE THAT YOU HAVE NO OWNERSHIP RIGHTS IN AND TO ANY OF THESE NAMES AND MARKS. YOU WILL NOT USE ANY OF THE SITES OR THE CONTENT IN UNSOLICITED MAILINGS OR SPAM\n                MATERIAL. YOU WILL NOT SPAM OR SEND UNSOLICITED MAILINGS TO ANY PERSON OR ENTITY USING ANY OF THE SITES. YOU AGREE TO COMPLY WITH ANY OTHER APPLICABLE TERMS AND CONDITIONS SET FORTH ON THE SITES OR SESSIONS\u2019 INSTRUCTION\n                PROVIDED FROM TIME TO TIME.\n            </p>\n            <p>\n                In connection with your use of and/or access to the Sites, Sessions from time to time may provide you\n                with user names, passwords and/or other unique identifiers (collectively, \u201CUser Codes\u201D). You are responsible for the security and confidentiality of the User Codes and\n                agree not to disclose them to any third party, including, any other employee in your company or organization. You are responsible for any and all information provided, and any and\n                all acts and/or omissions that occur, while User Codes are being used, in each case, whether by you or a third party. Sessions Parties (as defined below) are not</p>\n            <p>\n                responsible for any breach of security caused by your failure to maintain the confidentiality and security of any of the User Codes. You agree to notify Sessions immediately in the event of loss, theft or\n                disclosure of any or all of the User Codes or if you believe the confidentiality or security of any or all of the User Codes has been compromised in any way. You are limited to one User Code. Duplicate\n                User Codes may be revoked. Sessions reserves the right to revoke or modify the User Codes at any time.\n            </p>\n            <ul>You represent and warrant that:\n                <li>\n                    you will not use or access our Sites or Content if you are not able to form legally binding contracts (for example, if you are under 18 years old);\n\n                </li>\n                <li>\n                    you are the person to whom the User Codes you used to access the Sites were issued by us and the information you provided to us in connection with the\n                    issuance of the User Codes, if any, was and is true, accurate, current and complete;\n                </li>\n                <li>\n                    if you are accessing the Sites on behalf of the entity you represent or the company or organization to whom the User Codes you used to access the Sites were issued by us, you are duly\n                    authorized by all necessary action and have all consents, rights and authority to bind that entity or company or organization to these Website Terms, and you agree to these Website Terms on that company\u2019s or\n                    organization\u2019s behalf;\n                </li>\n                <li>\n                    you will not reverse engineer, de-compile or reverse compile any of our technology, including any software or Java applets associated with any of the Sites and/or the Content;\n\n                </li>\n                <li>\n                    unless we expressly authorize you to do so in writing, you will not use, reproduce, duplicate, copy, sell, resell, distribute, publish or exploit for any commercial purposes any portion of any of the Sites and/or the Content;\n                </li>\n                <li>\n                    you will access and use the Sites in compliance with any and all applicable law(s), rules(s) or regulation(s) (whether in the United States or other countries) and in accordance with these Website Terms; and\n                </li>\n                <li>\n                    you have all consents, rights and authority to provide and submit any and all information and content provided and submitted by you using the User Codes, the Sites and/or the Content and all such information and content: (1) is true, accurate, current and complete and we may rely on such information and content; (2) is not libelous, defamatory, indecent, obscene, harassing, hateful or violent; (3) is not meant to harm any Sessions Parties or any third party; (4) does not constitute or include viruses or other harmful codes; (5) as well as its anticipated uses, does not violate, infringe or misappropriate any copyright, patent, trademark or other proprietary rights, or right of publicity or privacy of any Sessions Parties or any third party; and (6) does not violate these Website Terms, or any applicable law, rule or regulation (whether of the United States or other countries)\n                </li>\n            </ul>\n            <p>\n                You acknowledge that your submission of any information or content to us is at your own risk. None of the Sessions Parties will assume any liability to you with regard to any loss or\n                liability relating to such information in any way.\n            </p>\n            <p>\n                The Sites are made available solely for information purposes and, with the exception of these Website Terms or as otherwise indicated, is not intended to, and shall not, constitute any offer or\n                acceptance with the respect to any transactions or other matters. Except for these Website Terms, the Sites shall not create any legal relationship between you and Sessions.\n            </p>\n            <p>\n                The Sites and the Content are subject to change at any time by Sessions without notice and Sessions reserves the right to modify, suspend, terminate or restrict any aspect or\n                feature of any of the Sites and/or Content or your access to and/or use of the Sites and/or Content. If Sessions elects to modify, suspend, or discontinue any of the Sites, none of the Sessions Parties\n                shall be liable to you or any third party. ANY USE OF THE SITES OR CONTENT IS AT YOUR OWN RISK. THE SITES AND THE CONTENT ARE PROVIDED \u201CAS IS\u201D WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, BUT\n                NOT LIMITED TO, ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, RELIABILITY, OR COMPLETENESS OF ANY OF THE SITES AND/OR THE CONTENT, OR IN RESPECT OF ANY MATERIALS OR PRODUCTS\n                REFERRED TO ON THE SITES, OR NON-INFRINGEMENT. DIFFICULTIES IN ACCESS TO AND/OR USE OF THE SITES COULD INVOLVE, AMONG OTHERS, FAILURES, DELAYS, MALFUNCTION, SOFTWARE EROSION, INADVERTENT DISCLOSURE OF INFORMATION\n                PROVIDED TO SESSIONS VIA THE SITES, OR HARDWARE DAMAGE, WHICH DIFFICULTIES COULD BE THE RESULT OF HARDWARE, SOFTWARE OR COMMUNICATION LINK INADEQUACIES OR OTHER CAUSES. SUCH DIFFICULTIES COULD LEAD TO POSSIBLE ECONOMIC\n                AND/OR DATA LOSS. SESSIONS DOES NOT WARRANT THAT ANY OF THE SITES ARE COMPATIBLE WITH YOUR EQUIPMENT OR THAT ANY OF THE SITES ARE OR WILL BE FREE FROM LOSS, DESTRUCTION, DAMAGE, CORRUPTION, ATTACK, INTERFERENCE, HACKING, ERRORS, VIRUSES, WORMS, OR OTHER SECURITY INTRUSION. IN NO EVENT SHALL SESSIONS PARTIES BE LIABLE FOR ANY DAMAGE YOU MAY SUFFER AS A RESULT OF ANY OF THE FOREGOING DIFFICULTIES.\n                ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, ARE HEREBY EXCLUDED TO THE EXTENT PERMITTED BY LAW.\n            </p>\n            <p>\n                Sessions and its partners, directors, officers, employees and agents (collectively, \u201CSessions Parties\u201D) shall, to the extent permitted by law, have no liability, contingent or otherwise,\n                whether caused by the negligence of any Sessions Parties, their subcontractors or Suppliers, or otherwise, to you or to any third parties for the accuracy, timeliness, completeness, reliability,\n                performance or continued availability of any of the Sites or the Content or for delays or omissions in any of the foregoing, including, but not limited to, inaccuracies or errors in or omissions from\n                quotes and/or financial data. Sessions Parties shall have no responsibility to maintain any of the Sites and/or the Content or to supply any corrections or updates in connection with any of the Sites and/or\n                the Content. IN NO EVENT WILL SESSIONS PARTIES, THEIR SUBCONTRACTORS OR SUPPLIERS BE LIABLE TO YOU FOR ANY DIRECT, SPECIAL, INDIRECT, INCIDENTAL, EXEMPLARY, PUNITIVE OR\n                CONSEQUENTIAL DAMAGES (INCLUDING, WITHOUT LIMITATION, LOSS OF BUSINESS, LOSS OF PROFIT, LOSS OR CORRUPTION OF DATA, LOSS OF GOODWILL OR REPUTATION OR WASTED MANAGEMENT TIME) WHICH MAY BE INCURRED OR\n                EXPERIENCED ON ACCOUNT OF YOUR ACCESSING, USING AND/OR RELYING ON ANY OF THE SITES OR ANY CONTENT OR LINKS ON ANY OF THE SITES, EVEN IF SESSIONS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. Any limitations\n                or restrictions on liability in these Website Terms shall only apply to the extent permitted by applicable law.\n            </p>\n            <p>\n                In no event shall Sessions Parties\u2019 total liability to you for all damages, losses and causes of action (whether in contract, tort or otherwise, including but not limited to, negligence) exceed\n                the amount paid by you to Sessions, if any, for accessing the Sites.\n            </p>\n            <p>\n                Nothing set forth in the Sites should be construed as a recommendation to purchase or sell any product or instrument or to enter into any transaction, or as a representation that any particular\n                product or instrument is suitable or appropriate for you. Many of the products described in the Sites involve significant risks and you should not enter into any transactions unless you fully understand\n                all of these risks and have independently determined that the risks are acceptable to you and that the transactions are appropriate for you in light of your objectives, experience, financial and operational\n                resources and other relevant circumstances. Any discussion of risks contained in the Sites, however, should not be considered to be a disclosure of the risks of particular transactions, or a complete discussion\n                of the risks which are mentioned.\n            </p>\n            <p>\n                You should not construe any of the Content as business, financial, investment, hedging, trading, legal, regulatory, tax or accounting advice and you should not make the\n                Sites (or any portions thereof) the primary basis for any trading decisions. In providing the Sites and the Content and entering into any transactions in the products described in the Sites, Sessions\n                is acting solely in the capacity of an arm\u2019s length contractual counterparty and not as a financial advisor or a fiduciary. Under no circumstances should Sessions be considered your advisor or fiduciary and, if you\n                require advice with respect to the products identified in any of the Sites or any contemplated transactions, you should consult your own business, financial, accounting or legal advisors.\n            </p>\n            <p>\n                The Sites may provide links to certain other Sites sponsored, owned, operated and/or maintained by Sessions as well as\n                those sponsored, owned, operated and/or maintained by third parties (\u201CThird Party Websites\u201D). Such Third Party Websites are publicly available and Sessions is providing\n                access to such Third Party Websites through the Sites solely as a convenience to you. The content, data, information, services, goods or advertisements of such Third Party Websites that may be linked\n                to any of the Sites are not sponsored, owned, operated, maintained or controlled by Sessions, and Sessions makes no representations or warranties concerning the content, data, information, services, goods or\n                advertisements of such Third Party Websites, and the fact that access to such websites is provided does not constitute any endorsement, authorization or sponsorship of such websites or their sponsors, owners\n                and/or operators by Sessions nor is there any affiliation between Sessions and any such sponsors, owners, and/or operators. Moreover, Third Party Websites are not reviewed, controlled, or examined by Sessions and\n                Sessions is in no way responsible for the availability, content or accuracy of other websites (including any Third Party Websites), services or goods that may be linked to, or advertised on, any of the Sites and\n                does not make any warranty, express or implied, with respect to the use of the links provided on, or to, any of the Sites or guarantee the accuracy, completeness, usefulness or adequacy of any other\n                websites, services, goods or advertisements that may be linked on, or to, any of the Sites. You understand and agree that you will access and use such Third Party Websites, and rely on the content, services, goods or\n                advertisements of such Third Party Websites, solely at your own risk and that Sessions does not grant to you any rights in respect of such Third Party Websites. In addition, please be aware that your use of any\n                linked site (including any Third Party Website) is subject to the terms and conditions applicable to that website. Please direct any questions regarding such linked sites to the webmasters of such sites.\n            </p>\n            <p>\n                In the course of your access to and/or use of any of the Sites, you may provide, or Sessions may otherwise obtain, information about you and/or your business activities. By using\n                any of the Sites, you expressly consent to Sessions (1) using this information to assess the function and performance of the Sites, to assess the needs of its customers, to market Sessions\u2019 products\n                and/or services and for the other purposes set out in this paragraph, and (2) transferring this information to Sessions affiliates throughout the world for the purposes specified in (1) above. Any information\n                which you provide or which Sessions otherwise obtains may be used by Sessions for any and all business purposes, provided however that personally identifiable information will be used (and shared) as described\n                in the Privacy Notice and European Privacy Addendum. In the event that information is submitted through your access to any of the Sites erroneously, or you later determine that information should not have been\n                submitted, for any reason, you accept full financial responsibility for such entry.\n            </p>\n            <p>\n                You agree, at your own expense, to indemnify, defend and hold harmless Sessions Parties, their subcontractors and their Suppliers, from and against any and all claims, actions, proceedings, obligations, penalties,\n                losses, liabilities, damages, costs and expenses (including reasonable legal and other professional fees and costs) directly or indirectly arising out of or related to your access to and/or use of any of the Sites\n                and/or the Content, or, in the event that you are provided with User Codes, any access to and/or use of any of the Sites and/or the Content under such User Codes, including, but not limited to: (i) a claim that any\n                use of any of the Sites and/or the Content by you (whether under the User Codes or otherwise) infringes any intellectual property or other proprietary rights of any third party, is libelous or defamatory, or otherwise\n                results in injury or damage to any third party; (ii) any deletions, additions, insertions or alterations to, or any unauthorized use of, any of the Sites and/or the Content by you (whether under the User Codes or\n                otherwise); (iii) any misrepresentation or breach of representation or warranty made by you contained herein; (iv) any breach of any covenant or agreement to be performed by you hereunder; or (v) your violation of\n                any applicable law, rule, or regulation.\n            </p>\n            <p>\n                You agree, at your own expense, to indemnify, defend and hold harmless Sessions Parties, their subcontractors and their Suppliers, from and against any and all\n                claims, actions, proceedings, obligations, penalties, losses, liabilities, damages, costs and expenses (including reasonable legal and other professional fees and costs) directly or indirectly\n                arising out of or related to your access to and/or use of any of the Sites and/or the Content, or, in the event that you are provided with User Codes, any access to and/or use of any of the Sites and/or\n                the Content under such User Codes, including, but not limited to: (i) a claim that any use of any of the Sites and/or the Content by you (whether under the User Codes or otherwise) infringes any intellectual\n                property or other proprietary rights of any third party, is libelous or defamatory, or otherwise results in injury or damage to any third party; (ii) any deletions, additions, insertions or alterations to, or\n                any unauthorized use of, any of the Sites and/or the Content by you (whether under the User Codes or otherwise); (iii) any misrepresentation or breach of representation or warranty made by you contained\n                herein; (iv) any breach of any covenant or agreement to be performed by you hereunder; or (v) your violation of any applicable law, rule, or regulation.\n            </p>\n            <p>\n                Sessions may, in its sole discretion, seek your consent to the terms and conditions of these Website Terms by means of an electronic signature by requesting you to affirmatively check the\n                box indicating your acceptance to these Website Terms, or affirmatively \u201Cclick\u201D on boxes containing the words \u201CI Accept,\u201D \u201CI Agree\u201D or other similar phrases (collectively, \u201CAcceptance Terms\u201D). If\n                you \u201Cclick\u201D on the Acceptance Terms, your \u201Cclick\u201D will be deemed a legally binding electronic signature. You acknowledge and agree that you will carefully review any document or web page before making such\n                an electronic signature. By electronically indicating your agreement to these Website Terms and/or registering for and/or accessing, browsing, and/or using any of the Sites and/or accessing, browsing, and/or\n                using any of the Content, you acknowledge and agree: (i) that you intend to form a legally binding contract between you and Sessions; (ii) that you have read and agree to the terms and conditions of these\n                Website Terms; (iii) that you agree and intend that these Website Terms to be the legal equivalent of signed, written contracts, and equally binding; (iv) that by electronically agreeing to these Website Terms,\n                you acknowledge that you have received a copy of these Website Terms by your viewing a web page containing a hyperlink to the web page where these Website Terms are displayed or otherwise; and (v) that if you are\n                executing these Website Terms on behalf of others (including the entity you represent or the company or organization on whose behalf Sessions grants you access to any of the Sites), you hereby certify that you are an\n                authorized representative, duly authorized, including where applicable, by all required corporate action to act on behalf of such others.\n            </p>\n            <p>\n                The terms of these Website Terms shall be governed by, and construed in accordance with, the laws of the State of New York applicable to contracts made and to be fully performed in such State without\n                reference to principles of conflict of laws, and any action brought in relation to these Website Terms shall be brought in a Federal or State\n            </p>\n            <p>\n                The terms of these Website Terms represent the complete and exclusive statement of the agreement and understanding between you and Sessions regarding your\n                rights to access and/or use the Sites and/or the Content, and supersede representations (whether written or oral), regarding such subject matter. Except as herein provided, no waiver, modification or amendment\n                of any provision of these Website Terms will be effective against Sessions unless the same is in writing and signed by one of Sessions\u2019 executive officers. Should any term or provision of these Website Terms be\n                deemed or held to be invalid or unenforceable, the remaining terms and provisions will continue in full force and effect. Sessions\u2019 failure to insist at any time upon strict compliance with any term of these Website\n                Terms, or any delay or failure on Sessions\u2019 part to exercise any power or right given to Sessions in these Website Terms, or a continued course of such conduct on Sessions\u2019 part will at no time operate as a waiver of\n                such power or right, nor will any single or partial exercise preclude any other future exercise. All rights and remedies given to Sessions in these Website Terms and other terms and conditions that are subject to these\n                Website Terms are cumulative and not exclusive of any other rights or remedies which Sessions otherwise has at law or equity. These Website Terms will be binding upon you and your executors, heirs, successors and assigns. The term \u201Caffiliate\u201D as used in these Website\n                Terms shall mean \u201Caffiliate existing from time to time. You may not assign or delegate rights, duties or obligations under these Website Terms without Sessions\u2019 prior written consent. These Website Terms are in addition to, and does\n                not nullify, any other agreement between you and Sessions governing the conduct of your relationship with Sessions.\n            </p>\n            <h3>Important Legal Information</h3>\n            <p>\n                Sessions does not intend the Content to be distributed to, or used by, any person or entity in any jurisdiction or country where such distribution or use would be contrary to law, rule or\n                regulation or which would subject Sessions to any registration requirement within such jurisdiction or country. Neither the information, nor any opinion contained in any of the Sites constitutes a\n                solicitation or offer by Sessions to buy or sell any securities, futures, options or other financial instruments or provide any investment advice or service.\n            </p>\n            <p>\n                Some of the content, products, and services available through the Sites may include materials that belong to third parties. You acknowledge that none of the Sessions Parties will assume any\n                responsibility for such content, products or services.\n            </p>\n            <p>\n                Although some of the content, information or data made available to you on any of the Sites is obtained and/or compiled from sources Sessions believes to be reliable, Sessions cannot and does not\n                guarantee the accuracy, validity, timeliness or completeness of any such content, information or data made available to you on any of the Sites for any particular purpose. Neither Sessions Parties\n                nor any of their subcontractors or Suppliers will be liable or have any responsibility of any kind for any loss or damage that you incur in the event of any failure or interruption of any of the Sites, or\n                resulting from the act or omission of any other party involved in making any of the Sites or the Content available to you, or from any other cause relating to your access to, or inability to access, or use of, or\n                inability to use any of the Sites or the Content, whether or not the circumstances giving rise to such cause may have been within the control of any Sessions Parties or of any of their subcontractors or Suppliers.\n            </p>\n            <p>\n                All property listing information contained within this site is subject to the possibility of errors, omissions, change of price, rental or other conditions, prior sale,\n                lease or financing, or withdrawal without notice. Any projections, opinions, assumptions or estimates contained within the Sites are for example only, and such projections, opinions, assumptions or\n                estimates may not represent current or future performance of a listed property. You and your tax and legal advisors should conduct your own investigation of any property listed on this site and any contemplated\n                transaction concerning any property listed on the Sites.\n            </p></br></br></br></br>"
  }],
  "privacy-us": [{
    type: "terms_menu",
    items: privacyMenu
  }, {
    type: "text_editor",
    text: "<h6>Effective Date of Current Policy: June 17, 2022</h6><h1>Privacy notice</h1>"
  }, {
    type: "text_editor",
    text: "\n            <p>This Privacy Notice explains how Sessions Collection, including its subsidiaries, handles your personal information. This Privacy Notice applies to this website or mobile application and the websites or mobile applications of Knotel Holdings, LLC and our affiliates (hereinafter referred to as \u201CSessions,\u201D \u201Cwe\u201D, \u201Cus\u201D or \u201Cour\u201D) that display or refer to this Privacy Notice (each a Site and collectively, the Sites), and to any online services that may be available on or through the Sites or other services and products provided by us (the \u201CServices\u201D). This Privacy Notice describes the personal information we collect on the Site and through the Services, and how we use and protect that information.  This Privacy Notice does not apply to information unrelated to any identified or identifiable individual, household, or device.</p>\n            <p>In addition, if you are a resident of the European Economic Area (\u201CEEA\u201D), please see our European Privacy Addendum.</p></br></br>"
  }, {
    type: "text_editor",
    text: "<h2>Information we collect</h2>"
  }, {
    type: "text_editor",
    text: " \n            <ul>\n            To provide the Services, we collect the following information:\n            <li>By which you may be personally identified, such as a first and last name, a home or other physical address, an email address, a telephone number, date of birth, payment information, business information\n                or other identifier that permits us to contact you.</li>\n            <li>That is about our provision of Services to you, such as your membership level and information used to administer your account with us.</li>\n            <li>Information about access to our facilities and attendance at events.</li>\n            <li>About your internet connection, the equipment you use to access our Site, and usage data.</li>\n            </ul>\n\n        <ul>\n            We collect this information from a variety of sources including:\n            <li>Directly from you when you provide it to us.</li>\n            <li>Automatically as you navigate through the Site.</li>\n            <li>From third parties.</li>\n            <li>Information we collect from you.</li>\n        </ul>\n\n        <ul>\n            The information we collect on or through our Site may include:\n            <li>Information that you provide by filling in forms on our Site. This includes information provided at the time you register for an account, sign up for newsletters or a loyalty program, respond to surveys, participate in\n                sweepstakes or contests, or engage in certain activities.</li>\n            <li>Records and correspondence. If you contact us to request information about our Services, request to receive customer or technical support, or otherwise communicate with us.</li>\n            <li>Location utilization information. This includes information about the time and purpose of your visits, the frequency of your visits, information about your guests or visitors, what types of Services you\n                use in our locations, the rooms you book or use, information needed to control access to our locations (including information about where you may be located), information about your\n                guests or visitors, information about your connection to our WiFi provided at our locations and audio/visual recordings connected with security.</li>\n        </ul>\n        <p>\n        Information about transactions. If you make a financial transaction through our Service or provide payment details (including payment card details), we collect information about the purchase or\n        transaction. This includes payment information, billing information, records of services provided, and contact details.\n        </p>\n\n        <p>\n        Information we collect through automatic data collection technologies. We may collect data regarding your use of the Sites through the use of cookies, web beacons, and other\n        automatically collected information. This data may include your IP address; date and time you access the Site and the pages and content you access during your visit; websites that you link to or from; emails\n        from us that you open and the links you click on within those emails. Cookies are small identifiers sent from a web server that are stored on your device for the purpose of identifying your browser or storing\n        information or settings in your browser. Cookies and similar technologies may also be used to personalize your visit by storing your preferences or displaying content based upon what you have viewed on the Sites\n        and other websites. We may use these and similar technologies on the Site and other websites and mobile applications.\n        </p>\n\n    <p>\n        You may choose to use mobile applications that we make available. Those applications may collect location-based information. In addition, when you use an access card or other access credentials\n        to access our locations, we may be able to detect your location. This may be considered geolocation tracking by some regulators.\n    </p>\n\n    <p>\n        Other parties may collect personally identifiable information about your online activities over time and across third-party websites when you use our website or\n        services. We do not respond to \u201Cdo not track\u201D signals or other mechanisms that provide consumers the ability to exercise choice regarding the collection of personally identifiable\n        information about an individual consumer\u2019s online activities over time and across third-party websites or online services.\n    </p>\n\n    <p>\n        Information from third party sources. Advertisers, application providers, and other third parties provide us information in connection with tools we offer and through tools they\n        use to collect information about you when you use our Services. The information they collect may be associated with your personal information or they may collect information about your online\n        activities over time. They may use this information to provide you with interest-based advertising or other targeted content.\n    <p>"
  }, {
    type: "two_column_table",
    items: [{
      title: "How we use the information we gather",
      text: "\n                <p>We may use data we collect for a variety of purposes, including the following:</p><ul>\n                <li>To operate our business and provide our Services to you, which includes managing and controlling access to locations.</li>\n                <li>To support events and meetings occurring at our locations.</li>  \n                <li>To maintain, analyze, customize, measure and improve our Sites and Services.</li>\n                <li>To provide customer support.</li>\n                <li>To measure interest in Sessions\u2019 Services, develop new products and Services, and ensure internal quality control.</li>\n                <li>To verify your identity.</li>\n                <li>To tailor and target content, advertisements, and offers for customers.</li>\n                <li>To notify you about and to conduct contests, sweepstakes, rewards, and other promotions. </li>\n                <li>To monitor and enforce our Terms of Use or similar terms.</li>\n                <li>To comply with law and satisfy our regulatory compliance obligations.</li>\n                <li>To detect and prevent fraud and other prohibited, illicit or illegal activity.</li> \n                <li>For other purposes permitted by law or to which you consent.</li>\n                </ul>"
    }, {
      title: "How we share personal information",
      text: "\n                <p>We may share your information with third parties in order to support and provide our Services. For example we may share your information: </p>\n                <ul>\n                <li>With third party service providers that we have engaged to help deliver our Services and products to you, including co-working space management vendors, event managers, and payment processing providers. We may \n                share aggregated or anonymized data with third parties for our or their purposes.</li>\n                <li>With advertisers on our Site. Likewise, we may receive information from affiliates, promotional partners, and event organizers to offer you special items, services, or invite you to events which we think you may be interested in.</li>  \n                <li>With event organizers or others who host events in our locations, including name and email address. </li>\n                <li>With owners, landlords, or property managers of buildings that we lease. For example, we may share such information in some cases as part of enhanced security measures to monitor and control building access.</li>\n                <li>With corporate affiliates including any of our parent companies, subsidiaries, joint ventures, or other companies under common control with us.</li>\n                <li>With regulators, law enforcement, governmental authorities, as requested or required.</li>\n                <li>With auditors, legal counsel and other third parties in order to comply with our obligation or protect our interests, property or legal rights, or those of our customers or other third parties.</li>\n                <li>With companies or other entities in the course of a corporate sale, merger, reorganization, sale of assets, dissolution, or similar event. </li>\n                <li>To the extent permitted by law, when required by law, in connection with a court order, or other government or law enforcement authority or regulatory agency, or whenever we believe that disclosing such information is necessary or advisable, \n                for example, to protect the rights, property, interests, or safety of you, ourselves or others.</li>\n                </ul>"
    }]
  }, {
    type: "three_column_table",
    items: [{
      title: "How we secure information",
      text: "We maintain policies and procedures to protect the security of your information and to safeguard against unauthorized access to or use of your data. Of course, despite these measures, no network or system is ever entirely secure and we cannot guarantee the security of networks and systems that we operate or that are operated on our behalf."
    }, {
      title: "What choices do you have?",
      text: "Update personal information. If you maintain an online account with us, you can log in to that account to review and change certain information you have provided to us."
    }, {
      title: "Links to third party sites",
      text: "We may provide links to websites that are owned or operated by other companies. When you use a link to visit a third-party website, you will be subject to that website’s privacy and security practices, which may differ from ours. You should review the Privacy Notice, terms of use and security practices of the linked third-party website to understand how that site may use your data and/or information. We are not responsible for the privacy or security of these third-party sites, or the accuracy, completeness, or reliability of the information they provide."
    }, {
      title: "Children’s privacy rights",
      text: "Our online services are not directed to children under the age of 18. We do not knowingly collect data from children under age 18 without parental consent."
    }, {
      title: "Updates to privacy notice",
      text: "We may update this Privacy Notice from time to time in order to provide clarification or notice of changes to our practices. If we make changes, we will revise the Effective Date at the top of this Privacy Notice. Changes to this Privacy Notice will be effective once they are posted unless otherwise indicated."
    }, {
      title: "Contact us",
      text: "If you have any questions or concerns about privacy at Sessions, please contact us at legal@knotel.com, by calling (646) 883-6300."
    }]
  }],
  "privacy-eur": [{
    type: "terms_menu",
    items: privacyMenu
  }, {
    type: "text_editor",
    text: "<h6>Effective Date of Current Policy: June 17, 2022</h6><br/><h1>Website terms</h1>"
  }],
  "personal-information": [{
    type: "terms_menu",
    items: privacyMenu
  }, {
    type: "text_editor",
    text: "<h6>Effective Date of Current Policy: June 17, 2022</h6><br/><h1>Website terms</h1>"
  }],
  accessibility: [{
    type: "terms_menu",
    items: privacyMenu
  }, {
    type: "text_editor",
    text: "<h6>Effective Date of Current Policy: June 17, 2022</h6><br/><h1>Website terms</h1>"
  }],
  "data-access-request": [{
    type: "terms_menu",
    items: privacyMenu
  }, {
    type: "text_editor",
    text: "<h6>Effective Date of Current Policy: June 17, 2022</h6><br/><h1>Website terms</h1>"
  }]
};

var style$1 = {"modal":"_FlLoX","dialogBoxOverlayWrap":"_3aSJc","dialogBoxOverlay":"_3TOQ3","dialogOpen":"_1s7wk","dialogRemove":"_3uL-T","dialogClose":"_2ZD7R","extraClass":"_1uRSH","newsletterDialog":"_T5eUn","closeIcon":"_1RTem","x_icon":"_17Eic","closeText":"_3K3rt","dialogContent":"_2h9zE","header_dialog":"_38sII","col":"_2Lm3M"};

var ModalBase = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ModalBase, _React$Component);
  function ModalBase(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.state = {
      el: null
    };
    return _this;
  }
  var _proto = ModalBase.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var el = document.createElement("div");
    el.className = this.props.className || style$1.modal;
    el.role = "dialog";
    el.setAttribute('aria-modal', "true");
    document.body.appendChild(el);
    this.setState({
      el: el
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.el) {
      document.body.removeChild(this.state.el);
    }
  };
  _proto.render = function render() {
    return this.state.el ? ReactDOM.createPortal(this.props.children, this.state.el) : null;
  };
  return ModalBase;
}(React__default.Component);

var NormalLink = function NormalLink(_ref) {
  var _ref$children = _ref.children,
    children = _ref$children === void 0 ? "" : _ref$children,
    _ref$link = _ref.link,
    link = _ref$link === void 0 ? "" : _ref$link,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$download = _ref.download,
    download = _ref$download === void 0 ? false : _ref$download,
    _ref$target = _ref.target,
    target = _ref$target === void 0 ? "_self" : _ref$target;
  var mailtoCondt = link.indexOf("mailto:") !== -1;
  var telCondt = link.indexOf("tel:") !== -1;
  var httpCondt = link.indexOf("http") !== -1;
  if (disabled) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: className + " " + style.disabledLink
    }, children);
  }
  if (download === true) {
    return /*#__PURE__*/React__default.createElement(Link, {
      href: link,
      ariaLabel: "Click to download"
    }, /*#__PURE__*/React__default.createElement("a", {
      className: "" + className,
      onClick: onClick,
      download: true
    }, children));
  }
  if (httpCondt) {
    return /*#__PURE__*/React__default.createElement(Link, {
      href: link,
      ariaLabel: "External Link"
    }, /*#__PURE__*/React__default.createElement("a", {
      className: "" + className,
      target: "_blank",
      rel: "noreferrer",
      onClick: onClick
    }, children));
  }
  if (mailtoCondt || telCondt) {
    return /*#__PURE__*/React__default.createElement(Link, {
      href: link,
      ariaLabel: telCondt ? "Click to call" : "Click to email"
    }, /*#__PURE__*/React__default.createElement("a", {
      className: "" + className,
      onClick: onClick
    }, children));
  }
  if (link) {
    return /*#__PURE__*/React__default.createElement(Link, {
      href: link
    }, /*#__PURE__*/React__default.createElement("a", {
      className: "" + className,
      href: link,
      target: target,
      onClick: onClick
    }, children));
  }
  return /*#__PURE__*/React__default.createElement("a", {
    className: "" + className,
    onClick: onClick
  }, children);
};

var DialogBox = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DialogBox, _React$Component);
  function DialogBox(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.onCloseHandler = function (callPropsFunc) {
      var _this$props$onClose = _this.props.onClose,
        onClose = _this$props$onClose === void 0 ? function () {} : _this$props$onClose;
      if (callPropsFunc === undefined) {
        callPropsFunc = true;
      }
      _this.closeTimer = _this.setState({
        closeClass: " " + style$1.dialogRemove
      }, function () {
        if (callPropsFunc) {
          _this.openTimer = setTimeout(function () {
            onClose();
          }, 650);
        }
      });
    };
    _this.state = {
      openClass: "",
      closeClass: ""
    };
    _this.openTimer = 0;
    _this.closeTimer = 0;
    return _this;
  }
  var _proto = DialogBox.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;
    this.openTimer = setTimeout(function () {
      _this2.setState({
        openClass: " " + style$1.dialogOpen
      });
    }, 50);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.openTimer);
    clearTimeout(this.closeTimer);
  };
  _proto.render = function render() {
    var _this$props = this.props,
      _this$props$className = _this$props.className,
      className = _this$props$className === void 0 ? "" : _this$props$className,
      _this$props$classes = _this$props.classes,
      classes = _this$props$classes === void 0 ? false : _this$props$classes,
      _this$props$content = _this$props.content,
      content = _this$props$content === void 0 ? false : _this$props$content,
      _this$props$buttons = _this$props.buttons,
      buttons = _this$props$buttons === void 0 ? false : _this$props$buttons,
      _this$props$showClose = _this$props.showClose,
      showClose = _this$props$showClose === void 0 ? true : _this$props$showClose,
      children = _this$props.children,
      close_icon = _this$props.close_icon,
      _this$props$extraClas = _this$props.extraClass,
      extraClass = _this$props$extraClas === void 0 ? false : _this$props$extraClas,
      _this$props$burgerMen = _this$props.burgerMenu,
      burgerMenu = _this$props$burgerMen === void 0 ? false : _this$props$burgerMen,
      _this$props$close = _this$props.close,
      close = _this$props$close === void 0 ? false : _this$props$close,
      close_class = _this$props.close_class;
    var colorClass = {
      hover_coral: style$1.hover_coral
    };
    var _this$state = this.state,
      openClass = _this$state.openClass,
      closeClass = _this$state.closeClass;
    return /*#__PURE__*/React__default.createElement(ModalBase, {
      className: "" + style$1.modal + (classes ? " " + classes : "")
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "" + style$1.dialogBoxOverlayWrap + openClass + closeClass
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "" + style$1.dialogBoxOverlay
    }, /*#__PURE__*/React__default.createElement("div", {
      className: burgerMenu === true ? style$1.header_dialog : style$1.dialogContent + " " + className
    }, showClose === true && /*#__PURE__*/React__default.createElement(NormalLink, {
      className: (extraClass === true ? style$1.extraClass : style$1.dialogClose) + " " + colorClass[close_class],
      onClick: this.onCloseHandler
    }, /*#__PURE__*/React__default.createElement("span", {
      className: style$1.closeIcon
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fas fa-chevron-left"
    })), /*#__PURE__*/React__default.createElement("span", {
      className: style$1.closeText
    }, "Done"), close === true && /*#__PURE__*/React__default.createElement("span", {
      className: style$1.x_icon
    }, /*#__PURE__*/React__default.createElement("img", {
      src: close_icon,
      alt: "done"
    }))), content && content(this.onCloseHandler), children, buttons && /*#__PURE__*/React__default.createElement("div", {
      className: style$1.dialogButtons
    }, buttons(this.onCloseHandler))))));
  };
  return DialogBox;
}(React__default.Component);

var composeValidators = function composeValidators() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }
  return function (value) {
    return validators.reduce(function (error, validator) {
      return error || validator(value);
    }, undefined);
  };
};

var style$2 = {"spinner":"_ZnWHX","spinnerBlade":"_11W5_","spinner-fade":"_2gvm1"};

var getSize = function getSize(size) {
  if (size === "large") {
    return {
      width: 36,
      height: 36
    };
  }
  if (size === "ultra-large") {
    return {
      width: 50,
      height: 50
    };
  }
  return {
    width: 20,
    height: 20
  };
};
var Spinner = function Spinner(_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "#8C8C8C" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "small" : _ref$size;
  return /*#__PURE__*/React__default.createElement("div", {
    className: style$2.spinner,
    style: getSize(size)
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$2.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$2.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$2.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$2.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$2.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$2.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$2.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$2.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$2.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$2.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$2.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$2.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }));
};

var style$3 = {"button":"_gzwD8","banner_btn":"_2x0kL","white_btn":"_1A1QE","icon_btn":"_34o-0","icon_left":"_jK-ur","icon_right":"_fG0_1","cream_btn":"_1Orej","transparent":"_2khMA","block_btn":"_CLUxw","download_icon":"_2IABT","icon_label":"_282Q4","blue_button":"_2TXwS","header_blue_btn":"_2wW0x","form_button":"_rsD-D","middle":"_3A4Z5","date_time":"_ubuZ7","react-datepicker-wrapper":"_2ZZWw","down_icon":"_3P6HN","icon":"_2kafr","fetching":"_DVmKd","buttonDisabled":"_2r2_A","formGroup":"_oWmEg","hasError":"_3r3ON","textbox":"_geN3N","dropdown":"_3_IQn","helpBlock":"_39cIu","controlLabel":"_xVPu0","inputIcon":"_3JwnL","inputWrap":"_OMnMu","floatingDateRange":"_IWrXx","dateRangeInput":"_2SzDJ","dateRageClear":"_1lEH-","dateRageDone":"_1-Be8","field":"_3sDPD","multipleDropdown":"_30F_D","placeholder":"_EEO1n","ddoptionsOpen":"_HlbHQ","ddoptions":"_3co32","ddoptionsList":"_3RK5Y","selectedOption":"_2aG6p","ddoption":"_2lers","ddoptionLabel":"_MSjXa","inputCheckbox":"_3Qw5m","checkboxInput":"_3bycZ","inputCheckboxLabel":"_RxBHY","checkboxSquare":"_2plP-","checkboxCenter":"_3qnmW","checkboxLabel":"_3vHpH","selectAll":"_2-uJX","dropdownArrow":"_3EZqT","selectBox":"_yPXuA","prompt":"_FuTer","dropdownIcon":"_3rGEJ"};

var Button = function Button(props) {
  var _props$loading = props.loading,
    loading = _props$loading === void 0 ? false : _props$loading,
    _props$color = props.color,
    color = _props$color === void 0 ? "#02269E" : _props$color,
    _props$className = props.className,
    className = _props$className === void 0 ? "" : _props$className,
    _props$submit = props.submit,
    submit = _props$submit === void 0 ? false : _props$submit,
    _props$label = props.label,
    label = _props$label === void 0 ? "" : _props$label,
    _props$svgIcon = props.svgIcon,
    svgIcon = _props$svgIcon === void 0 ? false : _props$svgIcon,
    _props$target = props.target,
    target = _props$target === void 0 ? "_self" : _props$target,
    _props$fetching = props.fetching,
    fetching = _props$fetching === void 0 ? false : _props$fetching,
    _props$link = props.link,
    link = _props$link === void 0 ? "" : _props$link,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$onClick = props.onClick,
    onClick = _props$onClick === void 0 ? null : _props$onClick,
    _props$rectBtn = props.rectBtn,
    rectBtn = _props$rectBtn === void 0 ? false : _props$rectBtn,
    _props$buttonType = props.buttonType,
    buttonType = _props$buttonType === void 0 ? false : _props$buttonType,
    _props$icon_placement = props.icon_placement,
    icon_placement = _props$icon_placement === void 0 ? "right" : _props$icon_placement,
    id = props.id;
  var btnTypes = {
    header_blue_btn: style$3.header_blue_btn,
    block_btn: style$3.block_btn,
    banner_btn: style$3.banner_btn,
    form_button: style$3.form_button,
    white_btn: style$3.white_btn,
    transparent_btn: style$3.transparent,
    icon_btn: style$3.icon_btn,
    cream_btn: style$3.cream_btn
  };
  className = get(btnTypes, buttonType) + " " + className;
  var iconTag = svgIcon ? /*#__PURE__*/React__default.createElement("span", {
    className: "" + (icon_placement === "left" ? style$3.icon_left : style$3.icon_right)
  }, /*#__PURE__*/React__default.createElement(ReactSVG, {
    src: svgIcon,
    wrapper: "span"
  })) : "";
  var labelTag = /*#__PURE__*/React__default.createElement(React__default.Fragment, null, !fetching && svgIcon && icon_placement === "left" && iconTag, /*#__PURE__*/React__default.createElement("span", {
    className: style$3.svg_label,
    dangerouslySetInnerHTML: {
      __html: label
    }
  }), !fetching && svgIcon && icon_placement === "right" && iconTag);
  if (fetching === true) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "" + style$3.button + (className ? " " + className : "")
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$3.fetching
    }, /*#__PURE__*/React__default.createElement(Spinner, {
      color: color
    })), labelTag);
  }
  if (disabled === true || loading === true) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "" + style$3.button + (className ? " " + className : "") + " " + style$3.buttonDisabled
    }, labelTag, rectBtn !== false && /*#__PURE__*/React__default.createElement("span", {
      className: rectBtn
    }));
  }
  if (submit === true) {
    return /*#__PURE__*/React__default.createElement("button", {
      type: "submit",
      className: "" + style$3.button + (className ? " " + className : "")
    }, labelTag, rectBtn !== false && /*#__PURE__*/React__default.createElement("span", {
      className: rectBtn
    }));
  }
  if (onClick) {
    return /*#__PURE__*/React__default.createElement("a", {
      id: id,
      className: "" + style$3.button + (className ? " " + className : "") + " " + style$3.button_click,
      onClick: onClick,
      href: false
    }, labelTag, rectBtn !== false && /*#__PURE__*/React__default.createElement("span", {
      className: rectBtn
    }));
  }
  if (!link && !onClick) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "" + style$3.button + (className ? " " + className : "")
    }, labelTag, rectBtn !== false && /*#__PURE__*/React__default.createElement("span", {
      className: rectBtn
    }));
  }
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(NormalLink, {
    link: link,
    className: "" + style$3.button + (className ? " " + className : ""),
    onClick: onClick,
    target: target
  }, labelTag, rectBtn !== false && /*#__PURE__*/React__default.createElement("span", {
    className: rectBtn
  })));
};

var Label = function Label(_ref) {
  var text = _ref.text,
    required = _ref.required,
    _ref$focus = _ref.focus,
    focus = _ref$focus === void 0 ? false : _ref$focus;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "" + style$3.controlLabel + (focus === true ? " " + style$3.focus : "")
  }, /*#__PURE__*/React__default.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: text
    }
  }), required && /*#__PURE__*/React__default.createElement("span", {
    className: style$3.required
  }, "*"));
};

var Error = function Error(_ref) {
  var _ref$meta = _ref.meta,
    error = _ref$meta.error,
    touched = _ref$meta.touched,
    _ref$servererror = _ref.servererror,
    servererror = _ref$servererror === void 0 ? [] : _ref$servererror;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, touched === true && typeof error === "string" && /*#__PURE__*/React__default.createElement("p", {
    className: style$3.helpBlock,
    dangerouslySetInnerHTML: {
      __html: error
    }
  }), touched === true && !error && servererror.length > 0 && /*#__PURE__*/React__default.createElement("p", {
    className: style$3.helpBlock,
    dangerouslySetInnerHTML: {
      __html: servererror.join(" ")
    }
  }));
};

var _excluded = ["label", "required", "meta", "inputType", "showsearchicon", "value", "input", "meta", "serverError"];
var Input = function Input(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? false : _props$label,
    _props$required = props.required,
    required = _props$required === void 0 ? false : _props$required,
    _props$meta = props.meta,
    error = _props$meta.error,
    touched = _props$meta.touched,
    _props$inputType = props.inputType,
    inputType = _props$inputType === void 0 ? "text" : _props$inputType,
    _props$showsearchicon = props.showsearchicon,
    showsearchicon = _props$showsearchicon === void 0 ? false : _props$showsearchicon,
    value = props.value,
    input = props.input,
    _props$serverError = props.serverError,
    serverError = _props$serverError === void 0 ? "" : _props$serverError,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  var _useState = useState(false),
    focus = _useState[0],
    setFocus = _useState[1];
  var _useState2 = useState(get(input, "value", "").toString() ? true : false),
    valueEntered = _useState2[0],
    setValueEntered = _useState2[1];
  useEffect(function () {
    setValueEntered(get(input, "value", "").toString() ? true : false);
  }, [get(input, "value")]);
  var onFocusHandler = function onFocusHandler() {
    setFocus(true);
  };
  var onBlurHandler = function onBlurHandler() {
    setFocus(false);
  };
  var getInput = function getInput() {
    if (inputType === "textarea") {
      return /*#__PURE__*/React__default.createElement("textarea", _extends({}, input, other, {
        className: style$3.textbox,
        onFocus: onFocusHandler,
        onBlur: function onBlur(e) {
          input.onBlur(e);
          setTimeout(function () {
            return onBlurHandler();
          });
        }
      }));
    }
    return /*#__PURE__*/React__default.createElement("input", _extends({
      type: inputType
    }, input, other, {
      defaultValue: value,
      className: style$3.textbox,
      onFocus: onFocusHandler,
      onBlur: function onBlur(e) {
        input.onBlur(e);
        setTimeout(function () {
          return onBlurHandler();
        });
      },
      autoComplete: "off"
    }));
  };
  return /*#__PURE__*/React__default.createElement("div", {
    className: "" + style$3.formGroup + (touched && (error || serverError) ? " " + style$3.hasError : "")
  }, label !== false && /*#__PURE__*/React__default.createElement(Label, {
    text: label,
    required: required,
    focus: focus || valueEntered ? true : false
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "" + style$3.inputWrap
  }, getInput(), showsearchicon && /*#__PURE__*/React__default.createElement(Button, {
    filterSearchIcon: true
  })), /*#__PURE__*/React__default.createElement(Error, props));
};

var d = new Date();
d.setDate(d.getDate() - 30);

var Dropdown = function Dropdown(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? false : _props$label,
    required = props.required,
    _props$classes = props.classes,
    classes = _props$classes === void 0 ? false : _props$classes,
    _props$options = props.options,
    options = _props$options === void 0 ? {} : _props$options,
    input = props.input,
    _props$meta = props.meta,
    error = _props$meta.error,
    touched = _props$meta.touched,
    _props$serverError = props.serverError,
    serverError = _props$serverError === void 0 ? "" : _props$serverError,
    _props$icon = props.icon,
    icon = _props$icon === void 0 ? true : _props$icon,
    onDropdownChange = props.onDropdownChange,
    _props$prompt = props.prompt,
    prompt = _props$prompt === void 0 ? false : _props$prompt,
    _props$iconclass = props.iconclass,
    iconclass = _props$iconclass === void 0 ? false : _props$iconclass;
  var _useState = useState(""),
    valueEntered = _useState[0],
    setValueEntered = _useState[1];
  var _useState2 = useState(false),
    isOptionGroup = _useState2[0],
    setIsOptionGroup = _useState2[1];
  var onChangeHandler = function onChangeHandler(event) {
    input.onChange(event);
    if (onDropdownChange) {
      onDropdownChange(event.target.value);
    }
  };
  var getLabel = function getLabel(skey) {
    var value = options[skey] || "";
    if (isObject(value)) {
      var keys = Object.keys(value);
      if (keys.length > 0) {
        return value[keys[0]];
      }
      return "";
    }
    if (!value && isOptionGroup === true) {
      var _keys = Object.keys(options);
      for (var i = 0; i < _keys.length; i++) {
        var _value = options[_keys[i]];
        if (isObject(_value) && _value[skey]) {
          return _keys[i] + " - " + _value[skey];
        }
      }
    }
    return value || "";
  };
  var getText = function getText() {
    var value = input.value;
    var keys = Object.keys(options);
    if (!value) {
      if (prompt !== false) {
        return prompt;
      }
      if (keys.length > 0) {
        return getLabel(keys[0]);
      }
      return "";
    }
    return getLabel(value);
  };
  useEffect(function () {
    var keys = Object.keys(options);
    for (var i = 0; i < keys.length; i++) {
      if (isObject(options[keys[i]])) {
        setIsOptionGroup(true);
        break;
      }
    }
  });
  useEffect(function () {
    setValueEntered(getText());
  }, [input.value, options]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: style$3.formGroup + " " + style$3.dropdown + (touched && (error || serverError) ? " " + style$3.hasError : "")
  }, label !== false && /*#__PURE__*/React__default.createElement(Label, {
    text: label,
    required: required,
    focus: true
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "" + style$3.textbox + (classes ? " " + classes : "")
  }, /*#__PURE__*/React__default.createElement("span", {
    className: style$3.middle
  }, valueEntered), icon === true && /*#__PURE__*/React__default.createElement("span", {
    className: (iconclass === true ? style$3.dropdownIcon : style$3.icon) + " " + style$3.middle
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fas fa-chevron-down"
  }))), /*#__PURE__*/React__default.createElement("select", _extends({}, input, {
    className: style$3.selectBox,
    onChange: onChangeHandler
  }), prompt !== false && /*#__PURE__*/React__default.createElement("option", {
    value: ""
  }, prompt), options && Object.entries(options).map(function (_ref) {
    var key = _ref[0],
      value = _ref[1];
    if (isObject(value)) {
      return /*#__PURE__*/React__default.createElement("optgroup", {
        label: key,
        key: key
      }, Object.entries(value).map(function (_ref2) {
        var k = _ref2[0],
          v = _ref2[1];
        return /*#__PURE__*/React__default.createElement("option", {
          value: k,
          key: k
        }, v);
      }));
    }
    return /*#__PURE__*/React__default.createElement("option", {
      value: key,
      key: key
    }, value);
  })), /*#__PURE__*/React__default.createElement(Error, props));
};

var PopperContainer = function PopperContainer(_ref) {
  var children = _ref.children;
  return ReactDOM.createPortal(children, document.querySelector("body"));
};
var DateTime = function DateTime(props) {
  var input = props.input,
    _props$required = props.required,
    required = _props$required === void 0 ? false : _props$required,
    _props$label = props.label,
    label = _props$label === void 0 ? false : _props$label,
    _props$meta = props.meta,
    error = _props$meta.error,
    touched = _props$meta.touched,
    _props$showTimeSelect = props.showTimeSelect,
    showTimeSelect = _props$showTimeSelect === void 0 ? false : _props$showTimeSelect,
    _props$dateFormat = props.dateFormat,
    dateFormat = _props$dateFormat === void 0 ? "dd MMM yyyy" : _props$dateFormat,
    _props$showTimeSelect2 = props.showTimeSelectOnly,
    showTimeSelectOnly = _props$showTimeSelect2 === void 0 ? false : _props$showTimeSelect2,
    _props$showYearDropdo = props.showYearDropdown,
    showYearDropdown = _props$showYearDropdo === void 0 ? false : _props$showYearDropdo,
    _props$showYearPicker = props.showYearPicker,
    showYearPicker = _props$showYearPicker === void 0 ? false : _props$showYearPicker,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? "Available From" : _props$placeholder;
  var _useState = useState(props.input.value ? moment(parseInt(props.input.value)).toDate() : ""),
    value = _useState[0],
    setValue = _useState[1];
  var onChangeHandler = function onChangeHandler(value) {
    input.onChange(new Date(value).valueOf());
  };
  useEffect(function () {
    if (!get(input, "value")) {
      input.onChange(new Date(value).valueOf());
    }
  }, []);
  useEffect(function () {
    var inputvalue = get(input, "value");
    setValue(inputvalue ? moment(parseInt(inputvalue)).toDate() : "");
  }, [get(input, "value")]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: style$3.date_time + " " + style$3.formGroup + " " + (touched && error ? " " + style$3.hasError : "")
  }, label && /*#__PURE__*/React__default.createElement(Label, {
    text: label,
    required: required,
    focus: true
  }), /*#__PURE__*/React__default.createElement(DatePicker, {
    popperContainer: PopperContainer,
    placeholderText: placeholder,
    selected: value,
    onChange: onChangeHandler,
    dateFormat: dateFormat,
    showTimeSelect: showTimeSelect,
    showTimeSelectOnly: showTimeSelectOnly,
    showYearDropdown: showYearDropdown,
    showYearPicker: showYearPicker
  }), /*#__PURE__*/React__default.createElement("span", {
    className: style$3.dropdownIcon + " " + style$3.middle
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fas fa-chevron-down"
  })), /*#__PURE__*/React__default.createElement(Error, props));
};

var InputHiddenUrl = function InputHiddenUrl(props) {
  var input = props.input;
  useEffect(function () {
    input.onChange(window.location.href);
  }, []);
  return null;
};

var OutOfView = function OutOfView(_ref) {
  var className = _ref.className,
    children = _ref.children,
    onOutCallback = _ref.onOutCallback,
    _ref$rootMargin = _ref.rootMargin,
    rootMargin = _ref$rootMargin === void 0 ? "0px" : _ref$rootMargin,
    id = _ref.id;
  var ref = useRef(null);
  useEffect(function () {
    var observerRef = null;
    var handlePlay = function handlePlay(entries) {
      var entry = entries[0];
      onOutCallback(entry, observer, observerRef);
    };
    var observer = new IntersectionObserver(handlePlay, {
      rootMargin: rootMargin
    });
    if (ref.current) {
      observerRef = ref.current;
      observer.observe(ref.current);
    }
    return function () {
      if (observerRef) {
        observer.unobserve(observerRef);
      }
    };
  }, [rootMargin, onOutCallback]);
  return /*#__PURE__*/React__default.createElement("div", {
    ref: ref,
    className: className,
    id: id
  }, children);
};

var style$4 = {"lazyLoad":"_2JH08","enter":"_2K3Rd"};

var LazyLoad = function LazyLoad(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$lazyLoadClass = _ref.lazyLoadClass,
    lazyLoadClass = _ref$lazyLoadClass === void 0 ? style$4.lazyLoad : _ref$lazyLoadClass,
    _ref$animatedClass = _ref.animatedClass,
    animatedClass = _ref$animatedClass === void 0 ? style$4.enter : _ref$animatedClass,
    children = _ref.children,
    _ref$rootMargin = _ref.rootMargin,
    rootMargin = _ref$rootMargin === void 0 ? "-10%" : _ref$rootMargin,
    id = _ref.id;
  var _useState = useState(""),
    cssClass = _useState[0],
    setCssClass = _useState[1];
  var onOutHandler = function onOutHandler(entry, observer, observerRef) {
    if (entry.isIntersecting) {
      setCssClass(animatedClass);
      if (observerRef) {
        observer.disconnect();
      }
    }
  };
  return /*#__PURE__*/React__default.createElement(OutOfView, {
    className: "" + (className ? className + " " : "") + lazyLoadClass + " " + (cssClass ? " " + cssClass : ""),
    id: id,
    rootMargin: rootMargin,
    onOutCallback: onOutHandler
  }, children);
};

var style$5 = {"form":"_klTS5","form_small":"_1L_3T","form_title":"_yRMDI","form_wrap":"_3EfqO","form_block":"_38mFE","text":"_1hfH4","contact_button":"_1mQAE"};

var ContactForm = function ContactForm(_ref) {
  var contact = _ref.contact,
    _ref$showText = _ref.showText,
    showText = _ref$showText === void 0 ? false : _ref$showText,
    _onSubmit = _ref.onSubmit,
    submitting = _ref.submitting,
    submitted = _ref.submitted,
    locationOptions = _ref.locationOptions,
    interestOptions = _ref.interestOptions,
    _ref$hideFields = _ref.hideFields,
    hideFields = _ref$hideFields === void 0 ? [] : _ref$hideFields,
    _ref$requiredFields = _ref.requiredFields,
    requiredFields = _ref$requiredFields === void 0 ? ['firstName', 'lastName', 'email', 'phone', 'companyName', 'companySize', 'location', 'locationAdditionalDetails', 'interest'] : _ref$requiredFields;
  var ShowField = function ShowField(_ref2) {
    var _ref2$name = _ref2.name,
      name = _ref2$name === void 0 ? '' : _ref2$name,
      children = _ref2.children;
    var names = Array.isArray(name) ? name : [name];
    return !names.every(function (val) {
      return hideFields.includes(val);
    }) && children;
  };
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: style$5.form_title
  }, contact.form_title), showText && /*#__PURE__*/React__default.createElement("div", {
    className: style$5.text,
    dangerouslySetInnerHTML: {
      __html: contact.form_text
    }
  }), submitted ? /*#__PURE__*/React__default.createElement(LazyLoad, null, /*#__PURE__*/React__default.createElement("div", {
    style: {
      borderWidth: "0"
    },
    className: style$5.text,
    dangerouslySetInnerHTML: {
      __html: contact.feedback
    }
  })) : /*#__PURE__*/React__default.createElement(Form, {
    onSubmit: function onSubmit(data) {
      return _onSubmit(data);
    },
    render: function render(_ref3) {
      var handleSubmit = _ref3.handleSubmit,
        values = _ref3.values;
      var locationValues = Object.values(locationOptions);
      return /*#__PURE__*/React__default.createElement("form", {
        name: "booking_contact",
        className: "" + (showText === true ? style$5.form_small : "") + style$5.form,
        onSubmit: handleSubmit
      }, /*#__PURE__*/React__default.createElement(ShowField, {
        name: ["firstName", "lastName"]
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$5.form_wrap
      }, /*#__PURE__*/React__default.createElement(ShowField, {
        name: "firstName"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$5.form_block
      }, /*#__PURE__*/React__default.createElement(Field, {
        name: "firstName",
        component: Input,
        placeholder: "First Name*1",
        validate: requiredFields.includes('firstName') && composeValidators(required())
      }))), /*#__PURE__*/React__default.createElement(ShowField, {
        name: "lastName"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$5.form_block
      }, /*#__PURE__*/React__default.createElement(Field, {
        name: "lastName",
        component: Input,
        placeholder: "Last Name*",
        validate: requiredFields.includes('lastName') && composeValidators(required())
      }))))), /*#__PURE__*/React__default.createElement(ShowField, {
        name: "email"
      }, /*#__PURE__*/React__default.createElement(Field, {
        name: "email",
        component: Input,
        placeholder: "Email Address*",
        validate: requiredFields.includes('email') && composeValidators(required(), email())
      })), /*#__PURE__*/React__default.createElement(ShowField, {
        name: "phone"
      }, /*#__PURE__*/React__default.createElement(Field, {
        name: "phone",
        component: Input,
        type: "tel",
        placeholder: "Phone Number",
        validate: requiredFields.includes('phone') && composeValidators(required())
      })), /*#__PURE__*/React__default.createElement(ShowField, {
        name: ["companyName", "companySize"]
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$5.form_wrap
      }, /*#__PURE__*/React__default.createElement(ShowField, {
        name: "companyName"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$5.form_block
      }, /*#__PURE__*/React__default.createElement(Field, {
        name: "companyName",
        component: Input,
        placeholder: "Company Name",
        validate: requiredFields.includes('companyName') && composeValidators(required())
      }))), /*#__PURE__*/React__default.createElement(ShowField, {
        name: "companySize"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$5.form_block
      }, /*#__PURE__*/React__default.createElement(Field, {
        name: "companySize",
        component: Dropdown,
        prompt: "Company Size",
        options: {
          '1-10': '1-10',
          '11-50': '11-50',
          '50+': '50+'
        },
        validate: requiredFields.includes('companySize') && composeValidators(required())
      }))))), /*#__PURE__*/React__default.createElement(ShowField, {
        name: "location"
      }, /*#__PURE__*/React__default.createElement(Field, {
        name: "location",
        component: Dropdown,
        prompt: "Select Location",
        options: {
          "FANTASTIC": "BEASTS",
          "Other": "Other",
          "Amsterdam": {
            "Amsterdam - Keizersgracht 121": "Keizersgracht 121"
          },
          "Austin": {
            "Austin - 12710 Research Blvd": "12710 Research Blvd",
            "Austin - The Overlook at Rob Roy": "The Overlook at Rob Roy",
            "Austin - 119 Nueces Street": "119 Nueces Street"
          },
          "Berlin": {
            "Berlin - Mehringdamm 33": "Mehringdamm 33",
            "Berlin - Mehringdamm 32": "Mehringdamm 32",
            "Berlin - Hussitenstrasse 32": "Hussitenstrasse 32",
            "Berlin - Neue Grünstrasse 17": "Neue Grünstrasse 17",
            "Berlin - Nürnberger Strasse 8": "Nürnberger Strasse 8"
          },
          "Dublin": {
            "Dublin - Dublin Riverview House, 21 - 23 City Quay": "Dublin Riverview House, 21 - 23 City Quay"
          },
          "London": {
            "London - 33 Soho Square": "33 Soho Square",
            "London - Gilray House": "Gilray House",
            "London - Waverley House, 7-12 Noel Street": "Waverley House, 7-12 Noel Street",
            "London - 1 Finsbury Market": "1 Finsbury Market",
            "London - Imperial House": "Imperial House",
            "London - Chadwick Court, 15 Hatfields": "Chadwick Court, 15 Hatfields",
            "London - Old Sessions House": "Old Sessions House",
            "London - 33 Charlotte Street": "33 Charlotte Street",
            "London - Clerks Court": "Clerks Court",
            "London - HYLO": "HYLO",
            "London - One Lackington": "One Lackington"
          },
          "Malibu": {
            "Malibu - Malibu Vista": "Malibu Vista"
          },
          "Miami": {
            "Miami - The Press": "The Press",
            "Miami - 1200 Ponce De Leon": "1200 Ponce De Leon",
            "Miami - 225 NE 34th St": "225 NE 34th St",
            "Miami - Wyncatcher": "Wyncatcher"
          },
          "Seattle": {
            "Seattle - Federal Reserve": "Federal Reserve"
          },
          "Toronto": {
            "Toronto - 121 King Street West": "121 King Street West"
          },
          "White Plains": {
            "White Plains - 360 Hamilton Ave": "360 Hamilton Ave"
          }
        },
        validate: requiredFields.includes('location') && composeValidators(required())
      }), values.location === locationValues[locationValues.length - 1] ? /*#__PURE__*/React__default.createElement(Field, {
        name: "locationAdditionalDetails",
        component: Input,
        placeholder: "Location Details",
        validate: requiredFields.includes('locationAdditionalDetails') && composeValidators(required())
      }) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null)), /*#__PURE__*/React__default.createElement(ShowField, {
        name: "interest"
      }, /*#__PURE__*/React__default.createElement(Field, {
        name: "interest",
        component: Dropdown,
        prompt: "Interested in ...",
        options: interestOptions,
        validate: requiredFields.includes('interest') && composeValidators(required())
      })), /*#__PURE__*/React__default.createElement(ShowField, {
        name: "additionalDetails"
      }, /*#__PURE__*/React__default.createElement(Field, {
        name: "additionalDetails",
        type: "textarea",
        rows: 2,
        component: Input,
        placeholder: "Additional details",
        validate: requiredFields.includes('additionalDetails') && composeValidators(required())
      })), /*#__PURE__*/React__default.createElement(Field, {
        name: "url",
        component: InputHiddenUrl
      }), /*#__PURE__*/React__default.createElement(Button, {
        className: style$5.contact_button,
        fetching: submitting,
        submit: true,
        label: contact.button_label,
        buttonType: "form_button"
      }));
    }
  }));
};

var EnquireModal = function EnquireModal(_ref) {
  var onClose = _ref.onClose,
    onSubmit = _ref.onSubmit,
    submitting = _ref.submitting,
    submitted = _ref.submitted,
    locationOptions = _ref.locationOptions,
    sizeOptions = _ref.sizeOptions,
    content = _ref.content,
    close_icon = _ref.close_icon,
    interestOptions = _ref.interestOptions;
  return /*#__PURE__*/React__default.createElement(DialogBox, {
    close_icon: close_icon,
    className: "enquireForm",
    onClose: onClose,
    extraClass: true
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "enquire"
  }, /*#__PURE__*/React__default.createElement(ContactForm, {
    onSubmit: onSubmit,
    submitted: submitted,
    submitting: submitting,
    locationOptions: locationOptions,
    sizeOptions: sizeOptions,
    interestOptions: interestOptions,
    contact: content,
    showText: true
  })));
};

var style$6 = {"form":"_1RdIE","form_small":"_2E07u","form_title":"_2G5Pz","form_wrap":"_3kDac","form_block":"_3XR-u","text":"_26tN8"};

var GiftCardForm = function GiftCardForm(props) {
  var content = props.content,
    _props$showText = props.showText,
    showText = _props$showText === void 0 ? false : _props$showText,
    _onSubmit = props.onSubmit,
    submitting = props.submitting,
    submitted = props.submitted;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, submitted ? /*#__PURE__*/React__default.createElement(LazyLoad, null, /*#__PURE__*/React__default.createElement("div", {
    className: style$6.form_title
  }, "Thank you for your response"), /*#__PURE__*/React__default.createElement("div", {
    className: style$6.text
  }, "We will be in touch soon.")) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: style$6.form_title
  }, content.form_title), showText && /*#__PURE__*/React__default.createElement("div", {
    className: style$6.text,
    dangerouslySetInnerHTML: {
      __html: content.form_text
    }
  }), /*#__PURE__*/React__default.createElement(Form, {
    onSubmit: function onSubmit(data) {
      return _onSubmit(data);
    },
    render: function render(_ref) {
      var handleSubmit = _ref.handleSubmit;
      return /*#__PURE__*/React__default.createElement("form", {
        name: "gift_card_form",
        className: "" + (showText === true ? style$6.form_small : "") + style$6.form,
        onSubmit: handleSubmit
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$6.form_wrap
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$6.form_block
      }, /*#__PURE__*/React__default.createElement(Field, {
        name: "firstName",
        component: Input,
        placeholder: "First Name*3",
        validate: composeValidators(required())
      })), /*#__PURE__*/React__default.createElement("div", {
        className: style$6.form_block
      }, /*#__PURE__*/React__default.createElement(Field, {
        name: "lastName",
        component: Input,
        placeholder: "Last Name*",
        validate: composeValidators(required())
      }))), /*#__PURE__*/React__default.createElement(Field, {
        name: "email",
        component: Input,
        placeholder: "Email Address*",
        validate: composeValidators(required(), email())
      }), /*#__PURE__*/React__default.createElement(Field, {
        name: "phone",
        component: Input,
        placeholder: "Phone Number"
      }), /*#__PURE__*/React__default.createElement(Field, {
        name: "companyName",
        component: Input,
        placeholder: "Company Name"
      }), /*#__PURE__*/React__default.createElement(Button, {
        submit: true,
        fetching: submitting,
        label: content.button_label,
        buttonType: "form_button"
      }));
    }
  })));
};

var GiftCardModal = function GiftCardModal(_ref) {
  var onClose = _ref.onClose,
    onSubmit = _ref.onSubmit,
    submitting = _ref.submitting,
    submitted = _ref.submitted,
    content = _ref.content;
  return /*#__PURE__*/React__default.createElement(DialogBox, {
    className: "giftForm",
    onClose: onClose,
    extraClass: true
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "gift"
  }, /*#__PURE__*/React__default.createElement(GiftCardForm, {
    showText: true,
    onSubmit: onSubmit,
    submitted: submitted,
    submitting: submitting,
    content: content
  })));
};

var style$7 = {"form":"_1h9zg","form_small":"_38mqq","form_title":"_1Msfp","form_wrap":"_WP_4q","form_block":"_3yo_J","text":"_2totM"};

var CampaignForm = function CampaignForm(props) {
  var content = props.content,
    _props$showText = props.showText,
    showText = _props$showText === void 0 ? false : _props$showText,
    _onSubmit = props.onSubmit,
    submitting = props.submitting,
    submitted = props.submitted,
    _props$campaign = props.campaign,
    campaign = _props$campaign === void 0 ? '' : _props$campaign;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, submitted ? /*#__PURE__*/React__default.createElement(LazyLoad, null, /*#__PURE__*/React__default.createElement("div", {
    className: style$7.form_title
  }, "Thank you for your response"), /*#__PURE__*/React__default.createElement("div", {
    className: style$7.text
  }, "We will be in touch soon.")) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: style$7.form_title
  }, content.form_title), showText && /*#__PURE__*/React__default.createElement("div", {
    className: style$7.text,
    dangerouslySetInnerHTML: {
      __html: content.form_text
    }
  }), /*#__PURE__*/React__default.createElement(Form, {
    onSubmit: function onSubmit(data) {
      return _onSubmit(data);
    },
    render: function render(_ref) {
      var handleSubmit = _ref.handleSubmit;
      return /*#__PURE__*/React__default.createElement("form", {
        name: "campaign_form",
        className: "" + (showText === true ? style$7.form_small : "") + style$7.form,
        onSubmit: handleSubmit
      }, /*#__PURE__*/React__default.createElement(Field, {
        name: "email",
        component: Input,
        placeholder: "Email Address*",
        validate: composeValidators(required(), email())
      }), /*#__PURE__*/React__default.createElement(Field, {
        name: "message",
        component: Input,
        placeholder: "Message",
        inputType: "textarea"
      }), campaign && /*#__PURE__*/React__default.createElement(Field, {
        name: "campaign",
        type: "hidden",
        initialValue: campaign,
        component: "input"
      }), /*#__PURE__*/React__default.createElement(Button, {
        submit: true,
        fetching: submitting,
        label: content.button_label,
        buttonType: "form_button"
      }));
    }
  })));
};

var CampaignModal = function CampaignModal(_ref) {
  var onClose = _ref.onClose,
    onSubmit = _ref.onSubmit,
    submitting = _ref.submitting,
    submitted = _ref.submitted,
    content = _ref.content,
    campaigns = _ref.campaigns,
    campaign = _ref.campaign;
  var campaignContent = (campaigns === null || campaigns === void 0 ? void 0 : campaigns[campaign]) || {};
  Object.assign(content, campaignContent);
  return /*#__PURE__*/React__default.createElement(DialogBox, {
    className: "giftForm",
    onClose: onClose,
    extraClass: true
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "gift"
  }, /*#__PURE__*/React__default.createElement(CampaignForm, {
    showText: true,
    onSubmit: onSubmit,
    submitted: submitted,
    submitting: submitting,
    content: content,
    campaign: campaign
  })));
};

var ContactModal = function ContactModal(_ref) {
  var onClose = _ref.onClose,
    onSubmit = _ref.onSubmit,
    submitting = _ref.submitting,
    submitted = _ref.submitted,
    locationOptions = _ref.locationOptions,
    sizeOptions = _ref.sizeOptions,
    content = _ref.content,
    close_icon = _ref.close_icon,
    interestOptions = _ref.interestOptions,
    _ref$hideFields = _ref.hideFields,
    hideFields = _ref$hideFields === void 0 ? ['companyName', 'companySize', 'interest'] : _ref$hideFields,
    _ref$requiredFields = _ref.requiredFields,
    requiredFields = _ref$requiredFields === void 0 ? ['firstName', 'lastName', 'email', 'location'] : _ref$requiredFields;
  return /*#__PURE__*/React__default.createElement(DialogBox, {
    className: "giftForm",
    onClose: onClose,
    extraClass: true,
    close_icon: close_icon
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "gift"
  }, /*#__PURE__*/React__default.createElement(ContactForm, {
    onSubmit: onSubmit,
    submitted: submitted,
    submitting: submitting,
    locationOptions: locationOptions,
    sizeOptions: sizeOptions,
    interestOptions: interestOptions,
    contact: content,
    hideFields: hideFields,
    requiredFields: requiredFields,
    showText: true
  })));
};

var style$8 = {"header":"_3zojv","header_btn":"_2ApIx","header_wrap":"_1yRis","header_logo":"_21gM4","footer_logo":"_3uHp_","header_menu_wrap":"_16wJL","header_menu":"_2oPxi","menu_links":"_tIsoV","footer":"_PqHVn","footer_wrap":"_2yola","footer_col":"_2_qcX","footer_email":"_1OE6x","footer_link_item":"_gG0xP","footer_title":"_1jbk4","footer_bottom":"_3qImR","footer_left":"_ShpNL","f_button":"_3CSjs","socials":"_8-1pd","social_padd":"_qvK74","social_logo":"_2aL-2","social_icon":"_nIWa1","burgermenu":"_eThEq","burgerdiv":"_minKu","lines":"_1W2Uj","burgermenu_close":"_q-arN","mobileMenu":"_2ISnJ","f_mobile":"_2mPUP","menu_padd":"_wT2n3","mobile_menu_center":"_Ly4s4","copyright":"_1RIIK"};

var css = {"center":"_2xO1u","mobile_menu_center":"_M5DYZ"};

var Center = function Center(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? false : _ref$className,
    children = _ref.children,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "" + css.center + (className === false ? "" : " " + className),
    style: style
  }, children);
};

var Header = function Header(_ref) {
  var _ref$offset = _ref.offset,
    offset = _ref$offset === void 0 ? 0 : _ref$offset,
    setOpenForm = _ref.setOpenForm,
    logo = _ref.logo,
    close_icon = _ref.close_icon,
    links = _ref.links;
  var _useState = useState(false),
    open = _useState[0],
    setOpen = _useState[1];
  var _useState2 = useState(false),
    menu = _useState2[0],
    setMenu = _useState2[1];
  useEffect(function () {
    if (open === false && $("#menu_close").length) {
      $("#menu_close").click();
    } else if (open === true) {
      setMenu(true);
    }
  }, [open, setMenu]);
  useEffect(function () {
    $("." + style$8.menu_links).click(function () {
      setOpen(false);
    });
  });
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "" + style$8.header,
    role: "navigaton"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "c has_border"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$8.header_wrap
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$8.header_logo
  }, /*#__PURE__*/React__default.createElement(NormalLink, {
    link: "/"
  }, /*#__PURE__*/React__default.createElement("img", {
    src: logo,
    alt: "Knotel"
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: style$8.header_menu_wrap
  }, links.map(function (item) {
    return /*#__PURE__*/React__default.createElement(NormalLink, {
      className: style$8.header_menu,
      link: item.url
    }, item.text);
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$8.header_btn
  }, /*#__PURE__*/React__default.createElement(Button, {
    buttonType: "header_blue_btn",
    onClick: function onClick() {
      setOpenForm("enquire-form");
    },
    id: "enquireTrigger",
    label: "Enquire"
  }))), /*#__PURE__*/React__default.createElement(NormalLink, {
    className: style$8.burgermenu + " " + (open === true ? style$8.burgermenu_close : " "),
    onClick: function onClick(e) {
      e.stopPropagation();
      setOpen(function (prevOpen) {
        return !prevOpen;
      });
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$8.burgerdiv
  }, /*#__PURE__*/React__default.createElement("span", {
    className: style$8.lines
  })))))), menu === true && /*#__PURE__*/React__default.createElement(DialogBox, {
    close_icon: close_icon,
    classes: style$8.mobileMenu,
    showClose: false,
    onClose: function onClose() {
      return setMenu(false);
    },
    burgerMenu: true,
    content: function content(onClose) {
      return /*#__PURE__*/React__default.createElement(LazyLoad, {
        lazyLoadClass: "section_wrap",
        animatedClass: "animated",
        rootMargin: "-20%"
      }, /*#__PURE__*/React__default.createElement("div", {
        style: {
          paddingTop: offset
        },
        className: style$8.mobile_menu_center
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$8.menu_padd
      }, links.map(function (item) {
        return /*#__PURE__*/React__default.createElement(NormalLink, {
          className: style$8.menu_links,
          link: item.url
        }, item.text);
      }), /*#__PURE__*/React__default.createElement("div", {
        className: style$8.header_btn
      }, /*#__PURE__*/React__default.createElement(Button, {
        buttonType: "header_blue_btn",
        onClick: function onClick() {
          setOpenForm("enquire-form");
        },
        label: "Enquire"
      }))), /*#__PURE__*/React__default.createElement("button", {
        id: "menu_close",
        onClick: function onClick() {
          return onClose();
        },
        style: {
          display: "none"
        }
      })));
    }
  }));
};

var generateUrl = function generateUrl(src, size) {
  if (isObject(src)) {
    var image_url = src;
    var name = src.name,
      extension = src.extension,
      updated_at = src.updated_at;
    var w = get(size.split("x"), "[0]", 0);
    var h = get(size.split("x"), "[1]", 0);
    if (extension === "jpg" || extension === "jpeg" || extension === "png") {
      image_url = "/image/" + w + "x" + h + "/" + name;
    } else {
      image_url = "/uploads/" + name;
    }
    if (updated_at) {
      image_url = image_url + "?v=" + updated_at;
    }
    return process.env.REACT_APP_IMAGES + image_url;
  }
  return src;
};

var style$9 = {"bsz":"_g3ab-","bgImage":"_1ecyS","spinner":"_2KqV_","loading":"_3BQ0x","fa":"_3FpUc","sizer":"_3Cyx8"};

var BrokenImage = function BrokenImage(_ref) {
  var className = _ref.className,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? "fa-image" : _ref$icon,
    sizer = _ref.sizer;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, sizer === true && /*#__PURE__*/React__default.createElement("div", {
    className: style$9.sizer
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$9.bsz
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "" + style$9.bgImage + (className ? " " + className : "")
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$9.fa
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa-solid " + icon
  })))));
};
var NormalImage = function NormalImage(_ref2) {
  var src = _ref2.src,
    className = _ref2.className,
    alt = _ref2.alt;
  return /*#__PURE__*/React__default.createElement("div", {
    className: style$9.bsz
  }, /*#__PURE__*/React__default.createElement("div", {
    role: "img",
    "aria-label": alt,
    className: "" + style$9.bgImage + (className ? " " + className : ""),
    style: {
      backgroundImage: "url(" + src + ")"
    }
  }, /*#__PURE__*/React__default.createElement("img", {
    src: src,
    alt: alt
  })));
};
var LazyImage = function LazyImage(_ref3) {
  var src = _ref3.src,
    className = _ref3.className,
    alt = _ref3.alt,
    sizer = _ref3.sizer;
  var _useState = useState(0),
    loaded = _useState[0],
    setLoaded = _useState[1];
  var _useState2 = useState([0, 0]),
    dimesion = _useState2[0],
    setDimension = _useState2[1];
  var onOutHandler = function onOutHandler(entry, observer) {
    if (entry.isIntersecting && loaded === 0) {
      var img = new Image();
      img.src = src;
      if (img.complete || img.readystate === 4) {
        setLoaded(1);
        setDimension([img.width, img.height]);
      } else {
        img.onload = function () {
          setLoaded(1);
          setDimension([img.width, img.height]);
        };
        img.onerror = function () {
          setLoaded(2);
          console.log("Error in loading img: " + src);
        };
      }
      observer.disconnect();
    }
  };
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, sizer === true && /*#__PURE__*/React__default.createElement("div", {
    className: style$9.sizer,
    style: {
      paddingTop: (dimesion[0] > 0 && dimesion[1] > 0 ? dimesion[1] * 100 / dimesion[0] : 50) + "%"
    }
  }), /*#__PURE__*/React__default.createElement(OutOfView, {
    className: style$9.bsz,
    onOutCallback: onOutHandler
  }, /*#__PURE__*/React__default.createElement("div", {
    role: "img",
    "aria-label": alt,
    className: "" + style$9.bgImage + (className ? " " + className : "") + (loaded === 0 ? " " + style$9.loading : ""),
    style: {
      backgroundImage: loaded === 1 ? "url(\"" + encodeURI(src) + "\")" : "none"
    }
  }, loaded === 1 && /*#__PURE__*/React__default.createElement("img", {
    src: src,
    alt: alt
  }), loaded === 0 && /*#__PURE__*/React__default.createElement("div", {
    className: style$9.spinner
  }, /*#__PURE__*/React__default.createElement(Spinner, {
    color: "#fff"
  })), loaded === 2 && /*#__PURE__*/React__default.createElement("div", {
    className: style$9.fa
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa-regular fa-image-slash"
  })))));
};
var Media = function Media(_ref4) {
  var src = _ref4.src,
    _ref4$size = _ref4.size,
    size = _ref4$size === void 0 ? false : _ref4$size,
    _ref4$className = _ref4.className,
    className = _ref4$className === void 0 ? false : _ref4$className,
    _ref4$alt = _ref4.alt,
    alt = _ref4$alt === void 0 ? "" : _ref4$alt,
    _ref4$lazy = _ref4.lazy,
    lazy = _ref4$lazy === void 0 ? true : _ref4$lazy,
    _ref4$fallback = _ref4.fallback,
    fallback = _ref4$fallback === void 0 ? true : _ref4$fallback,
    _ref4$retainAspectRat = _ref4.retainAspectRatio,
    retainAspectRatio = _ref4$retainAspectRat === void 0 ? false : _ref4$retainAspectRat;
  if (isEmpty(src)) {
    if (fallback === true) {
      return /*#__PURE__*/React__default.createElement(BrokenImage, {
        sizer: retainAspectRatio
      });
    }
    return null;
  }
  if (get(src, "type", "") === "image" && (size === false || /{\d+}x{\d+}/g.test(size))) {
    alert("Enter sizer information for the image. Size is a required field.");
  }
  var image_url = generateUrl(src, size);
  if (lazy === false && retainAspectRatio === false) {
    return /*#__PURE__*/React__default.createElement(NormalImage, {
      src: image_url,
      className: className,
      alt: alt
    });
  }
  return /*#__PURE__*/React__default.createElement(LazyImage, {
    src: image_url,
    className: className,
    alt: alt,
    sizer: retainAspectRatio
  });
};

var style$a = {"newsletter":"_38QmU","newsletter_button":"_1e-Jg","newsletterDialog":"_1N_IF","left":"_2Jm_1","right":"_2ixUx","content":"_-H00c","title":"_3Sfxd","text":"_3bqvA","form":"_ryA8R","form_title":"_oQUns","form_wrap":"_24J4B","form_block":"_3-czc","sizer":"_21RVb","item_bg":"_2Q6Pp","item_img":"_1Qdv1","item":"_3dDPZ","wrapper":"_3Mfqk"};

var NewsLetter = function NewsLetter(_ref) {
  var onClose = _ref.onClose,
    content = _ref.content,
    _onSubmit = _ref.onSubmit,
    submitting = _ref.submitting,
    submitted = _ref.submitted,
    close_icon = _ref.close_icon;
  return /*#__PURE__*/React__default.createElement(DialogBox, {
    close_icon: close_icon,
    className: style$a.newsletterDialog,
    classes: "newsletter_dialog",
    onClose: onClose
  }, /*#__PURE__*/React__default.createElement(EqualHeight, null, /*#__PURE__*/React__default.createElement("div", {
    className: "newsletter_modal " + style$a.newsletter
  }, /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "section_wrap col_50_50",
    animatedClass: "animated",
    rootMargin: "-20%"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_top"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_left"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_right"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$a.wrapper
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$a.left
  }, /*#__PURE__*/React__default.createElement(EqualHeightElement, {
    name: "NewsLetter"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$a.content
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_title"
  }, content.title), /*#__PURE__*/React__default.createElement("div", {
    className: style$a.text,
    dangerouslySetInnerHTML: {
      __html: content.text
    }
  }), submitted ? /*#__PURE__*/React__default.createElement(LazyLoad, null, /*#__PURE__*/React__default.createElement("div", {
    style: {
      borderWidth: "0"
    },
    className: style$a.text,
    dangerouslySetInnerHTML: {
      __html: content.feedback
    }
  })) : /*#__PURE__*/React__default.createElement(Form, {
    onSubmit: function onSubmit(data) {
      return _onSubmit(data);
    },
    render: function render(_ref2) {
      var handleSubmit = _ref2.handleSubmit;
      return /*#__PURE__*/React__default.createElement("form", {
        name: "booking_contact",
        className: style$a.form,
        onSubmit: handleSubmit
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$a.form_wrap
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$a.form_block
      }, /*#__PURE__*/React__default.createElement(Field, {
        name: "firstName",
        component: Input,
        placeholder: "First Name*2",
        validate: composeValidators(required())
      })), /*#__PURE__*/React__default.createElement("div", {
        className: style$a.form_block
      }, /*#__PURE__*/React__default.createElement(Field, {
        name: "lastName",
        component: Input,
        placeholder: "Last Name*",
        validate: composeValidators(required())
      }))), /*#__PURE__*/React__default.createElement(Field, {
        name: "email",
        component: Input,
        placeholder: "Email Addrress*",
        validate: composeValidators(required(), email())
      }), /*#__PURE__*/React__default.createElement(Button, {
        fetching: submitting,
        submit: true,
        className: style$a.newsletter_button,
        label: content.button_label,
        buttonType: "form_button"
      }));
    }
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_middle"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$a.right
  }, /*#__PURE__*/React__default.createElement(EqualHeightElement, {
    name: "NewsLetter"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$a.content
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$a.item_bg
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$a.sizer
  }), /*#__PURE__*/React__default.createElement(Media, {
    className: style$a.item_img,
    src: content.image,
    size: "609x396px",
    alt: "Newsletter"
  }))))))))));
};

var Footer = function Footer(_ref) {
  var footerProps = _ref.footerProps;
  var footerLinks = footerProps.footerLinks,
    socials = footerProps.socials,
    contactEmail = footerProps.contactEmail,
    footerLeftText = footerProps.footerLeftText,
    footerRightText = footerProps.footerRightText,
    newsLetterForm = footerProps.newsLetterForm;
  var _useState = useState(false),
    open = _useState[0],
    setOpen = _useState[1];
  return /*#__PURE__*/React__default.createElement("div", {
    className: "c has_border"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$8.footer,
    role: "contentinfo"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$8.footer_wrap
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$8.f_mobile + " " + style$8.footer_left
  }, /*#__PURE__*/React__default.createElement(NormalLink, {
    className: style$8.footer_logo
  }, /*#__PURE__*/React__default.createElement("img", {
    src: footerProps.logo,
    alt: "knotel"
  })), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(NormalLink, {
    link: "mailto:" + contactEmail,
    className: style$8.footer_email
  }, contactEmail)), open === true && /*#__PURE__*/React__default.createElement(NewsLetter, {
    onSubmit: newsLetterForm.onSubmit,
    submitting: newsLetterForm.submitting,
    submitted: newsLetterForm.submitted,
    content: newsLetterForm.content,
    onClose: function onClose() {
      return setOpen(false);
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$8.socials
  }, socials && socials.length > 0 && socials.map(function (item, i) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: style$8.social_padd,
      key: "f_s_" + i
    }, /*#__PURE__*/React__default.createElement(NormalLink, {
      link: item.link,
      className: style$8.social_logo
    }, /*#__PURE__*/React__default.createElement("span", {
      className: style$8.social_icon
    }, /*#__PURE__*/React__default.createElement("i", {
      className: item.icon
    }))));
  }))), footerLinks && footerLinks.length > 0 && footerLinks.map(function (item, i) {
    return /*#__PURE__*/React__default.createElement("div", {
      role: "navigation",
      "aria-labelledby": "footer_" + item.title,
      className: style$8.f_mobile + " " + style$8.footer_col,
      key: "f_title_" + i
    }, /*#__PURE__*/React__default.createElement("div", {
      id: "footer_" + item.title,
      className: style$8.footer_title
    }, item.title), item.links.map(function (linkItem, j) {
      return /*#__PURE__*/React__default.createElement("div", {
        className: style$8.footer_link_item,
        key: "f_title_" + i + "_" + j
      }, /*#__PURE__*/React__default.createElement(NormalLink, {
        link: linkItem.link
      }, linkItem.label));
    }));
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: style$8.footer_bottom
  }, /*#__PURE__*/React__default.createElement("div", null, footerLeftText), /*#__PURE__*/React__default.createElement("div", {
    className: style$8.copyright
  }, footerRightText)));
};

var AppContext = createContext({
  height: null,
  winHeight: null,
  winWidth: null
});
var AppProvider = function AppProvider(_ref) {
  var children = _ref.children;
  var _useState = useState({
      height: null,
      winHeight: null,
      winWidth: null
    }),
    appContext = _useState[0],
    setAppContext = _useState[1];
  var setContext = function setContext(data) {
    setAppContext(_extends({}, appContext, data));
  };
  return /*#__PURE__*/React__default.createElement(AppContext.Provider, {
    value: {
      appContext: appContext,
      setContext: setContext
    }
  }, children);
};

var Layout = function Layout(_ref) {
  var _router$query4;
  var children = _ref.children,
    headerProps = _ref.headerProps,
    footerProps = _ref.footerProps;
  var _useState = useState(false),
    openForm = _useState[0],
    _setOpenForm = _useState[1];
  var _useState2 = useState(false),
    openGiftCardForm = _useState2[0],
    setOpenGiftCardForm = _useState2[1];
  var _useState3 = useState(false),
    openCampaignForm = _useState3[0],
    setOpenCampaignForm = _useState3[1];
  var _useState4 = useState(false),
    openContactFormModal = _useState4[0],
    setOpenContactFormModal = _useState4[1];
  var _useContext = useContext(AppContext),
    setContext = _useContext.setContext;
  var _useState5 = useState({
      height: 0
    }),
    dimesions = _useState5[0],
    setDimensions = _useState5[1];
  var router = useRouter();
  function updateDimensions() {
    var _dimensions = {
      height: $("." + style$8.header).outerHeight(),
      winHeight: $(window).height(),
      width: $(window).outerWidth(),
      winWidth: $(window).width(),
      footerHeight: $("." + style$8.footer).height()
    };
    setDimensions(_dimensions);
    setContext(_dimensions);
  }
  useEffect(function () {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return function () {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);
  useEffect(function () {
    var _router$query, _router$query2, _router$query3;
    var o = router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.o;
    var route = router === null || router === void 0 ? void 0 : router.route;
    var city = router === null || router === void 0 ? void 0 : (_router$query2 = router.query) === null || _router$query2 === void 0 ? void 0 : _router$query2.city;
    if (o === "gift-card-form" && route === "/offices/[city]" && city == "miami") {
      setOpenGiftCardForm(true);
      return;
    }
    if (o === "campaign-us" || o === "campaign-europe") {
      setOpenCampaignForm(true);
      return;
    }
    if (o === "contact") {
      setOpenContactFormModal(true);
      return;
    }
    var g = router === null || router === void 0 ? void 0 : (_router$query3 = router.query) === null || _router$query3 === void 0 ? void 0 : _router$query3.g;
    var id = "#" + g;
    id = id.replace(/\//g, "");
    if ($(id).length) {
      window.scrollTo({
        top: $(id).offset().top - dimesions.height,
        behavior: "smooth"
      });
    }
  }, [router === null || router === void 0 ? void 0 : router.asPath, router === null || router === void 0 ? void 0 : router.query]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Header, {
    close_icon: headerProps.close_icon,
    logo: headerProps.logo,
    links: headerProps.links,
    setOpenForm: function setOpenForm(e) {
      _setOpenForm(e);
    },
    width: dimesions.winWidth,
    offset: dimesions.height
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "viewport"
  }, /*#__PURE__*/React__default.createElement("a", {
    className: "skipLink",
    href: "#main-content"
  }, "Skip to main content"), /*#__PURE__*/React__default.createElement("div", {
    id: "main-content",
    role: "main",
    className: "content",
    style: {
      paddingTop: dimesions.height,
      minHeight: "calc(100vh - " + get(dimesions, "footerHeight", 0) + "px)"
    }
  }, children)), /*#__PURE__*/React__default.createElement(Footer, {
    footerProps: footerProps,
    setOpenForm: function setOpenForm(e) {
      _setOpenForm(e);
    },
    width: dimesions.winWidth
  }), openForm === "enquire-form" && /*#__PURE__*/React__default.createElement(EnquireModal, _extends({}, headerProps.contactForm, {
    onClose: function onClose() {
      return _setOpenForm(false);
    }
  })), openGiftCardForm === true && /*#__PURE__*/React__default.createElement(GiftCardModal, _extends({}, headerProps.giftForm, {
    onClose: function onClose() {
      return setOpenGiftCardForm(false);
    }
  })), openCampaignForm === true && /*#__PURE__*/React__default.createElement(CampaignModal, _extends({}, headerProps.campaignForm, {
    onClose: function onClose() {
      return setOpenCampaignForm(false);
    },
    campaign: router === null || router === void 0 ? void 0 : (_router$query4 = router.query) === null || _router$query4 === void 0 ? void 0 : _router$query4.o
  })), openContactFormModal === true && /*#__PURE__*/React__default.createElement(ContactModal, _extends({}, headerProps.contactForm, headerProps.contactModalForm, {
    onClose: function onClose() {
      return setOpenContactFormModal(false);
    }
  })));
};

var style$b = {"banner_hero":"_3bjP3","gradient":"_uDqTN","animated":"_3Lzpk","banner_hero_after":"_4_XDE","banner":"_dWU-_","title_text":"_u-Xmc","banner_logo":"_drjvZ","mobile":"_2dXjD","center":"_vwegV","logo":"_28aNs","title":"_1KSlp","button":"_gxxTo","link":"_375Fu","arrow":"_3S4IR"};

var BannerHero = function BannerHero(_ref) {
  var title = _ref.title,
    title_text = _ref.title_text,
    title_image = _ref.title_image,
    desktop_image = _ref.desktop_image,
    onButtonClick = _ref.onButtonClick,
    button_label = _ref.button_label,
    button_url = _ref.button_url;
  var _useContext = useContext(AppContext),
    _useContext$appContex = _useContext.appContext,
    winHeight = _useContext$appContex.winHeight,
    height = _useContext$appContex.height;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "c"
  }, /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "" + style$b.banner_hero,
    animatedClass: style$b.animated
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$b.banner,
    style: {
      minHeight: winHeight - height
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$b.gradient
  }), /*#__PURE__*/React__default.createElement(Media, {
    className: style$b.banner_image + " fixed",
    src: desktop_image,
    size: "2560x1124",
    alt: "Hero Banner"
  }), /*#__PURE__*/React__default.createElement(Center, {
    className: style$b.banner_center
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$b.center
  }, /*#__PURE__*/React__default.createElement(LazyLoad, null, /*#__PURE__*/React__default.createElement("div", {
    role: "heading",
    className: style$b.title
  }, title), title_text ? /*#__PURE__*/React__default.createElement("div", {
    className: "" + style$b.title_text,
    dangerouslySetInnerHTML: {
      __html: title_text
    }
  }) : /*#__PURE__*/React__default.createElement("div", {
    className: style$b.banner_logo
  }, /*#__PURE__*/React__default.createElement("img", {
    src: title_image,
    alt: "Knotel workclub",
    size: "480x140"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: style$b.button
  }, /*#__PURE__*/React__default.createElement(Button, {
    buttonType: "banner_btn",
    onClick: onButtonClick,
    label: button_label,
    link: button_url
  })))))), /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: style$b.banner_hero_after,
    animatedClass: style$b.animated,
    rootMargin: "30%"
  })));
};

var style$c = {"enquire_wrap":"_1zGQ7","left":"_o9tHh","right":"_2860K","content":"_3mAkU","text":"_2FhrC"};

var EnquireForm = function EnquireForm(_ref) {
  var title = _ref.title,
    text = _ref.text;
  var _useContext = useContext(AppContext),
    _useContext$appContex = _useContext.appContext,
    winHeight = _useContext$appContex.winHeight,
    height = _useContext$appContex.height;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(EqualHeight, null, /*#__PURE__*/React__default.createElement("div", {
    className: "c has_border"
  }, /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "section_wrap enquire_form col_40_60",
    animatedClass: "animated",
    rootMargin: "-20%"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_left"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_right"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_middle"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "form " + style$c.enquire_wrap,
    style: {
      minHeight: (winHeight - height) * (85 / 100)
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "form_left " + style$c.left
  }, /*#__PURE__*/React__default.createElement(EqualHeightElement, {
    name: "EnquireForm"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_title"
  }, title), /*#__PURE__*/React__default.createElement("div", {
    className: style$c.text,
    dangerouslySetInnerHTML: {
      __html: text
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: style$c.right
  }, /*#__PURE__*/React__default.createElement(EqualHeightElement, {
    name: "EnquireForm"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$c.content
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$c.forms
  }, /*#__PURE__*/React__default.createElement(ContactForm, {
    contact: get(data, "contact", {})
  }))))))))));
};

var style$d = {"item":"_1HOWN","sizer":"_22Ns_","item_inner_wrap":"_1IHeu","item_content_wrap":"_VB7G6","title":"_1Ps7Y","item_bg":"_387E5","section_text":"_2s5VM","icon":"_2qLNm","text_wrap":"_3aUd7","text":"_Cf7bY","link":"_20tBd"};

var MenuSection = function MenuSection(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items;
  var chunks = chunk(items, 2);
  if (!items || items.length <= 0) {
    return null;
  }
  return /*#__PURE__*/React__default.createElement("div", {
    className: "c has_border menu_block"
  }, /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "section_wrap col_2",
    animatedClass: "animated",
    rootMargin: "-20%"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_top"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_left"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_right"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_middle"
  }), chunks.map(function (items, cIndex) {
    return items.map(function (item, index) {
      var islastRow = false;
      if (chunks.length === cIndex + 1) {
        islastRow = true;
      }
      return /*#__PURE__*/React__default.createElement(NormalLink, {
        link: item.link,
        className: "section_item " + style$d.item,
        key: "menu_" + index
      }, /*#__PURE__*/React__default.createElement(LazyLoad, {
        className: "" + style$d.item_inner_wrap
      }, !islastRow && index % 2 === 0 && /*#__PURE__*/React__default.createElement("div", {
        className: "section_item_border_bottom"
      }), /*#__PURE__*/React__default.createElement("div", {
        className: style$d.item_content_wrap
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$d.item_bg
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$d.sizer
      }), /*#__PURE__*/React__default.createElement(Media, {
        className: style$d.item_img,
        src: item.image,
        size: "608x472px",
        alt: "Menu Section"
      })), /*#__PURE__*/React__default.createElement("div", {
        className: style$d.text_wrap
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$d.title
      }, item.title), /*#__PURE__*/React__default.createElement("div", {
        className: style$d.section_text
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$d.icon
      }, /*#__PURE__*/React__default.createElement("i", {
        className: "fas fa-arrow-right"
      })), /*#__PURE__*/React__default.createElement("div", {
        className: style$d.text
      }, item.text))))), /*#__PURE__*/React__default.createElement("div", {
        className: "section_border_bottom"
      }));
    });
  })));
};

var style$e = {"greenBg":"_3BHHx","lightBlueBg":"_3czoF","redBg":"_39SdQ","block_Center":"_3jMig","text":"_25ZHg"};

var Text = function Text(_ref) {
  var text = _ref.text,
    bg_color = _ref.bg_color;
  var colorClass = {
    red: style$e.redBg,
    green: style$e.greenBg,
    lightblue: style$e.lightBlueBg
  };
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "c"
  }, /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "section_wrap",
    animatedClass: "animated",
    rootMargin: "-20%"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_top"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_left"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_right"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: colorClass[bg_color] + " " + style$e.section_border
  }, /*#__PURE__*/React__default.createElement(Center, {
    className: style$e.block_Center
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$e.text,
    dangerouslySetInnerHTML: {
      __html: text
    }
  }))))));
};

var style$f = {"section":"_2WH5h","left":"_1PH9r","right":"_2k85F","right_side":"_U4FqT","abs":"_2pi2F","padd":"_3O_nS","above":"_3JcSK","image":"_2revh","redBg":"_2cc2O","img_wrap":"_2AYDV","sizer":"_gEeAY","title":"_ABIQd","blue_hover":"_2rywO","text":"_1FH8T","button":"_3t68Z","btn_padd":"_2_e5M","paddingClass":"_3YsJt","white_border_hover":"_3Dlyp"};

var TextImage = function TextImage(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? false : _ref$className;
  var _useContext = useContext(AppContext),
    winWidth = _useContext.appContext.winWidth;
  var colorClass = {
    red: style$f.redBg,
    white_border_hover: style$f.white_border_hover,
    blue_hover: style$f.blue_hover
  };
  if (!items || items.length <= 0) {
    return null;
  }
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(EqualHeight, null, /*#__PURE__*/React__default.createElement("div", {
    className: "c has_border"
  }, /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "section_wrap",
    animatedClass: "animated",
    rootMargin: "-20%"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_top"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_left"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_right"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  }), items && items.length > 0 && items.map(function (item, i) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "text_img " + style$f.section + " " + (winWidth >= 950 && get(item, "image_position") === "right" ? "col_50_50 " + style$f.right_side : "col_50_50"),
      key: "text_img_" + i
    }, i + 1 !== items.length && /*#__PURE__*/React__default.createElement("div", {
      className: "section_item_border_bottom"
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "section_border_middle"
    }), /*#__PURE__*/React__default.createElement("div", {
      className: style$f.left
    }, /*#__PURE__*/React__default.createElement(EqualHeightElement, {
      name: "TextImageContent"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$f.image
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$f.img_wrap
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$f.sizer
    }), /*#__PURE__*/React__default.createElement(Media, {
      src: item.image,
      size: "608x472px",
      alt: item.title
    }))))), /*#__PURE__*/React__default.createElement("div", {
      className: "section_border_bottom"
    }), /*#__PURE__*/React__default.createElement("div", {
      className: style$f.right + " " + colorClass[item.bg_color]
    }, /*#__PURE__*/React__default.createElement(EqualHeightElement, {
      name: "TextImageContent"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$f.abs + " "
    }, /*#__PURE__*/React__default.createElement(LazyLoad, {
      className: "" + (className ? style$f[className] + " " : "") + style$f.content
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$f.title
    }, item.title), /*#__PURE__*/React__default.createElement("div", {
      className: style$f.text
    }, item.text), /*#__PURE__*/React__default.createElement("div", {
      className: style$f.button
    }, /*#__PURE__*/React__default.createElement(Button, {
      onClick: item.onButtonClick,
      buttonType: item.cream_btn === true ? "cream_btn" : "",
      className: style$f.btn_padd + " " + colorClass[item.button_type],
      label: item.button_label,
      link: item.button_url
    })))))));
  })))));
};

var style$g = {"text_wrap":"_1DC0G","text":"_3PLTN","title":"_3HF9M","table_text":"_3J4P8"};

var TextTable = function TextTable(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$extraClass = _ref.extraClass,
    extraClass = _ref$extraClass === void 0 ? false : _ref$extraClass;
  var _useContext = useContext(AppContext),
    winWidth = _useContext.appContext.winWidth;
  var chunks = function chunks() {
    if (winWidth >= 950) return chunk(items, 3);else if (winWidth < 950 && winWidth >= 740) return chunk(items, 2);
    return chunk(items, 1);
  };
  if (!items || items.length <= 0) {
    return null;
  }
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(EqualHeight, null, /*#__PURE__*/React__default.createElement("div", {
    className: extraClass === true ? "has_border text_table" : "c has_border text_table"
  }, /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "section_wrap col_3 " + (winWidth < 950 && winWidth >= 740 ? " col_50_50" : ""),
    animatedClass: "animated",
    rootMargin: "-20%"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_top"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_left"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_right"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_middle"
  }), winWidth >= 950 && items.length >= 2 && /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_middle_2"
  }), chunks().map(function (items, cIndex) {
    return items.map(function (item, index) {
      var curIndex = index + 1;
      var islastRow = false;
      if (chunks.length === cIndex + 1) {
        islastRow = true;
      }
      return /*#__PURE__*/React__default.createElement("div", {
        className: "section_item text_table_border " + style$g.text_wrap + " " + (curIndex % 3 === 0 ? " no_border_right" : "") + " " + (islastRow ? "last_row" : ""),
        key: "text_table_" + index
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$g.title
      }, /*#__PURE__*/React__default.createElement(EqualHeightElement, {
        name: "TextTableTitle"
      }, item.title)), /*#__PURE__*/React__default.createElement("div", {
        className: "table_content"
      }, /*#__PURE__*/React__default.createElement(EqualHeightElement, {
        name: "TextTableText"
      }, /*#__PURE__*/React__default.createElement(LazyLoad, {
        lazyLoadClass: "section_wrap",
        animatedClass: "animated",
        rootMargin: "-20%"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "section_border_top_full"
      }), /*#__PURE__*/React__default.createElement("div", {
        className: style$g.table_text
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$g.text
      }, item.text)))), /*#__PURE__*/React__default.createElement("div", {
        className: "section_border_bottom"
      })));
    });
  })))));
};

var style$h = {"banner":"_1s3r1","border_line":"_3ZpCH","left_right_banner":"_25lWR","left":"_2W4Tu","right":"_3bQLq","greenBg":"_1AScY","blueBg":"_XHS2F","cali":"_290UV","blue_hover":"_443i5","content_wrapper":"_GxzRR","banner_btn":"_2cLXa","btn_padd":"_2qQkZ","title":"_1ZB8S","text":"_2xdSq","gradient":"_3KX_t"};

var LeftRightBanner = function LeftRightBanner(_ref) {
  var title = _ref.title,
    _ref$tag = _ref.tag,
    tag = _ref$tag === void 0 ? "div" : _ref$tag,
    text = _ref.text,
    image = _ref.image,
    onButtonClick = _ref.onButtonClick,
    bg_color = _ref.bg_color,
    button_type = _ref.button_type,
    button_label = _ref.button_label,
    button_url = _ref.button_url,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? false : _ref$icon,
    _ref$border_line = _ref.border_line,
    border_line = _ref$border_line === void 0 ? false : _ref$border_line;
  var _useContext = useContext(AppContext),
    _useContext$appContex = _useContext.appContext,
    winHeight = _useContext$appContex.winHeight,
    height = _useContext$appContex.height;
  var colorClass = {
    green: style$h.greenBg,
    darkblue: style$h.blueBg,
    cali: style$h.cali,
    blue_hover: style$h.blue_hover
  };
  var Tag = tag;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "c"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: border_line === true ? style$h.banner + " " + style$h.border_line : "" + style$h.banner
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$h.left_right_banner,
    style: {
      minHeight: (winHeight - height) * (80 / 100)
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$h.gradient
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$h.left + " " + colorClass[bg_color]
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$h.content_wrapper
  }, /*#__PURE__*/React__default.createElement(Tag, null, /*#__PURE__*/React__default.createElement("span", {
    className: style$h.title
  }, title)), /*#__PURE__*/React__default.createElement("div", {
    className: style$h.text
  }, text), /*#__PURE__*/React__default.createElement("div", {
    className: style$h.banner_btn
  }, icon ? /*#__PURE__*/React__default.createElement(Button, {
    buttonType: "icon_btn",
    onClick: onButtonClick,
    label: button_label,
    link: button_url,
    svgIcon: icon,
    className: colorClass[button_type]
  }) : /*#__PURE__*/React__default.createElement(Button, {
    onClick: onButtonClick,
    buttonType: "white_btn",
    label: button_label,
    link: button_url,
    className: colorClass[button_type]
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: style$h.right
  }, /*#__PURE__*/React__default.createElement(Media, {
    className: style$h.banner_image,
    src: image,
    size: "920x600px",
    alt: "Banner Image"
  })))));
};

var style$i = {"banner":"_1Y2pO","outer":"_3Oq4X","gradient":"_iuBv1","banner_logo":"_2kad7","title_text":"_IB6C_","center":"_3-gk3","border_line":"_BgY9p","content":"_DHgWI","title":"_1P-B3","text":"_1rmZv"};

var Banner = function Banner(_ref) {
  var image = _ref.image,
    _ref$tag = _ref.tag,
    tag = _ref$tag === void 0 ? "div" : _ref$tag,
    title = _ref.title,
    text = _ref.text,
    _ref$border_line = _ref.border_line,
    border_line = _ref$border_line === void 0 ? false : _ref$border_line,
    logo = _ref.logo,
    title_text = _ref.title_text;
  var _useContext = useContext(AppContext),
    _useContext$appContex = _useContext.appContext,
    winHeight = _useContext$appContex.winHeight,
    height = _useContext$appContex.height;
  var Tag = tag;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "c"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: border_line === true ? style$i.outer + " " + style$i.border_line : "" + style$i.outer
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "" + style$i.banner,
    style: {
      minHeight: (winHeight - height) * (80 / 100)
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$i.gradient
  }), /*#__PURE__*/React__default.createElement(Media, {
    src: image,
    size: "2560x1124",
    alt: "Banner"
  }), title && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: style$i.content
  }, /*#__PURE__*/React__default.createElement(Tag, null, /*#__PURE__*/React__default.createElement("span", {
    className: style$i.title
  }, title)), /*#__PURE__*/React__default.createElement("div", {
    className: style$i.text,
    dangerouslySetInnerHTML: {
      __html: text
    }
  }))), title_text && /*#__PURE__*/React__default.createElement(Center, {
    className: style$i.banner_center
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$i.center
  }, /*#__PURE__*/React__default.createElement(LazyLoad, null, /*#__PURE__*/React__default.createElement("div", {
    className: style$i.title
  }, title), /*#__PURE__*/React__default.createElement("div", {
    className: "" + style$i.title_text,
    dangerouslySetInnerHTML: {
      __html: title_text
    }
  })))), logo && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Center, {
    className: style$i.banner_center
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$i.center
  }, /*#__PURE__*/React__default.createElement(LazyLoad, null, /*#__PURE__*/React__default.createElement("div", {
    className: style$i.banner_logo
  }, /*#__PURE__*/React__default.createElement("img", {
    src: logo,
    alt: "Knotel workclub",
    size: "480x140"
  })))))))));
};

var style$j = {"text_image":"_eb8C2","left":"_2ximZ","right":"_cNHir","left_side":"_KMx5u","content_wrap":"_x-JMF","title":"_1MZna","img_wrap":"_3w9CI","sizer":"_275fu","sub_title":"_3cfuh","text":"_SYMt4","button":"_2XP7f","block":"_NCKkM"};

var TextImageBlock = function TextImageBlock(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items;
  if (!items || items.length <= 0) {
    return null;
  }
  return /*#__PURE__*/React__default.createElement(EqualHeight, null, /*#__PURE__*/React__default.createElement("div", {
    className: "c has_border text_image_block"
  }, /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "section_wrap",
    animatedClass: "animated",
    rootMargin: "-20%"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_top"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_left"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_right"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  }), items && items.length > 0 && items.map(function (item, i) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "section_item " + style$j.text_image + " " + (get(item, "image_position") === "left" ? "col_66_33 " + style$j.left_side : "col_33_66 " + style$j.block),
      key: "text_img_" + i
    }, i + 1 !== items.length && /*#__PURE__*/React__default.createElement("div", {
      className: "section_item_border_bottom"
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "section_border_middle"
    }), /*#__PURE__*/React__default.createElement(LazyLoad, {
      className: "text_left " + style$j.left
    }, /*#__PURE__*/React__default.createElement(EqualHeightElement, {
      name: "TextImageBlock"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$j.content_wrap
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$j.title
    }, item.title), /*#__PURE__*/React__default.createElement("div", {
      className: style$j.sub_title
    }, item.sub_title), /*#__PURE__*/React__default.createElement("div", {
      className: style$j.text
    }, item.text), /*#__PURE__*/React__default.createElement("div", {
      className: style$j.button
    }, /*#__PURE__*/React__default.createElement(Button, {
      buttonType: "block_btn",
      onClick: item.onButtonClick,
      label: item.button_label,
      link: item.button_url
    })))), /*#__PURE__*/React__default.createElement("div", {
      className: "section_border_bottom"
    })), /*#__PURE__*/React__default.createElement("div", {
      className: style$j.right
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$j.content_wrap
    }, /*#__PURE__*/React__default.createElement(EqualHeightElement, {
      name: "TextImageBlock"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$j.img_wrap
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$j.sizer
    }), /*#__PURE__*/React__default.createElement(Media, {
      src: item.image,
      alt: item.title
    }))))));
  }))));
};

var style$k = {"text_wrap":"_2Y4n7","sub_title":"_3eIrc","text":"_seODo","button":"_1AQdI","item_inner_wrap":"_4_BlI"};

var TextBlock = function TextBlock(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items;
  var chunks = chunk(items, 3);
  if (!items || items.length <= 0) {
    return null;
  }
  return /*#__PURE__*/React__default.createElement(EqualHeight, null, /*#__PURE__*/React__default.createElement("div", {
    className: "c has_border"
  }, /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "section_wrap col_3",
    animatedClass: "animated",
    rootMargin: "-20%"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_top"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_left"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_right"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_middle"
  }), items.length >= 2 && /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_middle_2"
  }), chunks.map(function (items, cIndex) {
    return items.map(function (item, index) {
      var islastRow = false;
      if (chunks.length === cIndex + 1) {
        islastRow = true;
      }
      return /*#__PURE__*/React__default.createElement("div", {
        className: "section_item " + style$k.text_wrap,
        key: "text_block_" + index
      }, !islastRow && index % 3 === 0 && /*#__PURE__*/React__default.createElement("div", {
        className: "section_item_border_bottom"
      }), /*#__PURE__*/React__default.createElement(EqualHeightElement, {
        name: "TextBlock"
      }, /*#__PURE__*/React__default.createElement(LazyLoad, {
        className: "" + style$k.item_inner_wrap
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "section_title"
      }, item.title), /*#__PURE__*/React__default.createElement("div", {
        className: style$k.sub_title
      }, item.sub_title), /*#__PURE__*/React__default.createElement("div", {
        className: style$k.text
      }, item.text), /*#__PURE__*/React__default.createElement("div", {
        className: style$k.button
      }, /*#__PURE__*/React__default.createElement(Button, {
        buttonType: "block_btn",
        label: item.button_label,
        link: item.button_url
      })))));
    });
  }))));
};

var style$l = {"section":"_OV-Rt","text":"_3Z90o","sub_head":"_2nAJs","plain":"_3JEVf"};

var TextEditor = React__default.forwardRef(function (_ref, ref) {
  var text = _ref.text,
    plain = _ref.plain;
  return /*#__PURE__*/React__default.createElement("div", {
    className: plain ? style$l.plain : "c"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: plain ? undefined : style$l.section
  }, /*#__PURE__*/React__default.createElement("div", {
    id: "text-editor",
    className: style$l.text,
    dangerouslySetInnerHTML: {
      __html: text
    }
  })));
});

var style$m = {"terms_section":"_1gWYl","menu_label":"_3Et8D","active":"_2OgV4","filter":"_1t0kv","form":"_37XeN"};

var TermsMenu = function TermsMenu(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    pathname = _ref.pathname;
  var selected = items.find(function (i) {
    return i.link === pathname;
  });
  var data = {};
  items.forEach(function (item, index) {
    var _extends2;
    data = _extends({}, data, (_extends2 = {}, _extends2[index] = item.label, _extends2));
  });
  var router = useRouter();
  return /*#__PURE__*/React__default.createElement("div", {
    className: "c has_border"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$m.terms_section
  }, items.map(function (item, i) {
    return /*#__PURE__*/React__default.createElement(NormalLink, {
      link: item.link,
      className: style$m.menu_label + " " + (get(selected, "link") === get(item, "link") ? " " + style$m.active : ""),
      key: "terms_menu_" + i
    }, item.label);
  })), /*#__PURE__*/React__default.createElement("div", {
    className: style$m.filter
  }, /*#__PURE__*/React__default.createElement(Form, {
    onSubmit: function onSubmit(data) {
      return null;
    },
    render: function render(_ref2) {
      var handleSubmit = _ref2.handleSubmit;
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("form", {
        name: "privacypolicy_filter",
        className: style$m.form,
        onSubmit: handleSubmit
      }, /*#__PURE__*/React__default.createElement(Field, {
        name: "city",
        component: Dropdown,
        prompt: "Terms of Use",
        options: data,
        onChange: function onChange() {
          return alert("sdyghiu");
        }
      }), /*#__PURE__*/React__default.createElement(OnChange, {
        name: "city"
      }, function (value) {
        if (get(items, value + ".link")) {
          router.push(items[value].link);
        }
      })));
    }
  })));
};

var style$n = {"item":"_1LHuy","title":"_1VAFd","text":"_sJXEy","content":"_33koe"};

var TableTwoColumn = function TableTwoColumn(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items;
  var _useContext = useContext(AppContext),
    winWidth = _useContext.appContext.winWidth;
  var chunks = chunk(items, 2);
  if (!items || items.length <= 0) {
    return null;
  }
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "c has_border"
  }, /*#__PURE__*/React__default.createElement(EqualHeight, null, /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "section_wrap " + (winWidth > 950 ? "col_2" : ""),
    animatedClass: "animated",
    rootMargin: "-20%"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_top"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_left"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_right"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  }), winWidth > 950 && /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_middle"
  }), chunks.map(function (items, cIndex) {
    return items.map(function (item, index) {
      var islastRow = false;
      if (chunks.length === cIndex + 1) {
        islastRow = true;
      }
      return /*#__PURE__*/React__default.createElement("div", {
        className: "section_item " + style$n.item,
        key: "text_table_" + index
      }, !islastRow && index % 2 === 0 && /*#__PURE__*/React__default.createElement("div", {
        className: "section_item_border_bottom"
      }), /*#__PURE__*/React__default.createElement(LazyLoad, {
        lazyLoadClass: "section_wrap",
        animatedClass: "animated",
        rootMargin: "-20%"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "section_border_bottom"
      }), /*#__PURE__*/React__default.createElement(EqualHeightElement, {
        name: "TextTableTitle"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$n.title
      }, item.title))), /*#__PURE__*/React__default.createElement("div", {
        className: "two_column_content " + style$n.content
      }, /*#__PURE__*/React__default.createElement(EqualHeightElement, {
        name: "TextTableText"
      }, /*#__PURE__*/React__default.createElement(LazyLoad, null, /*#__PURE__*/React__default.createElement("div", {
        className: style$n.text,
        dangerouslySetInnerHTML: {
          __html: item.text
        }
      }))), /*#__PURE__*/React__default.createElement("div", {
        className: "section_border_bottom"
      })));
    });
  })))));
};

var style$o = {"head":"_3cL2z","item":"_2nFw6","content":"_2BgpP","sizer":"_3ylOX","item_bg":"_1SnW0","wrap":"_1jX7q","title":"_3wDP7","text":"_13aiV","link":"_2c-vA","blue_link":"_EjFhR"};

var style$p = {"amenities_modal":"_3i-Ac","top":"_2gqy9","section":"_3DPAl","left":"_3ZOHD","right":"_126Ou","text_wrap":"_3ccQZ","right_side":"_ktD1l","abs":"_2_FXw","next":"_37iWt","next_icon":"_1Vp1g","icon":"_31Tuu","image":"_2X7JD","img_wrap":"_3Ddbb","sizer":"_1VDo2","title":"_3J3p6","text":"_1Lp7L","button":"_3R09W","btn_padd":"_2nRim"};

var AmenitiesModal = function AmenitiesModal(_ref) {
  var content = _ref.content,
    onClose = _ref.onClose,
    setOpen = _ref.setOpen,
    index = _ref.index,
    data_length = _ref.data_length;
  return /*#__PURE__*/React__default.createElement(DialogBox, {
    className: style$p.amenities_modal,
    classes: "find_more",
    close_class: "hover_coral",
    onClose: onClose
  }, /*#__PURE__*/React__default.createElement(EqualHeight, null, /*#__PURE__*/React__default.createElement("div", {
    className: "art_club " + style$p.outer
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$p.top
  }, content.top_title), /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "section_wrap",
    animatedClass: "animated",
    rootMargin: "-20%"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_top"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_left"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_right"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$p.section + " " + (content.image_position === "right" ? "col_50_50 " + style$p.right_side : "col_50_50")
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_item_border_bottom"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_middle"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$p.left
  }, /*#__PURE__*/React__default.createElement(EqualHeightElement, {
    name: "AmenitiesModal"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$p.image
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$p.img_wrap
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$p.sizer
  }), /*#__PURE__*/React__default.createElement(Media, {
    src: content.image,
    size: "608x472px",
    alt: content.title
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "" + style$p.right
  }, /*#__PURE__*/React__default.createElement(EqualHeightElement, {
    name: "AmenitiesModal"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$p.text_wrap
  }, /*#__PURE__*/React__default.createElement(LazyLoad, {
    className: style$p.content
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$p.title
  }, content.title), /*#__PURE__*/React__default.createElement("div", {
    className: style$p.text,
    dangerouslySetInnerHTML: {
      __html: content.text
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: style$p.bottom
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$p.next
  }, "Next: ", content.next_label, /*#__PURE__*/React__default.createElement(NormalLink, {
    className: style$p.next_icon
  }, /*#__PURE__*/React__default.createElement("span", {
    className: style$p.icon
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-arrow-right"
  })))))), /*#__PURE__*/React__default.createElement("div", {
    className: style$p.next
  }, "Next: ", content.next_label, /*#__PURE__*/React__default.createElement(NormalLink, {
    onClick: function onClick() {
      return setOpen({
        state: true,
        index: index === data_length - 1 ? index : index + 1
      });
    },
    className: style$p.next_icon
  }, /*#__PURE__*/React__default.createElement("span", {
    className: style$p.icon
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-arrow-right"
  })))))))))));
};

var Amenities = function Amenities(_ref) {
  var heading = _ref.heading,
    _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    close_icon = _ref.close_icon,
    forPage = _ref.forPage,
    hide_bottom_border = _ref.hide_bottom_border,
    max_length = _ref.max_length;
  var _useContext = useContext(AppContext),
    winWidth = _useContext.appContext.winWidth;
  var _useState = useState({
      state: false,
      index: 0
    }),
    open = _useState[0],
    setOpen = _useState[1];
  var _useState2 = useState();
  var sliced_items = max_length ? [].concat(items).slice(0, max_length) : items;
  if (!items || items.length <= 0) {
    return null;
  }
  var chunks = function chunks() {
    if (winWidth < 940) return chunk(sliced_items, 2);
    return chunk(sliced_items, 3);
  };
  var getAmenityData = function getAmenityData() {
    return {
      top_title: heading,
      title: items[open.index].title,
      image_position: "right",
      image: items[open.index].image,
      text: items[open.index].description || items[open.index].text,
      next_label: open.index === items.length - 1 ? "" : items[open.index + 1].title
    };
  };
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(EqualHeight, null, /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "section_wrap has_border",
    animatedClass: "animated",
    rootMargin: "-20%"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_top"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "c"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_wrap"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_left"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_right"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "" + style$o.head
  }, heading)))), /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "c amenities",
    animatedClass: "animated",
    rootMargin: "-20%"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_wrap col_3" + (winWidth < 940 && winWidth >= 550 ? " col_50_50" : "")
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_left"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_right"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_middle"
  }), hide_bottom_border ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null) : /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  }), winWidth > 940 && items.length >= 2 && /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_middle_2"
  }), chunks().map(function (items, cIndex) {
    return items.map(function (item, index) {
      var curIndex = index + 1;
      var islastRow = false;
      if (chunks().length === cIndex + 1) {
        islastRow = true;
      }
      return /*#__PURE__*/React__default.createElement("div", {
        className: "section_item " + style$o.item + " " + (curIndex % 3 === 0 ? " no_border_right" : "") + " " + (islastRow ? "last_row" : ""),
        key: "amenities_" + index
      }, !islastRow && /*#__PURE__*/React__default.createElement("div", {
        className: "section_item_border_bottom"
      }), winWidth < 940 && /*#__PURE__*/React__default.createElement("div", {
        className: "section_item_border_bottom"
      }), /*#__PURE__*/React__default.createElement(EqualHeightElement, {
        name: "Amenities"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$o.content
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$o.wrap
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$o.item_bg
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$o.sizer
      }), /*#__PURE__*/React__default.createElement(Media, {
        className: style$o.item_img,
        src: item.image,
        size: "608x472px",
        alt: item.title
      }))), /*#__PURE__*/React__default.createElement("div", {
        className: style$o.title
      }, item.title), /*#__PURE__*/React__default.createElement("div", {
        className: style$o.text
      }, item.text), /*#__PURE__*/React__default.createElement(NormalLink, {
        onClick: function onClick() {
          forPage === "offices" ? item.onButtonClick() : setOpen({
            state: true,
            index: index
          });
        },
        className: style$o.link + " " + (forPage === "offices" ? style$o.blue_link : "") + " "
      }, forPage === "offices" ? "Contact Us" : "Find Out More"))));
    });
  }))), open.state === true && /*#__PURE__*/React__default.createElement(AmenitiesModal, {
    close_icon: close_icon,
    index: open.index,
    data_length: items.length,
    setOpen: setOpen,
    content: getAmenityData(),
    onClose: function onClose() {
      return setOpen(false);
    }
  })));
};

var Slider = function Slider(_ref) {
  var className = _ref.className,
    children = _ref.children,
    swiperRef = _ref.swiperRef,
    _ref$autoplay = _ref.autoplay,
    autoplay = _ref$autoplay === void 0 ? true : _ref$autoplay;
  var onOutHandler = function onOutHandler(entry, observer) {
    var _swiperRef$current, _swiperRef$current$sp, _swiperRef$current$sp2;
    var Autoplay = swiperRef === null || swiperRef === void 0 ? void 0 : (_swiperRef$current = swiperRef.current) === null || _swiperRef$current === void 0 ? void 0 : (_swiperRef$current$sp = _swiperRef$current.splide) === null || _swiperRef$current$sp === void 0 ? void 0 : (_swiperRef$current$sp2 = _swiperRef$current$sp.Components) === null || _swiperRef$current$sp2 === void 0 ? void 0 : _swiperRef$current$sp2.Autoplay;
    if (autoplay === true) {
      if (entry.isIntersecting) {
        Autoplay === null || Autoplay === void 0 ? void 0 : Autoplay.play();
      } else {
        Autoplay === null || Autoplay === void 0 ? void 0 : Autoplay.pause();
      }
    } else {
      observer.disconnect();
    }
  };
  return /*#__PURE__*/React__default.createElement(OutOfView, {
    className: className,
    onOutCallback: onOutHandler
  }, children);
};

var style$q = {"slider":"_KDCSg","slider_head":"_1pkEq","location":"_14asc","option":"_1KLfT","active":"_3yfGe","prev":"_3Q5Ki","next":"_3ECmN","slider_icon":"_1CXKQ","icon":"_nL3vf","section_text":"_27R9z","sizer":"_xxuh3","item":"_1ZFBt","item_content":"_NlnY6","item_bg":"_lrBsO","text_wrap":"_1qxrr","place":"_3od6W","view":"_26RgY","filter":"_3n0xa","form":"_g4-HY","options":"_2QDrx"};

var sliderOptions = {
  arrows: false,
  pagination: false,
  perPage: 3,
  gap: "16px",
  breakpoints: {
    420: {
      perPage: 1
    },
    560: {
      perPage: 2
    },
    820: {
      perPage: 2
    },
    1440: {
      perPage: 2
    }
  }
};
var swiperSlideClick = function swiperSlideClick(swiper, items, action) {
  if (action === void 0) {
    action = "next";
  }
  var nextSlide = swiper.index + 1;
  var prevSlide = swiper.index - 1;
  prevSlide = prevSlide > -1 ? prevSlide : 0;
  if (nextSlide >= items.length) {
    nextSlide = 0;
  }
  swiper.go(action === "prev" ? prevSlide : nextSlide);
};
var ImageSlider = function ImageSlider(props) {
  var _props$id = props.id,
    id = _props$id === void 0 ? "" : _props$id,
    options = props.options,
    _props$items = props.items,
    items = _props$items === void 0 ? [] : _props$items,
    _props$autoplay = props.autoplay,
    autoplay = _props$autoplay === void 0 ? false : _props$autoplay;
  var _useState = useState(0),
    country = _useState[0],
    setCountry = _useState[1];
  var swiperRef = useRef(null);
  var getItems = function getItems() {
    if (!country || country === "all") return items;
    return items.filter(function (i) {
      return i.location.toLowerCase() === country.toLowerCase();
    });
  };
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(LazyLoad, {
    id: id || undefined,
    lazyLoadClass: "section_wrap has_border",
    animatedClass: "animated",
    rootMargin: "-20%"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_top"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "c"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_wrap"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_left"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_right"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "slider_head " + style$q.slider_head
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$q.location
  }, "Locations"), /*#__PURE__*/React__default.createElement("div", {
    className: style$q.options
  }, options.map(function (option, i) {
    return /*#__PURE__*/React__default.createElement(Button, {
      className: "" + (country === option.toLowerCase() ? style$q.active + " " : "") + style$q.option,
      label: option,
      key: "country_" + i,
      onClick: function onClick() {
        setCountry(option.toLowerCase());
      }
    });
  })))))), /*#__PURE__*/React__default.createElement("div", {
    className: style$q.filter + " c"
  }, /*#__PURE__*/React__default.createElement(Form, {
    onSubmit: function onSubmit(data) {
      return null;
    },
    render: function render(_ref) {
      var handleSubmit = _ref.handleSubmit;
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("form", {
        name: "location_filter",
        className: "image_slider " + style$q.form,
        onSubmit: handleSubmit
      }, /*#__PURE__*/React__default.createElement(Field, {
        name: "city",
        component: Dropdown,
        prompt: "Locations",
        options: options.reduce(function (acc, curr) {
          var _extends2;
          return _extends({}, acc, (_extends2 = {}, _extends2[curr.toLowerCase()] = curr, _extends2));
        }, {}),
        onChange: function onChange() {
          return alert("sdyghiu");
        }
      }), /*#__PURE__*/React__default.createElement(OnChange, {
        name: "city"
      }, function (value) {
        setCountry(value.toLowerCase());
      })));
    }
  })), /*#__PURE__*/React__default.createElement(Slider, {
    swiperRef: swiperRef,
    autoplay: autoplay
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$q.slider
  }, /*#__PURE__*/React__default.createElement(Splide, {
    options: sliderOptions,
    ref: swiperRef,
    "aria-label": "Carousel"
  }, getItems().map(function (item, i) {
    return /*#__PURE__*/React__default.createElement(SplideSlide, {
      className: "section_item " + style$q.item,
      key: "location_" + i
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$q.item_content
    }, /*#__PURE__*/React__default.createElement(NormalLink, {
      link: item.link
    }), /*#__PURE__*/React__default.createElement("div", {
      className: style$q.item_bg
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$q.sizer
    }), /*#__PURE__*/React__default.createElement(Media, {
      className: style$q.item_img,
      src: item.image,
      size: "608x472",
      alt: "Slider Image " + (i + 1)
    })), /*#__PURE__*/React__default.createElement("div", {
      className: style$q.text_wrap
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$q.place
    }, item.title), /*#__PURE__*/React__default.createElement("div", {
      className: style$q.view
    }, "View Location"))));
  })), /*#__PURE__*/React__default.createElement("div", {
    className: style$q.prev
  }, /*#__PURE__*/React__default.createElement(NormalLink, {
    className: style$q.slider_icon,
    onClick: function onClick() {
      return swiperSlideClick(swiperRef.current.splide, items, "prev");
    }
  }, /*#__PURE__*/React__default.createElement("span", {
    className: style$q.icon
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fas fa-arrow-left"
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: style$q.next
  }, /*#__PURE__*/React__default.createElement(NormalLink, {
    className: style$q.slider_icon,
    onClick: function onClick() {
      return swiperSlideClick(swiperRef.current.splide, items);
    }
  }, /*#__PURE__*/React__default.createElement("span", {
    className: style$q.icon
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fas fa-arrow-right"
  })))))));
};

var style$r = {"section":"_1Dx2e","item":"_1-nWo","coral":"_2yjz3","title":"_1RSkO","info":"_1INWQ","wrapper":"_2oZh0","padd":"_1Inan","text_wrap":"_1gXBm","aboutUs":"_2bEqL","label":"_IKYj0","flex":"_2wp2g","link":"_1IO-y","list":"_2b_Ot","icon":"_1OI6U","download":"_g50S-"};

var Details = function Details(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    pageFor = _ref.pageFor;
  var _useState = useState(null),
    textEditorRef = _useState[0];
  var _useContext = useContext(AppContext),
    winWidth = _useContext.appContext.winWidth;
  var _useContext2 = useContext(EqualHeightContext),
    setForceUpdate = _useContext2.setForceUpdate;
  var styleSelector = {
    coral: style$r.coral,
    coral_white: style$r.coral_white
  };
  useEffect(function () {
    setForceUpdate(function (value) {
      return !value;
    });
  }, [textEditorRef]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(EqualHeight, {
    timeout: 1500,
    updateOnChange: textEditorRef
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "c has_border"
  }, /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "section_wrap details col_3 " + (winWidth < 1260 && winWidth >= 650 ? " col_50_50" : ""),
    animatedClass: "animated",
    rootMargin: "-20%"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_top"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_left"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_right"
  }), pageFor === "club detail" ? null : /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_middle"
  }), winWidth >= 1260 && items.length >= 2 && /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_middle_2"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$r.section
  }, items.map(function (item, index) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "details_table " + style$r.item,
      key: "details_" + index
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$r.title
    }, /*#__PURE__*/React__default.createElement(EqualHeightElement, {
      name: "DetailsTitle"
    }, item.title)), /*#__PURE__*/React__default.createElement(EqualHeightElement, {
      name: "DetailsContent"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "" + style$r.wrapper
    }, item.type === "text" ? /*#__PURE__*/React__default.createElement("div", {
      className: style$r.list
    }, item.text) : item.list.map(function (value, j) {
      var _value$button_label = value.button_label,
        button_label = _value$button_label === void 0 ? false : _value$button_label,
        _value$icon = value.icon,
        icon = _value$icon === void 0 ? false : _value$icon,
        _value$text = value.text,
        text = _value$text === void 0 ? false : _value$text,
        on_button_click = value.on_button_click;
      if (icon) {
        return /*#__PURE__*/React__default.createElement("div", {
          className: (styleSelector[value.hover] || "") + " " + (get(item, "className", false) ? style$r[get(item, "className", false)] + " " : "") + style$r.text_wrap,
          key: "about_" + j
        }, /*#__PURE__*/React__default.createElement("div", {
          className: style$r.flex
        }, /*#__PURE__*/React__default.createElement("div", {
          className: style$r.icon
        }, /*#__PURE__*/React__default.createElement("img", {
          src: value.icon,
          alt: value.label + " icon"
        })), /*#__PURE__*/React__default.createElement("div", {
          className: style$r.label
        }, value.label)), value.value && /*#__PURE__*/React__default.createElement("div", {
          className: style$r.value
        }, value.value), value.link && /*#__PURE__*/React__default.createElement("div", {
          className: style$r.value
        }, /*#__PURE__*/React__default.createElement(NormalLink, {
          link: "" + (value.type ? value.type + ":" : "") + value.link,
          className: style$r.link
        }, value.linkLabel || value.link)), value.hours === true && /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", null, " ", value.openDays, ": ", value.open), /*#__PURE__*/React__default.createElement("div", null, value.timing), /*#__PURE__*/React__default.createElement("div", {
          className: style$r.padd
        }, value.closedDays, ":"), /*#__PURE__*/React__default.createElement("div", null, value.close)));
      }
      if (text) {
        return /*#__PURE__*/React__default.createElement("ul", {
          className: style$r.list,
          key: "list_" + j
        }, /*#__PURE__*/React__default.createElement("li", null, value.text));
      }
      if (button_label) {
        return /*#__PURE__*/React__default.createElement("div", {
          className: style$r.info,
          key: "info_" + j
        }, /*#__PURE__*/React__default.createElement(Button, {
          className: style$r.download,
          icon_placement: "left",
          svgIcon: value.logo,
          link: value.link,
          onClick: on_button_click,
          label: value.button_label
        }));
      }
    })), pageFor === "club detail" ? null : /*#__PURE__*/React__default.createElement("div", {
      className: "section_border_bottom"
    })));
  }))))));
};

// A type of promise-like that resolves synchronously and supports only one observer
const _Pact = /*#__PURE__*/(function() {
	function _Pact() {}
	_Pact.prototype.then = function(onFulfilled, onRejected) {
		const result = new _Pact();
		const state = this.s;
		if (state) {
			const callback = state & 1 ? onFulfilled : onRejected;
			if (callback) {
				try {
					_settle(result, 1, callback(this.v));
				} catch (e) {
					_settle(result, 2, e);
				}
				return result;
			} else {
				return this;
			}
		}
		this.o = function(_this) {
			try {
				const value = _this.v;
				if (_this.s & 1) {
					_settle(result, 1, onFulfilled ? onFulfilled(value) : value);
				} else if (onRejected) {
					_settle(result, 1, onRejected(value));
				} else {
					_settle(result, 2, value);
				}
			} catch (e) {
				_settle(result, 2, e);
			}
		};
		return result;
	};
	return _Pact;
})();

// Settles a pact synchronously
function _settle(pact, state, value) {
	if (!pact.s) {
		if (value instanceof _Pact) {
			if (value.s) {
				if (state & 1) {
					state = value.s;
				}
				value = value.v;
			} else {
				value.o = _settle.bind(null, pact, state);
				return;
			}
		}
		if (value && value.then) {
			value.then(_settle.bind(null, pact, state), _settle.bind(null, pact, 2));
			return;
		}
		pact.s = state;
		pact.v = value;
		const observer = pact.o;
		if (observer) {
			observer(pact);
		}
	}
}

function _isSettledPact(thenable) {
	return thenable instanceof _Pact && thenable.s & 1;
}

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously implement a generic for loop
function _for(test, update, body) {
	var stage;
	for (;;) {
		var shouldContinue = test();
		if (_isSettledPact(shouldContinue)) {
			shouldContinue = shouldContinue.v;
		}
		if (!shouldContinue) {
			return result;
		}
		if (shouldContinue.then) {
			stage = 0;
			break;
		}
		var result = body();
		if (result && result.then) {
			if (_isSettledPact(result)) {
				result = result.s;
			} else {
				stage = 1;
				break;
			}
		}
		if (update) {
			var updateValue = update();
			if (updateValue && updateValue.then && !_isSettledPact(updateValue)) {
				stage = 2;
				break;
			}
		}
	}
	var pact = new _Pact();
	var reject = _settle.bind(null, pact, 2);
	(stage === 0 ? shouldContinue.then(_resumeAfterTest) : stage === 1 ? result.then(_resumeAfterBody) : updateValue.then(_resumeAfterUpdate)).then(void 0, reject);
	return pact;
	function _resumeAfterBody(value) {
		result = value;
		do {
			if (update) {
				updateValue = update();
				if (updateValue && updateValue.then && !_isSettledPact(updateValue)) {
					updateValue.then(_resumeAfterUpdate).then(void 0, reject);
					return;
				}
			}
			shouldContinue = test();
			if (!shouldContinue || (_isSettledPact(shouldContinue) && !shouldContinue.v)) {
				_settle(pact, 1, result);
				return;
			}
			if (shouldContinue.then) {
				shouldContinue.then(_resumeAfterTest).then(void 0, reject);
				return;
			}
			result = body();
			if (_isSettledPact(result)) {
				result = result.v;
			}
		} while (!result || !result.then);
		result.then(_resumeAfterBody).then(void 0, reject);
	}
	function _resumeAfterTest(shouldContinue) {
		if (shouldContinue) {
			result = body();
			if (result && result.then) {
				result.then(_resumeAfterBody).then(void 0, reject);
			} else {
				_resumeAfterBody(result);
			}
		} else {
			_settle(pact, 1, result);
		}
	}
	function _resumeAfterUpdate() {
		if (shouldContinue = test()) {
			if (shouldContinue.then) {
				shouldContinue.then(_resumeAfterTest).then(void 0, reject);
			} else {
				_resumeAfterTest(shouldContinue);
			}
		} else {
			_settle(pact, 1, result);
		}
	}
}

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

var style$s = {"text_image":"_wF7Ft","h3":"_3nl9V","left":"_38W0s","right":"_1FMR2","greenBg":"_2zh7A","abs":"_mScSL","left_side":"_BZGjD","img_wrap":"_3y2S8","img":"_33JRX","sizer":"_GKgw_","blue_hover":"_314FH","title":"_VHkPF","text":"_3HR_o","white_btn":"_2oYgJ","button":"_31taU","btn_padd":"_3r745","bottom":"_289a9","caption":"_2D6Q2","icons":"_25TF_","icon":"_1Dtp2","active":"_O3ZBX","text_wrap":"_1Jkg9","aboutUs":"_328ag","label":"_G76p6","flex":"_1IPVb","info":"_2Mxub","link":"_3x183","list":"_3oRfP","list_icon":"_2h5yP","download":"_uKdUC","pdf":"_2Igq_","wrapper":"_2-eJN","item":"_xoXS7"};

pdfjs.GlobalWorkerOptions.workerSrc = "//cdnjs.cloudflare.com/ajax/libs/pdf.js/" + pdfjs.version + "/pdf.worker.js";
var sliderOptions$1 = {
  type: "loop",
  arrows: false,
  pagination: false
};
var TextImageSlider = function TextImageSlider(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    preview_type = _ref.preview_type,
    _ref$hideBorder = _ref.hideBorder,
    hideBorder = _ref$hideBorder === void 0 ? "" : _ref$hideBorder;
  var swiperRef = useRef(null);
  var colorClass = {
    green: style$s.greenBg,
    darkblue: style$s.blueBg
  };
  var _useState = useState(0),
    active = _useState[0],
    setActive = _useState[1];
  var _useState2 = useState(false),
    ready = _useState2[0],
    setReady = _useState2[1];
  var _useState3 = useState([]),
    pdfImages = _useState3[0],
    setPdfImages = _useState3[1];
  var btn_classes = {
    blue_hover: style$s.blue_hover
  };
  useEffect(function () {
    if (ready) return;
    if (swiperRef !== null && swiperRef !== void 0 && swiperRef.current) {
      if (preview_type === "pdf" && !pdfImages.length) return;
      setReady(true);
    }
  }, [swiperRef === null || swiperRef === void 0 ? void 0 : swiperRef.current, pdfImages]);
  if (!items || items.length <= 0) {
    return null;
  }
  return preview_type === "pdf" && !items.length ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(EqualHeight, null, /*#__PURE__*/React__default.createElement("div", {
    className: "c has_border"
  }, /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "section_wrap text_img_slider",
    animatedClass: "animated",
    rootMargin: "-20%"
  }, hideBorder === "top" ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null) : /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_top"
  }), hideBorder === "left" ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null) : /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_left"
  }), hideBorder === "right" ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null) : /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_right"
  }), hideBorder === "bottom" ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null) : /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  }), items && items.length > 0 && items.map(function (item, i) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "section_item " + style$s.text_image + " " + (get(item, "image_position") === "left" ? "col_66_33 " + style$s.left_side : "col_33_66"),
      key: "text_img_" + i
    }, i + 1 !== items.length && /*#__PURE__*/React__default.createElement("div", {
      className: "section_item_border_bottom"
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "section_border_middle"
    }), /*#__PURE__*/React__default.createElement("div", {
      className: style$s.left + " " + colorClass[item.bg_color]
    }, ready ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(EqualHeightElement, {
      name: "TextImageSliderContent"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$s.abs
    }, /*#__PURE__*/React__default.createElement(LazyLoad, {
      className: style$s.content
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$s.title
    }, item.title), item.type === "details" ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("h3", {
      className: style$s.h3
    }, " Details "), item.list_tems.map(function (value, j) {
      var _value$icon = value.icon,
        icon = _value$icon === void 0 ? false : _value$icon;
      if (icon) {
        return /*#__PURE__*/React__default.createElement("div", {
          className: "" + (get(item, "className", false) ? style$s[get(item, "className", false)] + " " : "") + style$s.text_wrap,
          key: "about_" + j
        }, /*#__PURE__*/React__default.createElement("div", {
          className: style$s.flex
        }, /*#__PURE__*/React__default.createElement("div", {
          className: style$s.list_icon
        }, /*#__PURE__*/React__default.createElement("img", {
          src: value.icon,
          alt: value.label + " icon"
        })), /*#__PURE__*/React__default.createElement("div", {
          className: style$s.label
        }, value.label)), value.value && /*#__PURE__*/React__default.createElement("div", {
          className: style$s.value
        }, value.value), value.link && /*#__PURE__*/React__default.createElement("div", {
          className: style$s.value
        }, /*#__PURE__*/React__default.createElement(NormalLink, {
          link: "" + (value.type ? value.type + ":" : "") + value.link,
          className: style$s.link
        }, value.linkLabel || value.link)), value.hours === true && /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", null, " ", value.openDays, ": ", value.open), /*#__PURE__*/React__default.createElement("div", null, value.timing), /*#__PURE__*/React__default.createElement("div", {
          className: style$s.padd
        }, value.closedDays, ":"), /*#__PURE__*/React__default.createElement("div", null, value.close)));
      }
    })) : /*#__PURE__*/React__default.createElement("div", {
      className: style$s.text
    }, item.text), item.hide_button ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null) : /*#__PURE__*/React__default.createElement("div", {
      className: style$s.button
    }, /*#__PURE__*/React__default.createElement(Button, {
      buttonType: item.white_button === true ? "transparent_btn" : "",
      className: style$s.btn_padd + " " + btn_classes[item.button_type],
      onClick: item.on_button_click,
      label: item.button_label,
      link: item.button_url
    })))))) : null, /*#__PURE__*/React__default.createElement("div", {
      className: "section_border_bottom"
    })), /*#__PURE__*/React__default.createElement("div", {
      className: style$s.right
    }, /*#__PURE__*/React__default.createElement(EqualHeightElement, {
      name: "TextImageSliderContent"
    }, /*#__PURE__*/React__default.createElement(Slider, {
      className: "text_slider",
      swiperRef: swiperRef
    }, preview_type === "pdf" ? /*#__PURE__*/React__default.createElement(PDFViewer, {
      pdfImages: pdfImages,
      setPdfImages: setPdfImages,
      swiperRef: swiperRef,
      list: item.list,
      setActive: setActive,
      active: active
    }) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Splide, {
      options: sliderOptions$1,
      ref: swiperRef,
      onMoved: function onMoved(e, prev) {
        return setActive(prev);
      },
      "aria-label": "Carousel"
    }, item.list.map(function (item, i) {
      return /*#__PURE__*/React__default.createElement(SplideSlide, {
        key: item.image
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$s.img
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$s.img_wrap
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$s.sizer
      }), /*#__PURE__*/React__default.createElement(Media, {
        src: item.image,
        alt: "Slider Image " + (i + 1)
      }))));
    })), /*#__PURE__*/React__default.createElement("div", {
      className: style$s.bottom
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$s.caption
    }, item.caption || "Image caption goes here"), /*#__PURE__*/React__default.createElement("div", {
      className: style$s.icons
    }, item.list.map(function (item, i) {
      return /*#__PURE__*/React__default.createElement("div", {
        className: "" + style$s.icon + (active === i ? " " + style$s.active : ""),
        key: i,
        onClick: function onClick() {
          swiperRef.current.splide.go(i);
        }
      });
    }))))))));
  })))));
};
var PDFViewer = function PDFViewer(_ref2) {
  var list = _ref2.list,
    swiperRef = _ref2.swiperRef,
    active = _ref2.active,
    setActive = _ref2.setActive,
    pdfImages = _ref2.pdfImages,
    setPdfImages = _ref2.setPdfImages;
  var getPdf = function getPdf() {
    try {
      var _temp2 = _catch(function () {
        var mappedImages = list.map(function (fileObj) {
          try {
            return Promise.resolve(new Promise(function (res, rej) {
              try {
                var _temp5 = _catch(function () {
                  var images = [];
                  return Promise.resolve(pdfjs.getDocument({
                    url: fileObj.image
                  }).promise).then(function (pdf) {
                    var canvas = document.createElement("canvas");
                    var i = 0;
                    var _temp3 = _for(function () {
                      return i < pdf.numPages;
                    }, function () {
                      return i++;
                    }, function () {
                      return Promise.resolve(pdf.getPage(i + 1)).then(function (page) {
                        var viewport = page.getViewport({
                          scale: 1
                        });
                        var context = canvas.getContext("2d");
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;
                        return Promise.resolve(page.render({
                          canvasContext: context,
                          viewport: viewport
                        }).promise).then(function () {
                          images = [].concat(images, [canvas.toDataURL()]);
                          res({
                            url: images[0],
                            caption: fileObj.caption,
                            originLink: fileObj.image
                          });
                        });
                      });
                    });
                    if (_temp3 && _temp3.then) return _temp3.then(function () {});
                  });
                }, function (err) {
                  rej(err);
                });
                return Promise.resolve(_temp5 && _temp5.then ? _temp5.then(function () {}) : void 0);
              } catch (e) {
                return Promise.reject(e);
              }
            }));
          } catch (e) {
            return Promise.reject(e);
          }
        });
        return Promise.resolve(Promise.all(mappedImages)).then(function (results) {
          setPdfImages(results);
        });
      }, function () {});
      return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  useEffect(function () {
    getPdf();
  }, []);
  return pdfImages.length ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Splide, {
    options: sliderOptions$1,
    ref: swiperRef,
    onMoved: function onMoved(e, prev) {
      return setActive(prev);
    },
    "aria-label": "My Favorite Images"
  }, pdfImages.map(function (item, i) {
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(SplideSlide, {
      key: item.caption
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$s.img
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$s.img_wrap
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$s.sizer
    }), /*#__PURE__*/React__default.createElement(NormalLink, {
      link: item.originLink,
      target: "_blank"
    }, /*#__PURE__*/React__default.createElement(Media, {
      className: style$s.pdf,
      src: item.url,
      alt: "PDF Image " + (i + 1)
    }))))));
  })), /*#__PURE__*/React__default.createElement("div", {
    className: style$s.bottom
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$s.caption
  }, pdfImages[active].caption || "Image caption goes here"), /*#__PURE__*/React__default.createElement("div", {
    className: style$s.icons
  }, pdfImages.map(function (item, i) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "" + style$s.icon + (active === i ? " " + style$s.active : ""),
      key: i,
      onClick: function onClick() {
        swiperRef.current.splide.go(i);
      }
    });
  })))) : null;
};

var Marker = function Marker(_ref) {
  var pointer = _ref.pointer,
    lat = _ref.lat,
    lng = _ref.lng,
    showInMaps = _ref.showInMaps;
  var _useState = useState(false),
    tooltipVisible = _useState[0],
    setVisible = _useState[1];
  var toggleTooltip = function toggleTooltip() {
    setVisible(!tooltipVisible);
  };
  var handleClickOutside = function handleClickOutside() {
    return setVisible(false);
  };
  useEffect(function () {
    document.addEventListener("click", handleClickOutside, true);
    return function () {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return /*#__PURE__*/React__default.createElement("div", {
    style: {
      position: "relative"
    }
  }, showInMaps ? /*#__PURE__*/React__default.createElement("a", {
    style: {
      padding: 10,
      background: "white",
      position: "absolute",
      minWidth: "12rem",
      border: "1px solid black",
      bottom: 50,
      textAlign: "center",
      left: "50%",
      transform: "translate(-50%, 0)"
    },
    href: "https://maps.google.com/?q=" + lat + "," + lng,
    target: "_blank"
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("span", null, "Show in Google Maps"))) : null, /*#__PURE__*/React__default.createElement("div", {
    onClick: toggleTooltip
  }, pointer), ";");
};
var GoogleMaps = function GoogleMaps(_ref2) {
  var _ref2$showInMaps = _ref2.showInMaps,
    showInMaps = _ref2$showInMaps === void 0 ? true : _ref2$showInMaps,
    _ref2$markers = _ref2.markers,
    markers = _ref2$markers === void 0 ? [] : _ref2$markers,
    _ref2$center = _ref2.center,
    center = _ref2$center === void 0 ? {} : _ref2$center,
    _ref2$zoom = _ref2.zoom,
    zoom = _ref2$zoom === void 0 ? 11 : _ref2$zoom,
    APIKey = _ref2.APIKey,
    markerIcon = _ref2.markerIcon,
    onMarkerPress = _ref2.onMarkerPress;
  return (
    /*#__PURE__*/
    React__default.createElement("div", {
      style: {
        position: "absolute",
        height: "100%",
        width: "100%"
      }
    }, /*#__PURE__*/React__default.createElement(GoogleMapReact, {
      bootstrapURLKeys: {
        key: APIKey
      },
      center: center,
      zoom: zoom,
      options: function options(maps) {
        return {
          styles: [{
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{
              color: "#444444"
            }]
          }, {
            featureType: "landscape",
            elementType: "all",
            stylers: [{
              color: "#f2f2f2"
            }]
          }, {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [{
              color: "#f0e3ce"
            }, {
              lightness: "39"
            }, {
              gamma: "1.01"
            }]
          }, {
            featureType: "poi",
            elementType: "all",
            stylers: [{
              visibility: "off"
            }]
          }, {
            featureType: "road",
            elementType: "all",
            stylers: [{
              saturation: -100
            }, {
              lightness: 45
            }]
          }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
              color: "#ffffff"
            }]
          }, {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{
              visibility: "simplified"
            }]
          }, {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{
              visibility: "off"
            }]
          }, {
            featureType: "transit",
            elementType: "all",
            stylers: [{
              visibility: "off"
            }]
          }, {
            featureType: "water",
            elementType: "all",
            stylers: [{
              color: "#e7e1d6"
            }, {
              visibility: "on"
            }]
          }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
              color: "#d9d9d9"
            }]
          }]
        };
      }
    }, Array.isArray(markers) && markers.length > 0 && markers.map(function (_ref3, index) {
      var _ref3$loc = _ref3.loc,
        _ref3$loc$lat = _ref3$loc.lat,
        lat = _ref3$loc$lat === void 0 ? 0 : _ref3$loc$lat,
        _ref3$loc$lng = _ref3$loc.lng,
        lng = _ref3$loc$lng === void 0 ? 0 : _ref3$loc$lng;
      return /*#__PURE__*/React__default.createElement(Marker, {
        showInMaps: showInMaps,
        key: "marker_" + index,
        lat: lat,
        lng: lng,
        pointer: /*#__PURE__*/React__default.createElement("span", {
          onClick: function onClick() {
            return onMarkerPress === null || onMarkerPress === void 0 ? void 0 : onMarkerPress(lat, lng);
          },
          style: {
            position: "absolute",
            left: "50%",
            bottom: "0",
            transform: "translateX(-50%)"
          }
        }, /*#__PURE__*/React__default.createElement("img", {
          "data-marker-lat": lat,
          "data-marker-lng": lng,
          src: markerIcon,
          alt: "marker"
        }))
      });
    })))
  );
};

var style$t = {"top":"_1NCvI","title":"_3AoYP","address":"_1Pkkp","sizer":"_3odh6","map":"_37mG1","mapPad":"_1zLG4"};

var Map = function Map(_ref) {
  var address = _ref.address,
    _ref$loc = _ref.loc,
    loc = _ref$loc === void 0 ? {} : _ref$loc,
    APIKey = _ref.APIKey,
    markerIcon = _ref.markerIcon,
    onMarkerPress = _ref.onMarkerPress;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "" + style$t.outer
  }, /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "section_wrap has_border",
    animatedClass: "animated",
    rootMargin: "-20%"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_top"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "c"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_wrap"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_left"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_right"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$t.top
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$t.title
  }, "Map"), /*#__PURE__*/React__default.createElement("div", {
    className: style$t.address
  }, address))))), /*#__PURE__*/React__default.createElement("div", {
    className: "c"
  }, /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "section_wrap " + style$t.mapPad,
    animatedClass: "animated",
    rootMargin: "-20%"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_left"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_right"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$t.map
  }, /*#__PURE__*/React__default.createElement(GoogleMaps, {
    APIKey: APIKey,
    markerIcon: markerIcon,
    markers: [{
      loc: loc
    }],
    center: loc,
    zoom: 15,
    onMarkerPress: onMarkerPress
  }))))));
};

var style$u = {"form_block":"_tth16","menu":"_lw4XO","title":"_2L4kh","filters":"_C5TZ5","filter":"_1mACx","wrap":"_Y7YpB","left":"_3GAL-","image":"_WhAyM","content":"_LyjN6","right":"_1Fvkc","map":"_1SQ7s","wrapper":"_ID7Xm","sizer":"_tda8V","country":"_2Oj-q","address":"_3268P","place":"_3dZW_","details":"_1zwdY","text_wrap":"_2Y62U","filter_block":"_2eyaV","label":"_36W73","value":"_3EAsJ","email_cont":"_1DqJC","email_label":"_1wLrH","email_link":"_Tirsd","details_header":"_4EH6i","link":"_3kHMc","icon":"_1WxAq","more":"_3B2Rd","noitem":"_11xkI","noitem_text":"_oHqgm","top":"_3z9cZ","icons":"_3awJ3","top_wrapper":"_3CLcs","filter_padd":"_3W11j","map_block":"_1CDGy","arrow_icon":"_33skQ","modal_top":"_3ounF","modal_form":"_8o_wG","hide":"_7w3UO"};

var unitsOfMeasurements = {
  SQM: "SQM",
  SQFT: "SQFT"
};
var Filters = function Filters(_ref) {
  var labels = _ref.labels,
    _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    cityOptions = _ref.cityOptions,
    unitOfMeasurement = _ref.unitOfMeasurement,
    neighborhoodOptions = _ref.neighborhoodOptions,
    seatOptions = _ref.seatOptions,
    floorOptions = _ref.floorOptions,
    sizeInSqftOptions = _ref.sizeInSqftOptions,
    sizeInM2Options = _ref.sizeInM2Options,
    city = _ref.city,
    APIKey = _ref.APIKey,
    markerIcon = _ref.markerIcon,
    mapCenter = _ref.mapCenter,
    setCenter = _ref.setCenter,
    onMarkerPress = _ref.onMarkerPress,
    onMouseOverListing = _ref.onMouseOverListing,
    onMouseLeaveListingsSection = _ref.onMouseLeaveListingsSection,
    onFilterChanged = _ref.onFilterChanged,
    defaultFilters = _ref.defaultFilters,
    bi_map = _ref.bi_map,
    listIcon = _ref.listIcon,
    arrow = _ref.arrow,
    funnel = _ref.funnel,
    close_icon = _ref.close_icon;
  var _useState = useState(0),
    height = _useState[0],
    setHeight = _useState[1];
  var _useContext = useContext(AppContext),
    _useContext$appContex = _useContext.appContext,
    winWidth = _useContext$appContex.winWidth,
    winHeight = _useContext$appContex.winHeight,
    _height = _useContext$appContex.height;
  var _useState2 = useState("calc(100vh - 140px)"),
    mapHeight = _useState2[0],
    setMapHeight = _useState2[1];
  var _useState3 = useState(false),
    filter = _useState3[0],
    setOpenFilter = _useState3[1];
  var _useState4 = useState(0),
    listLength = _useState4[0];
  var _useState5 = useState("locations"),
    element = _useState5[0],
    setElement = _useState5[1];
  var navBarHeight = _height || 88;
  useEffect(function () {
    if (!winHeight || !winWidth) return;
    setTimeout(function () {
      offset();
    }, 100);
    window.addEventListener("resize", offset);
    return function () {
      window.removeEventListener("resize", offset);
    };
  }, [winHeight, winWidth]);
  useEffect(function () {
    if (!winHeight || !winWidth) return;
    offset();
  }, [element, winHeight, winWidth]);
  var onChangeRef = useRef();
  var onMobileChangeRef = useRef();
  var mobileValuesRef = useRef();
  var offset = function offset() {
    var isMapSection = $("." + style$u.left).hasClass(style$u.hide);
    if (winWidth > 820 || isMapSection) {
      setHeight(parseFloat(winHeight) - parseFloat(fetchHeight("filter_bar") + navBarHeight) + "px");
      setMapHeight(winWidth > 820 ? "100%" : "calc(100% - " + fetchHeight(style$u.map_block) + "px)");
    } else {
      setHeight("auto");
      setMapHeight("calc(100% - " + fetchHeight(style$u.map_block) + "px)");
    }
    if (listLength === 0) {
      setHeight(parseFloat(winHeight) - parseFloat(fetchHeight("filter_bar") + navBarHeight) + "px");
    }
  };
  var fetchHeight = function fetchHeight(clsName) {
    var ele = document.getElementsByClassName(clsName);
    if (ele.length > 0) {
      return parseFloat(ele[0].clientHeight);
    }
  };
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, " ", /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "section_wrap has_border",
    animatedClass: "animated",
    rootMargin: "-20%"
  }, /*#__PURE__*/React__default.createElement(Form, {
    onSubmit: function onSubmit(data) {
      return onFilterChanged(data);
    },
    render: function render(_ref2) {
      var handleSubmit = _ref2.handleSubmit,
        values = _ref2.values;
      if (!onChangeRef.current && !isEmpty(values)) {
        onChangeRef.current = values;
      } else if (!isEqual(onChangeRef.current, values)) {
        onChangeRef.current = values;
        handleSubmit(values);
      }
      var list = items;
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
        className: style$u.filter
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "section_border_bottom"
      }), /*#__PURE__*/React__default.createElement("div", {
        className: "c"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "section_wrap filter_bar"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "section_border_left"
      }), /*#__PURE__*/React__default.createElement("div", {
        className: "section_border_right"
      }), /*#__PURE__*/React__default.createElement("div", {
        className: style$u.top_wrapper
      }, /*#__PURE__*/React__default.createElement("h1", {
        className: style$u.title
      }, city), /*#__PURE__*/React__default.createElement("div", {
        className: style$u.filters
      }, /*#__PURE__*/React__default.createElement("form", {
        name: "booking_contact",
        className: style$u.form
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$u.form_block
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$u.filter_block
      }, /*#__PURE__*/React__default.createElement(Field, {
        initialValue: defaultFilters.city,
        name: labels.city.name,
        component: Dropdown,
        classes: style$u.menu,
        prompt: labels.city.label,
        options: cityOptions,
        onChange: function onChange() {
          return alert("sdyghiu");
        }
      })), /*#__PURE__*/React__default.createElement("div", {
        className: style$u.filter_block
      }, /*#__PURE__*/React__default.createElement(Field, {
        initialValue: defaultFilters.neighborhood,
        name: labels.neighborhood.name,
        component: Dropdown,
        classes: style$u.menu,
        prompt: labels.neighborhood.label,
        options: neighborhoodOptions
      })), /*#__PURE__*/React__default.createElement("div", {
        className: style$u.filter_block
      }, /*#__PURE__*/React__default.createElement(Field, {
        initialValue: defaultFilters.availableFrom,
        name: labels.date.name,
        component: DateTime,
        classes: style$u.menu,
        prompt: labels.date.label,
        emptyValue: ""
      })), /*#__PURE__*/React__default.createElement("div", {
        className: style$u.filter_block
      }, /*#__PURE__*/React__default.createElement(Field, {
        initialValue: defaultFilters.seatCapacity,
        name: labels.seat.name,
        component: Dropdown,
        classes: style$u.menu,
        prompt: labels.seat.label,
        options: seatOptions
      })), /*#__PURE__*/React__default.createElement("div", {
        className: style$u.filter_block
      }, /*#__PURE__*/React__default.createElement(Field, {
        initialValue: defaultFilters.floor,
        name: labels.floor.name,
        component: Dropdown,
        classes: style$u.menu,
        prompt: labels.floor.label,
        options: floorOptions
      })), unitOfMeasurement === unitsOfMeasurements.SQM ? /*#__PURE__*/React__default.createElement("div", {
        className: style$u.filter_block
      }, /*#__PURE__*/React__default.createElement(Field, {
        initialValue: defaultFilters.sizeInM2,
        name: labels.sizeInM2.name,
        component: Dropdown,
        classes: style$u.menu,
        prompt: labels.sizeInM2.label,
        options: sizeInM2Options
      })) : /*#__PURE__*/React__default.createElement("div", {
        className: style$u.filter_block
      }, /*#__PURE__*/React__default.createElement(Field, {
        initialValue: defaultFilters.sizeInSqft,
        name: labels.sizeInSqft.name,
        component: Dropdown,
        classes: style$u.menu,
        prompt: labels.sizeInSqft.label,
        options: sizeInSqftOptions
      }))))), /*#__PURE__*/React__default.createElement("div", {
        className: style$u.icons
      }, element === "locations" && /*#__PURE__*/React__default.createElement("div", {
        onClick: function onClick() {
          setElement("map");
        },
        className: style$u.icon
      }, /*#__PURE__*/React__default.createElement("img", {
        src: bi_map,
        alt: "map_icon"
      })), element === "map" && /*#__PURE__*/React__default.createElement("div", {
        onClick: function onClick() {
          setElement("locations");
        },
        className: style$u.icon
      }, /*#__PURE__*/React__default.createElement("img", {
        src: listIcon,
        alt: "map_icon"
      })), /*#__PURE__*/React__default.createElement("div", {
        onClick: function onClick() {
          setOpenFilter(true);
        },
        className: style$u.icon
      }, /*#__PURE__*/React__default.createElement("img", {
        src: funnel,
        alt: "funnel"
      }))))))), /*#__PURE__*/React__default.createElement("div", {
        className: "c"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "section_wrap filter_midline col_50_50"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "section_border_left"
      }), /*#__PURE__*/React__default.createElement("div", {
        className: "section_border_right"
      }), /*#__PURE__*/React__default.createElement("div", {
        className: "section_border_bottom"
      }), /*#__PURE__*/React__default.createElement("div", {
        className: "section_border_middle"
      }), list.length > 0 && /*#__PURE__*/React__default.createElement("div", {
        onMouseLeave: onMouseLeaveListingsSection,
        className: style$u.wrap,
        style: {
          height: height
        }
      }, /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
        id: "listings_cont",
        className: "" + (element !== "locations" ? style$u.hide + " " : "") + style$u.left
      }, list.map(function (item, index) {
        return /*#__PURE__*/React__default.createElement(EqualHeight, null, /*#__PURE__*/React__default.createElement("div", {
          "data-latitude": item.lat,
          "data-longitude": item.lng,
          onMouseOver: function onMouseOver(e) {
            onMouseOverListing === null || onMouseOverListing === void 0 ? void 0 : onMouseOverListing(e, item.lat, item.lng);
            setCenter({
              lat: item.lat,
              lng: item.lng
            });
          },
          className: "section_item filters_block " + style$u.wrapper + " listing_item",
          key: "location_details_" + index
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "section_item_border_bottom"
        }), /*#__PURE__*/React__default.createElement("div", {
          className: style$u.image
        }, /*#__PURE__*/React__default.createElement(EqualHeightElement, {
          name: "FiltersBlock"
        }, /*#__PURE__*/React__default.createElement("div", {
          className: style$u.sizer
        }), /*#__PURE__*/React__default.createElement(Media, {
          className: style$u.item_img,
          src: item.image,
          alt: item.place
        }))), /*#__PURE__*/React__default.createElement("div", {
          className: style$u.content
        }, /*#__PURE__*/React__default.createElement(EqualHeightElement, {
          name: "FiltersBlock"
        }, /*#__PURE__*/React__default.createElement("div", {
          className: style$u.country
        }, item.country), /*#__PURE__*/React__default.createElement("div", {
          className: style$u.place
        }, item.place), /*#__PURE__*/React__default.createElement("div", {
          className: style$u.address
        }, item.address), /*#__PURE__*/React__default.createElement("div", {
          className: style$u.details
        }, /*#__PURE__*/React__default.createElement("h3", {
          className: style$u.details_header
        }, "Available Spaces"), item.list.map(function (value, j) {
          return /*#__PURE__*/React__default.createElement("div", {
            className: style$u.text_wrap,
            key: "about_location_" + j
          }, /*#__PURE__*/React__default.createElement("div", {
            className: style$u.label
          }, value.label), value.link && /*#__PURE__*/React__default.createElement("div", {
            className: style$u.value
          }, /*#__PURE__*/React__default.createElement(NormalLink, {
            link: "" + (value.type ? value.type + ":" : "") + value.link,
            className: style$u.link
          }, value.link)));
        })), /*#__PURE__*/React__default.createElement("div", {
          className: style$u.email_cont
        }, /*#__PURE__*/React__default.createElement("div", {
          className: style$u.email_label
        }, "Enquire:"), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(NormalLink, {
          link: "mailto:" + item.contactEmail,
          className: style$u.email_link
        }, item.contactEmail))), /*#__PURE__*/React__default.createElement(Button, {
          link: item.link,
          className: style$u.more,
          label: "More Details"
        })))));
      })), /*#__PURE__*/React__default.createElement("div", {
        className: "google_map " + (element !== "map" ? style$u.hide + " " : "") + style$u.right
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$u.map,
        style: {
          height: mapHeight
        }
      }, /*#__PURE__*/React__default.createElement(GoogleMaps, {
        showInMaps: false,
        markers: list.map(function (x) {
          return {
            loc: {
              lat: x.lat,
              lng: x.lng
            }
          };
        }),
        center: mapCenter || {
          lat: list[0].lat,
          lng: list[0].lng
        },
        zoom: 15,
        APIKey: APIKey,
        markerIcon: markerIcon,
        onMarkerPress: onMarkerPress
      })), winWidth < 821 && /*#__PURE__*/React__default.createElement("div", {
        className: style$u.map_block
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$u.image
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$u.sizer
      }), /*#__PURE__*/React__default.createElement(Media, {
        className: style$u.item_img,
        src: list[0].image,
        alt: list[0].place
      })), /*#__PURE__*/React__default.createElement("div", {
        className: style$u.content
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$u.country
      }, list[0].country), /*#__PURE__*/React__default.createElement("div", {
        className: style$u.place
      }, list[0].place), /*#__PURE__*/React__default.createElement("div", {
        className: style$u.address
      }, list[0].address)), /*#__PURE__*/React__default.createElement(NormalLink, {
        className: style$u.arrow_icon,
        link: "/detail"
      }, /*#__PURE__*/React__default.createElement("img", {
        src: arrow,
        alt: "next_arrow"
      })))))))), list.length === 0 && /*#__PURE__*/React__default.createElement("div", {
        className: style$u.noitem,
        style: {
          height: height
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$u.noitem_text
      }, "No offices are available that match your search")));
    }
  })), filter === true && /*#__PURE__*/React__default.createElement(DialogBox, {
    close_icon: close_icon,
    classes: "mobileFilter",
    onClose: function onClose() {
      if (!isEmpty(mobileValuesRef.current)) {
        onFilterChanged(mobileValuesRef.current);
      }
      setOpenFilter(false);
    },
    close: true,
    content: function content() {
      return /*#__PURE__*/React__default.createElement(LazyLoad, {
        lazyLoadClass: "section_wrap",
        animatedClass: "animated",
        rootMargin: "-20%"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "section_border_top"
      }), /*#__PURE__*/React__default.createElement("div", {
        className: "section_border_bottom"
      }), /*#__PURE__*/React__default.createElement("div", {
        className: style$u.filter_padd,
        style: {
          paddingTop: offset
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$u.modal_top
      }, "Filters"), /*#__PURE__*/React__default.createElement(Form, {
        onSubmit: function onSubmit(data) {
          mobileValuesRef.current = data;
        },
        render: function render(_ref3) {
          var handleSubmit = _ref3.handleSubmit,
            values = _ref3.values;
          if (!onMobileChangeRef.current && !isEmpty(values)) {
            onMobileChangeRef.current = values;
          } else if (!isEqual(onMobileChangeRef.current, values)) {
            onMobileChangeRef.current = values;
            handleSubmit(values);
          }
          return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
            className: "c"
          }, /*#__PURE__*/React__default.createElement("form", {
            name: "booking_contact",
            className: style$u.modal_form,
            onSubmit: handleSubmit
          }, /*#__PURE__*/React__default.createElement("div", {
            className: "section_border_left"
          }), /*#__PURE__*/React__default.createElement("div", {
            className: "section_border_right"
          }), /*#__PURE__*/React__default.createElement("div", {
            className: "office_filter " + style$u.filter_block
          }, /*#__PURE__*/React__default.createElement(Field, {
            defaultValue: defaultFilters.city,
            name: labels.city.name,
            component: Dropdown,
            classes: style$u.menu,
            prompt: labels.city.label,
            options: cityOptions
          }), /*#__PURE__*/React__default.createElement(Field, {
            defaultValue: defaultFilters.neighborhood,
            name: labels.neighborhood.name,
            component: Dropdown,
            classes: style$u.menu,
            prompt: labels.neighborhood.label,
            options: neighborhoodOptions
          }), /*#__PURE__*/React__default.createElement(Field, {
            defaultValue: defaultFilters.availableFrom,
            name: labels.date.name,
            component: DateTime,
            classes: style$u.menu,
            prompt: labels.date.label,
            emptyValue: ""
          }), /*#__PURE__*/React__default.createElement(Field, {
            defaultValue: defaultFilters.seatCapacity,
            name: labels.seat.name,
            component: Dropdown,
            classes: style$u.menu,
            prompt: labels.seat.label,
            options: seatOptions
          }), /*#__PURE__*/React__default.createElement(Field, {
            defaultValue: defaultFilters.floor,
            name: labels.floor.name,
            component: Dropdown,
            classes: style$u.menu,
            prompt: labels.floor.label,
            options: floorOptions
          }), unitOfMeasurement === unitsOfMeasurements.SQM ? /*#__PURE__*/React__default.createElement(Field, {
            defaultValue: defaultFilters.sizeInM2,
            name: labels.sizeInM2.name,
            component: Dropdown,
            classes: style$u.menu,
            prompt: labels.sizeInM2.label,
            options: sizeInM2Options
          }) : /*#__PURE__*/React__default.createElement(Field, {
            defaultValue: defaultFilters.sizeInSqft,
            name: labels.sizeInSqft.name,
            component: Dropdown,
            classes: style$u.menu,
            prompt: labels.sizeInSqft.label,
            options: sizeInSqftOptions
          })))));
        }
      })));
    }
  }));
};

var style$v = {"left":"_1z-g5","right":"_170A_","content":"_3kVmK","title":"_2V1ve","address":"_3O78J","details":"_38qbm","text_wrap":"_11bkk","label":"_2aNFX","value":"_jzZ4W","icon":"_2PnU9"};

var FindUs = function FindUs(_ref) {
  var title = _ref.title,
    address = _ref.address,
    _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$loc = _ref.loc,
    loc = _ref$loc === void 0 ? {} : _ref$loc,
    APIKey = _ref.APIKey,
    markerIcon = _ref.markerIcon;
  var _useContext = useContext(AppContext),
    winWidth = _useContext.appContext.winWidth;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(EqualHeight, null, /*#__PURE__*/React__default.createElement("div", {
    className: "c has_border"
  }, /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "section_wrap col_33_66",
    animatedClass: "animated",
    rootMargin: "-20%"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_top"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_left"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_right"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  }), winWidth > 1200 && /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_middle"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$v.left
  }, /*#__PURE__*/React__default.createElement(EqualHeightElement, {
    name: "FindUS"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$v.content
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$v.title
  }, title), /*#__PURE__*/React__default.createElement("div", {
    className: style$v.address
  }, address), /*#__PURE__*/React__default.createElement("div", {
    className: style$v.details
  }, items.map(function (value, j) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: style$v.text_wrap,
      key: "find_details_" + j
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$v.icon
    }, /*#__PURE__*/React__default.createElement("img", {
      src: value.icon,
      alt: value.label + " icon"
    })), /*#__PURE__*/React__default.createElement("div", {
      className: style$v.label
    }, value.label), /*#__PURE__*/React__default.createElement("div", {
      className: style$v.value
    }, value.value));
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: style$v.right
  }, /*#__PURE__*/React__default.createElement(EqualHeightElement, {
    name: "FindUS"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$v.map
  }, /*#__PURE__*/React__default.createElement(GoogleMaps, {
    APIKey: APIKey,
    markerIcon: markerIcon,
    markers: [{
      loc: loc
    }],
    center: loc,
    zoom: 15
  }))))))));
};

var style$w = {"text_wrap":"_2TDFp","title":"_2-j8V","item_inner_wrap":"_3YxEk","text":"_32eMJ","button":"_2rUm3","item_btn":"_3jfJb","blue_hover":"_29XAc"};

var CallToAction = function CallToAction(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    forPage = _ref.forPage;
  var _useContext = useContext(AppContext),
    winWidth = _useContext.appContext.winWidth;
  var chunks = chunk(items, 2);
  if (!items || items.length <= 0) {
    return null;
  }
  var colorClass = {
    blue_hover: style$w.blue_hover
  };
  return /*#__PURE__*/React__default.createElement(EqualHeight, null, /*#__PURE__*/React__default.createElement("div", {
    className: "c has_border call_to_action"
  }, /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "section_wrap col_2",
    animatedClass: "animated",
    rootMargin: "-20%"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_top"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_left"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_right"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  }), winWidth > 820 && forPage !== "membership" && /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_middle"
  }), winWidth > 820 && items.length >= 2 && /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_middle_2"
  }), chunks.map(function (items, cIndex) {
    return items.map(function (item, index) {
      var islastRow = false;
      if (chunks.length === cIndex + 1) {
        islastRow = true;
      }
      return /*#__PURE__*/React__default.createElement("div", {
        className: "section_item " + style$w.text_wrap + " ",
        key: "text_block_" + index
      }, !islastRow && index % 2 === 0 && /*#__PURE__*/React__default.createElement("div", {
        className: "section_item_border_bottom"
      }), /*#__PURE__*/React__default.createElement(EqualHeightElement, {
        name: "TextBlock"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "" + style$w.item_inner_wrap
      }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", {
        className: style$w.title
      }, item.title), /*#__PURE__*/React__default.createElement("div", {
        className: style$w.text
      }, item.text), /*#__PURE__*/React__default.createElement("div", {
        className: style$w.button
      }, /*#__PURE__*/React__default.createElement(Button, {
        buttonType: "banner_button",
        className: style$w.item_btn + " " + colorClass[item.button_type],
        onClick: item.on_button_click,
        label: item.button_label,
        link: item.button_url
      }))))), /*#__PURE__*/React__default.createElement("div", {
        className: "section_border_bottom"
      }));
    });
  }))));
};

var style$x = {"redBg":"_17DvQ","outer":"_36t1v","block_Center":"_GdiTy","content":"_2HYK_","title":"_SIYe0","text":"_Qrn18"};

var Features = function Features(_ref) {
  var title = _ref.title,
    bg_color = _ref.bg_color,
    items = _ref.items;
  var colorClass = {
    red: style$x.redBg
  };
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "c has_border features"
  }, /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "section_wrap col_20",
    animatedClass: "animated",
    rootMargin: "-20%"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_top"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_left"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_right"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_middle"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_middle_2"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$x.outer
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$x.sec_padd
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_wrap"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_top_full"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: colorClass[bg_color] + " " + style$x.block_Center
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$x.title
  }, title), /*#__PURE__*/React__default.createElement("div", {
    className: style$x.content
  }, items.map(function (item, i) {
    return /*#__PURE__*/React__default.createElement("div", {
      key: "features_" + i
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$x.text
    }, item));
  })))))))));
};

var style$y = {"noPad":"_ESBy5","notFound":"_3xhNb","no_match_btn":"_1b1oE","outer":"_2D0C_","content":"_1av8o"};

var NoMatch = function NoMatch() {
  var _useContext = useContext(AppContext),
    _useContext$appContex = _useContext.appContext,
    winHeight = _useContext$appContex.winHeight,
    height = _useContext$appContex.height;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "c"
  }, /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "section_wrap",
    animatedClass: "animated",
    rootMargin: "-20%"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "no_match " + style$y.outer,
    style: {
      minHeight: (winHeight - height) * (80 / 100)
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_left"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_right"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_bottom"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$y.notFound
  }, /*#__PURE__*/React__default.createElement("h1", null, "404"), /*#__PURE__*/React__default.createElement("h2", null, "Oops! We can\u2019t find that page..."), /*#__PURE__*/React__default.createElement("p", null, "The page you are looking for might have been removed, had its name changed or is temporaily unavailable."), /*#__PURE__*/React__default.createElement(Button, {
    className: style$y.no_match_btn,
    label: "Go to Home",
    link: "/",
    buttonType: "header_blue_btn"
  })))));
};

var Widget = function Widget(_ref) {
  var data = _ref.data;
  if (data.type === "hero_banner") {
    return /*#__PURE__*/React__default.createElement(BannerHero, data);
  }
  if (data.type === "banner") {
    return /*#__PURE__*/React__default.createElement(Banner, data);
  }
  if (data.type === "left_right_banner") {
    return /*#__PURE__*/React__default.createElement(LeftRightBanner, data);
  }
  if (data.type === "text") {
    return /*#__PURE__*/React__default.createElement(Text, data);
  }
  if (data.type === "menu_section") {
    return /*#__PURE__*/React__default.createElement(MenuSection, data);
  }
  if (data.type === "enquire_form") {
    return /*#__PURE__*/React__default.createElement(EnquireForm, data);
  }
  if (data.type === "image_with_text") {
    return /*#__PURE__*/React__default.createElement(TextImage, data);
  }
  if (data.type === "text_table") {
    return /*#__PURE__*/React__default.createElement(TextTable, data);
  }
  if (data.type === "text_image_block") {
    return /*#__PURE__*/React__default.createElement(TextImageBlock, data);
  }
  if (data.type === "text_image_slider") {
    return /*#__PURE__*/React__default.createElement(TextImageSlider, data);
  }
  if (data.type === "text_block") {
    return /*#__PURE__*/React__default.createElement(TextBlock, data);
  }
  if (data.type === "terms_menu") {
    return /*#__PURE__*/React__default.createElement(TermsMenu, data);
  }
  if (data.type === "text_editor") {
    return /*#__PURE__*/React__default.createElement(TextEditor, data);
  }
  if (data.type === "two_column_table") {
    return /*#__PURE__*/React__default.createElement(TableTwoColumn, data);
  }
  if (data.type === "three_column_table") {
    return /*#__PURE__*/React__default.createElement(TextTable, data);
  }
  if (data.type === "amenities") {
    return /*#__PURE__*/React__default.createElement(Amenities, data);
  }
  if (data.type === "image_slider") {
    return /*#__PURE__*/React__default.createElement(ImageSlider, data);
  }
  if (data.type === "details") {
    return /*#__PURE__*/React__default.createElement(Details, data);
  }
  if (data.type === "map") {
    return /*#__PURE__*/React__default.createElement(Map, data);
  }
  if (data.type === "filters") {
    return /*#__PURE__*/React__default.createElement(Filters, data);
  }
  if (data.type === "find_us") {
    return /*#__PURE__*/React__default.createElement(FindUs, data);
  }
  if (data.type === "call_to_action") {
    return /*#__PURE__*/React__default.createElement(CallToAction, data);
  }
  if (data.type === "membership_features") {
    return /*#__PURE__*/React__default.createElement(Features, data);
  }
  if (data.type === "404") {
    return /*#__PURE__*/React__default.createElement(NoMatch, null);
  }
  return null;
};

var Page = function Page(_ref) {
  var widgets = _ref.widgets,
    headerProps = _ref.headerProps,
    footerProps = _ref.footerProps;
  return /*#__PURE__*/React__default.createElement(AppProvider, null, /*#__PURE__*/React__default.createElement(Layout, {
    headerProps: headerProps,
    footerProps: footerProps
  }, widgets.map(function (data, index) {
    return /*#__PURE__*/React__default.createElement(Widget, {
      data: data,
      key: "widget_" + index
    });
  })));
};

export default Page;
//# sourceMappingURL=index.modern.js.map
