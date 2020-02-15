import React from 'react';
import CommentBox from 'components/CommentBox';
import {mount} from 'enzyme';

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox/>);
})

afterEach(() => {
    wrapped.unmount();
})

it('has a text area and a button',() => {
    // const wrapped = mount(<CommentBox/>);
    // console.log(wrapped.find('textarea').length)
    // console.log(wrapped.find('button').length)

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);

})

describe('the text area',() => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change',{
            target: {
                value: 'new comment'
            }
        })
        wrapped.update();
    })
    it('has a text area has user can type in',() =>{
       
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    })
    
    it('empties text area when form is submitted', () => {
       
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
        wrapped.find('form').simulate('submit')
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    })
})
