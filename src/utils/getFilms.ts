import { IFilms } from "../interfaces";

const getFilms = async (filmsArr: string[]): Promise<string[]> => {
    const titleFilms = [];
    for (let i = 0; i < filmsArr.length; i++) {
        const planetsIndex = filmsArr[i].indexOf("films");
        const id = filmsArr[i].slice(planetsIndex + ("films".length + 1));
        const response = await fetch(
            `http://localhost:3000/api/films?id=${id}`
        );
        const data = await response.json();
        titleFilms.push(data.title);
    }
    return titleFilms;
};

export default getFilms;
