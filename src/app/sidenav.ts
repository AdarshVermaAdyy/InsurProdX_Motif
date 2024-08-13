export interface Sidenav {
  label: string;
	         icon?: string;
	         routerLink?: string | string[];
	         exact?: boolean;
	         subMenu?: Array<Sidenav>;
}
