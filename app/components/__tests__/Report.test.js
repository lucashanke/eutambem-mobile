import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import { InputReview } from '../common';
import { Report } from '../Report';

import { HARASSMENT_TYPE_OPTIONS, FOLLOWUP_ACTIONS_OPTIONS, YES_NO_OPTIONAL_OPTIONS } from './AboutWhatHappenedForm.test';
import { SKIN_COLOR_OPTIONS, AGE_OPTIONS, WAGE_OPTIONS, GENDER_OPTIONS, SEXUAL_ORIENTATION } from './AboutYouForm.test';

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
  options: {
    harassment_type_options: HARASSMENT_TYPE_OPTIONS,
    followup_actions_options: FOLLOWUP_ACTIONS_OPTIONS,
    yes_no_optional_options: YES_NO_OPTIONAL_OPTIONS,
    skin_color_options: SKIN_COLOR_OPTIONS,
    age_options: AGE_OPTIONS,
    wage_options: WAGE_OPTIONS,
    gender_options: GENDER_OPTIONS,
    sexual_orientation: SEXUAL_ORIENTATION,
  },
};

describe('Report', () => {
  it('renders all input reviews correctly', () => {
    const wrapper = shallow(<Report {...props} />);

    expect(wrapper.find(InputReview)).toHaveLength(14);
  });
});
