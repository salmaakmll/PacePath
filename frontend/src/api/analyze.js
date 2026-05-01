import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const analyzeSkills = async (skills, experience, interest) => {
  try {
    const response = await axios.post(`${API_URL}/analyze`, {
      skills,
      experience,
      interest
    });
    return response.data;
  } catch (error) {
    console.error('Error analyzing skills:', error);
    throw error;
  }
};
