export interface CategoryCard {
  name: string;
  image: string[];
  subtitle?: string;
  gridColumnPosition?: string;
  gridRowPosition?: string;
  video?: string;
  blurred?: boolean;
  url?: string;
  icon?: string;
  button?: boolean;
  footer?: string;
  delay?: number;
}

export interface Collection extends CategoryCard {}
