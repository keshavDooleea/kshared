export interface CustomFiles {
  id: string;
  size: number;
  name: string;
  amazonUrl: string;
  isLocked: boolean;
  innerHtml: string;
}

export interface LockFile {
  file: CustomFiles;
  index: number;
}
