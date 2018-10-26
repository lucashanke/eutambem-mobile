import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import formWrapper from '../formWrapper';
import * as reportService from '../../../services/reportService';
import * as storageService from '../../../services/storageService';


const WrappedComponent = () => (<Text>WrappedComponent</Text>);
const FormWrapper = formWrapper(WrappedComponent);

const retrieveOptionsStub = sinon.stub(storageService, 'retrieveOptions');

describe('formWrapper', () => {

  beforeEach(() => {
    retrieveOptionsStub.reset();
  });

  it('always renders WrappedComponent', () => {
    const wrapper = shallow(<FormWrapper />);
    expect(wrapper.find(WrappedComponent)).toHaveLength(1);
  });

  it('tries to get form options form local storage', async () => {
    await shallow(<FormWrapper />);

    expect(retrieveOptionsStub.callCount).toEqual(1);
    retrieveOptionsStub.reset();
  });

  it('if local storage has options, it passes them down in data prop', async () => {
    retrieveOptionsStub.resolves({
      options: [{ value: 1 , label: 'Value 1 - from local' }, { value: 2 , label: 'Value 2 - from local' }]
    });

    const wrapper = await shallow(<FormWrapper />);

    expect(wrapper.find(WrappedComponent).props().data).toEqual({ formOptions: {
      options: [{ value: 1 , label: 'Value 1 - from local' }, { value: 2 , label: 'Value 2 - from local' }]
    }});

    retrieveOptionsStub.reset();
  });

  it('if local storage has no options, it fetches from reportService and passes them down in data prop', async () => {
    retrieveOptionsStub.resolves(null);
    
    const stub = sinon.stub(reportService, 'fetchReportFormConstants');
    stub.resolves({
      constants: {
        options: [{ value: 1 , label: 'Value 1' }, { value: 2 , label: 'Value 2' }],
      },
    });

    const wrapper = await shallow(<FormWrapper />);
    await wrapper.update();

    expect(wrapper.find(WrappedComponent).props().data).toEqual({ formOptions: {
      options: [{ value: 1 , label: 'Value 1' }, { value: 2 , label: 'Value 2' }],
    }});
  });

  it('saves options to local storage', async () => {
    const spy = sinon.spy(storageService, 'storeOptions');

    retrieveOptionsStub.resolves(null);

    const wrapper = await shallow(<FormWrapper />);
    await wrapper.update();

    expect(spy.callCount).toEqual(1);
  });
});
