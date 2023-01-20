import bannerImg from "../assets/images/hero.jpg";
import bannerlogo from "../assets/images/bannerlogo.svg";
import leftBg from "../assets/images/office.jpg";
import rightBg from "../assets/images/workclub.jpg";
import newsletterImg from "../assets/images/frame.jpg";
import detailImg from "../assets/images/detailImg.jpg";
import landlordImage from "../assets/images/landlordImage.jpg";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import download from "../assets/images/download.svg";
import logo1 from "../assets/images/logo1.svg";
import logo2 from "../assets/images/logo2.svg";
import logo3 from "../assets/images/logo3.svg";
import logo4 from "../assets/images/logo4.svg";
import logo5 from "../assets/images/logo5.svg";

const privacyMenu = [
  {
    label: "Website terms of use",
    link: "/terms-of-use",
  },
  {
    label: "Privacy (US)",
    link: "/privacy-us",
  },
  {
    label: "Privacy (Eur)",
    link: "/privacy-eur",
  },
  {
    label: "Personal information",
    link: "/personal-information",
  },
  {
    label: "Accessibility",
    link: "/accessibility",
  },
  {
    label: "California data subject access request form",
    link: "/data-access-request",
  },
];

const data = {
  home: [
    {
      type: "hero_banner",
    desktop_image: bannerImg,
      title: "Introducing",
      title_image: bannerlogo,
      button_label: "Enquire",
      button_url: "/",
    },
    {
      type: "text",
      bg_color: "green",
      text: "<span> Workclub </span> hubs with access to your own branded <span> private office </span> in key gateway cities across the globe.",
    },
    {
      type: "menu_section",
      items: [
        {
          image: leftBg,
          title: "Office",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing eliti",
        },
        {
          image: rightBg,
          title: "Workclub",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing eliti",
        },
      ],
    },
    {
      type: "text_image_block",
      items: [
        {
          title: "Lorem ipsum dolor",
          sub_title: "Tempus scelerisque felis",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus scelerisque felis lobortis commodo quis. Pulvinar leo ac, lacinia nibh tincidunt. ",
          button_label: "Learn more",
          button_url: "/",
          image: detailImg,
          image_position: "right",
        },
        {
          title: "Lorem ipsum dolor",
          sub_title: "Tempus scelerisque felis",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus scelerisque felis lobortis commodo quis. Pulvinar leo ac, lacinia nibh tincidunt. ",
          button_label: "Learn more",
          button_url: "/",
          image: detailImg,
          image_position: "left",
        },
      ],
    },
  ],

  "enquire-form": [
    {
      type: "enquire_form",
      title: "Lets Connect",
      text: "<span> Lorem ipsum dolor sit amet, </span> consectetur adipiscing elit.",
    },
  ],

  news_letter: {
    title: "Newsletter",
    text: "<span> Sign up for the good stuff.</span> Break up your emails with the odd update from us. We hate spam too, so we promise to only send you good things.",
    feedback:
      "<span>Thank you for subscribing</span><p> We will be in touch soon.<p/> ",
    button_label: "Sign up",
    button_url: "/",
    image: newsletterImg,
  },

  contact: {
    form_title: "How can we help you?",
    form_text:
      "<span>Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit. Enim quam tortor volutpat egestas.",
    button_label: "Submit",
    feedback:
      "<span>Thank you for your response </span><p> We will be in touch soon.<p/> ",
  },

  office: [
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
          image: image1,
          title: "Atlanta",
          link: "",
        },
        {
          location: "Europe",
          image: image2,
          title: "Austin",
          link: "",
        },
        {
          location: "uk",
          image: image3,
          title: "Berlin",
          link: "",
        },
        {
          location: "america",
          image: image1,
          title: "Atlanta",
          link: "",
        },
        {
          location: "Europe",
          image: image2,
          title: "Austin",
          link: "",
        },
        {
          location: "uk",
          image: image3,
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
          image: image1,
          title: "Amenity name",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem arcu porta nisl sollicitudin posuere gravida rhoncus.",
        },
        {
          image: image2,
          title: "Amenity name",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem arcu porta nisl sollicitudin posuere gravida rhoncus.",
        },
        {
          image: image3,
          title: "Amenity name",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem arcu porta nisl sollicitudin posuere gravida rhoncus.",
        },
      ],
    },
  ],

  brokers: [
    {
      type: "left_right_banner",
      image: bannerImg,
      bg_color: "darkblue",
      title: "Flexible solutions to meet client needs.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      button_label: "Get in touch",
      button_url: "/",
      whiteButton: true,
    },
    {
      type: "text_table",
      items: [
        {
          title: "Build client trust",
          text: "A partner who respects your relationships. We provide you with the optionality for all the ways your clients work.",
        },
        {
          title: "Increase revenue",
          text: "Transparent compensation, timely payments. Close deals faster with our simple, proven sales process. Earn more with each renewal and expansion.",
        },
        {
          title: "Grow together",
          text: "Maintain your client relationships as they scale in the Knotel portfolio. Advise your clients on strategy, from Series A to IPO. Earn compensation on all expansion and renewal business.",
        },
      ],
    },
  ],

  landlords: [
    {
      type: "left_right_banner",
      image: bannerImg,
      bg_color: "darkblue",
      title: "Flexible solutions for your office portfolio.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button_label: "Submit your space",
      button_url: "/",
      whiteButton: true,
    },
    {
      type: "image_with_text",
      items: [
        {
          image: landlordImage,
          title: "Mauris fusce.",
          text: "Knotel works with landlords to design, build and operate office space for companies on flexible terms, while minimizing buildout disruption and maximizing long-term property value.",
          button_label: "Submit your space",
          button_url: "/",
          image_position: "left",
        },
        {
          image: landlordImage,
          title: "Mauris fusce.",
          text: "Knotel works with landlords to design, build and operate office space for companies on flexible terms, while minimizing buildout disruption and maximizing long-term property value.",
          button_label: "Submit your space",
          button_url: "/",
          image_position: "right",
        },
        {
          image: landlordImage,
          title: "Mauris fusce.",
          text: "Knotel works with landlords to design, build and operate office space for companies on flexible terms, while minimizing buildout disruption and maximizing long-term property value.",
          button_label: "Submit your space",
          button_url: "/",
          image_position: "left",
        },
      ],
    },
  ],
  detail: [
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
              value: "Lorem@ipsum.com",
              link: true,
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
            },
            {
              logo: download,
              button_label: "Download Images",
              button_link: "/",
            },
            {
              logo: download,
              button_label: "Download Floor Plan",
              button_link: "/",
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
          button_url: "/",
          image_position: "right",
          list: [
            { image: logo1 },
            { image: logo2 },
            { image: logo1 },
            { image: logo2 },
          ],
        },
        {
          title: "Old & new collide",
          text: "This is a place where old and new collide; from cutting-edge-cool Old Street and Shoreditch to the historically influenced City of London. The area is the epicentre of London’s creative and collaborative industries and is more popular than ever with many of London’s forward-thinking financial and professional occupiers. ",
          button_label: "Request information",
          button_url: "/",
          list: [
            { image: logo2 },
            { image: logo1 },
            { image: logo2 },
            { image: logo1 },
          ],
          image_position: "left",
          bg_color: "green",
          white_button: true,
        },
      ],
    },
  ],
  "terms-of-use": [
    {
      type: "terms_menu",
      items: privacyMenu,
      pathname: "/terms-of-use",
    },
    {
      type: "text_editor",
      text: `
            <h6>Effective Date of Current Policy: June 17, 2022</h6>
            <h1>Website terms</h1>
            <h3>Sessions Website Terms</h3>
            <p>YOU SHOULD READ THESE WEBSITE TERMS, THE PRIVACY NOTICE AND EUROPEAN PRIVACY ADDENDUM BEFORE USING THIS WEBSITE.</p>
            <p>
                By continuing to access and/or use this website (together with any and all other Sessions websites or subdomains, each, a "Site," and collectively, the "Sites")
                offered by Knotel Holdings, LLC and/or its affiliates ("Sessions"), you (which term, as used herein, includes you personally and
                any entity you represent and the company or organization on whose behalf Sessions grants you access) hereby expressly acknowledge and agree that you have read
                and agree to be bound by and a party to the terms and conditions set forth in these "Website Terms", the Privacy Notice and European Privacy Addendum (collectively, the "Terms").
                Sessions reserves the right to modify the Terms at any time upon posting to the Sites, so you should review the Terms whenever accessing and/or using the Sites.
                Continued use of or access to the Sites after the posting of modifications to the Terms, signifies your acceptance of the Terms, as modified.
                You may not access or use the Sites if, at any time, you do not wish to accept the terms and conditions set forth in the Terms. As used in the Terms, "include(s)" and "including" mean "including without limitation."
            </p>
            <p>
                The Sites, and any and all content, information, data and materials made available on the Sites, including images, text and audio (collectively, the "Content"), as well as any and all intellectual property
                rights now or hereafter in and to any of the foregoing (collectively, the "Intellectual Property Rights") are and shall at all times remain the sole and exclusive property of Sessions and are
                protected by applicable copyright, patent, trademark and other intellectual property laws. All other trademarks, if any, on the Sites are the property of their respective owners. You shall not
                remove any copyright, trademark or other notices or disclaimers contained in this Site and/or the Content. You acquire absolutely no rights or licenses in or to any of the Sites, the Content or the
                Intellectual Property Rights, other than the limited rights to access and use the Sites as expressly permitted by these Website Terms and in compliance with applicable laws, rules, regulations and Sessions'
                instructions from time to time. You agree to protect the proprietary rights of Sessions and all others having rights in the Sites, any of the Content and/or any of the Intellectual Property Rights and to
                comply with all reasonable written or electronic requests made by Sessions or its suppliers of content or services or otherwise (collectively, "Suppliers") to protect their and others' contractual, statutory
                and common law rights in the Sites, the Content and/or the Intellectual Property Rights.
            </p>
            <p>
                You are entitled to view, copy and print any documents from the Sites, but only for your personal purposes or if you are using the Sites on behalf of
                the entity you represent or on behalf of the company or organization on whose behalf Sessions grants you access, only for such entity’s or company’s or organization’s internal business purposes.
                Any sale, transmission or redistribution of the Sites, the Content or the Intellectual Property Rights, and any copying, modification or other use of the Sites, the Content or the Intellectual Property
                Rights for any purposes other than your personal purposes, or, if you are using the Sites on behalf of the entity you represent or on behalf of the company or organization on whose behalf Sessions grants you access,
                such entity’s or company’s or organization’s internal business purposes, as applicable, are strictly prohibited. Except as specifically permitted by the terms of these Website Terms, you shall not use any of the Sites,
                the Content, or the Intellectual Property Rights, or any derivations of any of the foregoing, for any purposes whatsoever, without Sessions’ prior written approval. You agree to provide Sessions with prompt written
                notice of any unauthorized access and/or use of the Sites, any of the Content and/or any of the Intellectual Property Rights by any party or of any claim that any of the Sites, the Content and/or the
                Intellectual Property Rights infringes upon any intellectual property rights or other contractual, statutory or common law rights.
            </p>
            <p>
                YOU MAY NOT COPY, REPRODUCE, RECOMPILE, DECOMPILE, DISASSEMBLE, REVERSE ENGINEER, DISTRIBUTE, PUBLISH, DISPLAY, PERFORM, MODIFY, UPLOAD TO, CREATE DERIVATIVE WORKS FROM, TRANSMIT OR
                IN ANY WAY EXPLOIT ALL OR ANY PART OF THE SITES, EXCEPT AS EXPRESSLY PROVIDED HEREIN. THE CONTENTS OF THE SITES MAY NOT BE RECIRCULATED, REDISTRIBUTED OR PUBLISHED BY YOU WITHOUT SESSIONS’ PRIOR WRITTEN CONSENT.
                IF YOU DOWNLOAD ANY INFORMATION OR SOFTWARE FROM THE SITES, YOU AGREE THAT YOU WILL NOT COPY IT OR REMOVE OR OBSCURE ANY COPYRIGHT OR OTHER NOTICES OR LEGENDS CONTAINED IN ANY SUCH INFORMATION. MODIFICATION OF
                ANY OF THE CONTENT BY YOU WOULD BE A VIOLATION OF SESSIONS’ COPYRIGHT AND OTHER PROPRIETARY RIGHTS. YOU MAY NOT USE THE SITES FOR ANY ILLEGAL PURPOSE OR IN ANY MANNER INCONSISTENT WITH APPLICABLE LAW OR THESE
                WEBSITE TERMS. YOU MAY NOT OFFER ANY PART OF THE SITES FOR SALE OR DISTRIBUTE THEM OVER ANY OTHER MEDIUM INCLUDING BUT NOT LIMITED TO TELEVISION OR RADIO BROADCAST, A COMPUTER NETWORK OR HYPERLINK FRAMING ON THE
                INTERNET WITHOUT THE PRIOR WRITTEN CONSENT OF SESSIONS. YOU MAY NOT USE ANY OF SESSIONS’ TRADEMARKS, TRADE NAMES OR SERVICE MARKS IN A MANNER THAT SUGGESTS THAT SUCH NAMES AND MARKS BELONG TO OR ARE ASSOCIATED WITH
                YOU OR ARE USED WITH SESSIONS’ CONSENT, AND YOU ACKNOWLEDGE THAT YOU HAVE NO OWNERSHIP RIGHTS IN AND TO ANY OF THESE NAMES AND MARKS. YOU WILL NOT USE ANY OF THE SITES OR THE CONTENT IN UNSOLICITED MAILINGS OR SPAM
                MATERIAL. YOU WILL NOT SPAM OR SEND UNSOLICITED MAILINGS TO ANY PERSON OR ENTITY USING ANY OF THE SITES. YOU AGREE TO COMPLY WITH ANY OTHER APPLICABLE TERMS AND CONDITIONS SET FORTH ON THE SITES OR SESSIONS’ INSTRUCTION
                PROVIDED FROM TIME TO TIME.
            </p>
            <p>
                In connection with your use of and/or access to the Sites, Sessions from time to time may provide you
                with user names, passwords and/or other unique identifiers (collectively, “User Codes”). You are responsible for the security and confidentiality of the User Codes and
                agree not to disclose them to any third party, including, any other employee in your company or organization. You are responsible for any and all information provided, and any and
                all acts and/or omissions that occur, while User Codes are being used, in each case, whether by you or a third party. Sessions Parties (as defined below) are not</p>
            <p>
                responsible for any breach of security caused by your failure to maintain the confidentiality and security of any of the User Codes. You agree to notify Sessions immediately in the event of loss, theft or
                disclosure of any or all of the User Codes or if you believe the confidentiality or security of any or all of the User Codes has been compromised in any way. You are limited to one User Code. Duplicate
                User Codes may be revoked. Sessions reserves the right to revoke or modify the User Codes at any time.
            </p>
            <ul>You represent and warrant that:
                <li>
                    you will not use or access our Sites or Content if you are not able to form legally binding contracts (for example, if you are under 18 years old);

                </li>
                <li>
                    you are the person to whom the User Codes you used to access the Sites were issued by us and the information you provided to us in connection with the
                    issuance of the User Codes, if any, was and is true, accurate, current and complete;
                </li>
                <li>
                    if you are accessing the Sites on behalf of the entity you represent or the company or organization to whom the User Codes you used to access the Sites were issued by us, you are duly
                    authorized by all necessary action and have all consents, rights and authority to bind that entity or company or organization to these Website Terms, and you agree to these Website Terms on that company’s or
                    organization’s behalf;
                </li>
                <li>
                    you will not reverse engineer, de-compile or reverse compile any of our technology, including any software or Java applets associated with any of the Sites and/or the Content;

                </li>
                <li>
                    unless we expressly authorize you to do so in writing, you will not use, reproduce, duplicate, copy, sell, resell, distribute, publish or exploit for any commercial purposes any portion of any of the Sites and/or the Content;
                </li>
                <li>
                    you will access and use the Sites in compliance with any and all applicable law(s), rules(s) or regulation(s) (whether in the United States or other countries) and in accordance with these Website Terms; and
                </li>
                <li>
                    you have all consents, rights and authority to provide and submit any and all information and content provided and submitted by you using the User Codes, the Sites and/or the Content and all such information and content: (1) is true, accurate, current and complete and we may rely on such information and content; (2) is not libelous, defamatory, indecent, obscene, harassing, hateful or violent; (3) is not meant to harm any Sessions Parties or any third party; (4) does not constitute or include viruses or other harmful codes; (5) as well as its anticipated uses, does not violate, infringe or misappropriate any copyright, patent, trademark or other proprietary rights, or right of publicity or privacy of any Sessions Parties or any third party; and (6) does not violate these Website Terms, or any applicable law, rule or regulation (whether of the United States or other countries)
                </li>
            </ul>
            <p>
                You acknowledge that your submission of any information or content to us is at your own risk. None of the Sessions Parties will assume any liability to you with regard to any loss or
                liability relating to such information in any way.
            </p>
            <p>
                The Sites are made available solely for information purposes and, with the exception of these Website Terms or as otherwise indicated, is not intended to, and shall not, constitute any offer or
                acceptance with the respect to any transactions or other matters. Except for these Website Terms, the Sites shall not create any legal relationship between you and Sessions.
            </p>
            <p>
                The Sites and the Content are subject to change at any time by Sessions without notice and Sessions reserves the right to modify, suspend, terminate or restrict any aspect or
                feature of any of the Sites and/or Content or your access to and/or use of the Sites and/or Content. If Sessions elects to modify, suspend, or discontinue any of the Sites, none of the Sessions Parties
                shall be liable to you or any third party. ANY USE OF THE SITES OR CONTENT IS AT YOUR OWN RISK. THE SITES AND THE CONTENT ARE PROVIDED “AS IS” WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, BUT
                NOT LIMITED TO, ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, RELIABILITY, OR COMPLETENESS OF ANY OF THE SITES AND/OR THE CONTENT, OR IN RESPECT OF ANY MATERIALS OR PRODUCTS
                REFERRED TO ON THE SITES, OR NON-INFRINGEMENT. DIFFICULTIES IN ACCESS TO AND/OR USE OF THE SITES COULD INVOLVE, AMONG OTHERS, FAILURES, DELAYS, MALFUNCTION, SOFTWARE EROSION, INADVERTENT DISCLOSURE OF INFORMATION
                PROVIDED TO SESSIONS VIA THE SITES, OR HARDWARE DAMAGE, WHICH DIFFICULTIES COULD BE THE RESULT OF HARDWARE, SOFTWARE OR COMMUNICATION LINK INADEQUACIES OR OTHER CAUSES. SUCH DIFFICULTIES COULD LEAD TO POSSIBLE ECONOMIC
                AND/OR DATA LOSS. SESSIONS DOES NOT WARRANT THAT ANY OF THE SITES ARE COMPATIBLE WITH YOUR EQUIPMENT OR THAT ANY OF THE SITES ARE OR WILL BE FREE FROM LOSS, DESTRUCTION, DAMAGE, CORRUPTION, ATTACK, INTERFERENCE, HACKING, ERRORS, VIRUSES, WORMS, OR OTHER SECURITY INTRUSION. IN NO EVENT SHALL SESSIONS PARTIES BE LIABLE FOR ANY DAMAGE YOU MAY SUFFER AS A RESULT OF ANY OF THE FOREGOING DIFFICULTIES.
                ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, ARE HEREBY EXCLUDED TO THE EXTENT PERMITTED BY LAW.
            </p>
            <p>
                Sessions and its partners, directors, officers, employees and agents (collectively, “Sessions Parties”) shall, to the extent permitted by law, have no liability, contingent or otherwise,
                whether caused by the negligence of any Sessions Parties, their subcontractors or Suppliers, or otherwise, to you or to any third parties for the accuracy, timeliness, completeness, reliability,
                performance or continued availability of any of the Sites or the Content or for delays or omissions in any of the foregoing, including, but not limited to, inaccuracies or errors in or omissions from
                quotes and/or financial data. Sessions Parties shall have no responsibility to maintain any of the Sites and/or the Content or to supply any corrections or updates in connection with any of the Sites and/or
                the Content. IN NO EVENT WILL SESSIONS PARTIES, THEIR SUBCONTRACTORS OR SUPPLIERS BE LIABLE TO YOU FOR ANY DIRECT, SPECIAL, INDIRECT, INCIDENTAL, EXEMPLARY, PUNITIVE OR
                CONSEQUENTIAL DAMAGES (INCLUDING, WITHOUT LIMITATION, LOSS OF BUSINESS, LOSS OF PROFIT, LOSS OR CORRUPTION OF DATA, LOSS OF GOODWILL OR REPUTATION OR WASTED MANAGEMENT TIME) WHICH MAY BE INCURRED OR
                EXPERIENCED ON ACCOUNT OF YOUR ACCESSING, USING AND/OR RELYING ON ANY OF THE SITES OR ANY CONTENT OR LINKS ON ANY OF THE SITES, EVEN IF SESSIONS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. Any limitations
                or restrictions on liability in these Website Terms shall only apply to the extent permitted by applicable law.
            </p>
            <p>
                In no event shall Sessions Parties’ total liability to you for all damages, losses and causes of action (whether in contract, tort or otherwise, including but not limited to, negligence) exceed
                the amount paid by you to Sessions, if any, for accessing the Sites.
            </p>
            <p>
                Nothing set forth in the Sites should be construed as a recommendation to purchase or sell any product or instrument or to enter into any transaction, or as a representation that any particular
                product or instrument is suitable or appropriate for you. Many of the products described in the Sites involve significant risks and you should not enter into any transactions unless you fully understand
                all of these risks and have independently determined that the risks are acceptable to you and that the transactions are appropriate for you in light of your objectives, experience, financial and operational
                resources and other relevant circumstances. Any discussion of risks contained in the Sites, however, should not be considered to be a disclosure of the risks of particular transactions, or a complete discussion
                of the risks which are mentioned.
            </p>
            <p>
                You should not construe any of the Content as business, financial, investment, hedging, trading, legal, regulatory, tax or accounting advice and you should not make the
                Sites (or any portions thereof) the primary basis for any trading decisions. In providing the Sites and the Content and entering into any transactions in the products described in the Sites, Sessions
                is acting solely in the capacity of an arm’s length contractual counterparty and not as a financial advisor or a fiduciary. Under no circumstances should Sessions be considered your advisor or fiduciary and, if you
                require advice with respect to the products identified in any of the Sites or any contemplated transactions, you should consult your own business, financial, accounting or legal advisors.
            </p>
            <p>
                The Sites may provide links to certain other Sites sponsored, owned, operated and/or maintained by Sessions as well as
                those sponsored, owned, operated and/or maintained by third parties (“Third Party Websites”). Such Third Party Websites are publicly available and Sessions is providing
                access to such Third Party Websites through the Sites solely as a convenience to you. The content, data, information, services, goods or advertisements of such Third Party Websites that may be linked
                to any of the Sites are not sponsored, owned, operated, maintained or controlled by Sessions, and Sessions makes no representations or warranties concerning the content, data, information, services, goods or
                advertisements of such Third Party Websites, and the fact that access to such websites is provided does not constitute any endorsement, authorization or sponsorship of such websites or their sponsors, owners
                and/or operators by Sessions nor is there any affiliation between Sessions and any such sponsors, owners, and/or operators. Moreover, Third Party Websites are not reviewed, controlled, or examined by Sessions and
                Sessions is in no way responsible for the availability, content or accuracy of other websites (including any Third Party Websites), services or goods that may be linked to, or advertised on, any of the Sites and
                does not make any warranty, express or implied, with respect to the use of the links provided on, or to, any of the Sites or guarantee the accuracy, completeness, usefulness or adequacy of any other
                websites, services, goods or advertisements that may be linked on, or to, any of the Sites. You understand and agree that you will access and use such Third Party Websites, and rely on the content, services, goods or
                advertisements of such Third Party Websites, solely at your own risk and that Sessions does not grant to you any rights in respect of such Third Party Websites. In addition, please be aware that your use of any
                linked site (including any Third Party Website) is subject to the terms and conditions applicable to that website. Please direct any questions regarding such linked sites to the webmasters of such sites.
            </p>
            <p>
                In the course of your access to and/or use of any of the Sites, you may provide, or Sessions may otherwise obtain, information about you and/or your business activities. By using
                any of the Sites, you expressly consent to Sessions (1) using this information to assess the function and performance of the Sites, to assess the needs of its customers, to market Sessions’ products
                and/or services and for the other purposes set out in this paragraph, and (2) transferring this information to Sessions affiliates throughout the world for the purposes specified in (1) above. Any information
                which you provide or which Sessions otherwise obtains may be used by Sessions for any and all business purposes, provided however that personally identifiable information will be used (and shared) as described
                in the Privacy Notice and European Privacy Addendum. In the event that information is submitted through your access to any of the Sites erroneously, or you later determine that information should not have been
                submitted, for any reason, you accept full financial responsibility for such entry.
            </p>
            <p>
                You agree, at your own expense, to indemnify, defend and hold harmless Sessions Parties, their subcontractors and their Suppliers, from and against any and all claims, actions, proceedings, obligations, penalties,
                losses, liabilities, damages, costs and expenses (including reasonable legal and other professional fees and costs) directly or indirectly arising out of or related to your access to and/or use of any of the Sites
                and/or the Content, or, in the event that you are provided with User Codes, any access to and/or use of any of the Sites and/or the Content under such User Codes, including, but not limited to: (i) a claim that any
                use of any of the Sites and/or the Content by you (whether under the User Codes or otherwise) infringes any intellectual property or other proprietary rights of any third party, is libelous or defamatory, or otherwise
                results in injury or damage to any third party; (ii) any deletions, additions, insertions or alterations to, or any unauthorized use of, any of the Sites and/or the Content by you (whether under the User Codes or
                otherwise); (iii) any misrepresentation or breach of representation or warranty made by you contained herein; (iv) any breach of any covenant or agreement to be performed by you hereunder; or (v) your violation of
                any applicable law, rule, or regulation.
            </p>
            <p>
                You agree, at your own expense, to indemnify, defend and hold harmless Sessions Parties, their subcontractors and their Suppliers, from and against any and all
                claims, actions, proceedings, obligations, penalties, losses, liabilities, damages, costs and expenses (including reasonable legal and other professional fees and costs) directly or indirectly
                arising out of or related to your access to and/or use of any of the Sites and/or the Content, or, in the event that you are provided with User Codes, any access to and/or use of any of the Sites and/or
                the Content under such User Codes, including, but not limited to: (i) a claim that any use of any of the Sites and/or the Content by you (whether under the User Codes or otherwise) infringes any intellectual
                property or other proprietary rights of any third party, is libelous or defamatory, or otherwise results in injury or damage to any third party; (ii) any deletions, additions, insertions or alterations to, or
                any unauthorized use of, any of the Sites and/or the Content by you (whether under the User Codes or otherwise); (iii) any misrepresentation or breach of representation or warranty made by you contained
                herein; (iv) any breach of any covenant or agreement to be performed by you hereunder; or (v) your violation of any applicable law, rule, or regulation.
            </p>
            <p>
                Sessions may, in its sole discretion, seek your consent to the terms and conditions of these Website Terms by means of an electronic signature by requesting you to affirmatively check the
                box indicating your acceptance to these Website Terms, or affirmatively “click” on boxes containing the words “I Accept,” “I Agree” or other similar phrases (collectively, “Acceptance Terms”). If
                you “click” on the Acceptance Terms, your “click” will be deemed a legally binding electronic signature. You acknowledge and agree that you will carefully review any document or web page before making such
                an electronic signature. By electronically indicating your agreement to these Website Terms and/or registering for and/or accessing, browsing, and/or using any of the Sites and/or accessing, browsing, and/or
                using any of the Content, you acknowledge and agree: (i) that you intend to form a legally binding contract between you and Sessions; (ii) that you have read and agree to the terms and conditions of these
                Website Terms; (iii) that you agree and intend that these Website Terms to be the legal equivalent of signed, written contracts, and equally binding; (iv) that by electronically agreeing to these Website Terms,
                you acknowledge that you have received a copy of these Website Terms by your viewing a web page containing a hyperlink to the web page where these Website Terms are displayed or otherwise; and (v) that if you are
                executing these Website Terms on behalf of others (including the entity you represent or the company or organization on whose behalf Sessions grants you access to any of the Sites), you hereby certify that you are an
                authorized representative, duly authorized, including where applicable, by all required corporate action to act on behalf of such others.
            </p>
            <p>
                The terms of these Website Terms shall be governed by, and construed in accordance with, the laws of the State of New York applicable to contracts made and to be fully performed in such State without
                reference to principles of conflict of laws, and any action brought in relation to these Website Terms shall be brought in a Federal or State
            </p>
            <p>
                The terms of these Website Terms represent the complete and exclusive statement of the agreement and understanding between you and Sessions regarding your
                rights to access and/or use the Sites and/or the Content, and supersede representations (whether written or oral), regarding such subject matter. Except as herein provided, no waiver, modification or amendment
                of any provision of these Website Terms will be effective against Sessions unless the same is in writing and signed by one of Sessions’ executive officers. Should any term or provision of these Website Terms be
                deemed or held to be invalid or unenforceable, the remaining terms and provisions will continue in full force and effect. Sessions’ failure to insist at any time upon strict compliance with any term of these Website
                Terms, or any delay or failure on Sessions’ part to exercise any power or right given to Sessions in these Website Terms, or a continued course of such conduct on Sessions’ part will at no time operate as a waiver of
                such power or right, nor will any single or partial exercise preclude any other future exercise. All rights and remedies given to Sessions in these Website Terms and other terms and conditions that are subject to these
                Website Terms are cumulative and not exclusive of any other rights or remedies which Sessions otherwise has at law or equity. These Website Terms will be binding upon you and your executors, heirs, successors and assigns. The term “affiliate” as used in these Website
                Terms shall mean “affiliate existing from time to time. You may not assign or delegate rights, duties or obligations under these Website Terms without Sessions’ prior written consent. These Website Terms are in addition to, and does
                not nullify, any other agreement between you and Sessions governing the conduct of your relationship with Sessions.
            </p>
            <h3>Important Legal Information</h3>
            <p>
                Sessions does not intend the Content to be distributed to, or used by, any person or entity in any jurisdiction or country where such distribution or use would be contrary to law, rule or
                regulation or which would subject Sessions to any registration requirement within such jurisdiction or country. Neither the information, nor any opinion contained in any of the Sites constitutes a
                solicitation or offer by Sessions to buy or sell any securities, futures, options or other financial instruments or provide any investment advice or service.
            </p>
            <p>
                Some of the content, products, and services available through the Sites may include materials that belong to third parties. You acknowledge that none of the Sessions Parties will assume any
                responsibility for such content, products or services.
            </p>
            <p>
                Although some of the content, information or data made available to you on any of the Sites is obtained and/or compiled from sources Sessions believes to be reliable, Sessions cannot and does not
                guarantee the accuracy, validity, timeliness or completeness of any such content, information or data made available to you on any of the Sites for any particular purpose. Neither Sessions Parties
                nor any of their subcontractors or Suppliers will be liable or have any responsibility of any kind for any loss or damage that you incur in the event of any failure or interruption of any of the Sites, or
                resulting from the act or omission of any other party involved in making any of the Sites or the Content available to you, or from any other cause relating to your access to, or inability to access, or use of, or
                inability to use any of the Sites or the Content, whether or not the circumstances giving rise to such cause may have been within the control of any Sessions Parties or of any of their subcontractors or Suppliers.
            </p>
            <p>
                All property listing information contained within this site is subject to the possibility of errors, omissions, change of price, rental or other conditions, prior sale,
                lease or financing, or withdrawal without notice. Any projections, opinions, assumptions or estimates contained within the Sites are for example only, and such projections, opinions, assumptions or
                estimates may not represent current or future performance of a listed property. You and your tax and legal advisors should conduct your own investigation of any property listed on this site and any contemplated
                transaction concerning any property listed on the Sites.
            </p></br></br></br></br>`,
    },
  ],

  "privacy-us": [
    {
      type: "terms_menu",
      items: privacyMenu,
    },
    {
      type: "text_editor",
      text: "<h6>Effective Date of Current Policy: June 17, 2022</h6><h1>Privacy notice</h1>",
    },
    {
      type: "text_editor",
      text: `
            <p>This Privacy Notice explains how Sessions Collection, including its subsidiaries, handles your personal information. This Privacy Notice applies to this website or mobile application and the websites or mobile applications of Knotel Holdings, LLC and our affiliates (hereinafter referred to as “Sessions,” “we”, “us” or “our”) that display or refer to this Privacy Notice (each a Site and collectively, the Sites), and to any online services that may be available on or through the Sites or other services and products provided by us (the “Services”). This Privacy Notice describes the personal information we collect on the Site and through the Services, and how we use and protect that information.  This Privacy Notice does not apply to information unrelated to any identified or identifiable individual, household, or device.</p>
            <p>In addition, if you are a resident of the European Economic Area (“EEA”), please see our European Privacy Addendum.</p></br></br>`,
    },
    {
      type: "text_editor",
      text: "<h2>Information we collect</h2>",
    },
    {
      type: "text_editor",
      text: ` 
            <ul>
            To provide the Services, we collect the following information:
            <li>By which you may be personally identified, such as a first and last name, a home or other physical address, an email address, a telephone number, date of birth, payment information, business information
                or other identifier that permits us to contact you.</li>
            <li>That is about our provision of Services to you, such as your membership level and information used to administer your account with us.</li>
            <li>Information about access to our facilities and attendance at events.</li>
            <li>About your internet connection, the equipment you use to access our Site, and usage data.</li>
            </ul>

        <ul>
            We collect this information from a variety of sources including:
            <li>Directly from you when you provide it to us.</li>
            <li>Automatically as you navigate through the Site.</li>
            <li>From third parties.</li>
            <li>Information we collect from you.</li>
        </ul>

        <ul>
            The information we collect on or through our Site may include:
            <li>Information that you provide by filling in forms on our Site. This includes information provided at the time you register for an account, sign up for newsletters or a loyalty program, respond to surveys, participate in
                sweepstakes or contests, or engage in certain activities.</li>
            <li>Records and correspondence. If you contact us to request information about our Services, request to receive customer or technical support, or otherwise communicate with us.</li>
            <li>Location utilization information. This includes information about the time and purpose of your visits, the frequency of your visits, information about your guests or visitors, what types of Services you
                use in our locations, the rooms you book or use, information needed to control access to our locations (including information about where you may be located), information about your
                guests or visitors, information about your connection to our WiFi provided at our locations and audio/visual recordings connected with security.</li>
        </ul>
        <p>
        Information about transactions. If you make a financial transaction through our Service or provide payment details (including payment card details), we collect information about the purchase or
        transaction. This includes payment information, billing information, records of services provided, and contact details.
        </p>

        <p>
        Information we collect through automatic data collection technologies. We may collect data regarding your use of the Sites through the use of cookies, web beacons, and other
        automatically collected information. This data may include your IP address; date and time you access the Site and the pages and content you access during your visit; websites that you link to or from; emails
        from us that you open and the links you click on within those emails. Cookies are small identifiers sent from a web server that are stored on your device for the purpose of identifying your browser or storing
        information or settings in your browser. Cookies and similar technologies may also be used to personalize your visit by storing your preferences or displaying content based upon what you have viewed on the Sites
        and other websites. We may use these and similar technologies on the Site and other websites and mobile applications.
        </p>

    <p>
        You may choose to use mobile applications that we make available. Those applications may collect location-based information. In addition, when you use an access card or other access credentials
        to access our locations, we may be able to detect your location. This may be considered geolocation tracking by some regulators.
    </p>

    <p>
        Other parties may collect personally identifiable information about your online activities over time and across third-party websites when you use our website or
        services. We do not respond to “do not track” signals or other mechanisms that provide consumers the ability to exercise choice regarding the collection of personally identifiable
        information about an individual consumer’s online activities over time and across third-party websites or online services.
    </p>

    <p>
        Information from third party sources. Advertisers, application providers, and other third parties provide us information in connection with tools we offer and through tools they
        use to collect information about you when you use our Services. The information they collect may be associated with your personal information or they may collect information about your online
        activities over time. They may use this information to provide you with interest-based advertising or other targeted content.
    <p>`,
    },
    {
      type: "two_column_table",
      items: [
        {
          title: "How we use the information we gather",
          text: `
                <p>We may use data we collect for a variety of purposes, including the following:</p><ul>
                <li>To operate our business and provide our Services to you, which includes managing and controlling access to locations.</li>
                <li>To support events and meetings occurring at our locations.</li>  
                <li>To maintain, analyze, customize, measure and improve our Sites and Services.</li>
                <li>To provide customer support.</li>
                <li>To measure interest in Sessions’ Services, develop new products and Services, and ensure internal quality control.</li>
                <li>To verify your identity.</li>
                <li>To tailor and target content, advertisements, and offers for customers.</li>
                <li>To notify you about and to conduct contests, sweepstakes, rewards, and other promotions. </li>
                <li>To monitor and enforce our Terms of Use or similar terms.</li>
                <li>To comply with law and satisfy our regulatory compliance obligations.</li>
                <li>To detect and prevent fraud and other prohibited, illicit or illegal activity.</li> 
                <li>For other purposes permitted by law or to which you consent.</li>
                </ul>`,
        },
        {
          title: "How we share personal information",
          text: `
                <p>We may share your information with third parties in order to support and provide our Services. For example we may share your information: </p>
                <ul>
                <li>With third party service providers that we have engaged to help deliver our Services and products to you, including co-working space management vendors, event managers, and payment processing providers. We may 
                share aggregated or anonymized data with third parties for our or their purposes.</li>
                <li>With advertisers on our Site. Likewise, we may receive information from affiliates, promotional partners, and event organizers to offer you special items, services, or invite you to events which we think you may be interested in.</li>  
                <li>With event organizers or others who host events in our locations, including name and email address. </li>
                <li>With owners, landlords, or property managers of buildings that we lease. For example, we may share such information in some cases as part of enhanced security measures to monitor and control building access.</li>
                <li>With corporate affiliates including any of our parent companies, subsidiaries, joint ventures, or other companies under common control with us.</li>
                <li>With regulators, law enforcement, governmental authorities, as requested or required.</li>
                <li>With auditors, legal counsel and other third parties in order to comply with our obligation or protect our interests, property or legal rights, or those of our customers or other third parties.</li>
                <li>With companies or other entities in the course of a corporate sale, merger, reorganization, sale of assets, dissolution, or similar event. </li>
                <li>To the extent permitted by law, when required by law, in connection with a court order, or other government or law enforcement authority or regulatory agency, or whenever we believe that disclosing such information is necessary or advisable, 
                for example, to protect the rights, property, interests, or safety of you, ourselves or others.</li>
                </ul>`,
        },
      ],
    },
    {
      type: "three_column_table",
      items: [
        {
          title: "How we secure information",
          text: "We maintain policies and procedures to protect the security of your information and to safeguard against unauthorized access to or use of your data. Of course, despite these measures, no network or system is ever entirely secure and we cannot guarantee the security of networks and systems that we operate or that are operated on our behalf.",
        },
        {
          title: "What choices do you have?",
          text: "Update personal information. If you maintain an online account with us, you can log in to that account to review and change certain information you have provided to us.",
        },
        {
          title: "Links to third party sites",
          text: "We may provide links to websites that are owned or operated by other companies. When you use a link to visit a third-party website, you will be subject to that website’s privacy and security practices, which may differ from ours. You should review the Privacy Notice, terms of use and security practices of the linked third-party website to understand how that site may use your data and/or information. We are not responsible for the privacy or security of these third-party sites, or the accuracy, completeness, or reliability of the information they provide.",
        },
        {
          title: "Children’s privacy rights",
          text: "Our online services are not directed to children under the age of 18. We do not knowingly collect data from children under age 18 without parental consent.",
        },
        {
          title: "Updates to privacy notice",
          text: "We may update this Privacy Notice from time to time in order to provide clarification or notice of changes to our practices. If we make changes, we will revise the Effective Date at the top of this Privacy Notice. Changes to this Privacy Notice will be effective once they are posted unless otherwise indicated.",
        },
        {
          title: "Contact us",
          text: "If you have any questions or concerns about privacy at Sessions, please contact us at legal@knotel.com, by calling (646) 883-6300.",
        },
      ],
    },
  ],
  "privacy-eur": [
    {
      type: "terms_menu",
      items: privacyMenu,
    },
    {
      type: "text_editor",
      text: "<h6>Effective Date of Current Policy: June 17, 2022</h6><br/><h1>Website terms</h1>",
    },
  ],
  "personal-information": [
    {
      type: "terms_menu",
      items: privacyMenu,
    },
    {
      type: "text_editor",
      text: "<h6>Effective Date of Current Policy: June 17, 2022</h6><br/><h1>Website terms</h1>",
    },
  ],
  accessibility: [
    {
      type: "terms_menu",
      items: privacyMenu,
    },
    {
      type: "text_editor",
      text: "<h6>Effective Date of Current Policy: June 17, 2022</h6><br/><h1>Website terms</h1>",
    },
  ],
  "data-access-request": [
    {
      type: "terms_menu",
      items: privacyMenu,
    },
    {
      type: "text_editor",
      text: "<h6>Effective Date of Current Policy: June 17, 2022</h6><br/><h1>Website terms</h1>",
    },
  ],
};

export { data };
