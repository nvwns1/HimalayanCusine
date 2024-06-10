"use client";
import React from "react";
import styles from "./SocialIcons.module.scss";
import { FacebookIconSvg, InstagramIconSvg, TiktokIconSvg } from "@/lib/Svgs";
import { openURLInNewTab } from "@/lib/helper/openURLInNewTab ";
import { restaurantData } from "@/lib/variable/data";

interface ISocialIcons {
  size?: number;
}

const SocialIcons = ({ size = 30 }: ISocialIcons) => {
  return (
    <div className={styles.iconRow}>
      <FacebookIconSvg
        height={size}
        width={size}
        className={styles.icon}
        onClick={() => openURLInNewTab(restaurantData.socialUrls.facebook)}
      />
      <InstagramIconSvg
        height={size}
        width={size}
        className={styles.icon}
        onClick={() => openURLInNewTab(restaurantData.socialUrls.instagram)}
      />
      <TiktokIconSvg
        height={size}
        width={size}
        className={styles.icon}
        onClick={() => openURLInNewTab(restaurantData.socialUrls.tiktok)}
      />
    </div>
  );
};

export default SocialIcons;
