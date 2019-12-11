import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

const list = {id: '1', title: 'anything', cards: [{ id: 'a', title: 'First card', content: 'lorem ipsum' }]}

describe('Messages component', () => {

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List
	            			key={list.id}
            				header={list.header}
										cards={list.cards}
									/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('this list has rendered', () => {
const tree = renderer
  .create(<List
            key={list.id}
            header={list.header}
						cards={list.cards}
          />)
  .toJSON();
expect(tree).toMatchSnapshot();  
});

})