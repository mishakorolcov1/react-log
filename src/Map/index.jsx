import React from "react";
import { FlexWrapper, Panel, } from "../Components";
import { Redirect } from "react-router-dom";
import { withAuth } from "../Auth";

export default withAuth(({ isAuthorized,  }) =>
    isAuthorized ? (
        <Redirect to="/" />
    ) : (
        <FlexWrapper>
            <Panel>
              <h1>map</h1>

            </Panel>
        </FlexWrapper>
    )
);


