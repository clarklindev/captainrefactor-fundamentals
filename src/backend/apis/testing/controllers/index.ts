import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';

const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'clark',
    email: 'clark@test.com',
    password: 'password',
  },
  {
    id: 'u2',
    name: 'Ted',
    email: 'ted@test.com',
    password: 'password',
  },
  { id: 'u3', name: 'Ben', email: 'ben@test.com', password: 'password' },
  { id: 'u4', name: 'Sofie', email: 'sofie@test.com', password: 'password' },
];

export const getRoot = (req: Request, res: Response) => {
  res.json({ status: 'Hello, world!' });
};

export const getCurrentTime = (req: Request, res: Response) => {
  const now = new Date();
  const dateObj = {
    date: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`,
    time: now.toLocaleString('en-us', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }),
  };
  res.send(dateObj);
};

export const getUsers = (req: Request, res: Response) => {
  res.status(200).json({
    data: {
      attributes: {
        users: DUMMY_USERS,
      },
    },
  });
};

// this is not real authentication but rather to test mongodb finding user and matching password with what was posted in
export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;
  const foundUser = DUMMY_USERS.find((u) => u.email === email);
  if (!foundUser || foundUser.password !== password) {
    return res.status(422).json({ message: 'Invalid data' });
  }
  return res.status(200).json({ message: 'Logged in!' });
};

// Endpoint to download a specific file
export const downloadFile = (req: Request, res: Response) => {
  const filename = req.params.filename;

  const rootFolderPath = process.cwd(); //root folder path of your Node.js project (current working directory)
  // const filePath = path.resolve(__dirname, 'files', filename); //relative to current file
  const filePath = path.resolve(rootFolderPath, 'files', filename);

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Set the appropriate headers for the response
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

    // Create a read stream from the file and pipe it to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
    res.status(200).json({ success: 'File download' });
  } else {
    // File not found
    res.status(404).json({ error: 'File not found' });
  }
};
