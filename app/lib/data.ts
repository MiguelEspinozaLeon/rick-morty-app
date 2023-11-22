import { Character } from "./definitions"
import { unstable_noStore as noStore } from "next/cache";



export async function getAllCharacters (currentPage: number) {
    noStore()
    const url = 'https://rickandmortyapi.com/api/character' + '?page=' + currentPage.toString()
    const res = await fetch(url)
    const data = await res.json();
    const characters : Character[] = data.results;
    return characters ;
}

export async function getAllPages(){
    noStore()

    const res = await fetch('https://rickandmortyapi.com/api/character')
    const data = await res.json();
    const totalPages = data.info.pages
    return totalPages;

}
