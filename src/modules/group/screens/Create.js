import React from "react";
import {Subscribe} from "unstated";

import GroupContainer from "../container";

const CreateScreen = () => (
  <Subscribe to={[GroupContainer]}>
    {group => {
      console.log("group: ", group);

      return <div>{`<CreateScreen />`}</div>;
    }}
  </Subscribe>
);

export default CreateScreen;
