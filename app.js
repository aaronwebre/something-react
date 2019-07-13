const desc = 'Create a react node and render into DOM';
const myTitleID = 'main-title';
const name = 'Aaron';

const header = (
  <header>
    <h1 id={ myTitleID }>{ name }'s Frist React Element.</h1>
    <p>{ desc }</p>
  </header>
);

ReactDOM.render(
  header,
  document.getElementById('root')
);
