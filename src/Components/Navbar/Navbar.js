import React from "react";
import Emoji from "a11y-react-emoji";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <h1>
        <Emoji symbol="😆" label="Grinning Squinting Face" /> EmojiMania{" "}
        <Emoji symbol="😆" label="Grinning Squinting Face" />
      </h1>
    </div>
  );
};

export default Navbar;
