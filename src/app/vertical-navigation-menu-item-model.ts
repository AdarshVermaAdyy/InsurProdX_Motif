export interface VerticalNavigationMenuItemModel {
  label: string;
  icon?: string;
  routerLink?: string | string[];
  exact?: boolean;
  subMenu?: Array<VerticalNavigationMenuItemModel>;
};
