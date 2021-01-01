export interface Dashboard {
  users: [
    {
      username: string;
      stars: number;
      fileSize: string;
    }
  ];
  notesLength: number;
  files: {
    mongoLength: number;
    amazonLength: number;
    totalLength: number;
    totalSize: string;
  };
}
