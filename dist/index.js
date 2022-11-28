function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('react-toastify/dist/ReactToastify.css');
require('react-datepicker/dist/react-datepicker.css');
var React = require('react');
var React__default = _interopDefault(React);
var $ = _interopDefault(require('jquery-slim'));
var lodash = require('lodash');
var ReactDOM = _interopDefault(require('react-dom'));
var reactFinalForm = require('react-final-form');
var reduxFormValidators = require('redux-form-validators');
require('react-date-range');
require('moment');
require('react-date-range/dist/styles.css');
require('react-date-range/dist/theme/default.css');
require('cash-dom');
require('react-datepicker');
var reactEqualHeight = require('react-equal-height');
var reactRouterDom = require('react-router-dom');
var swiper = require('swiper');
var react = require('swiper/react');
require('swiper/css');
require('swiper/css/navigation');

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

var download = "download~EiuIGXEG.svg";

var logo1 = "logo1~SsxXLtsV.svg";

var logo2 = "logo2~lhrlnmzw.svg";

var logo3 = "logo3~WnFLVytJ.svg";

var logo4 = "logo4~msYyVIHh.svg";

var logo5 = "logo5~bmDmcJlH.svg";

var blogo1 = "blogo1~IOfMNgda.jpg";

var blogo2 = "blogo2~JKqzbDXZ.jpg";

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
      image_position: 'right'
    }, {
      title: "Lorem ipsum dolor",
      sub_title: "Tempus scelerisque felis",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus scelerisque felis lobortis commodo quis. Pulvinar leo ac, lacinia nibh tincidunt. ",
      button_label: "Learn more",
      button_url: "/",
      image: detailImg,
      image_position: 'left'
    }]
  }],
  "enquire-form": [{
    type: "enquire_form",
    title: "Lets Connect",
    text: "<span> Lorem ipsum dolor sit amet, </span> consectetur adipiscing elit."
  }],
  "news_letter": {
    title: "Newsletter",
    text: "<span> Sign up for the good stuff.</span> Break up your emails with the odd update from us. We hate spam too, so we promise to only send you good things.",
    button_label: "Sign up",
    button_url: "/",
    image: newsletterImg
  },
  "contact": {
    form_title: "How can we help you?",
    form_text: "<span>Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit. Enim quam tortor volutpat egestas.",
    button_label: "Submit"
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
      image_position: 'left'
    }, {
      image: landlordImage,
      title: "Mauris fusce.",
      text: "Knotel works with landlords to design, build and operate office space for companies on flexible terms, while minimizing buildout disruption and maximizing long-term property value.",
      button_label: "Submit your space",
      button_url: "/",
      image_position: 'right'
    }, {
      image: landlordImage,
      title: "Mauris fusce.",
      text: "Knotel works with landlords to design, build and operate office space for companies on flexible terms, while minimizing buildout disruption and maximizing long-term property value.",
      button_label: "Submit your space",
      button_url: "/",
      image_position: 'left'
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
      image_position: 'right',
      list: [{
        image: blogo1
      }, {
        image: blogo2
      }, {
        image: blogo1
      }, {
        image: blogo2
      }]
    }, {
      title: "Old & new collide",
      text: "This is a place where old and new collide; from cutting-edge-cool Old Street and Shoreditch to the historically influenced City of London. The area is the epicentre of London’s creative and collaborative industries and is more popular than ever with many of London’s forward-thinking financial and professional occupiers. ",
      button_label: "Request information",
      button_url: "/",
      list: [{
        image: blogo2
      }, {
        image: blogo1
      }, {
        image: blogo2
      }, {
        image: blogo1
      }],
      image_position: 'left',
      bg_color: "green",
      white_button: true
    }]
  }],
  "terms-of-use": [{
    type: "terms_menu",
    items: privacyMenu
  }, {
    type: 'text_editor',
    text: "\n            <h6>Effective Date of Current Policy: June 17, 2022</h6>\n            <h1>Website terms</h1>\n            <h3>Sessions Website Terms</h3>\n            <p>YOU SHOULD READ THESE WEBSITE TERMS, THE PRIVACY NOTICE AND EUROPEAN PRIVACY ADDENDUM BEFORE USING THIS WEBSITE.</p>\n            <p>\n                By continuing to access and/or use this website (together with any and all other Sessions websites or subdomains, each, a \"Site,\" and collectively, the \"Sites\")\n                offered by Knotel Holdings, LLC and/or its affiliates (\"Sessions\"), you (which term, as used herein, includes you personally and\n                any entity you represent and the company or organization on whose behalf Sessions grants you access) hereby expressly acknowledge and agree that you have read\n                and agree to be bound by and a party to the terms and conditions set forth in these \"Website Terms\", the Privacy Notice and European Privacy Addendum (collectively, the \"Terms\").\n                Sessions reserves the right to modify the Terms at any time upon posting to the Sites, so you should review the Terms whenever accessing and/or using the Sites.\n                Continued use of or access to the Sites after the posting of modifications to the Terms, signifies your acceptance of the Terms, as modified.\n                You may not access or use the Sites if, at any time, you do not wish to accept the terms and conditions set forth in the Terms. As used in the Terms, \"include(s)\" and \"including\" mean \"including without limitation.\"\n            </p>\n            <p>\n                The Sites, and any and all content, information, data and materials made available on the Sites, including images, text and audio (collectively, the \"Content\"), as well as any and all intellectual property\n                rights now or hereafter in and to any of the foregoing (collectively, the \"Intellectual Property Rights\") are and shall at all times remain the sole and exclusive property of Sessions and are\n                protected by applicable copyright, patent, trademark and other intellectual property laws. All other trademarks, if any, on the Sites are the property of their respective owners. You shall not\n                remove any copyright, trademark or other notices or disclaimers contained in this Site and/or the Content. You acquire absolutely no rights or licenses in or to any of the Sites, the Content or the\n                Intellectual Property Rights, other than the limited rights to access and use the Sites as expressly permitted by these Website Terms and in compliance with applicable laws, rules, regulations and Sessions'\n                instructions from time to time. You agree to protect the proprietary rights of Sessions and all others having rights in the Sites, any of the Content and/or any of the Intellectual Property Rights and to\n                comply with all reasonable written or electronic requests made by Sessions or its suppliers of content or services or otherwise (collectively, \"Suppliers\") to protect their and others' contractual, statutory\n                and common law rights in the Sites, the Content and/or the Intellectual Property Rights.\n            </p>\n            <p>\n                You are entitled to view, copy and print any documents from the Sites, but only for your personal purposes or if you are using the Sites on behalf of\n                the entity you represent or on behalf of the company or organization on whose behalf Sessions grants you access, only for such entity\u2019s or company\u2019s or organization\u2019s internal business purposes.\n                Any sale, transmission or redistribution of the Sites, the Content or the Intellectual Property Rights, and any copying, modification or other use of the Sites, the Content or the Intellectual Property\n                Rights for any purposes other than your personal purposes, or, if you are using the Sites on behalf of the entity you represent or on behalf of the company or organization on whose behalf Sessions grants you access,\n                such entity\u2019s or company\u2019s or organization\u2019s internal business purposes, as applicable, are strictly prohibited. Except as specifically permitted by the terms of these Website Terms, you shall not use any of the Sites,\n                the Content, or the Intellectual Property Rights, or any derivations of any of the foregoing, for any purposes whatsoever, without Sessions\u2019 prior written approval. You agree to provide Sessions with prompt written\n                notice of any unauthorized access and/or use of the Sites, any of the Content and/or any of the Intellectual Property Rights by any party or of any claim that any of the Sites, the Content and/or the\n                Intellectual Property Rights infringes upon any intellectual property rights or other contractual, statutory or common law rights.\n            </p>\n            <p>\n                YOU MAY NOT COPY, REPRODUCE, RECOMPILE, DECOMPILE, DISASSEMBLE, REVERSE ENGINEER, DISTRIBUTE, PUBLISH, DISPLAY, PERFORM, MODIFY, UPLOAD TO, CREATE DERIVATIVE WORKS FROM, TRANSMIT OR\n                IN ANY WAY EXPLOIT ALL OR ANY PART OF THE SITES, EXCEPT AS EXPRESSLY PROVIDED HEREIN. THE CONTENTS OF THE SITES MAY NOT BE RECIRCULATED, REDISTRIBUTED OR PUBLISHED BY YOU WITHOUT SESSIONS\u2019 PRIOR WRITTEN CONSENT.\n                IF YOU DOWNLOAD ANY INFORMATION OR SOFTWARE FROM THE SITES, YOU AGREE THAT YOU WILL NOT COPY IT OR REMOVE OR OBSCURE ANY COPYRIGHT OR OTHER NOTICES OR LEGENDS CONTAINED IN ANY SUCH INFORMATION. MODIFICATION OF\n                ANY OF THE CONTENT BY YOU WOULD BE A VIOLATION OF SESSIONS\u2019 COPYRIGHT AND OTHER PROPRIETARY RIGHTS. YOU MAY NOT USE THE SITES FOR ANY ILLEGAL PURPOSE OR IN ANY MANNER INCONSISTENT WITH APPLICABLE LAW OR THESE\n                WEBSITE TERMS. YOU MAY NOT OFFER ANY PART OF THE SITES FOR SALE OR DISTRIBUTE THEM OVER ANY OTHER MEDIUM INCLUDING BUT NOT LIMITED TO TELEVISION OR RADIO BROADCAST, A COMPUTER NETWORK OR HYPERLINK FRAMING ON THE\n                INTERNET WITHOUT THE PRIOR WRITTEN CONSENT OF SESSIONS. YOU MAY NOT USE ANY OF SESSIONS\u2019 TRADEMARKS, TRADE NAMES OR SERVICE MARKS IN A MANNER THAT SUGGESTS THAT SUCH NAMES AND MARKS BELONG TO OR ARE ASSOCIATED WITH\n                YOU OR ARE USED WITH SESSIONS\u2019 CONSENT, AND YOU ACKNOWLEDGE THAT YOU HAVE NO OWNERSHIP RIGHTS IN AND TO ANY OF THESE NAMES AND MARKS. YOU WILL NOT USE ANY OF THE SITES OR THE CONTENT IN UNSOLICITED MAILINGS OR SPAM\n                MATERIAL. YOU WILL NOT SPAM OR SEND UNSOLICITED MAILINGS TO ANY PERSON OR ENTITY USING ANY OF THE SITES. YOU AGREE TO COMPLY WITH ANY OTHER APPLICABLE TERMS AND CONDITIONS SET FORTH ON THE SITES OR SESSIONS\u2019 INSTRUCTION\n                PROVIDED FROM TIME TO TIME.\n            </p>\n            <p>\n                In connection with your use of and/or access to the Sites, Sessions from time to time may provide you\n                with user names, passwords and/or other unique identifiers (collectively, \u201CUser Codes\u201D). You are responsible for the security and confidentiality of the User Codes and\n                agree not to disclose them to any third party, including, any other employee in your company or organization. You are responsible for any and all information provided, and any and\n                all acts and/or omissions that occur, while User Codes are being used, in each case, whether by you or a third party. Sessions Parties (as defined below) are not</p>\n            <p>\n                responsible for any breach of security caused by your failure to maintain the confidentiality and security of any of the User Codes. You agree to notify Sessions immediately in the event of loss, theft or\n                disclosure of any or all of the User Codes or if you believe the confidentiality or security of any or all of the User Codes has been compromised in any way. You are limited to one User Code. Duplicate\n                User Codes may be revoked. Sessions reserves the right to revoke or modify the User Codes at any time.\n            </p>\n            <ul>You represent and warrant that:\n                <li>\n                    you will not use or access our Sites or Content if you are not able to form legally binding contracts (for example, if you are under 18 years old);\n\n                </li>\n                <li>\n                    you are the person to whom the User Codes you used to access the Sites were issued by us and the information you provided to us in connection with the\n                    issuance of the User Codes, if any, was and is true, accurate, current and complete;\n                </li>\n                <li>\n                    if you are accessing the Sites on behalf of the entity you represent or the company or organization to whom the User Codes you used to access the Sites were issued by us, you are duly\n                    authorized by all necessary action and have all consents, rights and authority to bind that entity or company or organization to these Website Terms, and you agree to these Website Terms on that company\u2019s or\n                    organization\u2019s behalf;\n                </li>\n                <li>\n                    you will not reverse engineer, de-compile or reverse compile any of our technology, including any software or Java applets associated with any of the Sites and/or the Content;\n\n                </li>\n                <li>\n                    unless we expressly authorize you to do so in writing, you will not use, reproduce, duplicate, copy, sell, resell, distribute, publish or exploit for any commercial purposes any portion of any of the Sites and/or the Content;\n                </li>\n                <li>\n                    you will access and use the Sites in compliance with any and all applicable law(s), rules(s) or regulation(s) (whether in the United States or other countries) and in accordance with these Website Terms; and\n                </li>\n                <li>\n                    you have all consents, rights and authority to provide and submit any and all information and content provided and submitted by you using the User Codes, the Sites and/or the Content and all such information and content: (1) is true, accurate, current and complete and we may rely on such information and content; (2) is not libelous, defamatory, indecent, obscene, harassing, hateful or violent; (3) is not meant to harm any Sessions Parties or any third party; (4) does not constitute or include viruses or other harmful codes; (5) as well as its anticipated uses, does not violate, infringe or misappropriate any copyright, patent, trademark or other proprietary rights, or right of publicity or privacy of any Sessions Parties or any third party; and (6) does not violate these Website Terms, or any applicable law, rule or regulation (whether of the United States or other countries)\n                </li>\n            </ul>\n            <p>\n                You acknowledge that your submission of any information or content to us is at your own risk. None of the Sessions Parties will assume any liability to you with regard to any loss or\n                liability relating to such information in any way.\n            </p>\n            <p>\n                The Sites are made available solely for information purposes and, with the exception of these Website Terms or as otherwise indicated, is not intended to, and shall not, constitute any offer or\n                acceptance with the respect to any transactions or other matters. Except for these Website Terms, the Sites shall not create any legal relationship between you and Sessions.\n            </p>\n            <p>\n                The Sites and the Content are subject to change at any time by Sessions without notice and Sessions reserves the right to modify, suspend, terminate or restrict any aspect or\n                feature of any of the Sites and/or Content or your access to and/or use of the Sites and/or Content. If Sessions elects to modify, suspend, or discontinue any of the Sites, none of the Sessions Parties\n                shall be liable to you or any third party. ANY USE OF THE SITES OR CONTENT IS AT YOUR OWN RISK. THE SITES AND THE CONTENT ARE PROVIDED \u201CAS IS\u201D WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, BUT\n                NOT LIMITED TO, ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, RELIABILITY, OR COMPLETENESS OF ANY OF THE SITES AND/OR THE CONTENT, OR IN RESPECT OF ANY MATERIALS OR PRODUCTS\n                REFERRED TO ON THE SITES, OR NON-INFRINGEMENT. DIFFICULTIES IN ACCESS TO AND/OR USE OF THE SITES COULD INVOLVE, AMONG OTHERS, FAILURES, DELAYS, MALFUNCTION, SOFTWARE EROSION, INADVERTENT DISCLOSURE OF INFORMATION\n                PROVIDED TO SESSIONS VIA THE SITES, OR HARDWARE DAMAGE, WHICH DIFFICULTIES COULD BE THE RESULT OF HARDWARE, SOFTWARE OR COMMUNICATION LINK INADEQUACIES OR OTHER CAUSES. SUCH DIFFICULTIES COULD LEAD TO POSSIBLE ECONOMIC\n                AND/OR DATA LOSS. SESSIONS DOES NOT WARRANT THAT ANY OF THE SITES ARE COMPATIBLE WITH YOUR EQUIPMENT OR THAT ANY OF THE SITES ARE OR WILL BE FREE FROM LOSS, DESTRUCTION, DAMAGE, CORRUPTION, ATTACK, INTERFERENCE, HACKING, ERRORS, VIRUSES, WORMS, OR OTHER SECURITY INTRUSION. IN NO EVENT SHALL SESSIONS PARTIES BE LIABLE FOR ANY DAMAGE YOU MAY SUFFER AS A RESULT OF ANY OF THE FOREGOING DIFFICULTIES.\n                ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, ARE HEREBY EXCLUDED TO THE EXTENT PERMITTED BY LAW.\n            </p>\n            <p>\n                Sessions and its partners, directors, officers, employees and agents (collectively, \u201CSessions Parties\u201D) shall, to the extent permitted by law, have no liability, contingent or otherwise,\n                whether caused by the negligence of any Sessions Parties, their subcontractors or Suppliers, or otherwise, to you or to any third parties for the accuracy, timeliness, completeness, reliability,\n                performance or continued availability of any of the Sites or the Content or for delays or omissions in any of the foregoing, including, but not limited to, inaccuracies or errors in or omissions from\n                quotes and/or financial data. Sessions Parties shall have no responsibility to maintain any of the Sites and/or the Content or to supply any corrections or updates in connection with any of the Sites and/or\n                the Content. IN NO EVENT WILL SESSIONS PARTIES, THEIR SUBCONTRACTORS OR SUPPLIERS BE LIABLE TO YOU FOR ANY DIRECT, SPECIAL, INDIRECT, INCIDENTAL, EXEMPLARY, PUNITIVE OR\n                CONSEQUENTIAL DAMAGES (INCLUDING, WITHOUT LIMITATION, LOSS OF BUSINESS, LOSS OF PROFIT, LOSS OR CORRUPTION OF DATA, LOSS OF GOODWILL OR REPUTATION OR WASTED MANAGEMENT TIME) WHICH MAY BE INCURRED OR\n                EXPERIENCED ON ACCOUNT OF YOUR ACCESSING, USING AND/OR RELYING ON ANY OF THE SITES OR ANY CONTENT OR LINKS ON ANY OF THE SITES, EVEN IF SESSIONS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. Any limitations\n                or restrictions on liability in these Website Terms shall only apply to the extent permitted by applicable law.\n            </p>\n            <p>\n                In no event shall Sessions Parties\u2019 total liability to you for all damages, losses and causes of action (whether in contract, tort or otherwise, including but not limited to, negligence) exceed\n                the amount paid by you to Sessions, if any, for accessing the Sites.\n            </p>\n            <p>\n                Nothing set forth in the Sites should be construed as a recommendation to purchase or sell any product or instrument or to enter into any transaction, or as a representation that any particular\n                product or instrument is suitable or appropriate for you. Many of the products described in the Sites involve significant risks and you should not enter into any transactions unless you fully understand\n                all of these risks and have independently determined that the risks are acceptable to you and that the transactions are appropriate for you in light of your objectives, experience, financial and operational\n                resources and other relevant circumstances. Any discussion of risks contained in the Sites, however, should not be considered to be a disclosure of the risks of particular transactions, or a complete discussion\n                of the risks which are mentioned.\n            </p>\n            <p>\n                You should not construe any of the Content as business, financial, investment, hedging, trading, legal, regulatory, tax or accounting advice and you should not make the\n                Sites (or any portions thereof) the primary basis for any trading decisions. In providing the Sites and the Content and entering into any transactions in the products described in the Sites, Sessions\n                is acting solely in the capacity of an arm\u2019s length contractual counterparty and not as a financial advisor or a fiduciary. Under no circumstances should Sessions be considered your advisor or fiduciary and, if you\n                require advice with respect to the products identified in any of the Sites or any contemplated transactions, you should consult your own business, financial, accounting or legal advisors.\n            </p>\n            <p>\n                The Sites may provide links to certain other Sites sponsored, owned, operated and/or maintained by Sessions as well as\n                those sponsored, owned, operated and/or maintained by third parties (\u201CThird Party Websites\u201D). Such Third Party Websites are publicly available and Sessions is providing\n                access to such Third Party Websites through the Sites solely as a convenience to you. The content, data, information, services, goods or advertisements of such Third Party Websites that may be linked\n                to any of the Sites are not sponsored, owned, operated, maintained or controlled by Sessions, and Sessions makes no representations or warranties concerning the content, data, information, services, goods or\n                advertisements of such Third Party Websites, and the fact that access to such websites is provided does not constitute any endorsement, authorization or sponsorship of such websites or their sponsors, owners\n                and/or operators by Sessions nor is there any affiliation between Sessions and any such sponsors, owners, and/or operators. Moreover, Third Party Websites are not reviewed, controlled, or examined by Sessions and\n                Sessions is in no way responsible for the availability, content or accuracy of other websites (including any Third Party Websites), services or goods that may be linked to, or advertised on, any of the Sites and\n                does not make any warranty, express or implied, with respect to the use of the links provided on, or to, any of the Sites or guarantee the accuracy, completeness, usefulness or adequacy of any other\n                websites, services, goods or advertisements that may be linked on, or to, any of the Sites. You understand and agree that you will access and use such Third Party Websites, and rely on the content, services, goods or\n                advertisements of such Third Party Websites, solely at your own risk and that Sessions does not grant to you any rights in respect of such Third Party Websites. In addition, please be aware that your use of any\n                linked site (including any Third Party Website) is subject to the terms and conditions applicable to that website. Please direct any questions regarding such linked sites to the webmasters of such sites.\n            </p>\n            <p>\n                In the course of your access to and/or use of any of the Sites, you may provide, or Sessions may otherwise obtain, information about you and/or your business activities. By using\n                any of the Sites, you expressly consent to Sessions (1) using this information to assess the function and performance of the Sites, to assess the needs of its customers, to market Sessions\u2019 products\n                and/or services and for the other purposes set out in this paragraph, and (2) transferring this information to Sessions affiliates throughout the world for the purposes specified in (1) above. Any information\n                which you provide or which Sessions otherwise obtains may be used by Sessions for any and all business purposes, provided however that personally identifiable information will be used (and shared) as described\n                in the Privacy Notice and European Privacy Addendum. In the event that information is submitted through your access to any of the Sites erroneously, or you later determine that information should not have been\n                submitted, for any reason, you accept full financial responsibility for such entry.\n            </p>\n            <p>\n                You agree, at your own expense, to indemnify, defend and hold harmless Sessions Parties, their subcontractors and their Suppliers, from and against any and all claims, actions, proceedings, obligations, penalties,\n                losses, liabilities, damages, costs and expenses (including reasonable legal and other professional fees and costs) directly or indirectly arising out of or related to your access to and/or use of any of the Sites\n                and/or the Content, or, in the event that you are provided with User Codes, any access to and/or use of any of the Sites and/or the Content under such User Codes, including, but not limited to: (i) a claim that any\n                use of any of the Sites and/or the Content by you (whether under the User Codes or otherwise) infringes any intellectual property or other proprietary rights of any third party, is libelous or defamatory, or otherwise\n                results in injury or damage to any third party; (ii) any deletions, additions, insertions or alterations to, or any unauthorized use of, any of the Sites and/or the Content by you (whether under the User Codes or\n                otherwise); (iii) any misrepresentation or breach of representation or warranty made by you contained herein; (iv) any breach of any covenant or agreement to be performed by you hereunder; or (v) your violation of\n                any applicable law, rule, or regulation.\n            </p>\n            <p>\n                You agree, at your own expense, to indemnify, defend and hold harmless Sessions Parties, their subcontractors and their Suppliers, from and against any and all\n                claims, actions, proceedings, obligations, penalties, losses, liabilities, damages, costs and expenses (including reasonable legal and other professional fees and costs) directly or indirectly\n                arising out of or related to your access to and/or use of any of the Sites and/or the Content, or, in the event that you are provided with User Codes, any access to and/or use of any of the Sites and/or\n                the Content under such User Codes, including, but not limited to: (i) a claim that any use of any of the Sites and/or the Content by you (whether under the User Codes or otherwise) infringes any intellectual\n                property or other proprietary rights of any third party, is libelous or defamatory, or otherwise results in injury or damage to any third party; (ii) any deletions, additions, insertions or alterations to, or\n                any unauthorized use of, any of the Sites and/or the Content by you (whether under the User Codes or otherwise); (iii) any misrepresentation or breach of representation or warranty made by you contained\n                herein; (iv) any breach of any covenant or agreement to be performed by you hereunder; or (v) your violation of any applicable law, rule, or regulation.\n            </p>\n            <p>\n                Sessions may, in its sole discretion, seek your consent to the terms and conditions of these Website Terms by means of an electronic signature by requesting you to affirmatively check the\n                box indicating your acceptance to these Website Terms, or affirmatively \u201Cclick\u201D on boxes containing the words \u201CI Accept,\u201D \u201CI Agree\u201D or other similar phrases (collectively, \u201CAcceptance Terms\u201D). If\n                you \u201Cclick\u201D on the Acceptance Terms, your \u201Cclick\u201D will be deemed a legally binding electronic signature. You acknowledge and agree that you will carefully review any document or web page before making such\n                an electronic signature. By electronically indicating your agreement to these Website Terms and/or registering for and/or accessing, browsing, and/or using any of the Sites and/or accessing, browsing, and/or\n                using any of the Content, you acknowledge and agree: (i) that you intend to form a legally binding contract between you and Sessions; (ii) that you have read and agree to the terms and conditions of these\n                Website Terms; (iii) that you agree and intend that these Website Terms to be the legal equivalent of signed, written contracts, and equally binding; (iv) that by electronically agreeing to these Website Terms,\n                you acknowledge that you have received a copy of these Website Terms by your viewing a web page containing a hyperlink to the web page where these Website Terms are displayed or otherwise; and (v) that if you are\n                executing these Website Terms on behalf of others (including the entity you represent or the company or organization on whose behalf Sessions grants you access to any of the Sites), you hereby certify that you are an\n                authorized representative, duly authorized, including where applicable, by all required corporate action to act on behalf of such others.\n            </p>\n            <p>\n                The terms of these Website Terms shall be governed by, and construed in accordance with, the laws of the State of New York applicable to contracts made and to be fully performed in such State without\n                reference to principles of conflict of laws, and any action brought in relation to these Website Terms shall be brought in a Federal or State\n            </p>\n            <p>\n                The terms of these Website Terms represent the complete and exclusive statement of the agreement and understanding between you and Sessions regarding your\n                rights to access and/or use the Sites and/or the Content, and supersede representations (whether written or oral), regarding such subject matter. Except as herein provided, no waiver, modification or amendment\n                of any provision of these Website Terms will be effective against Sessions unless the same is in writing and signed by one of Sessions\u2019 executive officers. Should any term or provision of these Website Terms be\n                deemed or held to be invalid or unenforceable, the remaining terms and provisions will continue in full force and effect. Sessions\u2019 failure to insist at any time upon strict compliance with any term of these Website\n                Terms, or any delay or failure on Sessions\u2019 part to exercise any power or right given to Sessions in these Website Terms, or a continued course of such conduct on Sessions\u2019 part will at no time operate as a waiver of\n                such power or right, nor will any single or partial exercise preclude any other future exercise. All rights and remedies given to Sessions in these Website Terms and other terms and conditions that are subject to these\n                Website Terms are cumulative and not exclusive of any other rights or remedies which Sessions otherwise has at law or equity. These Website Terms will be binding upon you and your executors, heirs, successors and assigns. The term \u201Caffiliate\u201D as used in these Website\n                Terms shall mean \u201Caffiliate existing from time to time. You may not assign or delegate rights, duties or obligations under these Website Terms without Sessions\u2019 prior written consent. These Website Terms are in addition to, and does\n                not nullify, any other agreement between you and Sessions governing the conduct of your relationship with Sessions.\n            </p>\n            <h3>Important Legal Information</h3>\n            <p>\n                Sessions does not intend the Content to be distributed to, or used by, any person or entity in any jurisdiction or country where such distribution or use would be contrary to law, rule or\n                regulation or which would subject Sessions to any registration requirement within such jurisdiction or country. Neither the information, nor any opinion contained in any of the Sites constitutes a\n                solicitation or offer by Sessions to buy or sell any securities, futures, options or other financial instruments or provide any investment advice or service.\n            </p>\n            <p>\n                Some of the content, products, and services available through the Sites may include materials that belong to third parties. You acknowledge that none of the Sessions Parties will assume any\n                responsibility for such content, products or services.\n            </p>\n            <p>\n                Although some of the content, information or data made available to you on any of the Sites is obtained and/or compiled from sources Sessions believes to be reliable, Sessions cannot and does not\n                guarantee the accuracy, validity, timeliness or completeness of any such content, information or data made available to you on any of the Sites for any particular purpose. Neither Sessions Parties\n                nor any of their subcontractors or Suppliers will be liable or have any responsibility of any kind for any loss or damage that you incur in the event of any failure or interruption of any of the Sites, or\n                resulting from the act or omission of any other party involved in making any of the Sites or the Content available to you, or from any other cause relating to your access to, or inability to access, or use of, or\n                inability to use any of the Sites or the Content, whether or not the circumstances giving rise to such cause may have been within the control of any Sessions Parties or of any of their subcontractors or Suppliers.\n            </p>\n            <p>\n                All property listing information contained within this site is subject to the possibility of errors, omissions, change of price, rental or other conditions, prior sale,\n                lease or financing, or withdrawal without notice. Any projections, opinions, assumptions or estimates contained within the Sites are for example only, and such projections, opinions, assumptions or\n                estimates may not represent current or future performance of a listed property. You and your tax and legal advisors should conduct your own investigation of any property listed on this site and any contemplated\n                transaction concerning any property listed on the Sites.\n            </p></br></br></br></br>"
  }],
  "privacy-us": [{
    type: "terms_menu",
    items: privacyMenu
  }, {
    type: 'text_editor',
    text: "<h6>Effective Date of Current Policy: June 17, 2022</h6><h1>Privacy notice</h1>"
  }, {
    type: 'text_editor',
    text: "\n            <p>This Privacy Notice explains how Sessions Collection, including its subsidiaries, handles your personal information. This Privacy Notice applies to this website or mobile application and the websites or mobile applications of Knotel Holdings, LLC and our affiliates (hereinafter referred to as \u201CSessions,\u201D \u201Cwe\u201D, \u201Cus\u201D or \u201Cour\u201D) that display or refer to this Privacy Notice (each a Site and collectively, the Sites), and to any online services that may be available on or through the Sites or other services and products provided by us (the \u201CServices\u201D). This Privacy Notice describes the personal information we collect on the Site and through the Services, and how we use and protect that information.  This Privacy Notice does not apply to information unrelated to any identified or identifiable individual, household, or device.</p>\n            <p>In addition, if you are a resident of the European Economic Area (\u201CEEA\u201D), please see our European Privacy Addendum.</p></br></br>"
  }, {
    type: 'text_editor',
    text: "<h2>Information we collect</h2>"
  }, {
    type: 'text_editor',
    text: " \n            <ul>\n            To provide the Services, we collect the following information:\n            <li>By which you may be personally identified, such as a first and last name, a home or other physical address, an email address, a telephone number, date of birth, payment information, business information\n                or other identifier that permits us to contact you.</li>\n            <li>That is about our provision of Services to you, such as your membership level and information used to administer your account with us.</li>\n            <li>Information about access to our facilities and attendance at events.</li>\n            <li>About your internet connection, the equipment you use to access our Site, and usage data.</li>\n            </ul>\n\n        <ul>\n            We collect this information from a variety of sources including:\n            <li>Directly from you when you provide it to us.</li>\n            <li>Automatically as you navigate through the Site.</li>\n            <li>From third parties.</li>\n            <li>Information we collect from you.</li>\n        </ul>\n\n        <ul>\n            The information we collect on or through our Site may include:\n            <li>Information that you provide by filling in forms on our Site. This includes information provided at the time you register for an account, sign up for newsletters or a loyalty program, respond to surveys, participate in\n                sweepstakes or contests, or engage in certain activities.</li>\n            <li>Records and correspondence. If you contact us to request information about our Services, request to receive customer or technical support, or otherwise communicate with us.</li>\n            <li>Location utilization information. This includes information about the time and purpose of your visits, the frequency of your visits, information about your guests or visitors, what types of Services you\n                use in our locations, the rooms you book or use, information needed to control access to our locations (including information about where you may be located), information about your\n                guests or visitors, information about your connection to our WiFi provided at our locations and audio/visual recordings connected with security.</li>\n        </ul>\n        <p>\n        Information about transactions. If you make a financial transaction through our Service or provide payment details (including payment card details), we collect information about the purchase or\n        transaction. This includes payment information, billing information, records of services provided, and contact details.\n        </p>\n\n        <p>\n        Information we collect through automatic data collection technologies. We may collect data regarding your use of the Sites through the use of cookies, web beacons, and other\n        automatically collected information. This data may include your IP address; date and time you access the Site and the pages and content you access during your visit; websites that you link to or from; emails\n        from us that you open and the links you click on within those emails. Cookies are small identifiers sent from a web server that are stored on your device for the purpose of identifying your browser or storing\n        information or settings in your browser. Cookies and similar technologies may also be used to personalize your visit by storing your preferences or displaying content based upon what you have viewed on the Sites\n        and other websites. We may use these and similar technologies on the Site and other websites and mobile applications.\n        </p>\n\n    <p>\n        You may choose to use mobile applications that we make available. Those applications may collect location-based information. In addition, when you use an access card or other access credentials\n        to access our locations, we may be able to detect your location. This may be considered geolocation tracking by some regulators.\n    </p>\n\n    <p>\n        Other parties may collect personally identifiable information about your online activities over time and across third-party websites when you use our website or\n        services. We do not respond to \u201Cdo not track\u201D signals or other mechanisms that provide consumers the ability to exercise choice regarding the collection of personally identifiable\n        information about an individual consumer\u2019s online activities over time and across third-party websites or online services.\n    </p>\n\n    <p>\n        Information from third party sources. Advertisers, application providers, and other third parties provide us information in connection with tools we offer and through tools they\n        use to collect information about you when you use our Services. The information they collect may be associated with your personal information or they may collect information about your online\n        activities over time. They may use this information to provide you with interest-based advertising or other targeted content.\n    <p>"
  }, {
    type: 'two_column_table',
    items: [{
      title: "How we use the information we gather",
      text: "\n                <p>We may use data we collect for a variety of purposes, including the following:</p><ul>\n                <li>To operate our business and provide our Services to you, which includes managing and controlling access to locations.</li>\n                <li>To support events and meetings occurring at our locations.</li>  \n                <li>To maintain, analyze, customize, measure and improve our Sites and Services.</li>\n                <li>To provide customer support.</li>\n                <li>To measure interest in Sessions\u2019 Services, develop new products and Services, and ensure internal quality control.</li>\n                <li>To verify your identity.</li>\n                <li>To tailor and target content, advertisements, and offers for customers.</li>\n                <li>To notify you about and to conduct contests, sweepstakes, rewards, and other promotions. </li>\n                <li>To monitor and enforce our Terms of Use or similar terms.</li>\n                <li>To comply with law and satisfy our regulatory compliance obligations.</li>\n                <li>To detect and prevent fraud and other prohibited, illicit or illegal activity.</li> \n                <li>For other purposes permitted by law or to which you consent.</li>\n                </ul>"
    }, {
      title: "How we share personal information",
      text: "\n                <p>We may share your information with third parties in order to support and provide our Services. For example we may share your information: </p>\n                <ul>\n                <li>With third party service providers that we have engaged to help deliver our Services and products to you, including co-working space management vendors, event managers, and payment processing providers. We may \n                share aggregated or anonymized data with third parties for our or their purposes.</li>\n                <li>With advertisers on our Site. Likewise, we may receive information from affiliates, promotional partners, and event organizers to offer you special items, services, or invite you to events which we think you may be interested in.</li>  \n                <li>With event organizers or others who host events in our locations, including name and email address. </li>\n                <li>With owners, landlords, or property managers of buildings that we lease. For example, we may share such information in some cases as part of enhanced security measures to monitor and control building access.</li>\n                <li>With corporate affiliates including any of our parent companies, subsidiaries, joint ventures, or other companies under common control with us.</li>\n                <li>With regulators, law enforcement, governmental authorities, as requested or required.</li>\n                <li>With auditors, legal counsel and other third parties in order to comply with our obligation or protect our interests, property or legal rights, or those of our customers or other third parties.</li>\n                <li>With companies or other entities in the course of a corporate sale, merger, reorganization, sale of assets, dissolution, or similar event. </li>\n                <li>To the extent permitted by law, when required by law, in connection with a court order, or other government or law enforcement authority or regulatory agency, or whenever we believe that disclosing such information is necessary or advisable, \n                for example, to protect the rights, property, interests, or safety of you, ourselves or others.</li>\n                </ul>"
    }]
  }, {
    type: 'three_column_table',
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
    type: 'text_editor',
    text: "<h6>Effective Date of Current Policy: June 17, 2022</h6><br/><h1>Website terms</h1>"
  }],
  "personal-information": [{
    type: "terms_menu",
    items: privacyMenu
  }, {
    type: 'text_editor',
    text: "<h6>Effective Date of Current Policy: June 17, 2022</h6><br/><h1>Website terms</h1>"
  }],
  "accessibility": [{
    type: "terms_menu",
    items: privacyMenu
  }, {
    type: 'text_editor',
    text: "<h6>Effective Date of Current Policy: June 17, 2022</h6><br/><h1>Website terms</h1>"
  }],
  "data-access-request": [{
    type: "terms_menu",
    items: privacyMenu
  }, {
    type: 'text_editor',
    text: "<h6>Effective Date of Current Policy: June 17, 2022</h6><br/><h1>Website terms</h1>"
  }]
};

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

var style = {"modal":"_FlLoX","dialogBoxOverlayWrap":"_3aSJc","dialogBoxOverlay":"_3TOQ3","dialogOpen":"_1s7wk","dialogRemove":"_3uL-T","dialogClose":"_2ZD7R","extraClass":"_1uRSH","newsletterDialog":"_T5eUn","closeIcon":"_1RTem","closeText":"_3K3rt","dialogContent":"_2h9zE","col":"_2Lm3M"};

var ModalBase = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ModalBase, _React$Component);
  function ModalBase(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.el = document.createElement('div');
    _this.el.className = props.className || style.modal;
    return _this;
  }
  var _proto = ModalBase.prototype;
  _proto.componentDidMount = function componentDidMount() {
    document.body.appendChild(this.el);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    document.body.removeChild(this.el);
  };
  _proto.render = function render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  };
  return ModalBase;
}(React__default.Component);

var NormalLink = function NormalLink(_ref) {
  var _ref$children = _ref.children,
    children = _ref$children === void 0 ? '' : _ref$children,
    _ref$link = _ref.link,
    link = _ref$link === void 0 ? '' : _ref$link,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$download = _ref.download,
    download = _ref$download === void 0 ? false : _ref$download,
    _ref$target = _ref.target,
    target = _ref$target === void 0 ? '_self' : _ref$target;
  var mailtoCondt = link.indexOf('mailto:') !== -1;
  var telCondt = link.indexOf('tel:') !== -1;
  var httpCondt = link.indexOf('http') !== -1;
  if (disabled) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: className + " disabledLink"
    }, children);
  }
  if (download === true) {
    return /*#__PURE__*/React__default.createElement("a", {
      className: "" + className,
      href: link,
      onClick: onClick,
      download: true
    }, children);
  }
  if (httpCondt) {
    return /*#__PURE__*/React__default.createElement("a", {
      className: "" + className,
      href: link,
      target: "_blank",
      rel: "noreferrer",
      onClick: onClick
    }, children);
  }
  if (mailtoCondt || telCondt) {
    return /*#__PURE__*/React__default.createElement("a", {
      className: "" + className,
      href: link,
      onClick: onClick
    }, children);
  }
  if (link) {
    return /*#__PURE__*/React__default.createElement("a", {
      className: "" + className,
      href: link,
      target: target,
      onClick: onClick
    }, children);
  }
  return /*#__PURE__*/React__default.createElement("a", {
    className: "" + className,
    onClick: onClick,
    href: false
  }, children);
};

var NormalLink$1 = {
    __proto__: null,
    'default': NormalLink
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
        closeClass: " " + style.dialogRemove
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
        openClass: " " + style.dialogOpen
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
      className = _this$props$className === void 0 ? '' : _this$props$className,
      _this$props$content = _this$props.content,
      content = _this$props$content === void 0 ? false : _this$props$content,
      _this$props$buttons = _this$props.buttons,
      buttons = _this$props$buttons === void 0 ? false : _this$props$buttons,
      _this$props$showClose = _this$props.showClose,
      showClose = _this$props$showClose === void 0 ? true : _this$props$showClose,
      children = _this$props.children,
      _this$props$extraClas = _this$props.extraClass,
      extraClass = _this$props$extraClas === void 0 ? false : _this$props$extraClas;
    var _this$state = this.state,
      openClass = _this$state.openClass,
      closeClass = _this$state.closeClass;
    return /*#__PURE__*/React__default.createElement(ModalBase, {
      className: "" + style.modal
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "" + style.dialogBoxOverlayWrap + openClass + closeClass
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "" + style.dialogBoxOverlay
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style.dialogContent + " " + className
    }, showClose === true && /*#__PURE__*/React__default.createElement(NormalLink, {
      className: extraClass === true ? style.extraClass : style.dialogClose,
      onClick: this.onCloseHandler
    }, /*#__PURE__*/React__default.createElement("span", {
      className: style.closeIcon
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fas fa-chevron-left"
    })), /*#__PURE__*/React__default.createElement("span", {
      className: style.closeText
    }, "Close")), content && content(this.onCloseHandler), children, buttons && /*#__PURE__*/React__default.createElement("div", {
      className: style.dialogButtons
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

var style$1 = {"spinner":"_ZnWHX","spinnerBlade":"_11W5_","spinner-fade":"_2gvm1"};

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
    color = _ref$color === void 0 ? '#8C8C8C' : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'small' : _ref$size;
  return /*#__PURE__*/React__default.createElement("div", {
    className: style$1.spinner,
    style: getSize(size)
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$1.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$1.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$1.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$1.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$1.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$1.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$1.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$1.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$1.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$1.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$1.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$1.spinnerBlade,
    style: {
      backgroundColor: color
    }
  }));
};

var style$2 = {"button":"_gzwD8","banner_btn":"_2x0kL","white_btn":"_1A1QE","transparent":"_2khMA","block_btn":"_CLUxw","download_icon":"_2IABT","blue_button":"_2TXwS","header_blue_btn":"_2wW0x","form_button":"_rsD-D","rectButton":"_KOoYh","icon":"_2kafr","active":"_1suDG","fetching":"_DVmKd","buttonDisabled":"_2r2_A","formGroup":"_oWmEg","hasError":"_3r3ON","textbox":"_geN3N","helpBlock":"_39cIu","controlLabel":"_xVPu0","inputIcon":"_3JwnL","inputWrap":"_OMnMu","floatingDateRange":"_IWrXx","dateRangeInput":"_2SzDJ","dateRageClear":"_1lEH-","dateRageDone":"_1-Be8","field":"_3sDPD","multipleDropdown":"_30F_D","placeholder":"_EEO1n","ddoptionsOpen":"_HlbHQ","ddoptions":"_3co32","ddoptionsList":"_3RK5Y","selectedOption":"_2aG6p","ddoption":"_2lers","ddoptionLabel":"_MSjXa","inputCheckbox":"_3Qw5m","checkboxInput":"_3bycZ","inputCheckboxLabel":"_RxBHY","checkboxSquare":"_2plP-","checkboxCenter":"_3qnmW","checkboxLabel":"_3vHpH","selectAll":"_2-uJX","dropdownArrow":"_3EZqT","selectBox":"_yPXuA","dropdownIcon":"_3rGEJ","dropdown":"_3_IQn","uploadArea":"_2vo2y","uploadButtonOuter":"_1lsMR","errors":"_3HeKT","innerErrors":"_2AJdP","fileInput":"_3lAW8"};

var Button = function Button(props) {
  var _props$color = props.color,
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
    target = _props$target === void 0 ? '_self' : _props$target,
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
    _props$filterSearchIc = props.filterSearchIcon,
    filterSearchIcon = _props$filterSearchIc === void 0 ? false : _props$filterSearchIc,
    _props$buttonType = props.buttonType,
    buttonType = _props$buttonType === void 0 ? false : _props$buttonType;
  var btnTypes = {
    'header_blue_btn': style$2.header_blue_btn,
    'block_btn': style$2.block_btn,
    'banner_btn': style$2.banner_btn,
    'form_button': style$2.form_button,
    'white_btn': style$2.white_btn,
    'transparent_btn': style$2.transparent
  };
  className = lodash.get(btnTypes, buttonType) + ' ' + className;
  if (filterSearchIcon) {
    return /*#__PURE__*/React__default.createElement("button", {
      type: "submit",
      className: style$2.icon + " " + style$2.search + " " + style$2.inputIcon
    });
  }
  if (svgIcon) {
    return /*#__PURE__*/React__default.createElement("a", {
      className: "" + style$2.button + (className ? " " + className : ""),
      onClick: onClick,
      href: false
    }, /*#__PURE__*/React__default.createElement("span", {
      className: style$2.download_icon
    }, /*#__PURE__*/React__default.createElement("img", {
      src: svgIcon,
      alt: "icon"
    })), /*#__PURE__*/React__default.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: label
      }
    }));
  }
  if (fetching === true) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "" + style$2.button + (className ? " " + className : "")
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$2.fetching
    }, /*#__PURE__*/React__default.createElement(Spinner, {
      color: color
    })), /*#__PURE__*/React__default.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: label
      }
    }));
  }
  if (disabled === true) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "" + style$2.button + (className ? " " + className : "") + " " + style$2.buttonDisabled
    }, /*#__PURE__*/React__default.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: label
      }
    }), rectBtn !== false && /*#__PURE__*/React__default.createElement("span", {
      className: rectBtn
    }));
  }
  if (submit === true) {
    return /*#__PURE__*/React__default.createElement("button", {
      type: "submit",
      className: "" + style$2.button + (className ? " " + className : "")
    }, /*#__PURE__*/React__default.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: label
      }
    }), rectBtn !== false && /*#__PURE__*/React__default.createElement("span", {
      className: rectBtn
    }));
  }
  if (onClick) {
    return /*#__PURE__*/React__default.createElement("a", {
      className: "" + style$2.button + (className ? " " + className : ""),
      onClick: onClick,
      href: false
    }, /*#__PURE__*/React__default.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: label
      }
    }), rectBtn !== false && /*#__PURE__*/React__default.createElement("span", {
      className: rectBtn
    }));
  }
  if (!link && !onClick) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "" + style$2.button + (className ? " " + className : "")
    }, /*#__PURE__*/React__default.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: label
      }
    }), rectBtn !== false && /*#__PURE__*/React__default.createElement("span", {
      className: rectBtn
    }));
  }
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(NormalLink, {
    link: link,
    className: "" + style$2.button + (className ? " " + className : ""),
    onClick: onClick,
    target: target
  }, /*#__PURE__*/React__default.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: label
    }
  }), rectBtn !== false && /*#__PURE__*/React__default.createElement("span", {
    className: rectBtn
  })));
};

var Label = function Label(_ref) {
  var text = _ref.text,
    required = _ref.required,
    _ref$focus = _ref.focus,
    focus = _ref$focus === void 0 ? false : _ref$focus;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "" + style$2.controlLabel + (focus === true ? " " + style$2.focus : "")
  }, /*#__PURE__*/React__default.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: text
    }
  }), required && /*#__PURE__*/React__default.createElement("span", {
    className: style$2.required
  }, "*"));
};

var Error = function Error(_ref) {
  var _ref$meta = _ref.meta,
    error = _ref$meta.error,
    touched = _ref$meta.touched,
    _ref$servererror = _ref.servererror,
    servererror = _ref$servererror === void 0 ? [] : _ref$servererror;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, touched === true && typeof error === "string" && /*#__PURE__*/React__default.createElement("p", {
    className: style$2.helpBlock,
    dangerouslySetInnerHTML: {
      __html: error
    }
  }), touched === true && !error && servererror.length > 0 && /*#__PURE__*/React__default.createElement("p", {
    className: style$2.helpBlock,
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
  var _useState = React.useState(false),
    focus = _useState[0],
    setFocus = _useState[1];
  var _useState2 = React.useState(lodash.get(input, 'value', '').toString() ? true : false),
    valueEntered = _useState2[0],
    setValueEntered = _useState2[1];
  React.useEffect(function () {
    setValueEntered(lodash.get(input, 'value', '').toString() ? true : false);
  }, [lodash.get(input, 'value')]);
  var onFocusHandler = function onFocusHandler() {
    setFocus(true);
  };
  var onBlurHandler = function onBlurHandler() {
    setFocus(false);
  };
  var getInput = function getInput() {
    if (inputType === "textarea") {
      return /*#__PURE__*/React__default.createElement("textarea", _extends({}, input, other, {
        className: style$2.textbox,
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
      className: style$2.textbox,
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
    className: "" + style$2.formGroup + (touched && (error || serverError) ? " " + style$2.hasError : '')
  }, label !== false && /*#__PURE__*/React__default.createElement(Label, {
    text: label,
    required: required,
    focus: focus || valueEntered ? true : false
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "" + style$2.inputWrap
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
    _props$options = props.options,
    options = _props$options === void 0 ? {} : _props$options,
    input = props.input,
    _props$meta = props.meta,
    error = _props$meta.error,
    touched = _props$meta.touched,
    _props$serverError = props.serverError,
    serverError = _props$serverError === void 0 ? "" : _props$serverError,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? true : _props$placeholder,
    _props$icon = props.icon,
    icon = _props$icon === void 0 ? true : _props$icon,
    _props$defaultOption = props.defaultOption,
    defaultOption = _props$defaultOption === void 0 ? false : _props$defaultOption,
    onDropdownChange = props.onDropdownChange,
    prompt = props.prompt;
  var getPrompt = function getPrompt() {
    if (placeholder === false) {
      return defaultOption || lodash.get(Object.values(options), "[0]", "");
    }
    return prompt || "Please select...";
  };
  var _useState = React.useState(getPrompt()),
    sprompt = _useState[0];
  var _useState2 = React.useState(lodash.get(options, input.value) || ""),
    valueEntered = _useState2[0],
    setValueEntered = _useState2[1];
  var onChangeHandler = function onChangeHandler(event) {
    input.onChange(event);
    if (onDropdownChange) {
      onDropdownChange(event.target.value);
    }
  };
  var setDefaultValue = function setDefaultValue() {
    var onChange = input.onChange,
      value = input.value;
    var labels = lodash.get(Object.values(options), "[0]", "");
    var selectedValue = lodash.get(options, value) || "";
    if (placeholder === false && selectedValue === "" && labels.length) {
      onChange(defaultOption || lodash.get(Object.keys(options), "[0]"));
    }
  };
  React.useEffect(function () {
    setDefaultValue();
  }, []);
  React.useEffect(function () {
    setValueEntered(lodash.get(options, lodash.get(input, 'value')) || "");
    setDefaultValue();
  }, [lodash.get(input, 'value'), options]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: style$2.formGroup + " " + style$2.dropdown + (touched && (error || serverError) ? " " + style$2.hasError : "")
  }, label !== false && /*#__PURE__*/React__default.createElement(Label, {
    text: label,
    required: required,
    focus: true
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$2.textbox
  }, /*#__PURE__*/React__default.createElement("span", null, valueEntered || getPrompt()), icon === true && /*#__PURE__*/React__default.createElement("span", {
    className: style$2.dropdownIcon
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fas fa-chevron-down"
  }))), /*#__PURE__*/React__default.createElement("select", _extends({}, input, {
    className: style$2.selectBox,
    onChange: onChangeHandler
  }), placeholder !== false && /*#__PURE__*/React__default.createElement("option", {
    value: ""
  }, sprompt), options && Object.entries(options).map(function (_ref) {
    var key = _ref[0],
      value = _ref[1];
    return /*#__PURE__*/React__default.createElement("option", {
      value: key,
      key: key
    }, value);
  })), /*#__PURE__*/React__default.createElement(Error, props));
};

var style$3 = {"form":"_klTS5","form_title":"_yRMDI","form_wrap":"_3EfqO","form_block":"_38mFE","text":"_1hfH4"};

var ContactForm = function ContactForm(_ref) {
  var contact = _ref.contact,
    _ref$showText = _ref.showText,
    showText = _ref$showText === void 0 ? false : _ref$showText;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: style$3.form_title
  }, contact.form_title), showText && /*#__PURE__*/React__default.createElement("div", {
    className: style$3.text,
    dangerouslySetInnerHTML: {
      __html: contact.form_text
    }
  }), /*#__PURE__*/React__default.createElement(reactFinalForm.Form, {
    onSubmit: function onSubmit(data) {
      return console.log(data);
    },
    render: function render(_ref2) {
      var handleSubmit = _ref2.handleSubmit;
      return /*#__PURE__*/React__default.createElement("form", {
        name: "booking_contact",
        className: style$3.form,
        onSubmit: handleSubmit
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$3.form_wrap
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$3.form_block
      }, /*#__PURE__*/React__default.createElement(reactFinalForm.Field, {
        name: "f_name",
        component: Input,
        placeholder: "First Name*",
        validate: composeValidators(reduxFormValidators.required())
      })), /*#__PURE__*/React__default.createElement("div", {
        className: style$3.form_block
      }, /*#__PURE__*/React__default.createElement(reactFinalForm.Field, {
        name: "l_name",
        component: Input,
        placeholder: "Last Name*",
        validate: composeValidators(reduxFormValidators.required())
      }))), /*#__PURE__*/React__default.createElement(reactFinalForm.Field, {
        name: "email",
        component: Input,
        placeholder: "Email Addrress*",
        validate: composeValidators(reduxFormValidators.required(), reduxFormValidators.email())
      }), /*#__PURE__*/React__default.createElement(reactFinalForm.Field, {
        name: "phone",
        component: Input,
        placeholder: "Phone Number"
      }), /*#__PURE__*/React__default.createElement("div", {
        className: style$3.form_wrap
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$3.form_block
      }, /*#__PURE__*/React__default.createElement(reactFinalForm.Field, {
        name: "name",
        component: Input,
        placeholder: "Company Name"
      })), /*#__PURE__*/React__default.createElement("div", {
        className: style$3.form_block
      }, /*#__PURE__*/React__default.createElement(reactFinalForm.Field, {
        name: "size",
        component: Dropdown,
        prompt: "Company Size",
        options: ['1-5', '5-10']
      }))), /*#__PURE__*/React__default.createElement(reactFinalForm.Field, {
        name: "interest",
        component: Dropdown,
        prompt: "Interested in ..."
      }), /*#__PURE__*/React__default.createElement(reactFinalForm.Field, {
        name: "message",
        type: "textarea",
        rows: 2,
        component: Input,
        placeholder: "Additional details"
      }), /*#__PURE__*/React__default.createElement(Button, {
        submit: true,
        label: contact.button_label,
        buttonType: "form_button"
      }));
    }
  }));
};

var EnquireModal = function EnquireModal(_ref) {
  var onClose = _ref.onClose;
  return /*#__PURE__*/React__default.createElement(React.Suspense, {
    fallback: /*#__PURE__*/React__default.createElement(React__default.Fragment, null)
  }, /*#__PURE__*/React__default.createElement(DialogBox, {
    className: "enquireForm",
    onClose: onClose,
    extraClass: true
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "enquire"
  }, /*#__PURE__*/React__default.createElement(ContactForm, {
    contact: lodash.get(data, 'contact', {}),
    showText: true
  }))));
};

var style$4 = {"header":"_3zojv","header_wrap":"_1yRis","header_logo":"_21gM4","footer_logo":"_3uHp_","header_menu_wrap":"_16wJL","header_menu":"_2oPxi","header_btn":"_2ApIx","footer_wrap":"_2yola","footer_col":"_2_qcX","footer_email":"_1OE6x","footer_link_item":"_gG0xP","footer_title":"_1jbk4","footer_bottom":"_3qImR","footer_left":"_ShpNL","f_button":"_3CSjs","socials":"_8-1pd","social_padd":"_qvK74","social_logo":"_2aL-2","social_icon":"_nIWa1"};

var NormalLink$2 = React.lazy(function () {
  return Promise.resolve().then(function () { return NormalLink$1; });
});
var Header = function Header(_ref) {
  var setOpenForm = _ref.setOpenForm,
    logo = _ref.logo;
  return /*#__PURE__*/React__default.createElement("div", {
    className: style$4.header
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "c"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$4.header_wrap
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$4.header_logo
  }, /*#__PURE__*/React__default.createElement(React.Suspense, {
    fallback: /*#__PURE__*/React__default.createElement(React__default.Fragment, null)
  }, /*#__PURE__*/React__default.createElement(NormalLink$2, {
    link: "/"
  }, /*#__PURE__*/React__default.createElement("img", {
    src: logo,
    alt: "Knotel"
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: style$4.header_menu_wrap
  }, /*#__PURE__*/React__default.createElement(NormalLink$2, {
    className: style$4.header_menu
  }, "Office"), /*#__PURE__*/React__default.createElement(NormalLink$2, {
    className: style$4.header_menu
  }, "Workclub"), /*#__PURE__*/React__default.createElement("div", {
    className: style$4.header_btn
  }, /*#__PURE__*/React__default.createElement(Button, {
    buttonType: "header_blue_btn",
    onClick: function onClick() {
      setOpenForm('enquire-form');
    },
    label: "Enquire"
  }))))));
};

var OutOfView = function OutOfView(_ref) {
  var className = _ref.className,
    children = _ref.children,
    onOutCallback = _ref.onOutCallback,
    _ref$rootMargin = _ref.rootMargin,
    rootMargin = _ref$rootMargin === void 0 ? "0px" : _ref$rootMargin;
  var ref = React.useRef(null);
  React.useEffect(function () {
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
    className: className
  }, children);
};

var generateUrl = function generateUrl(src, size) {
  if (lodash.isObject(src)) {
    var image_url = src;
    var name = src.name,
      extension = src.extension,
      updated_at = src.updated_at;
    var w = lodash.get(size.split('x'), "[0]", 0);
    var h = lodash.get(size.split('x'), "[1]", 0);
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

var style$5 = {"bsz":"_g3ab-","bgImage":"_1ecyS","spinner":"_2KqV_","loading":"_3BQ0x","fa":"_3FpUc","sizer":"_3Cyx8"};

var BrokenImage = function BrokenImage(_ref) {
  var className = _ref.className,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? "fa-image" : _ref$icon,
    sizer = _ref.sizer;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, sizer === true && /*#__PURE__*/React__default.createElement("div", {
    className: style$5.sizer
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$5.bsz
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "" + style$5.bgImage + (className ? " " + className : "")
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$5.fa
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa-solid " + icon
  })))));
};
var NormalImage = function NormalImage(_ref2) {
  var src = _ref2.src,
    className = _ref2.className,
    alt = _ref2.alt;
  return /*#__PURE__*/React__default.createElement("div", {
    className: style$5.bsz
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "" + style$5.bgImage + (className ? " " + className : ""),
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
  var _useState = React.useState(0),
    loaded = _useState[0],
    setLoaded = _useState[1];
  var _useState2 = React.useState([0, 0]),
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
    className: style$5.sizer,
    style: {
      paddingTop: (dimesion[0] > 0 && dimesion[1] > 0 ? dimesion[1] * 100 / dimesion[0] : 50) + "%"
    }
  }), /*#__PURE__*/React__default.createElement(OutOfView, {
    className: style$5.bsz,
    onOutCallback: onOutHandler
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "" + style$5.bgImage + (className ? " " + className : "") + (loaded === 0 ? " " + style$5.loading : ""),
    style: {
      backgroundImage: loaded === 1 ? "url(\"" + encodeURI(src) + "\")" : "none"
    }
  }, loaded === 1 && /*#__PURE__*/React__default.createElement("img", {
    src: src,
    alt: alt
  }), loaded === 0 && /*#__PURE__*/React__default.createElement("div", {
    className: style$5.spinner
  }, /*#__PURE__*/React__default.createElement(Spinner, {
    color: "#fff"
  })), loaded === 2 && /*#__PURE__*/React__default.createElement("div", {
    className: style$5.fa
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
  if (lodash.isEmpty(src)) {
    if (fallback === true) {
      return /*#__PURE__*/React__default.createElement(BrokenImage, {
        sizer: retainAspectRatio
      });
    }
    return null;
  }

  if (lodash.get(src, "type", "") === "image" && (size === false || /{\d+}x{\d+}/g.test(size))) {
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

var style$6 = {"newsletter":"_38QmU","newsletterDialog":"_1N_IF","left":"_2Jm_1","right":"_2ixUx","text":"_3bqvA","form":"_ryA8R","form_title":"_oQUns","form_wrap":"_24J4B","form_block":"_3-czc","sizer":"_21RVb","item_bg":"_2Q6Pp","item_img":"_1Qdv1","item":"_3dDPZ"};

var NewsLetter = function NewsLetter(_ref) {
  var onClose = _ref.onClose,
    content = _ref.content;
  return /*#__PURE__*/React__default.createElement(React.Suspense, {
    fallback: /*#__PURE__*/React__default.createElement(React__default.Fragment, null)
  }, /*#__PURE__*/React__default.createElement(DialogBox, {
    className: style$6.newsletterDialog,
    onClose: onClose
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "" + style$6.newsletter
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$6.left
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_title"
  }, content.title), /*#__PURE__*/React__default.createElement("div", {
    className: style$6.text,
    dangerouslySetInnerHTML: {
      __html: content.text
    }
  }), /*#__PURE__*/React__default.createElement(reactFinalForm.Form, {
    onSubmit: function onSubmit(data) {
      return console.log(data);
    },
    render: function render(_ref2) {
      var handleSubmit = _ref2.handleSubmit;
      return /*#__PURE__*/React__default.createElement("form", {
        name: "booking_contact",
        className: style$6.form,
        onSubmit: handleSubmit
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$6.form_wrap
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$6.form_block
      }, /*#__PURE__*/React__default.createElement(reactFinalForm.Field, {
        name: "f_name",
        component: Input,
        placeholder: "First Name*",
        validate: composeValidators(reduxFormValidators.required())
      })), /*#__PURE__*/React__default.createElement("div", {
        className: style$6.form_block
      }, /*#__PURE__*/React__default.createElement(reactFinalForm.Field, {
        name: "l_name",
        component: Input,
        placeholder: "Last Name*",
        validate: composeValidators(reduxFormValidators.required())
      }))), /*#__PURE__*/React__default.createElement(reactFinalForm.Field, {
        name: "email",
        component: Input,
        placeholder: "Email Addrress*",
        validate: composeValidators(reduxFormValidators.required(), reduxFormValidators.email())
      }), /*#__PURE__*/React__default.createElement(Button, {
        submit: true,
        buttonType: "form_button",
        label: content.button_label
      }));
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: style$6.right
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$6.item_bg
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$6.sizer
  }), /*#__PURE__*/React__default.createElement(Media, {
    className: style$6.item_img,
    src: content.image,
    size: "609x396px"
  }))))));
};

var NormalLink$3 = React.lazy(function () {
  return Promise.resolve().then(function () { return NormalLink$1; });
});
var Footer = function Footer(_ref) {
  var footerProps = _ref.footerProps;
  var footerLinks = footerProps.footerLinks,
    socials = footerProps.socials,
    subscribeLabel = footerProps.subscribeLabel,
    contactEmail = footerProps.contactEmail,
    footerLeftText = footerProps.footerLeftText,
    footerRightText = footerProps.footerRightText;
  var _useState = React.useState(false),
    open = _useState[0],
    setOpen = _useState[1];
  return /*#__PURE__*/React__default.createElement("div", {
    className: "c has_border"
  }, /*#__PURE__*/React__default.createElement(React.Suspense, {
    fallback: /*#__PURE__*/React__default.createElement(React__default.Fragment, null)
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$4.footer_wrap
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$4.footer_left
  }, /*#__PURE__*/React__default.createElement(NormalLink$3, {
    className: style$4.footer_logo
  }, /*#__PURE__*/React__default.createElement("img", {
    src: footerProps.logo,
    alt: "knotel"
  })), /*#__PURE__*/React__default.createElement(NormalLink$3, {
    className: style$4.footer_email
  }, contactEmail), /*#__PURE__*/React__default.createElement("div", {
    className: style$4.f_button
  }, /*#__PURE__*/React__default.createElement(Button, {
    onClick: function onClick() {
      setOpen(true);
    },
    label: subscribeLabel
  })), open === true && /*#__PURE__*/React__default.createElement(NewsLetter, {
    content: lodash.get(data, 'news_letter', {}),
    onClose: function onClose() {
      return setOpen(false);
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$4.socials
  }, socials && socials.length > 0 && socials.map(function (item, i) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: style$4.social_padd,
      key: "f_s_" + i
    }, /*#__PURE__*/React__default.createElement(NormalLink$3, {
      link: item.link,
      className: style$4.social_logo
    }, /*#__PURE__*/React__default.createElement("span", {
      className: style$4.social_icon
    }, /*#__PURE__*/React__default.createElement("i", {
      className: item.icon
    }))));
  }))), footerLinks && footerLinks.length > 0 && footerLinks.map(function (item, i) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: style$4.footer_col,
      key: "f_title_" + i
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$4.footer_title
    }, item.title), item.links.map(function (linkItem, j) {
      return /*#__PURE__*/React__default.createElement("div", {
        className: style$4.footer_link_item,
        key: "f_title_" + i + "_" + j
      }, /*#__PURE__*/React__default.createElement(NormalLink$3, {
        link: linkItem.link
      }, linkItem.label));
    }));
  })), /*#__PURE__*/React__default.createElement("div", {
    className: style$4.footer_bottom
  }, /*#__PURE__*/React__default.createElement("div", null, footerLeftText), /*#__PURE__*/React__default.createElement("div", null, footerRightText))));
};

var AppContext = React.createContext({
  height: null,
  winHeight: null,
  winWidth: null
});
var AppProvider = function AppProvider(_ref) {
  var children = _ref.children;
  var _useState = React.useState({
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
  var children = _ref.children,
    headerProps = _ref.headerProps,
    footerProps = _ref.footerProps;
  var _useState = React.useState(false),
    openForm = _useState[0],
    _setOpenForm = _useState[1];
  var _useContext = React.useContext(AppContext),
    setContext = _useContext.setContext;
  var _useState2 = React.useState({
      height: 0,
      winWidth: window.innerWidth,
      winHeight: window.innerHeight
    }),
    dimesions = _useState2[0],
    setDimensions = _useState2[1];
  React.useEffect(function () {
    function updateDimensions() {
      var _dimensions = {
        height: $("." + style$4.header).outerHeight(),
        winWidth: window.innerWidth,
        winHeight: $(window).height()
      };
      console.log('dimensions changing --->', _dimensions);
      setDimensions(_dimensions);
      setContext(_dimensions);
    }
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    return function () {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Header, {
    logo: headerProps.logo,
    setOpenForm: function setOpenForm(e) {
      _setOpenForm(e);
    },
    width: dimesions.winWidth,
    offset: dimesions.height
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "viewport"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "content",
    style: {
      paddingTop: dimesions.height
    }
  }, children)), /*#__PURE__*/React__default.createElement(Footer, {
    footerProps: footerProps,
    setOpenForm: function setOpenForm(e) {
      _setOpenForm(e);
    },
    width: dimesions.winWidth
  }), openForm === 'enquire-form' && /*#__PURE__*/React__default.createElement(EnquireModal, {
    onClose: function onClose() {
      return _setOpenForm(false);
    }
  }));
};

var css = {"center":"_2xO1u"};

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

var style$7 = {"lazyLoad":"_2JH08","enter":"_2K3Rd"};

var LazyLoad = function LazyLoad(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$lazyLoadClass = _ref.lazyLoadClass,
    lazyLoadClass = _ref$lazyLoadClass === void 0 ? style$7.lazyLoad : _ref$lazyLoadClass,
    _ref$animatedClass = _ref.animatedClass,
    animatedClass = _ref$animatedClass === void 0 ? style$7.enter : _ref$animatedClass,
    children = _ref.children,
    _ref$rootMargin = _ref.rootMargin,
    rootMargin = _ref$rootMargin === void 0 ? "-10%" : _ref$rootMargin;
  var _useState = React.useState(""),
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
    rootMargin: rootMargin,
    onOutCallback: onOutHandler
  }, children);
};

var style$8 = {"banner_hero":"_3bjP3","animated":"_3Lzpk","banner_hero_after":"_4_XDE","banner":"_dWU-_","banner_logo":"_drjvZ","mobile":"_2dXjD","center":"_vwegV","logo":"_28aNs","title":"_1KSlp","button":"_gxxTo","link":"_375Fu","arrow":"_3S4IR","text":"_25X1d","left":"_3FkuY","banner_image":"_3kkcU","desktop":"_pRDL_","bannerI_image":"_3P09g","banner_center":"_2hnNc"};

var BannerHero = function BannerHero(_ref) {
  var title = _ref.title,
    title_image = _ref.title_image,
    desktop_image = _ref.desktop_image,
    button_label = _ref.button_label,
    button_url = _ref.button_url;
  var _useContext = React.useContext(AppContext),
    _useContext$appContex = _useContext.appContext,
    winHeight = _useContext$appContex.winHeight,
    height = _useContext$appContex.height;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "c"
  }, /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: "" + style$8.banner_hero,
    animatedClass: style$8.animated
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$8.banner,
    style: {
      minHeight: winHeight - height
    }
  }, /*#__PURE__*/React__default.createElement(Media, {
    className: style$8.banner_image + " fixed",
    src: desktop_image,
    size: "2560x1124"
  }), /*#__PURE__*/React__default.createElement(Center, {
    className: style$8.banner_center
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$8.center
  }, /*#__PURE__*/React__default.createElement(LazyLoad, null, /*#__PURE__*/React__default.createElement("div", {
    className: style$8.title
  }, title), /*#__PURE__*/React__default.createElement("div", {
    className: style$8.banner_logo
  }, /*#__PURE__*/React__default.createElement("img", {
    src: title_image,
    alt: "Knotel workclub",
    size: "480x140"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: style$8.button
  }, /*#__PURE__*/React__default.createElement(Button, {
    buttonType: "banner_btn",
    label: button_label,
    link: button_url
  })))))), /*#__PURE__*/React__default.createElement(LazyLoad, {
    lazyLoadClass: style$8.banner_hero_after,
    animatedClass: style$8.animated,
    rootMargin: "30%"
  })));
};

var style$9 = {"enquire_wrap":"_1zGQ7","left":"_o9tHh","right":"_2860K","text":"_2FhrC"};

var EnquireForm = function EnquireForm(_ref) {
  var title = _ref.title,
    text = _ref.text;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "c"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$9.enquire_wrap
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$9.left
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_title"
  }, title), /*#__PURE__*/React__default.createElement("div", {
    className: style$9.text,
    dangerouslySetInnerHTML: {
      __html: text
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: style$9.right
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$9.forms
  }, /*#__PURE__*/React__default.createElement(ContactForm, {
    contact: lodash.get(data, "contact", {})
  }))))));
};

var style$a = {"item":"_1HOWN","sizer":"_22Ns_","item_inner_wrap":"_1IHeu","item_content_wrap":"_VB7G6","item_bg":"_387E5","section_text":"_2s5VM","icon":"_2qLNm","text_wrap":"_3aUd7","text":"_Cf7bY","link":"_20tBd"};

var MenuSection = function MenuSection(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items;
  var chunks = lodash.chunk(items, 2);
  if (!items || items.length <= 0) {
    return null;
  }
  return /*#__PURE__*/React__default.createElement("div", {
    className: "c has_border"
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
        className: "section_item " + style$a.item,
        key: "menu_" + index
      }, /*#__PURE__*/React__default.createElement(LazyLoad, {
        className: "" + style$a.item_inner_wrap
      }, !islastRow && index % 2 === 0 && /*#__PURE__*/React__default.createElement("div", {
        className: "section_item_border_bottom"
      }), /*#__PURE__*/React__default.createElement("div", {
        className: style$a.item_content_wrap
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$a.item_bg
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$a.sizer
      }), /*#__PURE__*/React__default.createElement(Media, {
        className: style$a.item_img,
        src: item.image,
        size: "608x472px"
      })), /*#__PURE__*/React__default.createElement("div", {
        className: style$a.text_wrap
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "section_title"
      }, item.title), /*#__PURE__*/React__default.createElement("div", {
        className: style$a.section_text
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$a.icon
      }, /*#__PURE__*/React__default.createElement("i", {
        className: "fas fa-arrow-right"
      })), /*#__PURE__*/React__default.createElement("div", {
        className: style$a.text
      }, item.text))))));
    });
  })));
};

var style$b = {"greenBg":"_3BHHx","lightBlueBg":"_3czoF","section_border":"_1Ugih","block_Center":"_3jMig","text":"_25ZHg"};

var Text = function Text(_ref) {
  var text = _ref.text,
    bg_color = _ref.bg_color;
  var colorClass = {
    "green": style$b.greenBg,
    "lightblue": style$b.lightBlueBg
  };
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "c has_border"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: colorClass[bg_color] + " " + style$b.section_border
  }, /*#__PURE__*/React__default.createElement(Center, {
    className: style$b.block_Center
  }, /*#__PURE__*/React__default.createElement(LazyLoad, null, /*#__PURE__*/React__default.createElement("div", {
    className: style$b.text,
    dangerouslySetInnerHTML: {
      __html: text
    }
  }))))));
};

var style$c = {"section":"_2WH5h","left":"_1PH9r","right":"_2k85F","right_side":"_U4FqT","img_wrap":"_2AYDV","sizer":"_gEeAY","title":"_ABIQd","text":"_1FH8T","button":"_3t68Z","btn_padd":"_2_e5M"};

var TextImage = function TextImage(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items;
  if (!items || items.length <= 0) {
    return null;
  }
  return /*#__PURE__*/React__default.createElement("div", {
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
    className: "section_border_bottom"
  }), items && items.length > 0 && items.map(function (item, i) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: style$c.section + " " + (lodash.get(item, 'image_position') === 'right' ? "col_50_50 " + style$c.right_side : "col_50_50"),
      key: "text_img_" + i
    }, i + 1 !== items.length && /*#__PURE__*/React__default.createElement("div", {
      className: "section_item_border_bottom"
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "section_border_middle"
    }), /*#__PURE__*/React__default.createElement("div", {
      className: style$c.left
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$c.img_wrap
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$c.sizer
    }), /*#__PURE__*/React__default.createElement(Media, {
      src: item.image,
      size: "608x472px"
    }))), /*#__PURE__*/React__default.createElement(LazyLoad, {
      className: style$c.right
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$c.content
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$c.title
    }, item.title), /*#__PURE__*/React__default.createElement("div", {
      className: style$c.text
    }, item.text), /*#__PURE__*/React__default.createElement("div", {
      className: style$c.button
    }, /*#__PURE__*/React__default.createElement(Button, {
      className: style$c.btn_padd,
      label: item.button_label,
      link: item.button_url
    })))));
  })));
};

var style$d = {"text_wrap":"_1DC0G","title":"_3HF9M","table_text":"_3J4P8","button":"_3u18A","equal-height-JlocK":"_1bAaF"};

var TextTable = function TextTable(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$extraClass = _ref.extraClass,
    extraClass = _ref$extraClass === void 0 ? false : _ref$extraClass;
  var chunks = lodash.chunk(items, 3);
  if (!items || items.length <= 0) {
    return null;
  }
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(reactEqualHeight.EqualHeight, null, /*#__PURE__*/React__default.createElement("div", {
    className: extraClass === true ? "has_border" : "c has_border"
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
      var curIndex = index + 1;
      var islastRow = false;
      if (chunks.length === cIndex + 1) {
        islastRow = true;
      }
      return /*#__PURE__*/React__default.createElement("div", {
        className: "section_item " + style$d.text_wrap + " " + (curIndex % 3 === 0 ? " no_border_right" : "") + " " + (islastRow ? "last_row" : ""),
        key: "text_table_" + index
      }, !islastRow && index % 3 === 0 && /*#__PURE__*/React__default.createElement("div", {
        className: "section_item_border_bottom"
      }), /*#__PURE__*/React__default.createElement("div", {
        className: style$d.title
      }, /*#__PURE__*/React__default.createElement(reactEqualHeight.EqualHeightElement, {
        name: "TextTableTitle"
      }, item.title)), /*#__PURE__*/React__default.createElement(reactEqualHeight.EqualHeightElement, {
        name: "TextTableText"
      }, /*#__PURE__*/React__default.createElement(LazyLoad, null, /*#__PURE__*/React__default.createElement("div", {
        className: style$d.table_text
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "section_text"
      }, item.text)))));
    });
  })))));
};

var style$e = {"banner":"_1s3r1","border_line":"_3ZpCH","left_right_banner":"_25lWR","left":"_2W4Tu","greenBg":"_1AScY","blueBg":"_XHS2F","content_wrapper":"_GxzRR","banner_btn":"_2cLXa","btn_padd":"_2qQkZ","title":"_1ZB8S","text":"_2xdSq","right":"_3bQLq"};

var LeftRightBanner = function LeftRightBanner(_ref) {
  var title = _ref.title,
    text = _ref.text,
    image = _ref.image,
    bg_color = _ref.bg_color,
    button_label = _ref.button_label,
    button_url = _ref.button_url,
    _ref$whiteButton = _ref.whiteButton,
    whiteButton = _ref$whiteButton === void 0 ? false : _ref$whiteButton,
    _ref$border_line = _ref.border_line,
    border_line = _ref$border_line === void 0 ? false : _ref$border_line;
  var colorClass = {
    "green": style$e.greenBg,
    "darkblue": style$e.blueBg
  };
  return /*#__PURE__*/React__default.createElement("div", {
    className: "c"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: border_line === true ? style$e.banner + " " + style$e.border_line : "" + style$e.banner
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$e.left_right_banner
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$e.left + " " + colorClass[bg_color]
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$e.content_wrapper
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$e.title
  }, title), /*#__PURE__*/React__default.createElement("div", {
    className: style$e.text
  }, text), /*#__PURE__*/React__default.createElement("div", {
    className: style$e.banner_btn
  }, /*#__PURE__*/React__default.createElement(Button, {
    buttonType: whiteButton === true ? "white_btn" : "banner_btn",
    label: button_label,
    link: button_url
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: style$e.right
  }, /*#__PURE__*/React__default.createElement(Media, {
    className: style$e.banner_image,
    src: image,
    size: "920x600px"
  })))));
};

var style$f = {"banner":"_1Y2pO","content":"_DHgWI","title":"_1P-B3","text":"_1rmZv"};

var Banner = function Banner(_ref) {
  var image = _ref.image,
    title = _ref.title,
    text = _ref.text;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "c"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$f.banner
  }, /*#__PURE__*/React__default.createElement(Media, {
    src: image,
    size: "2560x1124"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$f.content
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$f.title
  }, title), /*#__PURE__*/React__default.createElement("div", {
    className: style$f.text
  }, text))));
};

var style$g = {"text_image":"_eb8C2","left":"_2ximZ","right":"_cNHir","left_side":"_KMx5u","img_wrap":"_3w9CI","sizer":"_275fu","sub_title":"_3cfuh","text":"_SYMt4","button":"_2XP7f"};

var TextImageBlock = function TextImageBlock(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items;
  if (!items || items.length <= 0) {
    return null;
  }
  return /*#__PURE__*/React__default.createElement("div", {
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
      className: "section_item " + style$g.text_image + " " + (lodash.get(item, 'image_position') === 'left' ? "col_66_33 " + style$g.left_side : "col_33_66"),
      key: "text_img_" + i
    }, i + 1 !== items.length && /*#__PURE__*/React__default.createElement("div", {
      className: "section_item_border_bottom"
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "section_border_middle"
    }), /*#__PURE__*/React__default.createElement(LazyLoad, {
      className: style$g.left
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "section_title"
    }, item.title), /*#__PURE__*/React__default.createElement("div", {
      className: style$g.sub_title
    }, item.sub_title), /*#__PURE__*/React__default.createElement("div", {
      className: style$g.text
    }, item.text), /*#__PURE__*/React__default.createElement("div", {
      className: style$g.button
    }, /*#__PURE__*/React__default.createElement(Button, {
      buttonType: "block_btn",
      label: item.button_label,
      link: item.button_url
    }))), /*#__PURE__*/React__default.createElement("div", {
      className: style$g.right
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$g.img_wrap
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$g.sizer
    }), /*#__PURE__*/React__default.createElement(Media, {
      src: item.image
    }))));
  })));
};

var style$h = {"text_wrap":"_2Y4n7","sub_title":"_3eIrc","text":"_seODo","button":"_1AQdI","item_inner_wrap":"_4_BlI"};

var TextBlock = function TextBlock(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items;
  var chunks = lodash.chunk(items, 3);
  if (!items || items.length <= 0) {
    return null;
  }
  return /*#__PURE__*/React__default.createElement(reactEqualHeight.EqualHeight, null, /*#__PURE__*/React__default.createElement("div", {
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
        className: "section_item " + style$h.text_wrap,
        key: "text_block_" + index
      }, !islastRow && index % 3 === 0 && /*#__PURE__*/React__default.createElement("div", {
        className: "section_item_border_bottom"
      }), /*#__PURE__*/React__default.createElement(reactEqualHeight.EqualHeightElement, {
        name: "TextBlock"
      }, /*#__PURE__*/React__default.createElement(LazyLoad, {
        className: "" + style$h.item_inner_wrap
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "section_title"
      }, item.title), /*#__PURE__*/React__default.createElement("div", {
        className: style$h.sub_title
      }, item.sub_title), /*#__PURE__*/React__default.createElement("div", {
        className: style$h.text
      }, item.text), /*#__PURE__*/React__default.createElement("div", {
        className: style$h.button
      }, /*#__PURE__*/React__default.createElement(Button, {
        buttonType: "block_btn",
        label: item.button_label,
        link: item.button_url
      })))));
    });
  }))));
};

var style$i = {"section":"_OV-Rt","text":"_3Z90o","sub_head":"_2nAJs"};

var TextEditor = function TextEditor(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "c"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$i.section
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$i.text,
    dangerouslySetInnerHTML: {
      __html: text
    }
  })));
};

var style$j = {"terms_section":"_1gWYl","menu_label":"_3Et8D","active":"_2OgV4"};

var TermsMenu = function TermsMenu(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items;
  var _useLocation = reactRouterDom.useLocation(),
    pathname = _useLocation.pathname;
  var selected = items.find(function (i) {
    return i.link === pathname;
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: "c has_border"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$j.terms_section
  }, items.map(function (item, i) {
    return /*#__PURE__*/React__default.createElement(NormalLink, {
      link: item.link,
      className: style$j.menu_label + " " + (lodash.get(selected, 'link') === lodash.get(item, 'link') ? " " + style$j.active : ''),
      key: "terms_menu_" + i
    }, item.label);
  })));
};

var style$k = {"item":"_1LHuy","title":"_1VAFd","text":"_sJXEy","table_text":"_22-Jk"};

var TableTwoColumn = function TableTwoColumn(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items;
  var chunks = lodash.chunk(items, 2);
  if (!items || items.length <= 0) {
    return null;
  }
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "c has_border"
  }, /*#__PURE__*/React__default.createElement(reactEqualHeight.EqualHeight, null, /*#__PURE__*/React__default.createElement(LazyLoad, {
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
  }), items.length >= 2 && /*#__PURE__*/React__default.createElement("div", {
    className: "section_border_middle_2"
  }), chunks.map(function (items, cIndex) {
    return items.map(function (item, index) {
      var islastRow = false;
      if (chunks.length === cIndex + 1) {
        islastRow = true;
      }
      return /*#__PURE__*/React__default.createElement("div", {
        className: "section_item " + style$k.item,
        key: "text_table_" + index
      }, !islastRow && index % 2 === 0 && /*#__PURE__*/React__default.createElement("div", {
        className: "section_item_border_bottom"
      }), /*#__PURE__*/React__default.createElement("div", {
        className: style$k.title
      }, /*#__PURE__*/React__default.createElement(reactEqualHeight.EqualHeightElement, {
        name: "TextTableTitle"
      }, item.title)), /*#__PURE__*/React__default.createElement(reactEqualHeight.EqualHeightElement, {
        name: "TextTableText"
      }, /*#__PURE__*/React__default.createElement(LazyLoad, null, /*#__PURE__*/React__default.createElement("div", {
        className: style$k.table_text
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$k.text,
        dangerouslySetInnerHTML: {
          __html: item.text
        }
      })))));
    });
  })))));
};

var style$l = {"head":"_3cL2z","item":"_2nFw6","sizer":"_3ylOX","item_bg":"_1SnW0","wrap":"_1jX7q","title":"_3wDP7","text":"_13aiV","link":"_2c-vA"};

var Amenities = function Amenities(_ref) {
  var heading = _ref.heading,
    _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items;
  var chunks = lodash.chunk(items, 3);
  if (!items || items.length <= 0) {
    return null;
  }
  return /*#__PURE__*/React__default.createElement("div", {
    className: "c has_border"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "section_title " + style$l.head
  }, heading), /*#__PURE__*/React__default.createElement(LazyLoad, {
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
      var curIndex = index + 1;
      var islastRow = false;
      if (chunks.length === cIndex + 1) {
        islastRow = true;
      }
      return /*#__PURE__*/React__default.createElement("div", {
        className: "section_item " + style$l.item + " " + (curIndex % 3 === 0 ? " no_border_right" : "") + " " + (islastRow ? "last_row" : ""),
        key: "amenities_" + index
      }, !islastRow && index % 3 === 0 && /*#__PURE__*/React__default.createElement("div", {
        className: "section_item_border_bottom"
      }), /*#__PURE__*/React__default.createElement("div", {
        className: style$l.wrap
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$l.item_bg
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$l.sizer
      }), /*#__PURE__*/React__default.createElement(Media, {
        className: style$l.item_img,
        src: item.image,
        size: "608x472px"
      }))), /*#__PURE__*/React__default.createElement("div", {
        className: style$l.title
      }, item.title), /*#__PURE__*/React__default.createElement("div", {
        className: style$l.text
      }, item.text), /*#__PURE__*/React__default.createElement(NormalLink, {
        className: style$l.link
      }, "Find Out More"));
    });
  })));
};

var Slider = function Slider(_ref) {
  var className = _ref.className,
    children = _ref.children,
    swiperRef = _ref.swiperRef,
    _ref$autoplay = _ref.autoplay,
    autoplay = _ref$autoplay === void 0 ? true : _ref$autoplay;
  var onOutHandler = function onOutHandler(entry, observer) {
    if (autoplay === true) {
      if (entry.isIntersecting) {
        swiperRef.current.swiper.autoplay.run();
      } else {
        swiperRef.current.swiper.autoplay.pause();
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

var style$m = {"slider":"_KDCSg","slider_head":"_1pkEq","location":"_14asc","option":"_1KLfT","prev":"_3Q5Ki","next":"_3ECmN","slider_icon":"_1CXKQ","icon":"_nL3vf","section_text":"_27R9z","sizer":"_xxuh3","item":"_1ZFBt","item_content":"_NlnY6","item_bg":"_lrBsO","text_wrap":"_1qxrr","text":"_1AaPq"};

var swiperSlideClick = function swiperSlideClick(swiper, items, action) {
  if (action === void 0) {
    action = 'next';
  }
  var nextSlide = swiper.activeIndex + 1;
  var prevSlide = swiper.activeIndex - 1;
  prevSlide = prevSlide > -1 ? prevSlide : 0;
  if (nextSlide >= items.length) {
    nextSlide = 0;
  }
  swiper.slideTo(action === "prev" ? prevSlide : nextSlide);
};

var ImageSlider = function ImageSlider(_ref) {
  var options = _ref.options,
    _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items;
  console.log(items);
  var swiperRef = React.useRef(null);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "c has_border"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$m.slider_head
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$m.location
  }, "Locations"), /*#__PURE__*/React__default.createElement("div", {
    className: style$m.options
  }, options.map(function (option, i) {
    return /*#__PURE__*/React__default.createElement(Button, {
      className: style$m.option,
      label: option,
      key: "country_" + i
    });
  }))), /*#__PURE__*/React__default.createElement(Slider, {
    swiperRef: swiperRef
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style$m.slider
  }, /*#__PURE__*/React__default.createElement(react.Swiper, {
    ref: swiperRef,
    modules: [swiper.A11y],
    spaceBetween: 16,
    slidesPerView: 3
  }, items.map(function (item, i) {
    return /*#__PURE__*/React__default.createElement(react.SwiperSlide, {
      className: "section_item " + style$m.item,
      key: "location_" + i
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$m.item_content
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$m.item_bg
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$m.sizer
    }), /*#__PURE__*/React__default.createElement(Media, {
      className: style$m.item_img,
      src: item.image,
      size: "608x472"
    })), /*#__PURE__*/React__default.createElement("div", {
      className: style$m.text_wrap
    }, item.title)));
  })), /*#__PURE__*/React__default.createElement("div", {
    className: style$m.prev
  }, /*#__PURE__*/React__default.createElement(NormalLink, {
    className: style$m.slider_icon,
    onClick: function onClick() {
      return swiperSlideClick(swiperRef.current.swiper, items, 'prev');
    }
  }, /*#__PURE__*/React__default.createElement("span", {
    className: style$m.icon
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fas fa-arrow-left"
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: style$m.next
  }, /*#__PURE__*/React__default.createElement(NormalLink, {
    className: style$m.slider_icon,
    onClick: function onClick() {
      return swiperSlideClick(swiperRef.current.swiper, items);
    }
  }, /*#__PURE__*/React__default.createElement("span", {
    className: style$m.icon
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fas fa-arrow-right"
  })))))));
};

var style$n = {"section":"_1Dx2e","item":"_1-nWo","title":"_1RSkO","info":"_1INWQ","wrapper":"_2oZh0","text_wrap":"_1gXBm","label":"_IKYj0","value":"_QfYPE","list":"_2b_Ot","icon":"_1OI6U","download":"_g50S-"};

var Details = function Details(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
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
  }), /*#__PURE__*/React__default.createElement("div", {
    className: style$n.section
  }, items.map(function (item, index) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "" + style$n.item,
      key: "details_" + index
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$n.title
    }, item.title), /*#__PURE__*/React__default.createElement("div", {
      className: style$n.wrapper
    }, item.list.map(function (value, j) {
      var _value$button_label = value.button_label,
        button_label = _value$button_label === void 0 ? false : _value$button_label,
        _value$icon = value.icon,
        icon = _value$icon === void 0 ? false : _value$icon,
        _value$text = value.text,
        text = _value$text === void 0 ? false : _value$text;
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, icon && /*#__PURE__*/React__default.createElement("div", {
        className: style$n.text_wrap,
        key: "about_" + j
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$n.icon
      }, /*#__PURE__*/React__default.createElement("img", {
        src: value.icon,
        alt: value.label + " icon"
      })), /*#__PURE__*/React__default.createElement("div", {
        className: style$n.label
      }, value.label), /*#__PURE__*/React__default.createElement("div", {
        className: style$n.value
      }, value.value)), text && /*#__PURE__*/React__default.createElement("ul", {
        className: style$n.list,
        key: "list_" + j
      }, /*#__PURE__*/React__default.createElement("li", null, value.text)), button_label && /*#__PURE__*/React__default.createElement("div", {
        className: style$n.info,
        key: "info_" + j
      }, /*#__PURE__*/React__default.createElement(Button, {
        className: style$n.download,
        svgIcon: value.logo,
        onClick: function onClick() {},
        label: value.button_label
      })));
    })));
  })))));
};

var style$o = {"text_image":"_wF7Ft","left":"_38W0s","right":"_1FMR2","greenBg":"_2zh7A","abs":"_mScSL","left_side":"_BZGjD","img_wrap":"_3y2S8","img":"_33JRX","sizer":"_GKgw_","title":"_VHkPF","text":"_3HR_o","white_btn":"_2oYgJ","button":"_31taU"};

var TextImageSlider = function TextImageSlider(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$delay = _ref.delay,
    delay = _ref$delay === void 0 ? 10000 : _ref$delay;
  var swiperRef = React.useRef(null);
  var colorClass = {
    "green": style$o.greenBg,
    "darkblue": style$o.blueBg
  };
  if (!items || items.length <= 0) {
    return null;
  }
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(reactEqualHeight.EqualHeight, null, /*#__PURE__*/React__default.createElement("div", {
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
      className: "section_item " + style$o.text_image + " " + (lodash.get(item, 'image_position') === 'left' ? "col_66_33 " + style$o.left_side : "col_33_66"),
      key: "text_img_" + i
    }, i + 1 !== items.length && /*#__PURE__*/React__default.createElement("div", {
      className: "section_item_border_bottom"
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "section_border_middle"
    }), /*#__PURE__*/React__default.createElement("div", {
      className: style$o.left + " " + colorClass[item.bg_color]
    }, /*#__PURE__*/React__default.createElement(reactEqualHeight.EqualHeightElement, {
      name: "TextImageSliderContent"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$o.abs
    }, /*#__PURE__*/React__default.createElement(LazyLoad, {
      className: style$o.content
    }, /*#__PURE__*/React__default.createElement("div", {
      className: style$o.title
    }, item.title), /*#__PURE__*/React__default.createElement("div", {
      className: style$o.text
    }, item.text), /*#__PURE__*/React__default.createElement("div", {
      className: style$o.button
    }, /*#__PURE__*/React__default.createElement(Button, {
      buttonType: item.white_button === true ? "transparent_btn" : "block_btn",
      label: item.button_label,
      link: item.button_url
    })))))), /*#__PURE__*/React__default.createElement("div", {
      className: style$o.right
    }, /*#__PURE__*/React__default.createElement(reactEqualHeight.EqualHeightElement, {
      name: "TextImageSliderContent"
    }, /*#__PURE__*/React__default.createElement(Slider, {
      className: "text_slider",
      swiperRef: swiperRef
    }, /*#__PURE__*/React__default.createElement(react.Swiper, {
      ref: swiperRef,
      modules: [swiper.Pagination, swiper.Autoplay],
      autoplay: {
        delay: delay
      },
      pagination: {
        clickable: true
      },
      spaceBetween: 0,
      slidesPerView: 1
    }, item.list.map(function (item, i) {
      return /*#__PURE__*/React__default.createElement(react.SwiperSlide, {
        key: "img_slider_" + i
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$o.img
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$o.img_wrap
      }, /*#__PURE__*/React__default.createElement("div", {
        className: style$o.sizer
      }), /*#__PURE__*/React__default.createElement(Media, {
        src: item.image
      }))));
    }))))));
  })))));
};

var Widget = function Widget(_ref) {
  var data = _ref.data;
  if (data.type === 'hero_banner') {
    return /*#__PURE__*/React__default.createElement(BannerHero, data);
  }
  if (data.type === 'banner') {
    return /*#__PURE__*/React__default.createElement(Banner, data);
  }
  if (data.type === 'left_right_banner') {
    return /*#__PURE__*/React__default.createElement(LeftRightBanner, data);
  }
  if (data.type === 'text') {
    return /*#__PURE__*/React__default.createElement(Text, data);
  }
  if (data.type === 'menu_section') {
    return /*#__PURE__*/React__default.createElement(MenuSection, data);
  }
  if (data.type === 'enquire_form') {
    return /*#__PURE__*/React__default.createElement(EnquireForm, data);
  }
  if (data.type === 'image_with_text') {
    return /*#__PURE__*/React__default.createElement(TextImage, data);
  }
  if (data.type === 'text_table') {
    return /*#__PURE__*/React__default.createElement(TextTable, data);
  }
  if (data.type === 'text_image_block') {
    return /*#__PURE__*/React__default.createElement(TextImageBlock, data);
  }
  if (data.type === 'text_image_slider') {
    return /*#__PURE__*/React__default.createElement(TextImageSlider, data);
  }
  if (data.type === 'text_block') {
    return /*#__PURE__*/React__default.createElement(TextBlock, data);
  }
  if (data.type === 'terms_menu') {
    return /*#__PURE__*/React__default.createElement(TermsMenu, data);
  }
  if (data.type === 'text_editor') {
    return /*#__PURE__*/React__default.createElement(TextEditor, data);
  }
  if (data.type === 'two_column_table') {
    return /*#__PURE__*/React__default.createElement(TableTwoColumn, data);
  }
  if (data.type === 'three_column_table') {
    return /*#__PURE__*/React__default.createElement(TextTable, data);
  }
  if (data.type === 'amenities') {
    return /*#__PURE__*/React__default.createElement(Amenities, data);
  }
  if (data.type === 'image_slider') {
    return /*#__PURE__*/React__default.createElement(ImageSlider, data);
  }
  if (data.type === 'details') {
    return /*#__PURE__*/React__default.createElement(Details, data);
  }
  return null;
};

var Home = function Home(_ref) {
  var widgets = _ref.widgets,
    headerProps = _ref.headerProps,
    footerProps = _ref.footerProps;
  return /*#__PURE__*/React__default.createElement(React.Suspense, {
    fallback: /*#__PURE__*/React__default.createElement(React__default.Fragment, null)
  }, /*#__PURE__*/React__default.createElement(AppProvider, null, /*#__PURE__*/React__default.createElement(Layout, {
    headerProps: headerProps,
    footerProps: footerProps
  }, widgets.map(function (data, index) {
    return /*#__PURE__*/React__default.createElement(Widget, {
      data: data,
      key: "widget_" + index
    });
  }))));
};

var HomePage = Home;

exports.HomePage = HomePage;
//# sourceMappingURL=index.js.map
