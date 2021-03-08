import Layout from './layouts/Layout';
import CharacterSheet from './CharacterSheet';
import { playerTemplate, weaponTemplate } from '../dataTemplates';
// import harlequins from '../data/harlequins.json';

import rulebook from '../data/index';

function App() {
  console.dir(rulebook.harlequins);
  return (
    <Layout>
      <CharacterSheet data={getNewCharacterData()}></CharacterSheet>
    </Layout>
  );
}

export default App;

const getNewCharacterData = () => {
  const data = JSON.parse(JSON.stringify(playerTemplate));
  data.weapons.push(JSON.parse(JSON.stringify(weaponTemplate)));
  data.weapons.push(JSON.parse(JSON.stringify(weaponTemplate)));
  data.weapons.push(JSON.parse(JSON.stringify(weaponTemplate)));
  data.weapons.push(JSON.parse(JSON.stringify(weaponTemplate)));
  return data;
};
