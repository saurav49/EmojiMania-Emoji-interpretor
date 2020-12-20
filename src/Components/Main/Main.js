import React, { useState } from "react";
import styles from "./Main.module.css";

const Emojis = {
  "😊": "SMILING FACE",
  "😈": "DEVIL'S FACE",
  "😗": "KISSING FACE",
  "😠": "ANGRY FACE",
  "😢": "CRYING FACE",
  "🍒": "cherry",
  "💓": "glowing heart",
  "💔": "broken heart",
  "😇": "angel face",
  "😷": "mask face",
  "😵": "dizzy face",
  "😎": "smiling face with sunglasses",
  "😓": "face with cold sweat",
  "🍎": "apple",
  "🍕": "pizza",
  "🎅": "santa claus",
  "🐈": "cat",
  "🐼": "panda"
};

const knownEmoji = Object.keys(Emojis);

const Main = () => {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  const emojiClickHandler = (emoji) => {
    setEmojiMeaning(Emojis[emoji].toUpperCase());
  };

  const handleEmojiInput = (e) => {
    e.preventDefault();
    let emojiDefinition = Emojis[e.target.value];

    if (emojiDefinition === undefined) {
      setEmojiMeaning(
        "sorry we don't have this in our database, please try another one"
      );
    } else {
      setEmojiMeaning(emojiDefinition.toUpperCase());
    }
  };

  return (
    <div className={styles.mainDiv}>
      <input
        type="text"
        placeholder="Emoji"
        className={styles.inputBorder}
        onChange={(e) => handleEmojiInput(e)}
      />
      <h3> {emojiMeaning} </h3>
      <div className={styles.emojiPalate}>
        <h3> Emojis we know </h3>
        {knownEmoji.map((emoji) => {
          return (
            <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
