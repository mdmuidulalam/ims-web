import React, { useEffect } from "react";
import { Button, Input, Layout } from "antd";

import "antd/dist/antd.css";
import SignupStyles from "./signup.less";

const Signup = () => {
  return (
    <>
      <Layout className={SignupStyles["layout"]}>
        <Layout.Content>
          <div className="site-layout-content">
            <span>Email: </span>
            <Input name="Email" type="text" />
            <span>Full Name: </span>
            <Input name="FullName" type="text" />
            <span>Password: </span>
            <Input.Password name="password" type="password" />
            <Button type="danger" className={SignupStyles["button"]}>
              Continue
            </Button>
          </div>
        </Layout.Content>
      </Layout>
    </>
  );
};

export default Signup;
