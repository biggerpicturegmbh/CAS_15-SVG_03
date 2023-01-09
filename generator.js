const ns = "http://www.w3.org/2000/svg";

const svg = document.querySelector("svg")
let wegPath = document.getElementById("weg").childNodes[1];
const pLength = wegPath.getTotalLength();
console.log(pLength)

let styles = `
    .st1{
        fill:none;
        stroke:#00F912;
        stroke-width:10;
        stroke-dashArray: ${pLength};
        stroke-dashoffset: ${pLength}; 
        /*animation: draw 6s ease-in-out forwards;*/
        transition: stroke-dashoffset 3s;
    }
    .st0{
        fill:#FC00F0;
    }
    /*@keyframes draw {
        to { stroke-dashoffset: ${pLength};}
    }*/
`

let styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)


document.querySelector('#start .st0').addEventListener('click', (e) => {
  wegPath.style = `stroke-dashoffset: 0`
  console.log("Start clicked")
})

document.querySelector('#ziel .st0').addEventListener('click', (e) => {
    wegPath.style = `stroke-dashoffset: ${pLength}`
    console.log("Ziel clicked")
  })



/*
const ns = "http://www.w3.org/2000/svg";

const svg = document.createElementNS(ns, 'svg');
document.body.append(svg);

const circle = document.createElementNS(ns, 'circle');
circle.setAttribute('cx', 150);
circle.setAttribute('cy', 150);
circle.setAttribute('r', 200);
circle.setAttribute('fill', 'red');

svg.append(circle);
*/

