console.log('employees');
let mike = 'Mike Rhodes';
let amy = 'Amy Rhodes';
let linda = 'Linda Corley';
let stu = 'Stu Wood';
let robin = 'Robin Banks';
let aaron = 'Aaron D. Tyres';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, mike), /*#__PURE__*/React.createElement("li", null, amy), /*#__PURE__*/React.createElement("li", null, linda), /*#__PURE__*/React.createElement("li", null, stu), /*#__PURE__*/React.createElement("li", null, robin), /*#__PURE__*/React.createElement("li", null, aaron));
console.log(document.getElementById('container'))
ReactDOM.render(element, document.getElementById('container'));
