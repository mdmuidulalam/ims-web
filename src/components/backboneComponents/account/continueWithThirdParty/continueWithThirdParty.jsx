import React, { useEffect } from "react";
import { Button, Layout } from "antd";
import { AiOutlineGoogle } from "react-icons/ai";
import { GrFacebook } from "react-icons/gr";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import "antd/dist/antd.css";

const ContinueWithThirdParty = (props) => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div>
      <Layout className={props.accountStyles["layout"]}>
        <Layout.Content>
          <div className="site-layout-content">
            <GoogleLogin
              clientId="874622612462-h9nll9m83sv9b03f0qdai2is922vkd8u.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  type="danger"
                  className={props.accountStyles["button"]}
                  onClick={renderProps.onClick}
                >
                  <span>
                    <AiOutlineGoogle size={22} />
                    <span>Continue with Google</span>
                  </span>
                </Button>
              )}
              buttonText="Continue with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              className={props.accountStyles["button"]}
            />
            <FacebookLogin
              appId="349637109365126"
              callback={responseFacebook}
              render={(renderProps) => (
                <Button
                  type="danger"
                  className={props.accountStyles["button"]}
                  onClick={renderProps.onClick}
                >
                  <span>
                    <GrFacebook size={22} />
                    <span>Continue with Facebook</span>
                  </span>
                </Button>
              )}
              callback={responseFacebook}
              fields="name,email,picture"
            />
          </div>
        </Layout.Content>
      </Layout>
    </div>
  );
};
export default ContinueWithThirdParty;
