import React from 'react';
import ReactDOM from 'react-dom';
import Textarea from './components/textarea/textarea';

var textareal = document.createElement("div");
var textarea2 = document.createElement("div");
var textarea3 = document.createElement("div");

document.getElementById('react').appendChild(textareal);
document.getElementById('react').appendChild(textarea2);
document.getElementById('react').appendChild(textarea3);

/* Extra

    // "build-css": "less-watch-compiler --run-once --main-file=index.less src/less/ src/less/",
    // "watch-css": "npm run build-css && less-watch-compiler --main-file=index.less src/less/ src/less/",
*/

ReactDOM.render(<Textarea className="style1" placeholder="Įveskite tekstą 1..." />,textareal);
ReactDOM.render(<Textarea className="style2" placeholder="Įveskite tekstą 2..." readonly />,textarea2);
ReactDOM.render(<Textarea className="style3" placeholder="Įveskite tekstą 3..." disabled />,textarea3);