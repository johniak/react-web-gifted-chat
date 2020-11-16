/* eslint
    no-console: 0,
    no-param-reassign: 0,
    no-use-before-define: ["error", { "variables": false }],
    no-return-assign: 0,
    react/no-string-refs: 0,
    react/sort-comp: 0
*/

import PropTypes from 'prop-types';
import React from 'react';

import { FlatList, View, StyleSheet, Keyboard, Text } from 'react-native';

import LoadEarlier from './LoadEarlier';
import Message from './Message';
import Color from './Color';
import WebScrollView from './WebScrollView';
import TouchableOpacity from './TouchableOpacity';

export default class MessageContainer extends React.PureComponent {
  state = {
    showScrollBottom: false,
    imageMessages: [],
  }

  static getDerivedStateFromProps(props, state) {
    const { messages } = props;
    const imageMessages = messages.filter(item => item.image);
    return { imageMessages };
  }

  renderFooter = () => {
    if (this.props.renderFooter) {
      const footerProps = {
        ...this.props,
      };
      return this.props.renderFooter(footerProps);
    }
    return null;
  };

  renderLoadEarlier = () => {
    if (this.props.loadEarlier === true) {
      const loadEarlierProps = {
        ...this.props,
      };
      if (this.props.renderLoadEarlier) {
        return this.props.renderLoadEarlier(loadEarlierProps);
      }
      return (
        <LoadEarlier {...loadEarlierProps} />
      );
    }
    return null;
  };

  scrollTo(options) {
    // this._invertibleScrollViewRef.scrollTo(options);
  }


  scrollToBottom = () => {
    this.scrollTo({ offset: 0, animated: 'true' });
  }

  renderRow = ({ item, index }) => {
    if (!item._id && item._id !== 0) {
      console.warn('GiftedChat: `id` is missing for message', JSON.stringify(item));
    }
    if (!item.user) {
      if (!item.system) {
        console.warn('GiftedChat: `user` is missing for message', JSON.stringify(item));
      }
      item.user = {};
    }
    const { messages, ...restProps } = this.props;
    const previousMessage = messages[index + 1] || {};
    const nextMessage = messages[index - 1] || {};
    const { imageMessages } = this.state;

    const messageProps = {
      ...restProps,
      key: item._id,
      currentMessage: item,
      previousMessage,
      nextMessage,
      position: item.user._id === this.props.user._id ? 'right' : 'left',
      imageMessages,
    };

    if (this.props.renderMessage) {
      return this.props.renderMessage(messageProps);
    }
    return <Message {...messageProps} />;
  };

  renderHeaderWrapper = () => <View style={styles.headerWrapper}>{this.renderLoadEarlier()}</View>;

  renderScrollToBottomWrapper() {
    const scrollToBottomComponent = (
      <View style={styles.scrollToBottomStyle}>
        <TouchableOpacity onPress={this.scrollToBottom} hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}>
          <Text>V</Text>
        </TouchableOpacity>
      </View>
    );

    if (this.props.scrollToBottomComponent) {
      return (
        <TouchableOpacity onPress={this.scrollToBottom} hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}>
          {this.props.scrollToBottomComponent}
        </TouchableOpacity>);
    }
    return scrollToBottomComponent;
  }

  keyExtractor = item => `${item.id}`;

  render() {
    if (this.props.messages.length === 0) {
      return <View style={styles.container} />;
    }
    return (
      <View
        style={{ flex: 1 }}
        onLayout={() => {
          // this.flatListRef.current.scrollTo({x: 0, y: 0, animated: true});
        }
      }
      >
        {this.state.showScrollBottom && this.props.scrollToBottom ? this.renderScrollToBottomWrapper() : null}
        <WebScrollView
          ref={this.flatListRef}
          keyExtractor={this.keyExtractor}
          extraData={this.props.extraData}
          enableEmptySections
          automaticallyAdjustContentInsets={false}
          inverted={this.props.inverted}
          data={this.props.messages}
          style={styles.listStyle}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={this.renderRow}
          ListFooterComponent={this.renderHeaderWrapper}
          ListHeaderComponent={this.renderFooter}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    justifyContent: 'flex-end',
  },
  headerWrapper: {
    flex: 1,
  },
  listStyle: {
    flex: 1,
  },
  scrollToBottomStyle: {
    opacity: 0.8,
    position: 'absolute',
    paddingHorizontal: 15,
    paddingVertical: 8,
    right: 10,
    bottom: 30,
    zIndex: 999,
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: Color.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Color.black,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 1,
  },
});

MessageContainer.defaultProps = {
  messages: [],
  user: {},
  renderFooter: null,
  renderMessage: null,
  onLoadEarlier: () => {},
  inverted: true,
  loadEarlier: false,
  listViewProps: {},
  invertibleScrollViewProps: {},
  extraData: null,
  scrollToBottom: false,
  scrollToBottomOffset: 200,
};

MessageContainer.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object,
  renderFooter: PropTypes.func,
  renderMessage: PropTypes.func,
  renderLoadEarlier: PropTypes.func,
  onLoadEarlier: PropTypes.func,
  listViewProps: PropTypes.object,
  inverted: PropTypes.bool,
  loadEarlier: PropTypes.bool,
  invertibleScrollViewProps: PropTypes.object,
  extraData: PropTypes.object,
  scrollToBottom: PropTypes.bool,
  scrollToBottomOffset: PropTypes.number,
  scrollToBottomComponent: PropTypes.func,
};
