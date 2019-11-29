import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { FlatList, View, StyleSheet, Keyboard, TouchableOpacity, Text } from 'react-native';

export default class WebScrollView extends Component {
  renderItem =(item, index) => {
    const { renderItem } = this.props;
    return renderItem({ item, index });
  }

  render() {
    const {
      ListHeaderComponent,
      ListFooterComponent,
      data,
      inverted,
    } = this.props;
    let messages = data;
    if (!inverted) {
      messages = data.slice().reverse();
    }
    return (
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          {ListHeaderComponent()}
          {messages.map(this.renderItem)}
          {ListFooterComponent()}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    height: '100%',
    minHeight: '100%',
    width: '100%',
    overflow: 'auto',
    transform: 'rotateX(180deg)',
  },
  innerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column-reverse',
    flex: 1,
    alignItems: 'stretch',
    transform: 'rotateX(180deg)',
  },
};

WebScrollView.defaultProps = {
  data: [],
  extraData: {},
  ListHeaderComponent: () => {},
  ListFooterComponent: () => {},
  inverted: false,
};

WebScrollView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  extraData: PropTypes.object,
  inverted: PropTypes.bool,
  renderFooter: PropTypes.func,
  keyExtractor: PropTypes.func,
  enableEmptySections: PropTypes.bool,
  automaticallyAdjustContentInsets: PropTypes.bool,
  contentContainerStyle: PropTypes.object,
  renderItem: PropTypes.func,
  ListHeaderComponent: PropTypes.func,
  ListFooterComponent: PropTypes.func,
};
