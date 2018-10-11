import React from 'react';
import { fetchReportFormConstants } from '../../services/reportService';

export default WrappedComponent => (
  class extends React.Component {
    state = {
      data: null,
    }

    async componentDidMount() {
      const response = await fetchReportFormConstants();
      this.setState({
        data: {
          formOptions: response.constants,
        },
      });
    }

    render() {
      return (
        <WrappedComponent data={this.state.data} {...this.props} />
      );
    }
  }
);
