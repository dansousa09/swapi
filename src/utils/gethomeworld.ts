import { IHomeWorld } from "../interfaces";

const getHomeworld = async (url: string): Promise<IHomeWorld> => {
  const planetsIndex = url.indexOf('planets');
  const id = url.slice(planetsIndex + ('planets'.length + 1));
  const response = await fetch(`http://localhost:3000/api/homeworld?id=${id}`);
  const data = await response.json();
  return data;
}; 

export default getHomeworld;