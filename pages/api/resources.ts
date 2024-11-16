import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

// Define the type for the resources
type RESOURCES = {
  AppDevelopment: string[];
  WebsiteDevelopment: string[];
  GameDevelopment: string[];
  Cybersecurity: string[];
  CompetitiveProgramming: string[];
  ArtificialIntelligence: string[];
};

// Define the path to your resources directory
const resourcesPath = path.join(process.cwd(), 'pages/Resources');

// The API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Define the categories
  const categories: (keyof RESOURCES)[] = [
    'AppDevelopment',
    'WebsiteDevelopment',
    'GameDevelopment',
    'Cybersecurity',
    'CompetitiveProgramming',
    'ArtificialIntelligence',
  ];

  // Object to store the resource file names
  const resources: Partial<RESOURCES> = {};

  // Loop through each category and read the files
  for (const category of categories) {
    const categoryPath = path.join(resourcesPath, category);

    try {
      // Read files in the category directory
      const files = await fs.promises.readdir(categoryPath);
      resources[category] = files;
    } catch (error) {
      // Handle errors if the directory does not exist or cannot be read
      console.warn(`Could not read directory: ${categoryPath}.`);
      resources[category] = [];
    }
  }

  // Send the response with the resource file names
  res.status(200).json(resources);
}
