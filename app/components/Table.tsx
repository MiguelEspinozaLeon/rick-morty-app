import React from 'react'
import Image from 'next/image'
import { getAllCharacters } from '../lib/data'

export default async function Table({query}:{query?: number}) {

    const characters = await getAllCharacters(query ? Number(query) : 1)
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>avatar</th>
                        <th>id</th>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>
                    {characters.map((character)=>(
                        <tr key={character.id}>
                            <td>
                                <Image 
                                    src={character.image} 
                                    width={100} height={100} 
                                    alt={character.name}>
                                </Image>
                            </td>
                            <td>{character.id}</td>
                            <td>{character.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
            
    )
}
