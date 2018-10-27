import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { SendReportForm } from '../SendReportForm';
import Report from '../Report';

import { Button } from '../common';
import * as reportService from '../../services/reportService';

import {
  HARASSMENT_TYPE_OPTIONS,
  FOLLOWUP_ACTIONS_OPTIONS,
  YES_NO_OPTIONAL_OPTIONS,
} from './AboutWhatHappenedForm.test';
import {
  SKIN_COLOR_OPTIONS,
  AGE_OPTIONS,
  WAGE_OPTIONS,
  GENDER_OPTIONS,
  SEXUAL_ORIENTATION,
} from './AboutYouForm.test';

const props = {
  navigation: {
    getParam: () => ({
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
    }),
  },
  data: {
    formOptions: {
      harassment_type_options: HARASSMENT_TYPE_OPTIONS,
      followup_actions_options: FOLLOWUP_ACTIONS_OPTIONS,
      yes_no_optional_options: YES_NO_OPTIONAL_OPTIONS,
      skin_color_options: SKIN_COLOR_OPTIONS,
      age_options: AGE_OPTIONS,
      wage_options: WAGE_OPTIONS,
      gender_options: GENDER_OPTIONS,
      sexual_orientation: SEXUAL_ORIENTATION,
    },
  },
};

const stub = sinon.stub(reportService, 'sendReport');
stub.resolves({ msg: 'Report sent' });

describe('SendReportForm', () => {
  it('renders a Report at first', () => {
    const wrapper = shallow(<SendReportForm {...props} />);

    expect(wrapper.find(Report)).toHaveLength(1);
  });

  it('renders a button at first', () => {
    const wrapper = shallow(<SendReportForm {...props} />);

    expect(wrapper.find(Button)).toHaveLength(1);
  });

  describe('button press', () => {
    it('calls saveReport and does not show the Report anymore', () => {
      const wrapper = shallow(<SendReportForm {...props} />);

      wrapper.find(Button).simulate('press');

      expect(stub.callCount).toEqual(1);
      expect(wrapper.find(Report)).toHaveLength(0);
    });
  });
});
