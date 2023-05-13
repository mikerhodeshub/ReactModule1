let mike = 'Mike Rhodes';
let amy = 'Amy Rhodes';
let linda = 'Linda Corley';
let stu = 'Stu Wood';
let robin = 'Robin Banks';
let aaron = 'Aaron D. Tyres';
const element = (
    <ul style={{
        'color': 'blue',
        'fontSize': '24px'
    }}>
        <li>{mike}</li>
        <li>{amy}</li>
        <li>{linda}</li>
        <li>{stu}</li>
        <li>{robin}</li>
        <li>{aaron}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'));