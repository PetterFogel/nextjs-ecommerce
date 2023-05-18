"use client";
import { aboutContent } from "@/common/constants/aboutContent";
import { Typography } from "@mui/material";
import { NextPage } from "next";
import { AboutSection } from "./AboutSection";
import { aboutPageStyles } from "./style/aboutPageStyles";

const AboutPage: NextPage = () => {
  const { classes } = aboutPageStyles();
  return (
    <div className={classes.root}>
      <Typography variant={"h2"}>About</Typography>
      {aboutContent.map((content) => (
        <AboutSection key={content.id} content={content} />
      ))}
    </div>
  );
};

export default AboutPage;
