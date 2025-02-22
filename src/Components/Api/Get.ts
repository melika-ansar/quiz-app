import { BASE_URL } from "./Consts"

interface IgetData {
  count: string;
  category: string;
  difficulty: string;
}

export const getData = async ({count, category, difficulty}:IgetData) => {
  const data = await fetch(
    `${BASE_URL}?amount=${count}&category=${category}&difficulty=${difficulty}`
    
  );
  const response = await data.json();
   return response.results;
};