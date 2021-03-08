import React from 'react';
import styles from './attributes.module.css';

const atts = [
  { id: 'movement', label: 'M' },
  { id: 'weaponSkill', label: 'WS' },
  { id: 'ballisticSkill', label: 'BS' },
  { id: 'strength', label: 'S' },
  { id: 'toughness', label: 'T' },
  { id: 'wounds', label: 'W' },
  { id: 'attacks', label: 'A' },
  { id: 'leadership', label: 'Ld' },
  { id: 'save', label: 'Sv' },
];

const AttributesView = (props) => {
  return (
    <form className={styles.attributes} onChange={props.onChange || null}>
      {atts.map((att) => {
        return (
          <label htmlFor={att.id} key={att.id}>
            {att.label}
            <input type='text' id={att.id} defaultValue={props[att.id] || ''} />
          </label>
        );
      })}
    </form>
  );
};

export default AttributesView;
