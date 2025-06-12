// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: May 29, 2025
// This file contains the JS functions for index.html

'use strict'

// eslint-disable-next-line no-unused-vars
function rollAllDice() {
  let numberOfDice = document.getElementById('dice')
  let dieOne = document.getElementById('die-one')
  let dieTwo = document.getElementById('die-two')
  let dieThree = document.getElementById('die-three')
  let dieFour = document.getElementById('die-four')
  let dieFive = document.getElementById('die-five')
  let dieSix = document.getElementById('die-six')

  if (numberOfDice === 1) { // start one die
    dieOne = Math.floor(Math.random() * 6) + 1
    if (dieOne === 1) { // die one
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#1.png">'
    } else if (dieOne === 2) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#2.png">'
    } else if (dieOne === 3) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#3.png">'
    } else if (dieOne === 4) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#4.png">'
    } else if (dieOne === 5) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#5.png">'
    } else if (dieOne === 6) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#6.png">'
    } else {
      <p>Error</p>
    }
    document.getElementById('die-two').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-three').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-four').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-five').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-six').innerHTML = '<img src="./assets/Empty.png">' // end one die
  } else if (numberOfDice === 2) { // start two dice
    dieOne = Math.floor(Math.random() * 6) + 1
    dieTwo = Math.floor(Math.random() * 6) + 1
    if (dieOne === 1) { // die one
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#1.png">'
    } else if (dieOne === 2) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#2.png">'
    } else if (dieOne === 3) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#3.png">'
    } else if (dieOne === 4) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#4.png">'
    } else if (dieOne === 5) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#5.png">'
    } else if (dieOne === 6) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#6.png">'
    } else {
      <p>Error</p>
    }
    document.getElementById('die-two').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-three').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-four').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-five').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-six').innerHTML = '<img src="./assets/Empty.png">'

    if (dieTwo === 1) { // die two
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#1.png">'
    } else if (dieTwo === 2) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#2.png">'
    } else if (dieTwo === 3) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#3.png">'
    } else if (dieTwo === 4) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#4.png">'
    } else if (dieTwo === 5) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#5.png">'
    } else if (dieTwo === 6) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#6.png">'
    } else {
      <p>Error</p>
    }
    document.getElementById('die-three').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-four').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-five').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-six').innerHTML = '<img src="./assets/Empty.png">' // end two dice
  } else if (numberOfDice === 3) { // start three dice
    dieOne = Math.floor(Math.random() * 6) + 1
    dieTwo = Math.floor(Math.random() * 6) + 1
    dieThree = Math.floor(Math.random() * 6) + 1
    if (dieOne === 1) { // die one
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#1.png">'
    } else if (dieOne === 2) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#2.png">'
    } else if (dieOne === 3) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#3.png">'
    } else if (dieOne === 4) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#4.png">'
    } else if (dieOne === 5) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#5.png">'
    } else if (dieOne === 6) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#6.png">'
    } else {
      <p>Error</p>
    }
    document.getElementById('die-two').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-three').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-four').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-five').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-six').innerHTML = '<img src="./assets/Empty.png">'

    if (dieTwo === 1) { // die two
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#1.png">'
    } else if (dieTwo === 2) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#2.png">'
    } else if (dieTwo === 3) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#3.png">'
    } else if (dieTwo === 4) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#4.png">'
    } else if (dieTwo === 5) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#5.png">'
    } else if (dieTwo === 6) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#6.png">'
    } else {
      <p>Error</p>
    }
    document.getElementById('die-three').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-four').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-five').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-six').innerHTML = '<img src="./assets/Empty.png">'

    if (dieThree === 1) { // die three
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#1.png">'
    } else if (dieThree === 2) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#2.png">'
    } else if (dieThree === 3) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#3.png">'
    } else if (dieThree === 4) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#4.png">'
    } else if (dieThree === 5) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#5.png">'
    } else if (dieThree === 6) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#6.png">'
    } else {
      <p>Error</p>
    }
    document.getElementById('die-four').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-five').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-six').innerHTML = '<img src="./assets/Empty.png">' // end three dice
  } else if (numberOfDice === 4) { // start four dice
    dieOne = Math.floor(Math.random() * 6) + 1
    dieTwo = Math.floor(Math.random() * 6) + 1
    dieThree = Math.floor(Math.random() * 6) + 1
    dieFour = Math.floor(Math.random() * 6) + 1
    if (dieOne === 1) { // die one
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#1.png">'
    } else if (dieOne === 2) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#2.png">'
    } else if (dieOne === 3) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#3.png">'
    } else if (dieOne === 4) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#4.png">'
    } else if (dieOne === 5) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#5.png">'
    } else if (dieOne === 6) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#6.png">'
    } else {
      <p>Error</p>
    }
    document.getElementById('die-two').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-three').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-four').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-five').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-six').innerHTML = '<img src="./assets/Empty.png">'

    if (dieTwo === 1) { // die two
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#1.png">'
    } else if (dieTwo === 2) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#2.png">'
    } else if (dieTwo === 3) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#3.png">'
    } else if (dieTwo === 4) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#4.png">'
    } else if (dieTwo === 5) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#5.png">'
    } else if (dieTwo === 6) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#6.png">'
    } else {
      <p>Error</p>
    }
    document.getElementById('die-three').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-four').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-five').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-six').innerHTML = '<img src="./assets/Empty.png">'

    if (dieThree === 1) { // die three
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#1.png">'
    } else if (dieThree === 2) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#2.png">'
    } else if (dieThree === 3) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#3.png">'
    } else if (dieThree === 4) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#4.png">'
    } else if (dieThree === 5) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#5.png">'
    } else if (dieThree === 6) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#6.png">'
    } else {
      <p>Error</p>
    }
    document.getElementById('die-four').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-five').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-six').innerHTML = '<img src="./assets/Empty.png">'

    if (dieFour === 1) { // die four
      document.getElementById('die-four').innerHTML = '<img src="./assets/Die#1.png">'
    } else if (dieFour === 2) {
      document.getElementById('die-four').innerHTML = '<img src="./assets/Die#2.png">'
    } else if (dieFour === 3) {
      document.getElementById('die-four').innerHTML = '<img src="./assets/Die#3.png">'
    } else if (dieFour === 4) {
      document.getElementById('die-four').innerHTML = '<img src="./assets/Die#4.png">'
    } else if (dieFour === 5) {
      document.getElementById('die-four').innerHTML = '<img src="./assets/Die#5.png">'
    } else if (dieFour === 6) {
      document.getElementById('die-four').innerHTML = '<img src="./assets/Die#6.png">'
    } else {
      <p>Error</p>
    }
    document.getElementById('die-five').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-six').innerHTML = '<img src="./assets/Empty.png">' // end four dice
  } else if (numberOfDice === 5) { // start five dice
    dieOne = Math.floor(Math.random() * 6) + 1
    dieTwo = Math.floor(Math.random() * 6) + 1
    dieThree = Math.floor(Math.random() * 6) + 1
    dieFour = Math.floor(Math.random() * 6) + 1
    dieFive = Math.floor(Math.random() * 6) + 1
    if (dieOne === 1) { // die one
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#1.png">'
    } else if (dieOne === 2) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#2.png">'
    } else if (dieOne === 3) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#3.png">'
    } else if (dieOne === 4) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#4.png">'
    } else if (dieOne === 5) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#5.png">'
    } else if (dieOne === 6) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#6.png">'
    } else {
      <p>Error</p>
    }
    document.getElementById('die-two').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-three').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-four').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-five').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-six').innerHTML = '<img src="./assets/Empty.png">'

    if (dieTwo === 1) { // die two
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#1.png">'
    } else if (dieTwo === 2) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#2.png">'
    } else if (dieTwo === 3) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#3.png">'
    } else if (dieTwo === 4) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#4.png">'
    } else if (dieTwo === 5) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#5.png">'
    } else if (dieTwo === 6) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#6.png">'
    } else {
      <p>Error</p>
    }
    document.getElementById('die-three').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-four').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-five').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-six').innerHTML = '<img src="./assets/Empty.png">'

    if (dieThree === 1) { // die three
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#1.png">'
    } else if (dieThree === 2) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#2.png">'
    } else if (dieThree === 3) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#3.png">'
    } else if (dieThree === 4) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#4.png">'
    } else if (dieThree === 5) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#5.png">'
    } else if (dieThree === 6) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#6.png">'
    } else {
      <p>Error</p>
    }
    document.getElementById('die-four').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-five').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-six').innerHTML = '<img src="./assets/Empty.png">'

    if (dieFour === 1) { // die four
      document.getElementById('die-four').innerHTML = '<img src="./assets/Die#1.png">'
    } else if (dieFour === 2) {
      document.getElementById('die-four').innerHTML = '<img src="./assets/Die#2.png">'
    } else if (dieFour === 3) {
      document.getElementById('die-four').innerHTML = '<img src="./assets/Die#3.png">'
    } else if (dieFour === 4) {
      document.getElementById('die-four').innerHTML = '<img src="./assets/Die#4.png">'
    } else if (dieFour === 5) {
      document.getElementById('die-four').innerHTML = '<img src="./assets/Die#5.png">'
    } else if (dieFour === 6) {
      document.getElementById('die-four').innerHTML = '<img src="./assets/Die#6.png">'
    } else {
      <p>Error</p>
    }
    document.getElementById('die-five').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-six').innerHTML = '<img src="./assets/Empty.png">'

    if (dieFive === 1) { // die five
      document.getElementById('die-five').innerHTML = '<img src="./assets/Die#1.png">'
    } else if (dieFive === 2) {
      document.getElementById('die-five').innerHTML = '<img src="./assets/Die#2.png">'
    } else if (dieFive === 3) {
      document.getElementById('die-five').innerHTML = '<img src="./assets/Die#3.png">'
    } else if (dieFive === 4) {
      document.getElementById('die-five').innerHTML = '<img src="./assets/Die#4.png">'
    } else if (dieFive === 5) {
      document.getElementById('die-five').innerHTML = '<img src="./assets/Die#5.png">'
    } else if (dieFive === 6) {
      document.getElementById('die-five').innerHTML = '<img src="./assets/Die#6.png">'
    } else {
      <p>Error</p>
    }
    document.getElementById('die-six').innerHTML = '<img src="./assets/Empty.png">' // end five dice
  } else if (numberOfDice === 6) { // start six dice
    dieOne = Math.floor(Math.random() * 6) + 1
    dieTwo = Math.floor(Math.random() * 6) + 1
    dieThree = Math.floor(Math.random() * 6) + 1
    dieFour = Math.floor(Math.random() * 6) + 1
    dieFive = Math.floor(Math.random() * 6) + 1
    if (dieOne === 1) { // die one
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#1.png">'
    } else if (dieOne === 2) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#2.png">'
    } else if (dieOne === 3) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#3.png">'
    } else if (dieOne === 4) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#4.png">'
    } else if (dieOne === 5) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#5.png">'
    } else if (dieOne === 6) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/Die#6.png">'
    } else {
      <p>Error</p>
    }
    document.getElementById('die-two').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-three').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-four').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-five').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-six').innerHTML = '<img src="./assets/Empty.png">'

    if (dieTwo === 1) { // die two
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#1.png">'
    } else if (dieTwo === 2) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#2.png">'
    } else if (dieTwo === 3) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#3.png">'
    } else if (dieTwo === 4) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#4.png">'
    } else if (dieTwo === 5) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#5.png">'
    } else if (dieTwo === 6) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/Die#6.png">'
    } else {
      <p>Error</p>
    }
    document.getElementById('die-three').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-four').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-five').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-six').innerHTML = '<img src="./assets/Empty.png">'

    if (dieThree === 1) { // die three
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#1.png">'
    } else if (dieThree === 2) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#2.png">'
    } else if (dieThree === 3) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#3.png">'
    } else if (dieThree === 4) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#4.png">'
    } else if (dieThree === 5) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#5.png">'
    } else if (dieThree === 6) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/Die#6.png">'
    } else {
      <p>Error</p>
    }
    document.getElementById('die-four').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-five').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-six').innerHTML = '<img src="./assets/Empty.png">'

    if (dieFour === 1) { // die four
      document.getElementById('die-four').innerHTML = '<img src="./assets/Die#1.png">'
    } else if (dieFour === 2) {
      document.getElementById('die-four').innerHTML = '<img src="./assets/Die#2.png">'
    } else if (dieFour === 3) {
      document.getElementById('die-four').innerHTML = '<img src="./assets/Die#3.png">'
    } else if (dieFour === 4) {
      document.getElementById('die-four').innerHTML = '<img src="./assets/Die#4.png">'
    } else if (dieFour === 5) {
      document.getElementById('die-four').innerHTML = '<img src="./assets/Die#5.png">'
    } else if (dieFour === 6) {
      document.getElementById('die-four').innerHTML = '<img src="./assets/Die#6.png">'
    } else {
      <p>Error</p>
    }
    document.getElementById('die-five').innerHTML = '<img src="./assets/Empty.png">'
    document.getElementById('die-six').innerHTML = '<img src="./assets/Empty.png">'

    if (dieFive === 1) { // die five
      document.getElementById('die-five').innerHTML = '<img src="./assets/Die#1.png">'
    } else if (dieFive === 2) {
      document.getElementById('die-five').innerHTML = '<img src="./assets/Die#2.png">'
    } else if (dieFive === 3) {
      document.getElementById('die-five').innerHTML = '<img src="./assets/Die#3.png">'
    } else if (dieFive === 4) {
      document.getElementById('die-five').innerHTML = '<img src="./assets/Die#4.png">'
    } else if (dieFive === 5) {
      document.getElementById('die-five').innerHTML = '<img src="./assets/Die#5.png">'
    } else if (dieFive === 6) {
      document.getElementById('die-five').innerHTML = '<img src="./assets/Die#6.png">'
    } else {
      <p>Error</p>
    }
    document.getElementById('die-six').innerHTML = '<img src="./assets/Empty.png">'

    if (dieSix === 1) { // die six
      document.getElementById('die-six').innerHTML = '<img src="./assets/Die#1.png">'
    } else if (dieSix === 2) {
      document.getElementById('die-six').innerHTML = '<img src="./assets/Die#2.png">'
    } else if (dieSix === 3) {
      document.getElementById('die-six').innerHTML = '<img src="./assets/Die#3.png">'
    } else if (dieSix === 4) {
      document.getElementById('die-six').innerHTML = '<img src="./assets/Die#4.png">'
    } else if (dieSix === 5) {
      document.getElementById('die-six').innerHTML = '<img src="./assets/Die#5.png">'
    } else if (dieSix === 6) {
      document.getElementById('die-six').innerHTML = '<img src="./assets/Die#6.png">'
    } else {
      <p>Error</p>
    } // end six dice
  } else {
    <p>Something went wrong.</p>
  }
}
