import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button, Input, Layout } from "antd";

import "antd/dist/antd.css";
import { SIGNUP_ACTIONS } from "../../../../redux/account/signup/signupActions";

const Signup = (props) => {
  useEffect(() => {
    return () => {
      props.unload();
    };
  }, []);

  return (
    <>
      <Layout className={props.accountStyles["layout"]}>
        <Layout.Content>
          <div className="site-layout-content">
            <span>Full Name: </span>
            <Input
              name="fullName"
              type="text"
              value={props.fullName}
              onChange={(event) =>
                props.signupStateUpdate(event.target.name, event.target.value)
              }
            />
            <span>Email: </span>
            <Input
              name="email"
              type="email"
              value={props.email}
              onChange={(event) =>
                props.signupStateUpdate(event.target.name, event.target.value)
              }
            />
            <span>Password: </span>
            <Input.Password
              name="password"
              type="password"
              value={props.password}
              onChange={(event) =>
                props.signupStateUpdate(event.target.name, event.target.value)
              }
            />
            <Button
              type="danger"
              className={props.accountStyles["button"]}
              onClick={props.signupClick}
            >
              Continue
            </Button>
          </div>
        </Layout.Content>
      </Layout>
    </>
  );
};
const mapStateToProps = (state) => ({ ...state.signup });

const mapDispatchToProps = (dispatch) => ({
  signupStateUpdate: (key, payload) =>
    dispatch({ type: SIGNUP_ACTIONS.UPDATE_STATE, key: key, payload: payload }),
  signupClick: () => dispatch({ type: SIGNUP_ACTIONS.SIGNUP_SAGA }),
  unload: () => dispatch({ type: SIGNUP_ACTIONS.UNLOAD }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
