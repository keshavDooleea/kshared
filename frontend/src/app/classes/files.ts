export interface CustomFiles {
  id: string;
  size: number;
  name: string;
  amazonUrl: string;
  isLocked: boolean;
  innerHtml: string;
}

export interface ActionFile {
  file: CustomFiles;
  index: number;
}
