import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { AboutYouForm } from '../AboutYouForm';

export const GENDER_OPTIONS = [{
  value: 'woman',
  label: 'Mulher',
}, {
  value: 'man',
  label: 'Homem',
}, {
  value: 'nonbinary',
  label: 'Não binário',
}];

export const SKIN_COLOR_OPTIONS = [{
  value: 'black',
  label: 'Negra',
}, {
  value: 'white',
  label: 'Branca',
}, {
  value: 'brown',
  label: 'Parda',
}, {
  value: 'asian',
  label: 'Amarela',
}, {
  value: 'indian',
  label: 'Indígena',
}, {
  value: 'notInformed',
  label: 'Prefiro não dizer',
}];

export const AGE_OPTIONS = [{
  value: 'lessThan18',
  label: 'Menor de 18 anos',
}, {
  value: 'between18and25',
  label: 'Entre 18 e 25 anos',
}, {
  value: 'between26and35',
  label: 'Entre 26 e 35 anos',
}, {
  value: 'between36and50',
  label: 'Entre 36 e 50 anos',
}, {
  value: 'between51and65',
  label: 'Entre 51 e 65 anos',
}, {
  value: 'over65',
  label: 'Maior de 65 anos',
}];

export const WAGE_OPTIONS = [{
  value: 'belowOne',
  label: 'Até R$724,00',
}, {
  value: 'fromOneToThree',
  label: 'De R$724,01 a R$2.172,00',
}, {
  value: 'fromThreeToFive',
  label: 'De R$2.172,01 a R$3.620,00',
}, {
  value: 'fromFiveToTen',
  label: 'De R$3.620,01 a R$7.240,00',
}, {
  value: 'fromTenToTwenty',
  label: 'De R$7.240,01 a R$14.480,00',
}, {
  value: 'overTwenty',
  label: 'Mais de R$14.480,01',
}];

const props = {
  navigation: {
    navigate: sinon.spy(),
  },
  data: {
    formOptions: {
      wage_options: WAGE_OPTIONS,
      age_options: AGE_OPTIONS,
      skin_color_options: SKIN_COLOR_OPTIONS,
      gender_options: GENDER_OPTIONS,
    },
  },
};

describe('AboutYouForm', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AboutYouForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('passes the form data to the SendReport screen', () => {
    props.navigation.getParam = (key) => {
      if (key === 'formData') {
        return {
          description: 'something',
        };
      }
      return null;
    };

    const wrapper = shallow(<AboutYouForm {...props} />);
    const initialFormData = wrapper.state().formData;
    const initialFormDataValues = wrapper.instance().getThisFormDataValues();
    wrapper.setState({
      formData: {
        ...initialFormData,
        email: { value: 'someone@example.com' },
      },
    });

    wrapper.instance().isValid = () => true;

    wrapper.find('Button').simulate('press');

    expect(props.navigation.navigate.calledWith('SendReport', {
      formData: {
        description: 'something',
        ...initialFormDataValues,
        email: 'someone@example.com',
      },
    })).toBeTruthy();
  });
});
