import React, { useState, useEffect, useContext } from "react";
import $ from "jquery-slim";

import EnquireModal from "../../components/EnquireModal";
import style from "./style.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { AppContext } from "../../Contexts/AppContext";
import { useRouter } from "next/router";
import { get } from "lodash";

const Layout = ({ children, headerProps, footerProps }) => {
  const [openForm, setOpenForm] = useState(false);
  const { setContext } = useContext(AppContext);
  const [dimesions, setDimensions] = useState({
    height: 0,
    // winWidth: window.innerWidth,
    // winHeight: window.innerHeight,
  });
  const router = useRouter();
  const g = router?.query?.g;
  const route = router?.route;

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
    //Scroll to a section
    let id = "#" + g;
    id = id.replace(/\//g, "");
    if ($(id).length) {
      window.scrollTo({
        top: $(id).offset().top - dimesions.height,
        behavior: "smooth",
      });
    }
  }, [{ route }]);

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
        <div
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
    </>
  );
};

export default Layout;
