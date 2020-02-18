import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { RoundButton } from "./";

storiesOf("RoundButton", module).add(
  "Purple Round Button",
  withInfo()(() => <RoundButton />)
);
