
const head = React.createElement('div',
  { id: 'heading' },
  [React.createElement('div', {}, React.createElement('h1', {}, [React.createElement('h2', {}, 'Its P!'),React.createElement('h3', {}, 'Its P!'),React.createElement('h4', {}, 'Its P!')])),
  React.createElement('div', {}, React.createElement('h5', {}, React.createElement('p', {}, 'Its P!')))
  ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(head);