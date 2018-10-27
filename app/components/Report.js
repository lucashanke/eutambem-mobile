import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { InputReview, SectionHeader } from './common';

const getLabel = (key, value, options) => options[key].find(option => option.value === value) || '';

export const Report = (props) => {
  const { data, options } = props;
  return (
    <View>
      <SectionHeader title="Sobre o ocorrido" />
      <InputReview
        label="Empresa em que ocorreu"
        value={data.establishment.label}
      />
      <InputReview
        label="Tipo de assédio"
        value={getLabel('harassment_type_options', data.harassmentType, options)}
      />
      <InputReview
        label="Descrição"
        value={data.description}
      />
      <InputReview
        label="Quando ocorreu"
        value={data.date}
      />
      <InputReview
        label="Providências tomadas"
        value={data.followupActions.map(action =>
          getLabel('followup_actions_options', action, options))}
      />
      <InputReview
        label="Recomendaria essa empresa"
        value={getLabel('yes_no_optional_options', data.wouldRecommend, options)}
      />
      <InputReview
        label="Conselho para os gestores"
        value={data.advice}
      />

      <SectionHeader title="Sobre você" />
      <InputReview
        label="Gênero"
        value={getLabel('gender_options', data.gender, options)}
      />
      <InputReview
        label="Cor"
        value={getLabel('skin_color_options', data.skinColor, options)}
      />
      <InputReview
        label="Idade"
        value={getLabel('age_options', data.age, options)}
      />
      <InputReview
        label="Orientação sexual"
        value={getLabel('sexual_orientation', data.sexualOrientation, options)}
      />
      <InputReview
        label="Renda"
        value={getLabel('wage_options', data.wage, options)}
      />
      <InputReview
        label="Email"
        value={data.email}
      />
      <InputReview
        label="Nome"
        value={data.name}
      />
    </View>
  );
};

const OptionType = PropTypes.shape({
  label: PropTypes.string,
  value: PropTypes.string,
});

Report.propTypes = {
  data: PropTypes.shape({
    establishment: PropTypes.shape({ id: PropTypes.string }),
    harassmentType: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    followupActions: PropTypes.arrayOf(PropTypes.string),
    wouldRecommend: PropTypes.string,
    advice: PropTypes.string,
    gender: PropTypes.string,
    skinColor: PropTypes.string,
    age: PropTypes.string,
    wage: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    sexualOrientation: PropTypes.string,
  }).isRequired,
  options: PropTypes.shape({
    harassment_type_options: PropTypes.arrayOf(OptionType),
    followup_actions_options: PropTypes.arrayOf(OptionType),
    yes_no_optional_options: PropTypes.arrayOf(OptionType),
    skin_color_options: PropTypes.arrayOf(OptionType),
    age_options: PropTypes.arrayOf(OptionType),
    wage_options: PropTypes.arrayOf(OptionType),
    gender_options: PropTypes.arrayOf(OptionType),
    sexual_orientation: PropTypes.arrayOf(OptionType),
  }).isRequired,
};

export default Report;
