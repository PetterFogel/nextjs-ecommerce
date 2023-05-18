import { FC } from "react";
import { Typography } from "@mui/material";
import { IAboutContent } from "@/types/aboutContent";
import { aboutPageStyles } from "./style/aboutPageStyles";
import Image from "next/legacy/image";

interface Props {
  content: IAboutContent;
}

export const AboutSection: FC<Props> = ({ content }) => {
  const { classes } = aboutPageStyles();
  return (
    <div className={classes.contentRow}>
      <Image
        alt={content.title}
        src={content.imgUrl}
        layout="responsive"
        width={"500"}
        height={"590"}
      />
      <div className={classes.contentInfo}>
        <div className={classes.contentHolder}>
          <Typography variant={"h3"} mb={2}>
            {content.title}
          </Typography>
          <Typography variant={"subtitle1"}>{content.paragraph}</Typography>
        </div>
      </div>
    </div>
  );
};
