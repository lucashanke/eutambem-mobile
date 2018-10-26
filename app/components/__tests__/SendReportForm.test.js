import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Text } from 'react-native';

import SendReportForm from '../SendReportForm';
import Report from '../Report';

import { Button } from '../common';
import * as reportService from '../../services/reportService';


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
