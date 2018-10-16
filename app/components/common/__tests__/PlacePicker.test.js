import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import axios from 'axios';

import PlacePicker from '../PlacePicker';

const props = {
  types: ['establishment'],
  onPlaceChange: sinon.spy(),
};

sinon.stub(axios, 'get').resolves({
  data: {
    predictions: [{
      place_id: 'testplace1',
      structured_formatting: {
        main_text: 'Test Place 1',
        secondary_text: 'Test Place 1 Description',
      },
    }, {
      place_id: 'testplace2',
      structured_formatting: {
        main_text: 'Test Place 2',
        secondary_text: 'Test Place 2 Description',
      },
    }],
  },
});

describe('PlacePicker', () => {
  it('renders a search box', () => {
    const wrapper = shallow(<PlacePicker {...props} />);
    expect(wrapper.find('Search')).toHaveLength(1);
  });

  it('renders an empty FlatList at first', () => {
    const wrapper = shallow(<PlacePicker {...props} />);

    const flatList = wrapper.find('FlatList');

    expect(flatList).toHaveLength(1);
    expect(flatList.props().data).toHaveLength(0);
  });

  it('does not render options when query is smaller than 3 caracters', async () => {
    const wrapper = shallow(<PlacePicker {...props} />);

    const search = wrapper.find('Search');
    await search.props().onChangeText('te');

    const flatList = wrapper.find('FlatList');

    expect(flatList).toHaveLength(1);
    expect(flatList.props().data).toHaveLength(0);
  });

  it('does render options when querys length is greater than or equal to 3 characters', async () => {
    const wrapper = shallow(<PlacePicker {...props} />);

    const search = wrapper.find('Search');
    await search.props().onChangeText('tes');

    const flatList = wrapper.find('FlatList');

    expect(flatList).toHaveLength(1);
    expect(flatList.props().data).toHaveLength(2);
  });

  it('press of rendered item in flatlist calls onPlaceChange prop', async () => {
    const wrapper = shallow(<PlacePicker {...props} />);
    expect(props.onPlaceChange.callCount).toEqual(0);

    const search = wrapper.find('Search');
    await search.props().onChangeText('tes');

    const flatList = wrapper.find('FlatList');
    const data = flatList.props().data;

    const item = shallow(flatList.props().renderItem({ item: data[0] }));
    item.simulate('press');

    expect(props.onPlaceChange.callCount).toEqual(1);
    expect(props.onPlaceChange.calledWith({ 
      id: 'testplace1', label: 'Test Place 1',
    })).toBeTruthy();
  });
});
