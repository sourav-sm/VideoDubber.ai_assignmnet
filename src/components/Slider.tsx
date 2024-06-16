import React from 'react';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  sliderContainer: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  sliderContent: {
    display: 'inline-block',
    marginTop:'10px',
    marginBottom:'30px',
    fontSize:'25px',
    animation: 'slide 20s linear infinite', // Increased duration to 20s
  },
  sliderItem: {
    display: 'inline-block',
    marginRight: theme.spacing.lg,
  },
  '@keyframes slide': {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-100%)' },
  },
}));

export const Slider = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.sliderContainer}>
      <div className={classes.sliderContent}>
        <h2 className={classes.sliderItem}>Google</h2>
        <h2 className={classes.sliderItem}>Amazon</h2>
        <h2 className={classes.sliderItem}>Meta</h2>
        <h2 className={classes.sliderItem}>Visa</h2>
        <h2 className={classes.sliderItem}>MERCK</h2>
        <h2 className={classes.sliderItem}>UBS</h2>
        <h2 className={classes.sliderItem}>BBC</h2>
        <h2 className={classes.sliderItem}>TARGET</h2>
        <h2 className={classes.sliderItem}>NBCUniversal</h2>
        <h2 className={classes.sliderItem}>NETFLIX</h2>
        {/* Repeat elements to create a seamless loop */}
        <h2 className={classes.sliderItem}>Google</h2>
        <h2 className={classes.sliderItem}>Amazon</h2>
        <h2 className={classes.sliderItem}>Meta</h2>
        <h2 className={classes.sliderItem}>Visa</h2>
        <h2 className={classes.sliderItem}>MERCK</h2>
        <h2 className={classes.sliderItem}>UBS</h2>
        <h2 className={classes.sliderItem}>BBC</h2>
        <h2 className={classes.sliderItem}>TARGET</h2>
        <h2 className={classes.sliderItem}>NBCUniversal</h2>
        <h2 className={classes.sliderItem}>NETFLIX</h2>
      </div>
    </div>
  );
}

