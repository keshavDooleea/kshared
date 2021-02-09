export interface CustomFiles {
  _id: string;
  size: number;
  name: string;
  amazonName?: string;
  amazonURL?: string;
  isLocked: boolean;
  innerHTML: string;
  base64?: string;
  isMongoFile: boolean;
}
