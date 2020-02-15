import React from 'react';
import App from 'components/App';

import {shallow} from 'enzyme';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<App/>);
})


it('shows a comment box',() => {
    // const div = document.createElement('div');

    
    expect(wrapper.find(CommentBox).length).toEqual(1)

    // ReactDOM.unmountComponentAtNode(div);
})

it('shows a comment list',() => {
    
    expect(wrapper.find(CommentList).length).toEqual(1)
})