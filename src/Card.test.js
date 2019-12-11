import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

const card = {id: '1', title: 'anything', content: 'justastring'}

describe('Messages component', () => {

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card
										key={card.id}
										title={card.title}
										content={card.content}
									/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('this card should render', () => {
const tree = renderer
  .create(<Card
            key={card.id}
            title={card.title}
            content={card.content}
          />)
  .toJSON();
expect(tree).toMatchSnapshot();
});

})