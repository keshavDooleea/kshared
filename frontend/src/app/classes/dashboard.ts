export interface Dashboard {
  users: [
    {
      username: string;
      stars: number;
      notes: number;
      files: number;
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
