import React, { useState, useEffect } from "react";
import { Field, Form } from "react-final-form";
import $ from "jquery-slim";
import moment from "moment";

import { Button, Dropdown, DateTime } from "../../../components/Field";
import GoogleMaps from "../../../components/GoogleMaps";
import Media from "../../../components/Media";

import style from "./style.module.css";
import NormalLink from "../../../components/NormalLink";
import LazyLoad from "../../../components/Lazyload";

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
}) => {

  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (height === 0) {
      offset();
    }
    window.addEventListener("resize", offset);
    return () => {
      window.removeEventListener("resize", offset);
    };
  }, []);

  const offset = () => {
    let windowsHeight = window.innerHeight;
    let wrapperTop = $(`.${style.wrap}`).offsetTop || 214;
    setHeight(parseFloat(windowsHeight) - parseFloat(wrapperTop));
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
            let list = items;
            return (
              <>
                <div className={style.filter}>
                  <div className={`section_border_bottom`}></div>
                  <div className={`c`}>
                    <div className={`section_wrap`}>
                      <div className={`section_border_left`}></div>
                      <div className={`section_border_right`}></div>
                      <div className={style.title}>{city}</div>
                      <div className={style.filters}>
                        <form
                          onChange={handleSubmit}
                          name="booking_contact"
                          className={style.form}
                          // onSubmit={handleSubmit}
                        >
                          <div className={style.form_block}>
                            <Field
                              defaultValue={defaultFilters.city}
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
                            <Field
                              defaultValue={defaultFilters.neighborhood}
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
                              // options={{
                              //   0: "Undefined Seats",
                              //   10: "10 Above",
                              //   20: "20 Above",
                              // }}
                              options={seatOptions}
                            />
                            <Field
                              defaultValue={defaultFilters.floor}
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
                            <Field
                              defaultValue={defaultFilters.size}
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
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`c`}>
                  <div className={`section_wrap col_50_50`}>
                    <div className={`section_border_left`}></div>
                    <div className={`section_border_right`}></div>
                    <div className={`section_border_bottom`}></div>
                    <div className={`section_border_middle`}></div>
                    {list.length > 0 && (
                      <div
                        className={style.wrap}
                        style={{ height: `${height}px` }}
                      >
                        <>
                          <div id="listings_cont" className={style.left}>
                            {list.map((item, index) => {
                              return (
                                <div
                                  data-latitude={item.lat}
                                  data-longitude={item.lng}
                                  onMouseOver={(e) => {
                                    onMouseOverListing?.(e);
                                    setCenter({ lat: item.lat, lng: item.lng });
                                  }}
                                  className={`section_item ${style.wrapper} listing_item`}
                                  key={`location_details_${index}`}
                                >
                                  <div
                                    className={`section_item_border_bottom`}
                                  ></div>
                                  <div className={style.image}>
                                    <div className={style.sizer}></div>
                                    <Media
                                      className={style.item_img}
                                      src={item.image}
                                    />
                                  </div>
                                  <div className={style.content}>
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
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          <div className={style.right}>
                            <div className={style.map}>
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
                          </div>
                        </>
                      </div>
                    )}
                  </div>
                </div>
                {list.length === 0 && (
                  <div
                    className={style.noitem}
                    style={{ height: `${height}px` }}
                  >
                    {"No Office were found"}
                  </div>
                )}
              </>
            );
          }}
        />
      </LazyLoad>
    </>
  );
};

export default Filters;
