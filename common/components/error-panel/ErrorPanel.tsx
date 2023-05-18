import { FC } from "react";
import { Alert, Button, Typography } from "@mui/material";
import { errorPanelStyles } from "./style/errorPanelStyle";

interface Props {
  errorMsg: string;
  onResetClick: () => void;
}

export const ErrorPanel: FC<Props> = ({ errorMsg, onResetClick }) => {
  const { classes } = errorPanelStyles();
  return (
    <div className={classes.root}>
      <Alert
        variant={"outlined"}
        severity={"error"}
        className={classes.errorPanel}>
        <div className={classes.infoPanel}>
          <Typography variant={"h2"} mb={2}>
            {errorMsg}
          </Typography>
          <Typography variant={"h3"} mb={3}>
            If the problem remains, please contact us!
          </Typography>

          <Button onClick={onResetClick}>Please try again</Button>
        </div>
      </Alert>
    </div>
  );
};
