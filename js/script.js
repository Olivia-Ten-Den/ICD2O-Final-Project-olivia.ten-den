// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: May 29, 2025
// This file contains the JS functions for index.html

'use strict'

// eslint-disable-next-line no-unused-vars
function rollAllDice () {
  let numberOfDice = document.getElementById('dice')
  let dieOne = document.getElementById('die-one')
  let dieTwo = document.getElementById('die-two')
  let dieThree = document.getElementById('die-three')
  let dieFour = document.getElementById('die-four')
  let dieFive = document.getElementById('die-five')
  let dieSix = document.getElementById('die-six')
  
  if (numberOfDice === 1) {
    dieOne = Math.floor(Math.random() * 6) + 1
    if (dieOne === 1) {
      document.getElementById('die-one').innerHTML = '<p>1</p>'
    } else if (dieOne === 2) {
      document.getElementById('die-one').innerHTML = '<p>2</p>'
    } else if (dieOne === 3) {
      document.getElementById('die-one').innerHTML = '<p>3</p>'
    } else if (dieOne === 4) {
      document.getElementById('die-one').innerHTML = '<p>4</p>'
    } else if (dieOne === 5) {
      document.getElementById('die-one').innerHTML = '<p>5</p>'
    } else if (dieOne === 6) {
      document.getElementById('die-one').innerHTML = '<p>6</p>'
    } else {
      <p>Error</p>
    }
    document.getElementById('die-two').innerHTML = '<p>0</p>'
    document.getElementById('die-three').innerHTML = '<p>0</p>'
    document.getElementById('die-four').innerHTML = '<p>0</p>'
    document.getElementById('die-five').innerHTML = '<p>0</p>'
    document.getElementById('die-six').innerHTML = '<p>0</p>'
  } else if (numberOfDice === 2) {
    <p>2</p>
  } else if (numberOfDice === 3) {
    <p>3</p>
  } else if (numberOfDice === 4) {
    <p>4</p>
  } else if (numberOfDice === 5) {
    <p>5</p>
  } else if (numberOfDice === 6) {
    <p>6</p>
  } else {
    <p>Something went wrong.</p>
  }
}
