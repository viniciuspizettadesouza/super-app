import { StorageData } from "@/app/interfaces/storage.interface";

export const getLocalStorageData = (key: string): any | null => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error retrieving data from localStorage:", error);
    return null;
  }
};

export const setLocalStorageData = (key: string, data: StorageData): void => {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  } catch (error) {
    console.error("Error setting data in localStorage:", error);
  }
};

export const removeLocalStorageData = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing data from localStorage:", error);
  }
};
