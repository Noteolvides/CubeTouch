import React, {useCallback, useRef, useState} from "react";
import {HexColorPicker} from "react-colorful";
import styles from './PopoverPicker.module.css';

import useClickOutside from "./useClickOutside";

export const PopoverPicker = ({color, onChange}) => {
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <div className="margin-top--md center colum-direction col col--3">
      <h3>Color</h3>
      <div className={styles.picker}>
        <div
          className={styles.swatch}
          style={{backgroundColor: color}}
          onClick={() => toggle(true)}
        />

        {isOpen && (
          <div className={styles.popover} ref={popover}>
            <HexColorPicker color={color} onChange={onChange}/>
          </div>
        )}
      </div>
    </div>
  );
};
