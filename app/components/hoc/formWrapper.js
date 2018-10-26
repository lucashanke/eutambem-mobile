import React from 'react';
import { fetchReportFormConstants } from '../../services/reportService';
import { storeOptions, retrieveOptions } from '../../services/storageService';

export default WrappedComponent => (
  class extends React.Component {
    state = {
      data: null,
    }

    async componentDidMount() {
      const storedOptions = await retrieveOptions();
      const options =  storedOptions || (await fetchReportFormConstants()).constants;
      this.setState({
        data: {
          formOptions: options,
        },
      });
      storeOptions(options);
    }

    render() {
      return (
        <WrappedComponent data={this.state.data} {...this.props} />
      );
    }
  }
);
