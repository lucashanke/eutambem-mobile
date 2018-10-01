import React from 'react';
import { fetchReportFormConstants } from '../../services/reportService';

export default WrappedComponent => (
  class extends React.Component {
    state = {
      data: null,
    }

    componentDidMount() {
      fetchReportFormConstants().then((results) => {
        this.setState({
          data: {
            formOptions: results.data.constants,
          },
        });
      });
    }

    render() {
      return (
        <WrappedComponent data={this.state.data} {...this.props} />
      );
    }
  }
);
