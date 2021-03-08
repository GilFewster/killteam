import React from 'react';

const CharacterStats = ({ data }) => {
  return (
    <table className='stats'>
      <thead>
        <tr>
          <td>M</td>
          <td>WS</td>
          <td>BS</td>
          <td>S</td>
          <td>T</td>
          <td>W</td>
          <td>A</td>
          <td>Ld</td>
          <td>Sv</td>
          <td>Max</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-type='movement'>{data.movement}</td>
          <td data-type='weaponSkill'>{data.weaponSkill}</td>
          <td data-type='ballisticSkill'>{data.ballisticSkill}</td>
          <td data-type='strength'>{data.strength}</td>
          <td data-type='toughness'>{data.toughness}</td>
          <td data-type='wounds'>{data.wounds}</td>
          <td data-type='attacks'>{data.attacks}</td>
          <td data-type='leadership'>{data.leadership}</td>
          <td data-type='save'>{data.save}</td>
          <td data-type='maximumNumber'>{data.maximumNumber}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CharacterStats;
