import React from 'react';
import _ from 'lodash';

const input = (WrappedComponent) => (
  class Input extends React.Component {
    static displayName = 'Input';

    static defaultProps = {
      required: false,
    };

    constructor(props) {
      super(props);
    };

    isValid = (value) => {
      return !this.props.required || (this.props.required && !_.isNil(value) && !_.isEmpty(value));
    }

    onValueChange = (value) => this.props.onValueChange(value, this.isValid(value));

    render() {
      return (
        <WrappedComponent
          {...this.props}
          onValueChange={this.onValueChange}
        />
      );
    }
  }
);

export default input;