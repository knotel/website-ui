import React from "react";
import BannerHero from "./BannerHero";
import EnquireForm from "./EnquireForm";
import MenuSection from "./MenuSection";
import Text from "./Text";
import TextImage from "./TextImage";
import TextTable from "./TextTable";
import LeftRightBanner from "./LeftRightBanner";
import Banner from "./Banner";
import TextImageBlock from "./TextImageBlock";
import TextBlock from "./TextBlock";
import TextEditor from "./TextEditor";
import TermsMenu from "./TermsMenu";
import TableTwoColumn from "./TableTwoColumn";
import Amenities from "./Amenities";
import ImageSlider from "./ImageSlider";
import Details from "./Details";
import TextImageSlider from "./TextImageSlider";
import Map from "./Map";
import Filters from "./Filters";
import FindUs from "./FindUs";
import CallToAction from "./CallToAction";
import Features from "./Features";

const Widget = ({ data }) => {
  if (data.type === "hero_banner") {
    return <BannerHero {...data} />;
  }
  if (data.type === "banner") {
    return <Banner {...data} />;
  }
  if (data.type === "left_right_banner") {
    return <LeftRightBanner {...data} />;
  }
  if (data.type === "text") {
    return <Text {...data} />;
  }
  if (data.type === "menu_section") {
    return <MenuSection {...data} />;
  }
  if (data.type === "enquire_form") {
    return <EnquireForm {...data} />;
  }
  if (data.type === "image_with_text") {
    return <TextImage {...data} />;
  }
  if (data.type === "text_table") {
    return <TextTable {...data} />;
  }
  if (data.type === "text_image_block") {
    return <TextImageBlock {...data} />;
  }
  if (data.type === "text_image_slider") {
    return <TextImageSlider {...data} />;
  }
  if (data.type === "text_block") {
    return <TextBlock {...data} />;
  }
  if (data.type === "terms_menu") {
    return <TermsMenu {...data} />;
  }
  if (data.type === "text_editor") {
    return <TextEditor {...data} />;
  }
  if (data.type === "two_column_table") {
    return <TableTwoColumn {...data} />;
  }
  if (data.type === "three_column_table") {
    return <TextTable {...data} />;
  }
  if (data.type === "amenities") {
    return <Amenities {...data} />;
  }
  if (data.type === "image_slider") {
    return <ImageSlider {...data} />;
  }
  if (data.type === "details") {
    return <Details {...data} />;
  }
  if (data.type === "map") {
    return <Map {...data} />;
  }
  if (data.type === "filters") {
    return <Filters {...data} />;
  }
  if (data.type === "find_us") {
    return <FindUs {...data} />;
  }
  if (data.type === "call_to_action") {
    return <CallToAction {...data} />;
  }
  if (data.type === "membership_features") {
    return <Features {...data} />;
  }

  return null;
};

export default Widget;
