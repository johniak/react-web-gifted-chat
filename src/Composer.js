/* eslint no-use-before-define: ["error", { "variables": false }] */

import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { MIN_COMPOSER_HEIGHT, DEFAULT_PLACEHOLDER } from './Constant';
import Color from './Color';

export default class Composer extends React.Component {
  onContentSizeChange(e) {
    const { contentSize } = e.nativeEvent;

    // Support earlier versions of React Native on Android.
    if (!contentSize) return;

    if (
      !this.contentSize
      || this.contentSize.width !== contentSize.width
      || this.contentSize.height !== contentSize.height
    ) {
      this.contentSize = contentSize;
      this.props.onInputSizeChanged(this.contentSize);
    }
  }

  onChangeText(text) {
    this.props.onTextChanged(text);
  }

  onKeyDown(e) {
    const { text, onSend } = this.props;
    const numberOfLineBreaks = (text.match(/\n/g)||[]).length;
    const characterCount = text.length - numberOfLineBreaks;

    if (e.keyCode === 13 && e.shiftKey === false && characterCount > 0) {
      onSend({ text: text.trim() }, true);
      e.preventDefault();
    }
    return false;
  }

  render() {
    return (
      <textarea
        testID={this.props.placeholder}
        accessible
        onKeyDown={e => this.onKeyDown(e)}
        accessibilityLabel={this.props.placeholder}
        placeholder={this.props.placeholder}
        placeholderTextColor={this.props.placeholderTextColor}
        multiline={this.props.multiline}
        onChange={event => this.onChangeText(event.target.value)}
        style={{ ...styles.textInput, ...this.props.textInputStyle }}
        value={this.props.text}
        enablesReturnKeyAutomatically
        underlineColorAndroid="transparent"
        keyboardAppearance={this.props.keyboardAppearance}
        {...this.props.textInputProps}
      />
    );
  }
}

const styles = {
  textInput: {
    marginLeft: 10,
    fontSize: 16,
    lineHeight: '16px',
    paddingTop: 3,
    paddingBottom: 3,
    outline: 'none',
    border: 'none',
    overflow: 'auto',
    boxShadow: 'none',
    resize: 'none',
    width: '100%',
  },
};


Composer.defaultProps = {
  composerHeight: MIN_COMPOSER_HEIGHT,
  text: '',
  placeholderTextColor: Color.defaultProps,
  placeholder: DEFAULT_PLACEHOLDER,
  textInputProps: null,
  multiline: true,
  textInputStyle: {},
  textInputAutoFocus: false,
  keyboardAppearance: 'default',
  onTextChanged: () => {},
  onInputSizeChanged: () => {},
};

Composer.propTypes = {
  composerHeight: PropTypes.number,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  textInputProps: PropTypes.object,
  onTextChanged: PropTypes.func,
  onInputSizeChanged: PropTypes.func,
  multiline: PropTypes.bool,
  textInputStyle: TextInput.propTypes.style,
  textInputAutoFocus: PropTypes.bool,
  keyboardAppearance: PropTypes.string,
};
