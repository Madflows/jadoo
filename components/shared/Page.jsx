import Head from "next/head";
import React, { Fragment } from "react";

const Page = ({
  children,
  className,
  style,
  title = "Jadoo - Travel Agency",
}) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <div style={style} className={className}>
        {children}
      </div>
    </Fragment>
  );
};

export default Page;
