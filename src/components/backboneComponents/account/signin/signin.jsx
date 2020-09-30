import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button, Input, Layout } from "antd";

import "antd/dist/antd.css";

import { SIGNIN_ACTIONS } from "../../../../redux/account/signin/signinActions";

const Signin = (props) => {
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
            <span>Username: </span>
            <Input
              name="username"
              type="text"
              value={props.username}
              onChange={(event) =>
                props.signinStateUpdate(event.target.name, event.target.value)
              }
            />
            <span>Password: </span>
            <Input.Password
              name="password"
              type="password"
              value={props.password}
              onChange={(event) =>
                props.signinStateUpdate(event.target.name, event.target.value)
              }
            />
            <Button
              type="danger"
              onClick={props.signinClick}
              className={props.accountStyles["button"]}
            >
              Continue
            </Button>
          </div>
        </Layout.Content>
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => ({ ...state.signin });

const mapDispatchToProps = (dispatch) => ({
  signinStateUpdate: (key, payload) =>
    dispatch({ type: SIGNIN_ACTIONS.UPDATE_STATE, key: key, payload: payload }),
  signinClick: () => dispatch({ type: SIGNIN_ACTIONS.SIGNIN }),
  unload: () => dispatch({ type: SIGNIN_ACTIONS.UNLOAD }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
