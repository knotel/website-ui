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

const Filters = ({ items = [] }) => {
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
  const formOnChange = (list, values) => {
    if (values.floor) {
      list = list.filter((item) => item.floor === values.floor);
    }
    if (values.city) {
      list = list.filter((item) => {
        return (
          item.country.toLowerCase().indexOf(values.city) !== -1 ||
          item.address.toLowerCase().indexOf(values.city) !== -1
        );
      });
    }
    if (values.neighbourhood) {
      list = list.filter(
        (item) =>
          item.address.toLowerCase().indexOf(values.neighbourhood) !== -1
      );
    }
    if (values.date_range) {
      list = list.filter((item) => {
        let itemDate = moment(item.available_date, "X").format("YYYY-MM-DD");
        let dateRange = moment(values.date_range, "X").format("YYYY-MM-DD");
        return moment(itemDate).isSame(dateRange, "day");
      });
    }
    if (values.seat) {
      let seats = parseInt(values.seat);
      if (seats === 0) {
        list = list.filter((item) => item.seat === values.seat);
      } else {
        list = list.filter((item) => {
          return item.seat >= seats && item.seat !== 0;
        });
      }
    }
    if (values.square_feet) {
      let sqft = values.square_feet;
      let length = sqft.split("-");
      list = list.filter((item) => {
        return item.square_feet >= length[0] && item.square_feet <= length[1];
      });
    }
    return list;
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
          onSubmit={(data) => console.log(data)}
          render={({ handleSubmit, values }) => {
            let list = items;
            list = formOnChange(list, values);
            return (
              <>
                <div className={style.filter}>
                  <div className={`section_border_bottom`}></div>
                  <div className={`c`}>
                    <div className={`section_wrap`}>
                      <div className={`section_border_left`}></div>
                      <div className={`section_border_right`}></div>
                      <div className={style.title}>London</div>
                      <div className={style.filters}>
                        <form
                          name="booking_contact"
                          className={style.form}
                          onSubmit={handleSubmit}
                        >
                          <div className={style.form_block}>
                            <Field
                              name="city"
                              component={Dropdown}
                              classes={style.menu}
                              prompt="City"
                              options={{
                                london: "London",
                                birmingham: "Birmingham",
                                conventry: "Conventry",
                                leeds: "Leeds",
                                liverpool: "Liverpool",
                              }}
                              onChange={() => alert("sdyghiu")}
                            />
                            <Field
                              name="neighbourhood"
                              component={Dropdown}
                              classes={style.menu}
                              prompt="Neighbourhood"
                              options={{
                                "greater london": "Greater London",
                                durham: "Durham",
                                dorset: "Dorset",
                              }}
                            />
                            <Field
                              name="date_range"
                              component={DateTime}
                              classes={style.menu}
                              prompt="Date Range"
                              emptyValue={true}
                            />
                            <Field
                              name="seat"
                              component={Dropdown}
                              classes={style.menu}
                              prompt="Seat #"
                              options={{
                                0: "Undefined Seats",
                                10: "10 Above",
                                20: "20 Above",
                              }}
                            />
                            <Field
                              name="floor"
                              component={Dropdown}
                              classes={style.menu}
                              prompt="Floor #"
                              options={{
                                1: "Ground Floor",
                                2: "Second Floor",
                                3: "Thrid Floor",
                              }}
                            />
                            <Field
                              name="square_feet"
                              component={Dropdown}
                              classes={style.menu}
                              prompt="Square Feet"
                              options={{
                                "10000-20000": "10000 - 20000 sqft",
                                "20000-40000": "20000 - 40000 sqft",
                                "40000-80000": "40000 - 80000 sqft",
                              }}
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
                          <div className={style.left}>
                            {list.map((item, index) => {
                              return (
                                <div
                                  className={`section_item ${style.wrapper}`}
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
                                      link="/detail"
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
                                center={{ lat: 51.507222, lng: -0.1275 }}
                                zoom={15}
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
