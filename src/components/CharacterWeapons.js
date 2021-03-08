import React from 'react';

const CharacterWeapons = ({ data }) => {
  console.log(data);
  return (
    <table className='weapons'>
      <thead>
        <tr>
          <td>Name</td>
          <td>Range</td>
          <td>Type</td>
          <td>S</td>
          <td>AP</td>
          <td>D</td>
          <td>Abilities</td>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={`w${index}`}>
              <td key={`w${index}_name`} data-type='name'>
                {item.name}
              </td>
              <td key={`w${index}_range`} data-type='range'>
                {item.range}
              </td>
              <td key={`w${index}_type`} data-type='type'>
                {item.type}
              </td>
              <td key={`w${index}_strength`} data-type='strength'>
                {item.strength}
              </td>
              <td key={`w${index}_armourPenetration`} data-type='armourPenetration'>
                {item.armourPenetration}
              </td>
              <td key={`w${index}_damage`} data-type='damage'>
                {item.damage}
              </td>
              <td key={`w${index}_abilities`} data-type='abilities'>
                {item.abilities}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CharacterWeapons;
