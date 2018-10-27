import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { AboutWhatHappenedForm } from '../AboutWhatHappenedForm';
import { PlaceInput, Picker, TextInput, DatePicker, CheckBoxGroup, Button } from '../common';

export const FOLLOWUP_ACTIONS_OPTIONS = [
  {
    key: 'talkedToAccountable',
    label: 'Falei com algum Responsável (RH, Superior direto, etc)',
  },
  {
    key: 'gaveFeedback',
    label: 'Dei o feedback para o envolvido',
  },
  {
    key: 'policeReport',
    label: 'Fiz um Boletim de Ocorrência',
  },
];

export const HARASSMENT_TYPE_OPTIONS = [
  {
    value: 'physical',
    label: 'Assédio Físico',
  },
  {
    value: 'verbal',
    label: 'Assédio Verbal',
  },
  {
    value: 'homophobia',
    label: 'Homofobia',
  },
  {
    value: 'racism',
    label: 'Racismo',
  },
  {
    value: 'transfobia',
    label: 'Transfobia',
  },
  {
    value: 'other',
    label: 'Outro tipo de Assédio',
  },
];

export const YES_NO_OPTIONAL_OPTIONS = [
  {
    value: 'yes',
    label: 'Sim',
  },
  {
    value: 'no',
    label: 'Não',
  },
  {
    value: 'notInformed',
    label: 'Prefiro não responder',
  },
];

const props = {
  navigation: {
    navigate: () => {},
  },
  data: {
    formOptions: {
      followup_actions_options: FOLLOWUP_ACTIONS_OPTIONS,
      harassment_type_options: HARASSMENT_TYPE_OPTIONS,
      yes_no_optional_options: YES_NO_OPTIONAL_OPTIONS,
    },
  },
};

describe('AboutWhatHappenedForm', () => {
  it('renders all inputs correctly', () => {
    const wrapper = shallow(<AboutWhatHappenedForm {...props} />);
    expect(wrapper.find({ testID: 'establishment-input' }).type()).toBe(PlaceInput);
    expect(wrapper.find({ testID: 'harassment-input' }).type()).toBe(Picker);
    expect(wrapper.find({ testID: 'description-input' }).type()).toBe(TextInput);
    expect(wrapper.find({ testID: 'date-input' }).type()).toBe(DatePicker);
    expect(wrapper.find({ testID: 'followup-input' }).type()).toBe(CheckBoxGroup);
    expect(wrapper.find({ testID: 'would-recommend-input' }).type()).toBe(Picker);
    expect(wrapper.find({ testID: 'advice-input' }).type()).toBe(TextInput);
  });

  it('renders a button', () => {
    const wrapper = shallow(<AboutWhatHappenedForm {...props} />);

    expect(wrapper.find({ testID: 'next-button' }).type()).toBe(Button);
  });

  describe('input value change', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<AboutWhatHappenedForm {...props} />);
    });

    it('establishment change reflects the formData establishment state attribute', () => {
      wrapper
        .find({ testID: 'establishment-input' })
        .props()
        .onValueChange({ id: 'placeId', label: 'Place for testing' }, true);

      expect(wrapper.state('formData').establishment.value).toEqual({
        value: 'placeId',
        label: 'Place for testing',
      });
      expect(wrapper.state('formData').establishment.valid).toEqual(true);
    });

    it('harassment type change reflects the formData harassmentType state attribute', () => {
      wrapper
        .find({ testID: 'harassment-input' })
        .props()
        .onValueChange('homophobia', true);

      expect(wrapper.state('formData').harassmentType.value).toEqual('homophobia');
      expect(wrapper.state('formData').harassmentType.valid).toEqual(true);
    });

    it('description change reflects the formData description state attribute', () => {
      wrapper
        .find({ testID: 'description-input' })
        .props()
        .onValueChange('I was attacked by a Bolsominion', true);

      expect(wrapper.state('formData').description.value).toEqual('I was attacked by a Bolsominion');
      expect(wrapper.state('formData').description.valid).toEqual(true);
    });

    it('date change reflects the formData date state attribute', () => {
      wrapper
        .find({ testID: 'date-input' })
        .props()
        .onValueChange('10/10/2018', true);

      expect(wrapper.state('formData').date.value).toEqual('10/10/2018');
      expect(wrapper.state('formData').date.valid).toEqual(true);
    });

    it('follow-up change reflects the formData followupActions state attribute', () => {
      wrapper
        .find({ testID: 'followup-input' })
        .props()
        .onValueChange(['talkedToAccountable'], true);

      expect(wrapper.state('formData').followupActions.value).toEqual(['talkedToAccountable']);
      expect(wrapper.state('formData').followupActions.valid).toEqual(true);
    });

    it('would recommend change reflects the formData wouldRecommend state attribute', () => {
      wrapper
        .find({ testID: 'would-recommend-input' })
        .props()
        .onValueChange('no', true);

      expect(wrapper.state('formData').wouldRecommend.value).toEqual('no');
      expect(wrapper.state('formData').wouldRecommend.valid).toEqual(true);
    });

    it('advice change reflects the formData advice state attribute', () => {
      wrapper
        .find({ testID: 'advice-input' })
        .props()
        .onValueChange('#elenao', true);

      expect(wrapper.state('formData').advice.value).toEqual('#elenao');
      expect(wrapper.state('formData').advice.valid).toEqual(true);
    });
  });

  describe('button press', () => {
    it('does not pass the form data values to the AboutYou screen when at least one input is invalid', () => {
      props.navigation.navigate = sinon.spy();
      const wrapper = shallow(<AboutWhatHappenedForm {...props} />);

      const formData = {
        establishment: { value: {}, valid: false },
        harassmentType: { value: 'homophobia', valid: true },
        description: { value: 'I was attacked by a Bolsominion', valid: true },
        date: { value: '10/10/2018', valid: true },
        followupActions: { value: ['talkedToAccountable'], valid: true },
        wouldRecommend: { value: 'no', valid: true },
        advice: { value: '#elenao', valid: true },
      };

      wrapper.setState({ formData });
      wrapper.find('Button').simulate('press');

      expect(props.navigation.navigate.callCount).toEqual(0);
    });

    it('sets containErrors state of form and the showValidation prop of all inputs to true when at least one input is invalid', () => {
      props.navigation.navigate = sinon.spy();
      const wrapper = shallow(<AboutWhatHappenedForm {...props} />);

      const formData = {
        establishment: { value: {}, valid: false },
        harassmentType: { value: 'homophobia', valid: true },
        description: { value: 'I was attacked by a Bolsominion', valid: true },
        date: { value: '10/10/2018', valid: true },
        followupActions: { value: ['talkedToAccountable'], valid: true },
        wouldRecommend: { value: 'no', valid: true },
        advice: { value: '#elenao', valid: true },
      };

      wrapper.setState({ formData });
      wrapper.find('Button').simulate('press');

      expect(wrapper.state('containErrors')).toBeTruthy();
      expect(wrapper.find({ showValidation: true })).toHaveLength(7);
    });

    it('passes the form data values to the AboutYou screen when all inputs are valid', () => {
      props.navigation.navigate = sinon.spy();
      const wrapper = shallow(<AboutWhatHappenedForm {...props} />);

      const formData = {
        establishment: { value: { id: 'placeId' }, valid: true },
        harassmentType: { value: 'homophobia', valid: true },
        description: { value: 'I was attacked by a Bolsominion', valid: true },
        date: { value: '10/10/2018', valid: true },
        followupActions: { value: ['talkedToAccountable'], valid: true },
        wouldRecommend: { value: 'no', valid: true },
        advice: { value: '#elenao', valid: true },
      };
      const formDataValues = {};
      Object.keys(formData).forEach((key) => {
        formDataValues[key] = formData[key].value;
      });

      wrapper.setState({ formData });
      wrapper.find('Button').simulate('press');

      expect(props.navigation.navigate.callCount).toEqual(1);
      expect(props.navigation.navigate.calledWith('AboutYou', {
        formData: {
          ...formDataValues,
        },
      })).toBeTruthy();
    });
  });
});
