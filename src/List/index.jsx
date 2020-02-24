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
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>

            </Panel>
        </FlexWrapper>
    )
);

