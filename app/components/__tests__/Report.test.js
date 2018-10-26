import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import { InputReview } from '../common';
import Report from '../Report';

const props = {
  data: {
    establishment: { id: 'placeId' },
    harassmentType: 'homophobia',
    description: 'I was attacked by a Bolsominion',
    date: '10/10/2018',
    followupActions: ['talkedToAccountable'],
    wouldRecommend: 'no',
    advice: '#elenao',
    gender: '',
    skinColor: 'black',
    age: 'between36and50',
    wage: 'belowOne',
    email: 'elenao@eutambem.org',
    name: 'Marielle',
    sexualOrientation: 'other',
  },
};

describe('Report', () => {
  it('renders all input reviews correctly', () => {
    const wrapper = shallow(<Report {...props} />);

    expect(wrapper.find(InputReview)).toHaveLength(14);
  });
});
