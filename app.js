const title = <h1>My First React Element</h1>; 

const desc = <p>Create a react node and render into DOM</p>;

const header = React.createElement(
  'header',
  null,
  title,
  desc
);

ReactDOM.render(
  header,
  document.getElementById('root')
);
