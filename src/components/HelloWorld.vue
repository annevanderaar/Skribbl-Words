<template>
  <div class="body">
    <h1 class="mb-0 skribbl-title text-display-large">
      <span>S</span>
      <span>k</span>
      <span>r</span>
      <span>i</span>
      <span>b</span>
      <span>b</span>
      <span>l</span>
    </h1>

    <h2 class="text-white mt-0">
      Word List
    </h2>

    <p class="text-white">
      Add your words here (one by one):
    </p>

    <div class="d-flex flex-nowrap align-center">
      <input v-model="word" id="inputFieldWord" type="text" />

      <v-btn
        @click="addWord"
        color="green"
        rounded="0"
        elevation="0"
        height="50"
      >
        Add
      </v-btn>
    </div>

    <p class="font-weight-bold text-white">
      Your added words:
    </p>

    <v-chip
      v-for="word in words"
      :key="word.id"
      class="ma-1 cursor-pointer"
      color="white"
      variant="flat"
      @click="deleteWord(word.id)"
    >
      {{ word.word }}

      <span class="ms-2">x</span>
    </v-chip>

    <v-btn
      @click="sendWords"
      color="light-blue"
      class="font-weight-bold mt-4"
    >
      Send words
    </v-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";
import _ from "lodash";
import axios from "axios";

const words = ref([])
const word = ref('')

const url = "https://openthedrip.nl"

function addWord() {
  if (word.value) {
    words.value.push({
      id: Math.random(),
      word: word.value,
    });
    word.value = "";
  }
}

function deleteWord(id) {
  _.remove(words.value, (word) => word.id === id);
}

function sendWords () {
  if (words.value.length > 0) {
    axios
      .post(
        `${url}/Library/mail.php`,
        {
          content: _.map(words.value, "word"),
        },
        {headers: {"Content-Type": "application/json"}}
      )
      .then(() => {
        alert("Success");
        words.value = [];
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  }
}
</script>
