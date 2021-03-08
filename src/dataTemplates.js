const playerTemplate = {
  name: 'Palindrome Opportunity',
  stats: {
    movement: '-',
    weaponSkill: '-',
    ballisticSkill: '-',
    strength: '-',
    toughness: '-',
    wounds: '-',
    attacks: '-',
    leadership: '-',
    save: '-',
    maximumNumber: '-',
  },
  weapons: [],
  abilities: '',
  specialism: '',
  fleshWounds: 0,
};

const weaponTemplate = {
  name: '',
  range: '-',
  type: '',
  strength: '-',
  armourPenetration: '-',
  damage: '-',
  abilities: '',
};

const templateLabels = {
  movement: 'M',
  weaponSkill: 'WS',
  ballisticSkill: 'BS',
  strength: 'S',
  toughness: 'T',
  wounds: 'W',
  attacks: 'A',
  leadership: 'Ld',
  save: 'Sv',
  maximumNumber: 'Max',
  name: 'Name',
  range: 'Range',
  type: 'Type',
  armourPenetration: 'AP',
  damage: 'D',
  abilities: 'Abilities',
};

export { playerTemplate, weaponTemplate, templateLabels };
