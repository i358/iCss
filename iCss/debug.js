var i = 0;
var i2 = 0;
var fs = require('fs')
var arr =["@media screen and (max-width:800px){"];
while(true){
    if(i2===800) return fs.writeFile("./debug.css",arr.join('\n'), "UTF-8", ()=>{})
    i++;
    i2++;
   arr.push(`.container-x-${i2}{display:grid;grid-template:auto / auto}`)
}