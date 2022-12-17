export const NAVIGATION_TOGGLE_DURATION = 225;

export const NAVIGATION_WIDTH = 265;

export const NAVIGATION_LINK_SELECTED_CLASSNAME = "navigation-link-selected";

export const NAVIGATION_LINK_HOVER_BOX_CLASSNAME = "navigation-link-hover-box";

export const NAVIGATION_LINK_INFO_BOX_CLASSNAME = "navigation-link-info-box";

export const NAVIGATION_LINK_HOVER_BOX_ANIMATION_DURATION = 200;

export class NavigationUtilClass {
  private timeoutId: NodeJS.Timeout | number | undefined = undefined;

  public clearTimeout = () => {
    clearTimeout(this.timeoutId);
    this.timeoutId = undefined;
  };

  public startTimeout = (callback: () => void, duration: number) => {
    if (this.timeoutId) {
      this.clearTimeout();
    }
    this.timeoutId = setTimeout(callback, duration);
  };
}

export const NavigationUtil = new NavigationUtilClass();
