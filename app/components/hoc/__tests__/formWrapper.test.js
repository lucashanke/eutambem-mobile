import 'react-native';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import formWrapper from '../formWrapper';
import * as reportService from '../../../services/reportService';

const WrappedComponent = () => (<Text>WrappedComponent</Text>);
const FormWrapper = formWrapper(WrappedComponent);


describe('formWrapper', () => {

  it('always renders WrappedComponent', () => {
    const wrapper = shallow(<FormWrapper />);
    expect(wrapper.find(WrappedComponent)).toHaveLength(1);
  });

  it('passes down formOption in data prop', async (done) => {
    const stub = sinon.stub(reportService, 'fetchReportFormConstants');
    stub.resolves({
      data: {
        constants: {
          options: [{ value: 1 , label: 'Value 1' }, { value: 2 , label: 'Value 2' }],
        }
      }
    });
    const wrapper = shallow(<FormWrapper />);

    await wrapper.instance().componentDidMount();

    expect(wrapper.find(WrappedComponent).props().data).toEqual({ formOptions: {
      options: [{ value: 1 , label: 'Value 1' }, { value: 2 , label: 'Value 2' }],
    }});

    done()
  });

});
