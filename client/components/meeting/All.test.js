import React from 'react';

import configureMockStore from 'redux-mock-store';
import meetings from '../../store/reducers/meetingReducer';
import thunk from 'redux-thunk';
import promise from "redux-promise-middleware";
import initialState from '../../store/initialState';

import {PureAll} from "./All";
import {Router} from 'react-router';
import history from '../../store/history';
import {mount} from 'enzyme';

const middlewares = [thunk, promise];
const mockStore = configureMockStore(meetings, middlewares);

describe('<All/>', () => {

    it('renders without crashing', () => {
        const store = mockStore(initialState);
        const wrapper = mount(<Router history={history}><PureAll store={store}/></Router>);
    });
});