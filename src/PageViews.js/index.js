import React from "react";
import Layout from "../pages/Layout";
import Widget from "../pages/Widgets";
import $ from "jquery-slim";
import { AppContext, AppProvider } from "../Contexts/AppContext";

const Page = ({ widgets, headerProps, footerProps }) => {
  return (
    <AppProvider>
      <Layout headerProps={headerProps} footerProps={footerProps}>
        {widgets.map((data, index) => {
          return <Widget data={data} key={`widget_${index}`} />;
        })}
      </Layout>
    </AppProvider>
  );
};

export default Page;
