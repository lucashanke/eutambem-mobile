import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { AboutWhatHappenedForm } from '../AboutWhatHappenedForm';


export const FOLLOWUP_ACTIONS_OPTIONS = [{
  key: 'talkedToAccountable',
  label: 'Falei com algum Responsável (RH, Superior direto, etc)',
}, {
  key: 'gaveFeedback',
  label: 'Dei o feedback para o envolvido',
}, {
  key: 'policeReport',
  label: 'Fiz um Boletim de Ocorrência',
}];

export const HARASSMENT_TYPE_OPTIONS = [{
  value: 'physical',
  label: 'Assédio Físico',
}, {
  value: 'verbal',
  label: 'Assédio Verbal',
}, {
  value: 'homophobia',
  label: 'Homofobia',
}, {
  value: 'racism',
  label: 'Racismo',
}, {
  value: 'transfobia',
  label: 'Transfobia',
}, {
  value: 'other',
  label: 'Outro tipo de Assédio',
}];

export const YES_NO_OPTIONAL_OPTIONS = [{
  value: 'yes',
  label: 'Sim',
}, {
  value: 'no',
  label: 'Não',
}, {
  value: 'notInformed',
  label: 'Prefiro não responder',
}];

const props = {
  navigation: {
    navigate: sinon.spy(),
  },
  data: {
    formOptions: {
      followup_actions_options: FOLLOWUP_ACTIONS_OPTIONS,
      harassment_type_options: HARASSMENT_TYPE_OPTIONS,
      yes_no_optional_options: YES_NO_OPTIONAL_OPTIONS,
    }
  }
};

describe('AboutWhatHappenedForm', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AboutWhatHappenedForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('passes the form data to the AboutYou screen', () => {
    const wrapper = shallow(<AboutWhatHappenedForm {...props} />);
    const initialFormData = wrapper.state().formData;

    wrapper.setState({
      formData: {
        ...initialFormData,
        description: 'something',
      },
    });

    wrapper.find('Button').simulate('press');
    
    expect(props.navigation.navigate.calledWith('AboutYou', {
      formData: {
        ...initialFormData,
        description: 'something',
      },
    })).toBeTruthy();
  });
});
