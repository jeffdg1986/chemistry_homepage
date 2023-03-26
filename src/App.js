import './App.css';
import peptidePic from './peptide.png';
import React, { Component } from 'react';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>testing 124</div>
        <img src={peptidePic} alt='peptidePic' className='picture animated'/>
        
        <h2>This is written within the app function which lies inside the root div. It is styled from index.css if there is no styling present within the app function</h2>
      </header>
    </div>
  );
}
export class Elements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      atomic_number: '',
      symbol: '',
      info: [
        {
          name: 'Hydrogen',
          atomic_Number: 1,
          symbol: 'H'
        },
        {
          name: 'Helium',
          atomic_Number: 2,
          symbol: 'He'
        },
        {
          name: 'Lithium',
          atomic_Number: 3,
          symbol: 'Li'
        },
        {
          name: 'Berylium',
          atomic_Number: 4,
          symbol: 'Be'
        },
        {
          name: 'Boron',
          atomic_Number: 5,
          symbol: 'B'
        },
        {
          name: 'Carbon',
          atomic_Number: 6,
          symbol: 'C'
        },
        {
          name: 'Nitrogen',
          atomic_Number: 7,
          symbol: 'N'
        },
        {
          name: 'Oxygen',
          atomic_Number: 8,
          symbol: 'Be'
        },
        {
          name: 'Fluorine',
          atomic_Number: 9,
          symbol: 'F'
        },
        {
          name: 'Neon',
          atomic_Number: 10,
          symbol: 'Ne'
        },
        {
          name: 'Sodium',
          atomic_Number: 11,
          symbol: 'Na'
        },
        {
          name: 'Magnesium',
          atomic_Number: 12,
          symbol: 'Mg'
        },
        {
          name: 'Aluminum',
          atomic_Number: 13,
          symbol: 'Al'
        },
        {
          name: 'Silicon',
          atomic_Number: 14,
          symbol: 'Si'
        },
        {
          name: 'Phosphorus',
          atomic_Number: 15,
          symbol: 'P'
        },
        {
          name: 'Sulfur',
          atomic_Number: 16,
          symbol: 'S'
        },
        {
          name: 'Chlorine',
          atomic_Number: 17,
          symbol: 'Cl'
        },
        {
          name: 'Argon',
          atomic_Number: 18,
          symbol: 'Ar'
        },
        {
          name: 'Potassium',
          atomic_Number: 19,
          symbol: 'K'
        },
        {
          name: 'Calcium',
          atomic_Number: 20,
          symbol: 'Ca'
        },
        {
          name: 'Scandium',
          atomic_Number: 21,
          symbol: 'Sc'
        },
        {
          name: 'Titanium',
          atomic_Number: 22,
          symbol: 'Ti'
        },
        {
          name: 'Vanadium',
          atomic_Number: 23,
          symbol: 'V'
        },
        {
          name: 'Chromium',
          atomic_Number: 24,
          symbol: 'Cr'
        },
        {
          name: 'Manganese',
          atomic_Number: 25,
          symbol: 'Mn'
        },
        {
          name: 'Iron',
          atomic_Number: 26,
          symbol: 'Fe'
        },
        {
          name: 'Cobalt',
          atomic_Number: 27,
          symbol: 'Co'
        },
        {
          name: 'Nickel',
          atomic_Number: 28,
          symbol: 'Ni'
        },
        {
          name: 'Copper',
          atomic_Number: 29,
          symbol: 'Cu'
        },
        {
          name: 'Zinc',
          atomic_Number: 30,
          symbol: 'Zn'
        },
        {
          name: 'Gallium',
          atomic_Number: 31,
          symbol: 'Ga'
        },
        {
          name: 'Germanium',
          atomic_Number: 32,
          symbol: 'Ge'
        },
        {
          name: 'Arsenic',
          atomic_Number: 33,
          symbol: 'As'
        },
        {
          name: 'Selenium',
          atomic_Number: 34,
          symbol: 'Se'
        },
        {
          name: 'Bromine',
          atomic_Number: 35,
          symbol: 'Br'
        },
        {
          name: 'Krypton',
          atomic_Number: 36,
          symbol: 'Kr'
        },
        {
          name: 'Rubidium',
          atomic_Number: 37,
          symbol: 'Rb'
        },
        {
          name: 'Strontium',
          atomic_Number: 38,
          symbol: 'Sr'
        },
        {
          name: 'Yttrium',
          atomic_Number: 39,
          symbol: 'Y'
        },
        {
          name: 'Zirconium',
          atomic_Number: 40,
          symbol: 'Zr'
        },
        {
          name: 'Niobium',
          atomic_Number: 41,
          symbol: 'Nb'
        },
        {
          name: 'Molybdenum',
          atomic_Number: 42,
          symbol: 'Mo'
        },
        {
          name: 'Technetium',
          atomic_Number: 43,
          symbol: 'Tc'
        },
        {
          name: 'Ruthenium',
          atomic_Number: 44,
          symbol: 'Ru'
        },
        {
          name: 'Rhodium',
          atomic_Number: 45,
          symbol: 'Rh'
        },
        {
          name: 'Palladium',
          atomic_Number: 46,
          symbol: 'Pd'
        },
        {
          name: 'Silver',
          atomic_Number: 47,
          symbol: 'Ag'
        },
        {
          name: 'Cadmium',
          atomic_Number: 48,
          symbol: 'Cd'
        },
        {
          name: 'Indium',
          atomic_Number: 49,
          symbol: 'In'
        },
        {
          name: 'Tin',
          atomic_Number: 50,
          symbol: 'Sn'
        },
        {
          name: 'Antimony',
          atomic_Number: 51,
          symbol: 'Sb'
        },
        {
          name: 'Tellurium',
          atomic_Number: 52,
          symbol: 'Te'
        },
        {
          name: 'Iodine',
          atomic_Number: 53,
          symbol: 'I'
        },
        {
          name: 'Xenon',
          atomic_Number: 54,
          symbol: 'Xe'
        },
        {
          name: 'Cesium',
          atomic_Number: 55,
          symbol: 'Cs'
        },
        {
          name: 'Barium',
          atomic_Number: 56,
          symbol: 'Ba'
        },
        {
          name: 'Lanthanum',
          atomic_Number: 57,
          symbol: 'La'
        },
        {
          name: 'Cerium',
          atomic_Number: 58,
          symbol: 'Ce'
        },
        {
          name: 'Praseodymium',
          atomic_Number: 59,
          symbol: 'Pr'
        },
        {
          name: 'Neodymium',
          atomic_Number: 60,
          symbol: 'Nd'
        },
        {
          name: 'Promethium',
          atomic_Number: 61,
          symbol: 'Pm'
        },
        {
          name: 'Samarium',
          atomic_Number: 62,
          symbol: 'Sm'
        },
        {
          name: 'Europium',
          atomic_Number: 63,
          symbol: 'Eu'
        },
        {
          name: 'Gadolinum',
          atomic_Number: 64,
          symbol: 'Gd'
        },
        {
          name: 'Terbium',
          atomic_Number: 65,
          symbol: 'Tb'
        },
        {
          name: 'Dysprosium',
          atomic_Number: 66,
          symbol: 'Dy'
        },
        {
          name: 'Holmium',
          atomic_Number: 67,
          symbol: 'Ho'
        },
        {
          name: 'Erbium',
          atomic_Number: 68,
          symbol: 'Er'
        },
        {
          name: 'Thulium',
          atomic_Number: 69,
          symbol: 'Th'
        },
        {
          name: 'Ytterbium',
          atomic_Number: 70,
          symbol: 'Yb'
        },
        {
          name: 'Lutetium',
          atomic_Number: 71,
          symbol: 'Lu'
        },
        {
          name: 'Hafnium',
          atomic_Number: 72,
          symbol: 'Hf'
        },
        {
          name: 'Tantalum',
          atomic_Number: 73,
          symbol: 'Ta'
        },
        {
          name: 'Tungsten',
          atomic_Number: 74,
          symbol: 'W'
        },
        {
          name: 'Rhenium',
          atomic_Number: 75,
          symbol: 'Re'
        },
        {
          name: 'Osmium',
          atomic_Number: 76,
          symbol: 'Os'
        },
        {
          name: 'Iridium',
          atomic_Number: 77,
          symbol: 'Ir'
        },
        {
          name: 'Platinum',
          atomic_Number: 78,
          symbol: 'Pt'
        },
        {
          name: 'Gold',
          atomic_Number: 79,
          symbol: 'Au'
        },
        {
          name: 'Mercury',
          atomic_Number: 80,
          symbol: 'Hg'
        },
        {
          name: 'Thallium',
          atomic_Number: 81,
          symbol: 'Tl'
        },
        {
          name: 'Lead',
          atomic_Number: 82,
          symbol: 'Pb'
        },
        {
          name: 'Bismuth',
          atomic_Number: 83,
          symbol: 'Bi'
        },
        {
          name: 'Polonium',
          atomic_Number: 84,
          symbol: 'Po'
        },
        {
          name: 'Astatine',
          atomic_Number: 85,
          symbol: 'At'
        },
        {
          name: 'Radon',
          atomic_Number: 86,
          symbol: 'Rn'
        },
        {
          name: 'Francium',
          atomic_Number: 87,
          symbol: 'Fr'
        },
        {
          name: 'Radium',
          atomic_Number:88,
          symbol: 'Ra'
        },
        {
          name: 'Actinium',
          atomic_Number: 89,
          symbol: 'Ac'
        },
        {
          name: 'Thorium',
          atomic_Number: 90,
          symbol: 'Th'
        },
        {
          name: 'Protactinium',
          atomic_Number: 91,
          symbol: 'Pa'
        },
        {
          name: 'Uranium',
          atomic_Number: 92,
          symbol: 'U'
        },
        {
          name: 'Neptunium',
          atomic_Number: 93,
          symbol: 'Np'
        },
        {
          name: 'Plutonium',
          atomic_Number: 94,
          symbol: 'Pu'
        },
        {
          name: 'Americium',
          atomic_Number: 95,
          symbol: 'Am'
        },
        {
          name: 'Curium',
          atomic_Number: 96,
          symbol: 'Cm'
        },
        {
          name: 'Berkelium',
          atomic_Number: 97,
          symbol: 'Bk'
        },
        {
          name: 'Californium',
          atomic_Number: 98,
          symbol: 'Cf'
        },
        {
          name: 'Einsteinium',
          atomic_Number: 99,
          symbol: 'Es'
        },
        {
          name: 'Fermium',
          atomic_Number: 100,
          symbol: 'Fm'
        },
        {
          name: 'Mendelevium',
          atomic_Number: 101,
          symbol: 'Md'
        },
        {
          name: 'Nobelium',
          atomic_Number: 102,
          symbol: 'No'
        },
        {
          name: 'Lawrencium',
          atomic_Number: 103,
          symbol: 'Lr'
        },
        {
          name: 'Rutherfordium',
          atomic_Number: 104,
          symbol: 'Rf'
        },
        {
          name: 'Dubnium',
          atomic_Number: 105,
          symbol: 'Db'
        },
        {
          name: 'Seaborgium',
          atomic_Number: 106,
          symbol: 'Sg'
        },
        {
          name: 'Bohrium',
          atomic_Number:107,
          symbol: 'Bh'
        },
        {
          name: 'Hassium',
          atomic_Number:108,
          symbol: 'Hs'
        },
        {
          name: 'Meitnerium',
          atomic_Number: 109,
          symbol: 'Mt'
        },
        {
          name: 'Darmstadtium',
          atomic_Number: 110,
          symbol: 'Ds'
        },
        {
          name: 'Roentgenium',
          atomic_Number: 111,
          symbol: 'Rg'
        },
        {
          name: 'Copernicium',
          atomic_Number: 112,
          symbol: 'Cn'
        },
        {
          name: 'Nihonium',
          atomic_Number:113,
          symbol: 'Nh'
        },
        {
          name: 'Flerovium',
          atomic_Number:114,
          symbol: 'Fl'
        },
        {
          name: 'Moscovium',
          atomic_Number: 115,
          symbol: 'Mc'
        },
        {
          name: 'Livermorium',
          atomic_Number: 116,
          symbol: 'Lv'
        },
        {
          name: 'Tennessine',
          atomic_Number: 117,
          symbol: 'Ts'
        },
        {
          name: 'Oganesson',
          atomic_Number: 118,
          symbol: 'Og'
        }
      
      ] 
     }
  }
  getElement = (e) =>{
  const filteredData = this.state.info.filter(a => a.symbol === e.target.value);
  this.setState({
    symbol: filteredData[0].symbol,
    name: filteredData[0].name,
    atomic_number: filteredData[0].atomic_Number

  })
  console.log(filteredData[0],filteredData)
}
  
  render() { 
    
    // const atomicSymbols = this.state.elements.map(y => y.Symbol);
    let buttonInfo = [];
    for(let j=0; j<this.state.info.length; j++){
      buttonInfo.push(this.state.info[j])
    };
   const individualButtons = buttonInfo.map(i => {
      return(
        <button key={i.atomic_Number} onClick={this.getElement} value={i.symbol} className = "testClass">{i.symbol}</button>
      )});
    return (
      <div>
        <section>{individualButtons}</section>
        <div className='output'>Symbol: {this.state.symbol}</div>
        <div className='output'>Name: {this.state.name}</div>
        <div className='output'>Atomic Number: {this.state.atomic_number}</div>
      </div>
    )
  }
}

 