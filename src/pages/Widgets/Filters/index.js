import React, { useState, useEffect, useRef, useContext } from "react";
import { Field, Form } from "react-final-form";
import $ from "jquery-slim";
import { isEqual, isEmpty } from "lodash";
import moment from "moment";
import { EqualHeight, EqualHeightElement } from "react-equal-height/clean";

import { Button, Dropdown, DateTime } from "../../../components/Field";
import GoogleMaps from "../../../components/GoogleMaps";
import Media from "../../../components/Media";

import style from "./style.module.css";
import NormalLink from "../../../components/NormalLink";
import LazyLoad from "../../../components/Lazyload";
import DialogBox from "../../../components/DialogBox";
import { AppContext } from "../../../Contexts/AppContext";

const Filters = ({
  items = [],
  cityOptions,
  neighborhoodOptions,
  seatOptions,
  floorOptions,
  sizeOptions,
  city,
  APIKey,
  markerIcon,
  mapCenter,
  setCenter,
  onMarkerPress,
  onMouseOverListing,
  onFilterChanged,
  defaultFilters,
  bi_map,
  listIcon,
  arrow,
  funnel,
  close_icon,
}) => {
  const [height, setHeight] = useState(0);

  const {
    appContext: { winWidth, winHeight, height: _height },
  } = useContext(AppContext);

  const [mapHeight, setMapHeight] = useState("calc(100vh - 140px)");
  const [filter, setOpenFilter] = useState(false);
  const [listLength, setLength] = useState(0);
  const [element, setElement] = useState("locations");
  const navBarHeight = _height || 88;

  useEffect(() => {
    if (!winHeight || !winWidth) return;
    setTimeout(() => {
      offset();
    }, 100);
    window.addEventListener("resize", offset);
    return () => {
      window.removeEventListener("resize", offset);
    };
  }, [winHeight, winWidth]);

  useEffect(() => {
    if (!winHeight || !winWidth) return;
    offset();
  }, [element, winHeight, winWidth]);

  const onChangeRef = useRef();
  const onMobileChangeRef = useRef();
  const mobileValuesRef = useRef();

  const offset = () => {
    const isMapSection = $(`.${style.left}`).hasClass(style.hide);
    if (winWidth > 820 || isMapSection) {
      setHeight(
        `${
          parseFloat(winHeight) -
          parseFloat(fetchHeight("filter_bar") + navBarHeight)
        }px`
      );
      setMapHeight(
        winWidth > 820
          ? `100%`
          : `calc(100% - ${fetchHeight(style.map_block)}px)`
      );
    } else {
      setHeight("auto");
      setMapHeight(`calc(100% - ${fetchHeight(style.map_block)}px)`);
    }
    if (listLength === 0) {
      setHeight(
        `${
          parseFloat(winHeight) -
          parseFloat(fetchHeight("filter_bar") + navBarHeight)
        }px`
      );
    }
  };

  const fetchHeight = (clsName) => {
    const ele = document.getElementsByClassName(clsName);
    if (ele.length > 0) {
      return parseFloat(ele[0].clientHeight);
    }
  };

  return (
    <>
      {" "}
      <LazyLoad
        lazyLoadClass={`section_wrap has_border`}
        animatedClass="animated"
        rootMargin="-20%"
      >
        <Form
          onSubmit={(data) => onFilterChanged(data)}
          render={({ handleSubmit, values }) => {
            if (!onChangeRef.current && !isEmpty(values)) {
              onChangeRef.current = values;
            } else if (!isEqual(onChangeRef.current, values)) {
              onChangeRef.current = values;
              handleSubmit(values);
            }

            let list = items;
            return (
              <>
                <div className={style.filter}>
                  <div className={`section_border_bottom`}></div>
                  <div className={`c`}>
                    <div className={`section_wrap filter_bar`}>
                      <div className={`section_border_left`}></div>
                      <div className={`section_border_right`}></div>
                      <div className={style.top_wrapper}>
                        <div className={style.title}>{city}</div>
                        <div className={style.filters}>
                          <form name="booking_contact" className={style.form}>
                            <div className={style.form_block}>
                              <div className={style.filter_block}>
                                <Field
                                  initialValue={defaultFilters.city}
                                  name="city"
                                  component={Dropdown}
                                  classes={style.menu}
                                  prompt="City"
                                  // options={{
                                  //   london: "London",
                                  //   birmingham: "Birmingham",
                                  //   conventry: "Conventry",
                                  //   leeds: "Leeds",
                                  //   liverpool: "Liverpool",
                                  // }}
                                  options={cityOptions}
                                  onChange={() => alert("sdyghiu")}
                                />
                              </div>
                              <div className={style.filter_block}>
                                <Field
                                  initialValue={defaultFilters.neighborhood}
                                  name="neighborhood"
                                  component={Dropdown}
                                  classes={style.menu}
                                  prompt="Neighborhood"
                                  // options={{
                                  //   "greater london": "Greater London",
                                  //   durham: "Durham",
                                  //   dorset: "Dorset",
                                  // }}
                                  options={neighborhoodOptions}
                                />
                              </div>
                              <div className={style.filter_block}>
                                <Field
                                  initialValue={defaultFilters.availableFrom}
                                  name="availableFrom"
                                  component={DateTime}
                                  classes={style.menu}
                                  prompt="Date Range"
                                  emptyValue={""}
                                />
                              </div>
                              <div className={style.filter_block}>
                                <Field
                                  initialValue={defaultFilters.seatCapacity}
                                  name="seatCapacity"
                                  component={Dropdown}
                                  classes={style.menu}
                                  prompt="Seat #"
                                  // options={{
                                  //   0: "Undefined Seats",
                                  //   10: "10 Above",
                                  //   20: "20 Above",
                                  // }}
                                  options={seatOptions}
                                />
                              </div>
                              <div className={style.filter_block}>
                                <Field
                                  initialValue={defaultFilters.floor}
                                  name="floor"
                                  component={Dropdown}
                                  classes={style.menu}
                                  prompt="Floor #"
                                  // options={{
                                  //   1: "Ground Floor",
                                  //   2: "Second Floor",
                                  //   3: "Thrid Floor",
                                  // }}
                                  options={floorOptions}
                                />
                              </div>
                              <div className={style.filter_block}>
                                <Field
                                  initialValue={defaultFilters.size}
                                  name="size"
                                  component={Dropdown}
                                  classes={style.menu}
                                  prompt="Square Feet"
                                  // options={{
                                  //   "10000-20000": "10000 - 20000 sqft",
                                  //   "20000-40000": "20000 - 40000 sqft",
                                  //   "40000-80000": "40000 - 80000 sqft",
                                  // }}
                                  options={sizeOptions}
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className={style.icons}>
                          {element === "locations" && (
                            <div
                              onClick={() => {
                                setElement("map");
                              }}
                              className={style.icon}
                            >
                              <img src={bi_map} alt={`map_icon`} />
                            </div>
                          )}
                          {element === "map" && (
                            <div
                              onClick={() => {
                                setElement("locations");
                              }}
                              className={style.icon}
                            >
                              <img src={listIcon} alt={`map_icon`} />
                            </div>
                          )}
                          <div
                            onClick={() => {
                              setOpenFilter(true);
                            }}
                            className={style.icon}
                          >
                            <img src={funnel} alt={`funnel`} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`c`}>
                  <div className={`section_wrap filter_midline col_50_50`}>
                    <div className={`section_border_left`}></div>
                    <div className={`section_border_right`}></div>
                    <div className={`section_border_bottom`}></div>
                    <div className={`section_border_middle`}></div>
                    {list.length > 0 && (
                      <div className={style.wrap} style={{ height: height }}>
                        <>
                          <div
                            id="listings_cont"
                            className={`${
                              element !== "locations" ? `${style.hide} ` : ""
                            }${style.left}`}
                          >
                            {list.map((item, index) => {
                              return (
                                <EqualHeight>
                                  <div
                                    data-latitude={item.lat}
                                    data-longitude={item.lng}
                                    onMouseOver={(e) => {
                                      onMouseOverListing?.(e);
                                      setCenter({
                                        lat: item.lat,
                                        lng: item.lng,
                                      });
                                    }}
                                    className={`section_item filters_block ${style.wrapper} listing_item`}
                                    key={`location_details_${index}`}
                                  >
                                    <div
                                      className={`section_item_border_bottom`}
                                    ></div>
                                    <div className={style.image}>
                                      <EqualHeightElement name="FiltersBlock">
                                        <div className={style.sizer}></div>
                                        <Media
                                          className={style.item_img}
                                          src={item.image}
                                        />
                                      </EqualHeightElement>
                                    </div>
                                    <div className={style.content}>
                                      <EqualHeightElement name="FiltersBlock">
                                        <div className={style.country}>
                                          {item.country}
                                        </div>
                                        <div className={style.place}>
                                          {item.place}
                                        </div>
                                        <div className={style.address}>
                                          {item.address}
                                        </div>
                                        <div className={style.details}>
                                          {item.list.map((value, j) => {
                                            return (
                                              <div
                                                className={style.text_wrap}
                                                key={`about_location_${j}`}
                                              >
                                                <div className={style.icon}>
                                                  <img
                                                    src={value.icon}
                                                    alt={`${value.label} icon`}
                                                  />
                                                </div>
                                                <div className={style.label}>
                                                  {value.label}
                                                </div>
                                                {value.value && (
                                                  <div className={style.value}>
                                                    {value.value}
                                                  </div>
                                                )}
                                                {value.link && (
                                                  <NormalLink
                                                    link="/"
                                                    className={style.link}
                                                  >
                                                    {" "}
                                                    {value.link}
                                                  </NormalLink>
                                                )}
                                              </div>
                                            );
                                          })}
                                        </div>
                                        <Button
                                          link={item.link}
                                          className={style.more}
                                          label={"More Details"}
                                        />
                                      </EqualHeightElement>
                                    </div>
                                  </div>
                                </EqualHeight>
                              );
                            })}
                          </div>
                          <div
                            className={`google_map ${
                              element !== "map" ? `${style.hide} ` : ""
                            }${style.right}`}
                          >
                            <div
                              className={style.map}
                              style={{ height: mapHeight }}
                            >
                              <GoogleMaps
                                markers={list.map((x) => ({
                                  loc: { lat: x.lat, lng: x.lng },
                                }))}
                                center={
                                  mapCenter || {
                                    lat: list[0].lat,
                                    lng: list[0].lng,
                                  }
                                }
                                zoom={15}
                                APIKey={APIKey}
                                markerIcon={markerIcon}
                                onMarkerPress={onMarkerPress}
                              />
                            </div>
                            {winWidth < 821 && (
                              <div className={style.map_block}>
                                <div className={style.image}>
                                  <div className={style.sizer}></div>
                                  <Media
                                    className={style.item_img}
                                    src={list[0].image}
                                  />
                                </div>
                                <div className={style.content}>
                                  <div className={style.country}>
                                    {list[0].country}
                                  </div>
                                  <div className={style.place}>
                                    {list[0].place}
                                  </div>
                                  <div className={style.address}>
                                    {list[0].address}
                                  </div>
                                </div>
                                <NormalLink
                                  className={style.arrow_icon}
                                  link="/detail"
                                >
                                  <img src={arrow} alt={`next_arrow`} />
                                </NormalLink>
                              </div>
                            )}
                          </div>
                        </>
                      </div>
                    )}
                  </div>
                </div>
                {list.length === 0 && (
                  <div className={style.noitem} style={{ height: height }}>
                    <div className={style.noitem_text}>
                      {"No Office were found"}
                    </div>
                  </div>
                )}
              </>
            );
          }}
        />
      </LazyLoad>
      {filter === true && (
        <DialogBox
          close_icon={close_icon}
          classes={`mobileFilter`}
          onClose={() => {
            if (!isEmpty(mobileValuesRef.current)) {
              onFilterChanged(mobileValuesRef.current);
            }
            setOpenFilter(false);
          }}
          close={true}
          content={() => (
            <LazyLoad
              lazyLoadClass={`section_wrap`}
              animatedClass="animated"
              rootMargin="-20%"
            >
              <div className={`section_border_top`}></div>
              <div className={`section_border_bottom`}></div>
              <div className={style.filter_padd} style={{ paddingTop: offset }}>
                <div className={style.modal_top}>Filters</div>
                <Form
                  onSubmit={(data) => {
                    mobileValuesRef.current = data;
                  }}
                  render={({ handleSubmit, values }) => {
                    if (!onMobileChangeRef.current && !isEmpty(values)) {
                      onMobileChangeRef.current = values;
                    } else if (!isEqual(onMobileChangeRef.current, values)) {
                      onMobileChangeRef.current = values;
                      handleSubmit(values);
                    }

                    let list = items;
                    return (
                      <>
                        <div className={`c`}>
                          <form
                            name="booking_contact"
                            className={style.modal_form}
                            onSubmit={handleSubmit}
                          >
                            <div className={`section_border_left`}></div>
                            <div className={`section_border_right`}></div>
                            <div
                              className={`office_filter ${style.filter_block}`}
                            >
                              <Field
                                defaultValue={defaultFilters.city}
                                name="city"
                                component={Dropdown}
                                classes={style.menu}
                                prompt="City"
                                options={cityOptions}
                              />
                              <Field
                                defaultValue={defaultFilters.neighborhood}
                                name="neighborhood"
                                component={Dropdown}
                                classes={style.menu}
                                prompt="Neighborhood"
                                options={neighborhoodOptions}
                              />
                              <Field
                                defaultValue={defaultFilters.availableFrom}
                                name="availableFrom"
                                component={DateTime}
                                classes={style.menu}
                                prompt="Date Range"
                                emptyValue={""}
                              />
                              <Field
                                defaultValue={defaultFilters.seatCapacity}
                                name="seatCapacity"
                                component={Dropdown}
                                classes={style.menu}
                                prompt="Seat #"
                                options={seatOptions}
                              />
                              <Field
                                defaultValue={defaultFilters.floor}
                                name="floor"
                                component={Dropdown}
                                classes={style.menu}
                                prompt="Floor #"
                                options={floorOptions}
                              />
                              <Field
                                defaultValue={defaultFilters.size}
                                name="size"
                                component={Dropdown}
                                classes={style.menu}
                                prompt="Square Feet"
                                options={sizeOptions}
                              />
                            </div>
                          </form>
                        </div>
                      </>
                    );
                  }}
                />
              </div>
            </LazyLoad>
          )}
        />
      )}
    </>
  );
};

export default Filters;
