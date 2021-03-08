import React, { useReducer, useState } from 'react';
import CharacterStats from './CharacterStats';
import CharacterWeapons from './CharacterWeapons';

const CharacterSheet = ({ data }) => {
  return (
    <article className='characterSheet'>
      <header>
        <h1>Name: {data.name}</h1>
      </header>
      <CharacterStats data={data.stats}></CharacterStats>
      <CharacterWeapons data={data.weapons}></CharacterWeapons>
      <footer>
        <p>Abilities: {data.abilities}</p>
        <p>Specialism: {data.specialism}</p>
        <p>Flesh Wounds: {data.fleshWounds}</p>
      </footer>
    </article>
  );
};

export default CharacterSheet;
