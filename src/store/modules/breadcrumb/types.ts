export interface IBreadcrumbItem {
  text: string;
  to?: {
    name: string,
  };
  active?: boolean;
}

export interface IBreadcrumbState {
  items: IBreadcrumbItem[];
}
