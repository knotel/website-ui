import React, { useState, useEffect, useContext } from "react";
import $ from "jquery-slim";

import EnquireModal from "../../components/EnquireModal";
import GiftCardModal from '../Widgets/GiftCardModal';
import CampaignModal from '../Widgets/CampaignModal';
import ContactModal from '../Widgets/ContactModal';
import style from "./style.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { AppContext } from "../../Contexts/AppContext";
import { useRouter } from "next/router";
import { get } from "lodash";

const Layout = ({ children, headerProps, footerProps }) => {
  const [openForm, setOpenForm] = useState(false);
  const [openGiftCardForm, setOpenGiftCardForm] = useState(false);
  const [openCampaignForm, setOpenCampaignForm] = useState(false);
  const [openContactFormModal, setOpenContactFormModal] = useState(false);
  const { setContext } = useContext(AppContext);
  const [dimesions, setDimensions] = useState({
    height: 0,
    // winWidth: window.innerWidth,
    // winHeight: window.innerHeight,
  });
  const router = useRouter();

  function updateDimensions() {
    const _dimensions = {
      height: $(`.${style.header}`).outerHeight(),
      winHeight: $(window).height(),
      width: $(window).outerWidth(),
      winWidth: $(window).width(),
      footerHeight: $(`.${style.footer}`).height(),
    };
    setDimensions(_dimensions);
    setContext(_dimensions);
  }

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    const o = router?.query?.o;
    const route = router?.route;
    const city = router?.query?.city;
    //Open gift card form
    if (o === "gift-card-form" && route === "/offices/[city]" && city == "miami") {
      setOpenGiftCardForm(true);
      return;
    }

    // Open campaign form modal
    if (o === "campaign-us" || o === "campaign-europe") {
      setOpenCampaignForm(true);
      return;
    }
    
    // Open contact form modal
    if (o === "contact") {
      setOpenContactFormModal(true);
      return;
    }

    //Scroll to a section
    const g = router?.query?.g;
    let id = "#" + g;
    id = id.replace(/\//g, "");
    if ($(id).length) {
      window.scrollTo({
        top: $(id).offset().top - dimesions.height,
        behavior: "smooth",
      });
    }
  }, [router?.asPath, router?.query]);

  return (
    <>
      <Header
        close_icon={headerProps.close_icon}
        logo={headerProps.logo}
        links={headerProps.links}
        setOpenForm={(e) => {
          setOpenForm(e);
        }}
        width={dimesions.winWidth}
        offset={dimesions.height}
      />
      <div className="viewport">
        <a className="skipLink" href="#main-content">Skip to main content</a>
        <div
          id="main-content"
          role="main"
          className={`content`}
          style={{
            paddingTop: dimesions.height,
            minHeight: `calc(100vh - ${get(dimesions, "footerHeight", 0)}px)`,
          }}
        >
          {children}
        </div>
      </div>
      <Footer
        footerProps={footerProps}
        setOpenForm={(e) => {
          setOpenForm(e);
        }}
        width={dimesions.winWidth}
      />
      {openForm === "enquire-form" && (
        <EnquireModal
          {...headerProps.contactForm}
          onClose={() => setOpenForm(false)}
        />
      )}
      {openGiftCardForm === true && (
        <GiftCardModal {...headerProps.giftForm} onClose={() => setOpenGiftCardForm(false)} />
      )}
      {openCampaignForm === true && (
        <CampaignModal {...headerProps.campaignForm} onClose={() => setOpenCampaignForm(false)} campaign={router?.query?.o} />
      )}
      {openContactFormModal === true && (
        <ContactModal {...headerProps.contactForm} onClose={() => setOpenContactFormModal(false)} />
      )}
    </>
  );
};

export default Layout;
