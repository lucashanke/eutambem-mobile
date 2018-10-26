import React from 'react';
import { View } from 'react-native';

import { InputReview, SectionHeader } from './common';

const getLabel = (key, value, options) => {
  const option = options[key].filter((option) => option.value === value)[0];
  return option ? option.label : '';
}

export const Report = (props) => {
  const { data, options } = props;
  return (
    <View>
      <SectionHeader title="Sobre o ocorrido" />
      <InputReview
        label="Empresa em que ocorreu"
        value={data.establishment.label} />
      <InputReview
        label="Tipo de assédio"
        value={getLabel('harassment_type_options',data.harassmentType, options)} />
      <InputReview
        label="Descrição"
        value={data.description} />
      <InputReview
        label="Quando ocorreu"
        value={data.date} />
      <InputReview
        label="Providências tomadas"
        value={data.followupActions.map(
          (action) => getLabel('followup_actions_options', action, options)
        )} />
      <InputReview
        label="Recomendaria essa empresa"
        value={getLabel('yes_no_optional_options', data.wouldRecommend, options)} />
      <InputReview
        label="Conselho para os gestores"
        value={data.advice} />

      <SectionHeader title="Sobre você" />
      <InputReview
        label="Gênero"
        value={getLabel('gender_options', data.gender, options)} />
      <InputReview
        label="Cor"
        value={getLabel('skin_color_options', data.skinColor, options)} />
      <InputReview
        label="Idade"
        value={getLabel('age_options', data.age, options)} />
      <InputReview
        label="Orientação sexual"
        value={getLabel('sexual_orientation', data.sexualOrientation, options)} />
      <InputReview
        label="Renda"
        value={getLabel('wage_options', data.wage, options)} />
      <InputReview
        label="Email"
        value={data.email} />
      <InputReview
        label="Nome"
        value={data.name} />
    </View>
  );
};

export default Report;
