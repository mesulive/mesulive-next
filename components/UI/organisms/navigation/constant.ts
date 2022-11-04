import { NavigationPath } from "~/components/UI/organisms/navigation/types";

export const NAVIGATION_TOGGLE_DURATION = 225;

export const NAVIGATION_WIDTH = 249;

export const NAVIGATION_PATH: NavigationPath = {
  calc: [
    {
      path: "cube",
      externalLink: "https://cubemesu.co",
    },
    {
      path: "flame",
      disable: true,
    },
  ],
  sim: [
    {
      path: "cube",
      disable: true,
    },
    {
      path: "starforce",
    },
  ],
};
