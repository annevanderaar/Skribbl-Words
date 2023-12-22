<template>
  <div class="body">
    <h1>Skribbl Word List</h1>
    <p>Add your words here (one by one):</p>
    <input v-model="word" id="inputFieldWord" type="text" /><button
      v-on:click="addWord(word)"
      id="addWordButton"
    >
      +
    </button>
    <p><strong>Your added words:</strong></p>
    <div v-for="word in words" v-bind:key="word" class="word">
      <p>{{ word.word }}</p>
      <button class="btn" v-on:click="deleteWord(word.id)">
        <i class="fa fa-trash"></i>
      </button>
    </div>
    <br />
    <button id="sendButton" v-on:click="sendWords">Send words</button>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config/index.js";
import _ from "lodash";

export default {
  name: "HelloWorld",

  data() {
    return {
      words: [],
      word: "",
    };
  },

  methods: {
    addWord(word) {
      if (word) {
        this.words.push({
          id: Math.random(),
          word,
        });
        this.word = "";
      }
    },

    deleteWord(id) {
      _.remove(this.words, (word) => word.id === id);
    },

    sendWords() {
      axios
        .post(
          `${config.url}/Library/mail.php`,
          {
            content: this.words,
          },
          { headers: { "Content-Type": "application/json" } }
        )
        .then(() => {
          alert("Success");
          this.words = [];
        })
        .catch((err) => {
          alert(err);
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
body {
  width: 50%;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  width: 360px;
}

#inputFieldWord {
  width: 300px;
  height: 46px;
  border-width: 0;
  border: 1px solid black;
  outline: none;
  font-size: 25px;
  vertical-align: middle;
}

#addWordButton {
  height: 50px;
  width: 50px;
  border: 1px solid black;
  vertical-align: middle;
  font-size: 30px;
  cursor: pointer;
}

.word {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
</style>
