import { BASE_URL } from './Consts';
import axios from 'axios';

interface IgetData {
  count: number;
  category: number;
  difficulty: string;
}

export const getData = async ({ count, category, difficulty }: IgetData) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?amount=${count}&category=${category}&difficulty=${difficulty}&type=multiple`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
