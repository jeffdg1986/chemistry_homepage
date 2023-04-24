import './App.css';
import peptidePic from './peptide.png';
import React, { Component } from 'react';
import axios from 'axios';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='companyName'>Paracrine Solutions</div>
        <img src={peptidePic} alt='peptidePic' className='picture animated'/>
        
        {/* <h2>This is written within the app function which lies inside the root div. It is styled from index.css if there is no styling present within the app function</h2> */}
      </header>
    </div>
  );
}
export class Elements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleType: 'greaterThanTen',
      name: '',
      atomic_number: '',
      symbol: '',
      atomic_mass: '',
      info: [
        {
          name: 'Hydrogen',
          atomic_Number: 1,
          symbol: 'H',
          atomic_Mass: 1.0080
        },
        {
          name: 'Helium',
          atomic_Number: 2,
          symbol: 'He',
          atomic_Mass: 4.00260
        },
        {
          name: 'Lithium',
          atomic_Number: 3,
          symbol: 'Li',
          atomic_Mass: 7.0
        },
        {
          name: 'Beryllium',
          atomic_Number: 4,
          symbol: 'Be',
          atomic_Mass: 9.012183
        },
        {
          name: 'Boron',
          atomic_Number: 5,
          symbol: 'B',
          atomic_Mass: 10.81
        },
        {
          name: 'Carbon',
          atomic_Number: 6,
          symbol: 'C',
          atomic_Mass: 12.011
        },
        {
          name: 'Nitrogen',
          atomic_Number: 7,
          symbol: 'N',
          atomic_Mass: 14.007
        },
        {
          name: 'Oxygen',
          atomic_Number: 8,
          symbol: 'Be',
          atomic_Mass: 15.999
        },
        {
          name: 'Fluorine',
          atomic_Number: 9,
          symbol: 'F',
          atomic_Mass: 18.99840316
        },
        {
          name: 'Neon',
          atomic_Number: 10,
          symbol: 'Ne',
          atomic_Mass: 20.180
        },
        {
          name: 'Sodium',
          atomic_Number: 11,
          symbol: 'Na',
          atomic_Mass: 22.9897693
        },
        {
          name: 'Magnesium',
          atomic_Number: 12,
          symbol: 'Mg',
          atomic_Mass: 24.305
        },
        {
          name: 'Aluminium',
          atomic_Number: 13,
          symbol: 'Al',
          atomic_Mass: 26.981538
        },
        {
          name: 'Silicon',
          atomic_Number: 14,
          symbol: 'Si',
          atomic_Mass: 28.085
        },
        {
          name: 'Phosphorus',
          atomic_Number: 15,
          symbol: 'P',
          atomic_Mass: 30.97376200
        },
        {
          name: 'Sulfur',
          atomic_Number: 16,
          symbol: 'S',
          atomic_Mass: 32.07
        },
        {
          name: 'Chlorine',
          atomic_Number: 17,
          symbol: 'Cl',
          atomic_Mass: 35.45
        },
        {
          name: 'Argon',
          atomic_Number: 18,
          symbol: 'Ar',
          atomic_Mass: 39.9
        },
        {
          name: 'Potassium',
          atomic_Number: 19,
          symbol: 'K',
          atomic_Mass: 39.0983
        },
        {
          name: 'Calcium',
          atomic_Number: 20,
          symbol: 'Ca',
          atomic_Mass: 40.08
        },
        {
          name: 'Scandium',
          atomic_Number: 21,
          symbol: 'Sc',
          atomic_Mass: 44.95591
        },
        {
          name: 'Titanium',
          atomic_Number: 22,
          symbol: 'Ti',
          atomic_Mass: 47.867
        },
        {
          name: 'Vanadium',
          atomic_Number: 23,
          symbol: 'V',
          atomic_Mass: 50.9415
        },
        {
          name: 'Chromium',
          atomic_Number: 24,
          symbol: 'Cr',
          atomic_Mass: 51.996
        },
        {
          name: 'Manganese',
          atomic_Number: 25,
          symbol: 'Mn',
          atomic_Mass: 54.93804
        },
        {
          name: 'Iron',
          atomic_Number: 26,
          symbol: 'Fe',
          atomic_Mass: 55.84
        },
        {
          name: 'Cobalt',
          atomic_Number: 27,
          symbol: 'Co',
          atomic_Mass: 58.93319
        },
        {
          name: 'Nickel',
          atomic_Number: 28,
          symbol: 'Ni',
          atomic_Mass: 58.693
        },
        {
          name: 'Copper',
          atomic_Number: 29,
          symbol: 'Cu',
          atomic_Mass: 63.55
        },
        {
          name: 'Zinc',
          atomic_Number: 30,
          symbol: 'Zn',
          atomic_Mass: 65.4
        },
        {
          name: 'Gallium',
          atomic_Number: 31,
          symbol: 'Ga',
          atomic_Mass: 69.723
        },
        {
          name: 'Germanium',
          atomic_Number: 32,
          symbol: 'Ge',
          atomic_Mass: 72.63
        },
        {
          name: 'Arsenic',
          atomic_Number: 33,
          symbol: 'As',
          atomic_Mass: 74.92159
        },
        {
          name: 'Selenium',
          atomic_Number: 34,
          symbol: 'Se',
          atomic_Mass: 78.97
        },
        {
          name: 'Bromine',
          atomic_Number: 35,
          symbol: 'Br',
          atomic_Mass: 79.90
        },
        {
          name: 'Krypton',
          atomic_Number: 36,
          symbol: 'Kr',
          atomic_Mass: 83.80
        },
        {
          name: 'Rubidium',
          atomic_Number: 37,
          symbol: 'Rb',
          atomic_Mass: 85.468
        },
        {
          name: 'Strontium',
          atomic_Number: 38,
          symbol: 'Sr',
          atomic_Mass: 87.62
        },
        {
          name: 'Yttrium',
          atomic_Number: 39,
          symbol: 'Y',
          atomic_Mass: 88.90584
        },
        {
          name: 'Zirconium',
          atomic_Number: 40,
          symbol: 'Zr',
          atomic_Mass: 91.22
        },
        {
          name: 'Niobium',
          atomic_Number: 41,
          symbol: 'Nb',
          atomic_Mass: 92.90636
        },
        {
          name: 'Molybdenum',
          atomic_Number: 42,
          symbol: 'Mo',
          atomic_Mass: 95.95
        },
        {
          name: 'Technetium',
          atomic_Number: 43,
          symbol: 'Tc',
          atomic_Mass: 96.90636
        },
        {
          name: 'Ruthenium',
          atomic_Number: 44,
          symbol: 'Ru',
          atomic_Mass: 101.1
        },
        {
          name: 'Rhodium',
          atomic_Number: 45,
          symbol: 'Rh',
          atomic_Mass: 102.9055
        },
        {
          name: 'Palladium',
          atomic_Number: 46,
          symbol: 'Pd',
          atomic_Mass: 106.42
        },
        {
          name: 'Silver',
          atomic_Number: 47,
          symbol: 'Ag',
          atomic_Mass: 107.868
        },
        {
          name: 'Cadmium',
          atomic_Number: 48,
          symbol: 'Cd',
          atomic_Mass: 112.41
        },
        {
          name: 'Indium',
          atomic_Number: 49,
          symbol: 'In',
          atomic_Mass: 114.818
        },
        {
          name: 'Tin',
          atomic_Number: 50,
          symbol: 'Sn',
          atomic_Mass: 118.71
        },
        {
          name: 'Antimony',
          atomic_Number: 51,
          symbol: 'Sb',
          atomic_Mass: 121.760
        },
        {
          name: 'Tellurium',
          atomic_Number: 52,
          symbol: 'Te',
          atomic_Mass: 127.6
        },
        {
          name: 'Iodine',
          atomic_Number: 53,
          symbol: 'I',
          atomic_Mass: 126.9045
        },
        {
          name: 'Xenon',
          atomic_Number: 54,
          symbol: 'Xe',
          atomic_Mass: 131.29
        },
        {
          name: 'Caesium',
          atomic_Number: 55,
          symbol: 'Cs',
          atomic_Mass: 132.9054520
        },
        {
          name: 'Barium',
          atomic_Number: 56,
          symbol: 'Ba',
          atomic_Mass: 137.33
        },
        {
          name: 'Lanthanum',
          atomic_Number: 57,
          symbol: 'La',
          atomic_Mass: 138.9055
        },
        {
          name: 'Cerium',
          atomic_Number: 58,
          symbol: 'Ce',
          atomic_Mass: 140.116
        },
        {
          name: 'Praseodymium',
          atomic_Number: 59,
          symbol: 'Pr',
          atomic_Mass: 140.90766
        },
        {
          name: 'Neodymium',
          atomic_Number: 60,
          symbol: 'Nd',
          atomic_Mass: 144.24
        },
        {
          name: 'Promethium',
          atomic_Number: 61,
          symbol: 'Pm',
          atomic_Mass: 144.91276
        },
        {
          name: 'Samarium',
          atomic_Number: 62,
          symbol: 'Sm',
          atomic_Mass: 150.4        
        },
        {
          name: 'Europium',
          atomic_Number: 63,
          symbol: 'Eu',
          atomic_Mass: 151.964
        },
        {
          name: 'Gadolinium',
          atomic_Number: 64,
          symbol: 'Gd',
          atomic_Mass: 157.2
        },
        {
          name: 'Terbium',
          atomic_Number: 65,
          symbol: 'Tb',
          atomic_Mass: 158.92535
        },
        {
          name: 'Dysprosium',
          atomic_Number: 66,
          symbol: 'Dy',
          atomic_Mass: 162.500
        },
        {
          name: 'Holmium',
          atomic_Number: 67,
          symbol: 'Ho',
          atomic_Mass: 164.93033
        },
        {
          name: 'Erbium',
          atomic_Number: 68,
          symbol: 'Er',
          atomic_Mass: 167.26
        },
        {
          name: 'Thulium',
          atomic_Number: 69,
          symbol: 'Th',
          atomic_Mass: 168.93422
        },
        {
          name: 'Ytterbium',
          atomic_Number: 70,
          symbol: 'Yb',
          atomic_Mass: 173.05
        },
        {
          name: 'Lutetium',
          atomic_Number: 71,
          symbol: 'Lu',
          atomic_Mass: 174.9668
        },
        {
          name: 'Hafnium',
          atomic_Number: 72,
          symbol: 'Hf',
          atomic_Mass: 178.49
        },
        {
          name: 'Tantalum',
          atomic_Number: 73,
          symbol: 'Ta',
          atomic_Mass: 180.9479
        },
        {
          name: 'Tungsten',
          atomic_Number: 74,
          symbol: 'W',
          atomic_Mass: 183.84
        },
        {
          name: 'Rhenium',
          atomic_Number: 75,
          symbol: 'Re',
          atomic_Mass: 186.207
        },
        {
          name: 'Osmium',
          atomic_Number: 76,
          symbol: 'Os',
          atomic_Mass: 190.2
        },
        {
          name: 'Iridium',
          atomic_Number: 77,
          symbol: 'Ir',
          atomic_Mass: 192.22
        },
        {
          name: 'Platinum',
          atomic_Number: 78,
          symbol: 'Pt',
          atomic_Mass: 195.08
        },
        {
          name: 'Gold',
          atomic_Number: 79,
          symbol: 'Au',
          atomic_Mass: 196.96657
        },
        {
          name: 'Mercury',
          atomic_Number: 80,
          symbol: 'Hg',
          atomic_Mass: 200.59
        },
        {
          name: 'Thallium',
          atomic_Number: 81,
          symbol: 'Tl',
          atomic_Mass: 204.383
        },
        {
          name: 'Lead',
          atomic_Number: 82,
          symbol: 'Pb',
          atomic_Mass: 207
        },
        {
          name: 'Bismuth',
          atomic_Number: 83,
          symbol: 'Bi',
          atomic_Mass: 208.98040
        },
        {
          name: 'Polonium',
          atomic_Number: 84,
          symbol: 'Po',
          atomic_Mass: 208.98243
        },
        {
          name: 'Astatine',
          atomic_Number: 85,
          symbol: 'At',
          atomic_Mass: 209.98715
        },
        {
          name: 'Radon',
          atomic_Number: 86,
          symbol: 'Rn',
          atomic_Mass: 222.01758
        },
        {
          name: 'Francium',
          atomic_Number: 87,
          symbol: 'Fr',
          atomic_Mass: 223.01973
        },
        {
          name: 'Radium',
          atomic_Number:88,
          symbol: 'Ra',
          atomic_Mass: 226.02541
        },
        {
          name: 'Actinium',
          atomic_Number: 89,
          symbol: 'Ac',
          atomic_Mass: 227.02775
        },
        {
          name: 'Thorium',
          atomic_Number: 90,
          symbol: 'Th',
          atomic_Mass: 232.038
        },
        {
          name: 'Protactinium',
          atomic_Number: 91,
          symbol: 'Pa',
          atomic_Mass: 231.03588
        },
        {
          name: 'Uranium',
          atomic_Number: 92,
          symbol: 'U',
          atomic_Mass: 238.0289
        },
        {
          name: 'Neptunium',
          atomic_Number: 93,
          symbol: 'Np',
          atomic_Mass: 237.048172
        },
        {
          name: 'Plutonium',
          atomic_Number: 94,
          symbol: 'Pu',
          atomic_Mass: 244.06420
        },
        {
          name: 'Americium',
          atomic_Number: 95,
          symbol: 'Am',
          atomic_Mass: 243.061380
        },
        {
          name: 'Curium',
          atomic_Number: 96,
          symbol: 'Cm',
          atomic_Mass: 247.07035
        },
        {
          name: 'Berkelium',
          atomic_Number: 97,
          symbol: 'Bk',
          atomic_Mass: 247.07031
        },
        {
          name: 'Californium',
          atomic_Number: 98,
          symbol: 'Cf',
          atomic_Mass: 251.07959
        },
        {
          name: 'Einsteinium',
          atomic_Number: 99,
          symbol: 'Es',
          atomic_Mass: 252.0830
        },
        {
          name: 'Fermium',
          atomic_Number: 100,
          symbol: 'Fm',
          atomic_Mass: 257.09511
        },
        {
          name: 'Mendelevium',
          atomic_Number: 101,
          symbol: 'Md',
          atomic_Mass: 258.09843
        },
        {
          name: 'Nobelium',
          atomic_Number: 102,
          symbol: 'No',
          atomic_Mass: 259.10100
        },
        {
          name: 'Lawrencium',
          atomic_Number: 103,
          symbol: 'Lr',
          atomic_Mass: 266.120
        },
        {
          name: 'Rutherfordium',
          atomic_Number: 104,
          symbol: 'Rf',
          atomic_Mass: 267.122
        },
        {
          name: 'Dubnium',
          atomic_Number: 105,
          symbol: 'Db',
          atomic_Mass: 268.126
        },
        {
          name: 'Seaborgium',
          atomic_Number: 106,
          symbol: 'Sg',
          atomic_Mass: 269.128
        },
        {
          name: 'Bohrium',
          atomic_Number:107,
          symbol: 'Bh',
          atomic_Mass: 270.133
        },
        {
          name: 'Hassium',
          atomic_Number:108,
          symbol: 'Hs',
          atomic_Mass: 269.1336
        },
        {
          name: 'Meitnerium',
          atomic_Number: 109,
          symbol: 'Mt',
          atomic_Mass: 277.154
        },
        {
          name: 'Darmstadtium',
          atomic_Number: 110,
          symbol: 'Ds',
          atomic_Mass: 282.166
        },
        {
          name: 'Roentgenium',
          atomic_Number: 111,
          symbol: 'Rg',
          atomic_Mass: 282.169
        },
        {
          name: 'Copernicium',
          atomic_Number: 112,
          symbol: 'Cn',
          atomic_Mass: 286.179
        },
        {
          name: 'Nihonium',
          atomic_Number:113,
          symbol: 'Nh',
          atomic_Mass: 286.182
        },
        {
          name: 'Flerovium',
          atomic_Number:114,
          symbol: 'Fl',
          atomic_Mass: 290.192
        },
        {
          name: 'Moscovium',
          atomic_Number: 115,
          symbol: 'Mc',
          atomic_Mass: 290.196
        },
        {
          name: 'Livermorium',
          atomic_Number: 116,
          symbol: 'Lv',
          atomic_Mass: 293.205
        },
        {
          name: 'Tennessine',
          atomic_Number: 117,
          symbol: 'Ts',
          atomic_Mass: 294.211
        },
        {
          name: 'Oganesson',
          atomic_Number: 118,
          symbol: 'Og',
          atomic_Mass: 295.216
        }
      
      ],
      data: 'Select an element' 
     }
  }

  getElement = (e) =>{
  const filteredData = this.state.info.filter(a => a.symbol === e.target.value);
  this.setState({
    symbol: filteredData[0].symbol,
    name: filteredData[0].name,
    atomic_number: filteredData[0].atomic_Number,
    atomic_mass: filteredData[0].atomic_Mass,
  })
  let apiBuilder = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&titles=" + filteredData[0].name + "&origin=*&formatversion=2";
  axios
  .get(apiBuilder, {
    responseType: 'text'
  })
  .then((response) => {
    this.setState({ data: response.data });
  })
  .catch((error) => {
    console.log(error)
  })
}

  render() { 
    // map buttonInfo for each horizontal row
    // separate each function with a series of if statements where the atomic number range is used 
    // the resulting buttons in each mapped if statement returns should be called below just like "indvidualButtons" is currently called
    // each div calling the const can inside of it contain a ternary operator for the className.
    // the styling can then be broken down into elemental types

    let buttonInfo = [];
    // stating for the length of the info array, aka encapsulates all elements listed in this.state.info
    //  this loop takes adds value to the atomic number of each button by adding one to each loop.
    for(let j=0; j<this.state.info.length; j++){
      buttonInfo.push(this.state.info[j])
    };

    
    // eslint-disable-next-line
   const rowOne = buttonInfo.map(i => {
    // maps, essentially mean its goes through each element in an array and in this case returns a button with
    // the following attributes: key, onClick, value, className
    if(i.atomic_Number > 0 && i.atomic_Number <= 2){
      return(
        <button key={i.atomic_Number} onClick={this.getElement} value={i.symbol} className={i.atomic_Number === 1 ? 'atmOne' : 'atmTwo'}><div>{i.atomic_Number}</div>{i.symbol}</button>
      )
    }
      });
      // eslint-disable-next-line
      const rowTwo = buttonInfo.map(i =>{
        if(i.atomic_Number > 2 && i.atomic_Number<= 10){
          return(
            <button key={i.atomic_Number} onClick={this.getElement} value={i.symbol} className={i.atomic_Number <= 4 ? 'atm3_4' : 'atm5_10'}><div>{i.atomic_Number}</div>{i.symbol}</button>
            )
        }
        
      });
      // eslint-disable-next-line
      const rowThree = buttonInfo.map(i =>{
        if(i.atomic_Number > 10 && i.atomic_Number<= 18){
          return(
            <button key={i.atomic_Number} onClick={this.getElement} value={i.symbol} className={i.atomic_Number <= 12 ? 'atm11_12' : 'atm13_18'}><div>{i.atomic_Number}</div>{i.symbol}</button>
            )
        }
        
      });
      // eslint-disable-next-line
      const rowFour = buttonInfo.map(i =>{
        if(i.atomic_Number > 18 && i.atomic_Number<= 36){
          return(
            <button key={i.atomic_Number} onClick={this.getElement} value={i.symbol} className='atm19_36'><div>{i.atomic_Number}</div>{i.symbol}</button>
            )
        }
        
      });
      // eslint-disable-next-line
      const rowFive = buttonInfo.map(i =>{
        if(i.atomic_Number > 36 && i.atomic_Number<= 54){
          return(
            <button key={i.atomic_Number} onClick={this.getElement} value={i.symbol} className='atm37_54'><div>{i.atomic_Number}</div>{i.symbol}</button>
            )
        }
        
      });
      // eslint-disable-next-line
      const rowSix = buttonInfo.map(i =>{
        if(i.atomic_Number > 54 && i.atomic_Number<= 56){
          return(
            <button key={i.atomic_Number} onClick={this.getElement} value={i.symbol} className='atm54_56'><div>{i.atomic_Number}</div>{i.symbol}</button>
            )
        }
        else if(i.atomic_Number > 71 && i.atomic_Number <= 86){
          return(
            <button key={i.atomic_Number} onClick={this.getElement} value={i.symbol} className='atm72_86'><div>{i.atomic_Number}</div>{i.symbol}</button>
          )
        }
        
      });
      // eslint-disable-next-line
      const rowSeven = buttonInfo.map(i =>{
        if(i.atomic_Number > 86 && i.atomic_Number<= 88){
          return(
            <button key={i.atomic_Number} onClick={this.getElement} value={i.symbol} className='atm87_88'><div>{i.atomic_Number}</div>{i.symbol}</button>
            )
        }
        else if(i.atomic_Number > 103 && i.atomic_Number <= 118){
          return(
            <button key={i.atomic_Number} onClick={this.getElement} value={i.symbol} className='atm104_118'><div>{i.atomic_Number}</div>{i.symbol}</button>
          )
        }
        
      });
      // eslint-disable-next-line
      const lanthanideSeries = buttonInfo.map(i =>{
        if(i.atomic_Number > 56 && i.atomic_Number<= 71){
          return(
            <button key={i.atomic_Number} onClick={this.getElement} value={i.symbol} className='atm58_71'><div>{i.atomic_Number}</div>{i.symbol}</button>
            )
        }
        
      });
      // eslint-disable-next-line
      const actinideSeries = buttonInfo.map(i =>{
        if(i.atomic_Number > 88 && i.atomic_Number<= 103){
          return(
            <button key={i.atomic_Number} onClick={this.getElement} value={i.symbol} className='atm89_103'><div>{i.atomic_Number}</div>{i.symbol}</button>
            )
        }
        
      });
      // the newline in the replace function isn't being replaced
      let resultingDescription = this.state.name + " " + this.state.data.substring(this.state.data.indexOf('</b>'),1000).replace(/<[^>]+>|{*}|]/g, '').replace(/\n/g, '')+ "...";

  
    return (
      <div>
      <div className='table'>
      <div className='output'> 
      <div className='testFirstHalf'>        
          <div>Symbol: {this.state.symbol}</div><br/>
          <div>Name: {this.state.name}</div><br/>
      </div>
      <div className='testSecondHalf'>
            <div>Atomic Mass:<br/>{this.state.atomic_mass + ' (g/mol)'}</div><br/>
            <div>Atomic Number: {this.state.atomic_number}</div><br/>
            </div>
        </div>
        <div>{rowOne}</div>
        <div>{rowTwo}</div>
        <div>{rowThree}</div>
        <div>{rowFour}</div>
        <div>{rowFive}</div>
        <div>{rowSix}</div>
        <div>{rowSeven}</div>
        <div>{lanthanideSeries}</div>
        <div>{actinideSeries}</div>
        </div>
        <div className='writeup'>{resultingDescription}</div>
      </div>
    )
  }
}

 