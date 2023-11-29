import {
  koch_snowflake,
  quadratic_koch_island,
  quadratic_koch_snowflake,
  fassCurve,
} from "./l-systems/curves.js";
import {
  axialTreeA,
  axialTreeB,
  axialTreeC,
  axialTreeD,
  axialTreeE,
  axialTreeF,
} from "./l-systems/bracketed.js";
import { stochasticPlant } from "./l-systems/stochastic.js";
import {
  hogewegAndHesperA,
  hogewegAndHesperB,
  hogewegAndHesperC,
  hogewegAndHesperD,
  hogewegAndHesperE,
} from "./l-systems/context-sensitive.js";

// Curves
document.body.appendChild(koch_snowflake(3));
document.body.appendChild(quadratic_koch_island(3));
document.body.appendChild(quadratic_koch_snowflake(4));
document.body.appendChild(fassCurve(3));

// Axial trees
document.body.appendChild(axialTreeA(5));
document.body.appendChild(axialTreeB(5));
document.body.appendChild(axialTreeC(4));
document.body.appendChild(axialTreeD(7));
document.body.appendChild(axialTreeE(7));
document.body.appendChild(axialTreeF(5));

// Stochastic plant
document.body.appendChild(stochasticPlant(5));

// Hogeweg & Hesper
document.body.appendChild(hogewegAndHesperA(30));
document.body.appendChild(hogewegAndHesperB(30));
document.body.appendChild(hogewegAndHesperC(26));
document.body.appendChild(hogewegAndHesperD(24));
document.body.appendChild(hogewegAndHesperE(26));
