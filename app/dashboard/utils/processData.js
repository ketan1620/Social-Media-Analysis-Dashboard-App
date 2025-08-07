// src/utils/processData.js
import Papa from 'papaparse';

export const fetchPlatformData = async (platformId) => {
  const response = await fetch(`/data/${platformId}.csv`);
  const csvText = await response.text();

  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const parsedData = result.data.map(row => ({
          date: row.date,
          followers: parseInt(row.followers, 10),
          engagement: parseFloat(row.engagement),
          posts: parseInt(row.posts, 10),
        }));

        resolve({
          followers: parsedData.map(d => ({ date: d.date, value: d.followers })),
          engagement: parsedData.map(d => ({ date: d.date, value: d.engagement })),
          posts: parsedData.map(d => ({ date: d.date, value: d.posts })),
        });
      },
      error: (err) => reject(err),
    });
  });
};
