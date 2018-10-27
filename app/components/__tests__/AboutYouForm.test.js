import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { AboutYouForm } from '../AboutYouForm';
import { Picker, TextInput, Button } from '../common';

export const GENDER_OPTIONS = [
  {
    value: 'woman',
    label: 'Mulher',
  },
  {
    value: 'man',
    label: 'Homem',
  },
  {
    value: 'nonbinary',
    label: 'Não binário',
  },
];

export const SKIN_COLOR_OPTIONS = [
  {
    value: 'black',
    label: 'Negra',
  },
  {
    value: 'white',
    label: 'Branca',
  },
  {
    value: 'brown',
    label: 'Parda',
  },
  {
    value: 'asian',
    label: 'Amarela',
  },
  {
    value: 'indian',
    label: 'Indígena',
  },
  {
    value: 'notInformed',
    label: 'Prefiro não dizer',
  },
];

export const AGE_OPTIONS = [
  {
    value: 'lessThan18',
    label: 'Menor de 18 anos',
  },
  {
    value: 'between18and25',
    label: 'Entre 18 e 25 anos',
  },
  {
    value: 'between26and35',
    label: 'Entre 26 e 35 anos',
  },
  {
    value: 'between36and50',
    label: 'Entre 36 e 50 anos',
  },
  {
    value: 'between51and65',
    label: 'Entre 51 e 65 anos',
  },
  {
    value: 'over65',
    label: 'Maior de 65 anos',
  },
];

export const WAGE_OPTIONS = [
  {
    value: 'belowOne',
    label: 'Até R$724,00',
  },
  {
    value: 'fromOneToThree',
    label: 'De R$724,01 a R$2.172,00',
  },
  {
    value: 'fromThreeToFive',
    label: 'De R$2.172,01 a R$3.620,00',
  },
  {
    value: 'fromFiveToTen',
    label: 'De R$3.620,01 a R$7.240,00',
  },
  {
    value: 'fromTenToTwenty',
    label: 'De R$7.240,01 a R$14.480,00',
  },
  {
    value: 'overTwenty',
    label: 'Mais de R$14.480,01',
  },
];

export const SEXUAL_ORIENTATION = [
  {
    value: 'homosexual',
    label: 'Homossexual',
  },
  {
    value: 'bisexual',
    label: 'Bissexual',
  },
  {
    value: 'straight',
    label: 'Heterossexual',
  },
  {
    value: 'other',
    label: 'Outro',
  },
];

const props = {
  navigation: {
    navigate: () => {},
  },
  data: {
    formOptions: {
      wage_options: WAGE_OPTIONS,
      age_options: AGE_OPTIONS,
      skin_color_options: SKIN_COLOR_OPTIONS,
      gender_options: GENDER_OPTIONS,
      sexual_orientation: SEXUAL_ORIENTATION,
    },
  },
};

describe('AboutYouForm', () => {
  it('renders all inputs correctly', () => {
    const wrapper = shallow(<AboutYouForm {...props} />);
    expect(wrapper.find({ testID: 'gender-input' }).type()).toBe(Picker);
    expect(wrapper.find({ testID: 'skin-color-input' }).type()).toBe(Picker);
    expect(wrapper.find({ testID: 'age-input' }).type()).toBe(Picker);
    expect(wrapper.find({ testID: 'orientation-input' }).type()).toBe(Picker);
    expect(wrapper.find({ testID: 'wage-input' }).type()).toBe(Picker);
    expect(wrapper.find({ testID: 'email-input' }).type()).toBe(TextInput);
    expect(wrapper.find({ testID: 'name-input' }).type()).toBe(TextInput);
  });

  it('renders a button', () => {
    const wrapper = shallow(<AboutYouForm {...props} />);

    expect(wrapper.find({ testID: 'send-button' }).type()).toBe(Button);
  });

  describe('input value change', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<AboutYouForm {...props} />);
    });

    it('gender change reflects the formData gender state attribute', () => {
      wrapper
        .find({ testID: 'gender-input' })
        .props()
        .onValueChange('woman', true);

      expect(wrapper.state('formData').gender.value).toEqual('woman');
      expect(wrapper.state('formData').gender.valid).toEqual(true);
    });

    it('skin color type change reflects the formData skin color state attribute', () => {
      wrapper
        .find({ testID: 'skin-color-input' })
        .props()
        .onValueChange('black', true);

      expect(wrapper.state('formData').skinColor.value).toEqual('black');
      expect(wrapper.state('formData').skinColor.valid).toEqual(true);
    });

    it('age change reflects the formData age state attribute', () => {
      wrapper
        .find({ testID: 'age-input' })
        .props()
        .onValueChange('between36and50', true);

      expect(wrapper.state('formData').age.value).toEqual('between36and50');
      expect(wrapper.state('formData').age.valid).toEqual(true);
    });

    it('sexual orientation reflects the formData sexualOrentation state attribute', () => {
      wrapper
        .find({ testID: 'orientation-input' })
        .props()
        .onValueChange('straight', true);

      expect(wrapper.state('formData').sexualOrientation.value).toEqual('straight');
      expect(wrapper.state('formData').sexualOrientation.valid).toEqual(true);
    });

    it('wage change reflects the formData wage state attribute', () => {
      wrapper
        .find({ testID: 'wage-input' })
        .props()
        .onValueChange('belowOne', true);

      expect(wrapper.state('formData').wage.value).toEqual('belowOne');
      expect(wrapper.state('formData').wage.valid).toEqual(true);
    });

    it('email change reflects the formData email state attribute', () => {
      wrapper
        .find({ testID: 'email-input' })
        .props()
        .onValueChange('elenao@eutambem.org', true);

      expect(wrapper.state('formData').email.value).toEqual('elenao@eutambem.org');
      expect(wrapper.state('formData').email.valid).toEqual(true);
    });

    it('name change reflects the formData name state attribute', () => {
      wrapper
        .find({ testID: 'name-input' })
        .props()
        .onValueChange('Marielle', true);

      expect(wrapper.state('formData').name.value).toEqual('Marielle');
      expect(wrapper.state('formData').name.valid).toEqual(true);
    });
  });

  describe('button press', () => {
    it('does not pass the form data values to the SendReport screen when at least one input is invalid', () => {
      props.navigation.navigate = sinon.spy();
      const wrapper = shallow(<AboutYouForm {...props} />);

      const formData = {
        gender: { value: '', valid: false },
        skinColor: { value: 'black', valid: true },
        age: { value: 'between36and50', valid: true },
        wage: { value: 'belowOne', valid: true },
        email: { value: 'elenao@eutambem.org', valid: true },
        name: { value: 'Marielle', valid: true },
        sexualOrientation: { value: 'other', valid: true },
      };

      wrapper.setState({ formData });
      wrapper.find('Button').simulate('press');

      expect(props.navigation.navigate.callCount).toEqual(0);
    });

    it('does not pass the form data values to the SendReport screen when privacy policy was not accepted', () => {
      props.navigation.navigate = sinon.spy();
      const wrapper = shallow(<AboutYouForm {...props} />);

      const formData = {
        gender: { value: '', valid: true },
        skinColor: { value: 'black', valid: true },
        age: { value: 'between36and50', valid: true },
        wage: { value: 'belowOne', valid: true },
        email: { value: 'elenao@eutambem.org', valid: true },
        name: { value: 'Marielle', valid: true },
        sexualOrientation: { value: 'other', valid: true },
      };

      wrapper.setState({ formData, acceptedPolicies: false });
      wrapper.find('Button').simulate('press');

      expect(props.navigation.navigate.callCount).toEqual(0);
    });

    it("sets triedSubmit when tries to submit when there's at least one error", () => {
      props.navigation.navigate = sinon.spy();
      const wrapper = shallow(<AboutYouForm {...props} />);

      const formData = {
        gender: { value: '', valid: false },
        skinColor: { value: 'black', valid: true },
        age: { value: 'between36and50', valid: true },
        wage: { value: 'belowOne', valid: true },
        email: { value: 'elenao@eutambem.org', valid: true },
        name: { value: 'Marielle', valid: true },
        sexualOrientation: { value: 'other', valid: true },
      };

      wrapper.setState({ formData });
      wrapper.setState({ acceptedPolicies: true });
      wrapper.find('Button').simulate('press');

      expect(wrapper.state('triedSubmit')).toBeTruthy();
      expect(wrapper.find({ showValidation: true })).toHaveLength(7);
    });

    it('passes the form data values (including previous ones) to the SendReport screen when all inputs are valid', () => {
      props.navigation.navigate = sinon.spy();
      props.navigation.getParam = (key) => {
        if (key === 'formData') {
          return {
            description: 'something',
          };
        }
        return null;
      };

      const wrapper = shallow(<AboutYouForm {...props} />);

      const formData = {
        gender: { value: 'woman', valid: true },
        skinColor: { value: 'black', valid: true },
        age: { value: 'between36and50', valid: true },
        wage: { value: 'belowOne', valid: true },
        email: { value: 'elenao@eutambem.org', valid: true },
        name: { value: 'Marielle', valid: true },
        sexualOrientation: { value: 'other', valid: true },
      };
      const formDataValues = {};
      Object.keys(formData).forEach((key) => {
        formDataValues[key] = formData[key].value;
      });

      wrapper.setState({ formData });
      wrapper.setState({ acceptedPolicies: true });
      wrapper.find('Button').simulate('press');

      expect(props.navigation.navigate.callCount).toEqual(1);
      expect(props.navigation.navigate.calledWith('SendReport', {
        formData: {
          description: 'something',
          ...formDataValues,
        },
      })).toBeTruthy();
    });
  });
});
