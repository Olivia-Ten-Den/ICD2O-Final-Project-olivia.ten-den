// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: May 29, 2025
// This file contains the JS functions for index.html

'use strict'

// eslint-disable-next-line no-unused-vars
function rollAllDice () {
  const numberOfDice = document.getElementById('dice').selectedIndex
  // empty images
  document.getElementById('die-one').innerHTML = '<img src="./assets/Empty.png">'
  document.getElementById('die-two').innerHTML = '<img src="./assets/Empty.png">'
  document.getElementById('die-three').innerHTML = '<img src="./assets/Empty.png">'
  document.getElementById('die-four').innerHTML = '<img src="./assets/Empty.png">'
  document.getElementById('die-five').innerHTML = '<img src="./assets/Empty.png">'
  document.getElementById('die-six').innerHTML = '<img src="./assets/Empty.png">'

  // for 1 die
  if (numberOfDice >= 0) {
    const dieOne = Math.floor(Math.random() * 6) + 1
    if (dieOne === 1) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/die1.png">'
    } else if (dieOne === 2) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/die2.png">'
    } else if (dieOne === 3) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/die3.png">'
    } else if (dieOne === 4) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/die4.png">'
    } else if (dieOne === 5) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/die5.png">'
    } else if (dieOne === 6) {
      document.getElementById('die-one').innerHTML = '<img src="./assets/die6.png">'
    } else {
      // if you are here you are in trouble!
    }
  }

  // for 2 dice
  if (numberOfDice >= 1) {
    const dieTwo = Math.floor(Math.random() * 6) + 1
    if (dieTwo === 1) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/die1.png">'
    } else if (dieTwo === 2) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/die2.png">'
    } else if (dieTwo === 3) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/die3.png">'
    } else if (dieTwo === 4) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/die4.png">'
    } else if (dieTwo === 5) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/die5.png">'
    } else if (dieTwo === 6) {
      document.getElementById('die-two').innerHTML = '<img src="./assets/die6.png">'
    } else {
      // if you are here you are in trouble!
    }
  }

  // for 3 dice
  if (numberOfDice >= 2) {
    const dieThree = Math.floor(Math.random() * 6) + 1
    if (dieThree === 1) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/die1.png">'
    } else if (dieThree === 2) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/die2.png">'
    } else if (dieThree === 3) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/die3.png">'
    } else if (dieThree === 4) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/die4.png">'
    } else if (dieThree === 5) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/die5.png">'
    } else if (dieThree === 6) {
      document.getElementById('die-three').innerHTML = '<img src="./assets/die6.png">'
    } else {
      // if you are here you are in trouble!
    }
  }

  // for 4 dice
  if (numberOfDice >= 3) {
    const dieFour = Math.floor(Math.random() * 6) + 1
    if (dieFour === 1) {
      document.getElementById('die-four').innerHTML = '<img src="./assets/die1.png">'
    } else if (dieFour === 2) {
      document.getElementById('die-four').innerHTML = '<img src="./assets/die2.png">'
    } else if (dieFour === 3) {
      document.getElementById('die-four').innerHTML = '<img src="./assets/die3.png">'
    } else if (dieFour === 4) {
      document.getElementById('die-four').innerHTML = '<img src="./assets/die4.png">'
    } else if (dieFour === 5) {
      document.getElementById('die-four').innerHTML = '<img src="./assets/die5.png">'
    } else if (dieFour === 6) {
      document.getElementById('die-four').innerHTML = '<img src="./assets/die6.png">'
    } else {
      // if you are here you are in trouble!
    }
  }

  // for 5 dice
  if (numberOfDice >= 4) {
    const dieFive = Math.floor(Math.random() * 6) + 1
    if (dieFive === 1) {
      document.getElementById('die-five').innerHTML = '<img src="./assets/die1.png">'
    } else if (dieFive === 2) {
      document.getElementById('die-five').innerHTML = '<img src="./assets/die2.png">'
    } else if (dieFive === 3) {
      document.getElementById('die-five').innerHTML = '<img src="./assets/die3.png">'
    } else if (dieFive === 4) {
      document.getElementById('die-five').innerHTML = '<img src="./assets/die4.png">'
    } else if (dieFive === 5) {
      document.getElementById('die-five').innerHTML = '<img src="./assets/die5.png">'
    } else if (dieFive === 6) {
      document.getElementById('die-five').innerHTML = '<img src="./assets/die6.png">'
    } else {
      // if you are here you are in trouble!
    }
  }

  // for 6 dice
  if (numberOfDice >= 5) {
    const dieSix = Math.floor(Math.random() * 6) + 1
    if (dieSix === 1) {
      document.getElementById('die-six').innerHTML = '<img src="./assets/die1.png">'
    } else if (dieSix === 2) {
      document.getElementById('die-six').innerHTML = '<img src="./assets/die2.png">'
    } else if (dieSix === 3) {
      document.getElementById('die-six').innerHTML = '<img src="./assets/die3.png">'
    } else if (dieSix === 4) {
      document.getElementById('die-six').innerHTML = '<img src="./assets/die4.png">'
    } else if (dieSix === 5) {
      document.getElementById('die-six').innerHTML = '<img src="./assets/die5.png">'
    } else if (dieSix === 6) {
      document.getElementById('die-six').innerHTML = '<img src="./assets/die6.png">'
    } else {
      // if you are here you are in trouble!
    }
  }
}