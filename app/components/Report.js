import React from 'react';
import { View } from 'react-native';

import { InputReview, SectionHeader } from './common';

const Report = (props) => {
  const { data } = props;
  return (
    <View>
      <SectionHeader title="Sobre o ocorrido" />
      <InputReview label="Empresa em que ocorreu" value={data.establishment.label} />
      <InputReview label="Tipo de assédio" value={data.harassmentType} />
      <InputReview label="Descrição" value={data.description} />
      <InputReview label="Quando ocorreu" value={data.date} />
      <InputReview label="Providências tomadas" value={data.followupActions} />
      <InputReview label="Recomendaria essa empresa" value={data.wouldRecommend} />
      <InputReview label="Conselho para os gestores" value={data.advice} />

      <SectionHeader title="Sobre você" />
      <InputReview label="Gênero" value={data.gender} />
      <InputReview label="Cor" value={data.skinColor} />
      <InputReview label="Idade" value={data.age} />
      <InputReview label="Orientação sexual" value={data.sexualOrientation} />
      <InputReview label="Renda" value={data.wage} />
      <InputReview label="Email" value={data.email} />
      <InputReview label="Nome" value={data.name} />
    </View>
  );
};

export default Report;
