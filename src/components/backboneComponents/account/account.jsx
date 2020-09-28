import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import "antd/dist/antd.css";
import AccountStyles from "./account.less";
import Signin from "../account/signin/signin.jsx";
import Signup from "../account/signup/signup.jsx";
import ContinueWithThirdParty from "../account/continueWithThirdParty/continueWithThirdParty.jsx";
import { ACCOUNT_ACTIONS } from "../../../redux/account/accountActions";
import { AccountAuthenticationTypes } from "../../../enums/account";

const Account = (props) => {
  let { path, url } = useRouteMatch();
  console.log(
    "hhhhhhhhhhhhhhhhhhhhhhhhhhhh" + props.accountAuthenticationTypes
  );
  return (
    <>
      <Row>
        <Col span={16}>
          <img
            className={AccountStyles["image"]}
            src="./public/images/blood-donation-facts-account.png"
          />
        </Col>
        <Col span={8}>
          <section className={AccountStyles["account-section"]}>
            <Row>
              <Switch>
                <Route path={`${path}/signin`}>
                  <Signin />
                </Route>
                <Route path={`${path}/signup`}>
                  <Signup />
                </Route>
                <Route path={path}>
                  <Signin />
                </Route>
              </Switch>
            </Row>
            {props.accountAuthenticationTypes ==
            AccountAuthenticationTypes.Signup ? (
              <Row>
                <Link
                  className={AccountStyles["sign-links"]}
                  to={`${url}/signin`}
                  onClick={() =>
                    props.setAuthenticationTypes(
                      AccountAuthenticationTypes.Signin
                    )
                  }
                >
                  Already have an account? Sign in
                </Link>
              </Row>
            ) : null}
            {props.accountAuthenticationTypes ==
            AccountAuthenticationTypes.Signin ? (
              <Row>
                <Link
                  className={AccountStyles["sign-links"]}
                  to={`${url}/signup`}
                  onClick={() =>
                    props.setAuthenticationTypes(
                      AccountAuthenticationTypes.Signup
                    )
                  }
                >
                  Don't have an account? Sign up
                </Link>
              </Row>
            ) : null}

            <Row>
              <span className={AccountStyles["or-text"]}> OR </span>
            </Row>
            <Row>
              <ContinueWithThirdParty />
            </Row>
          </section>
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => ({ ...state.account });

const mapDispatchToProps = (dispatch) => ({
  setAuthenticationTypes: (payload) =>
    dispatch({
      type: ACCOUNT_ACTIONS.CHANGE_AUTHENTICATION_TYPE,
      payload: payload,
    }),
  unload: () => dispatch({ type: SIGNIN_ACTIONS.UNLOADED }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
