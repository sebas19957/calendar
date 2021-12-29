import React from "react";
import { Typography, Box } from "@material-ui/core";
import clsx from "clsx";

import useStyles from "./styles";

interface ComponentProps {
  text: string;
  fontSize?: number | string;
  className?: string;
}

const Title = ({ text, fontSize, className }: ComponentProps) => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        className={clsx(classes.title, className)}
        style={{
          fontSize: fontSize ?? "35px",
        }}
      >
        {text}
      </Typography>
      <Box className={classes.border} />
    </div>
  );
};

export default Title;
