import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class WebScrollView extends Component {
  componentDidUpdate() {
    let y = 0;
    if (this.props.inverted) {
      y = this.getWebViewScrollHeight();
    }
    this.scrollToOffset({ y, animated: true });
  }

  renderItem =(item, index) => {
    const { renderItem } = this.props;
    return renderItem({ item, index });
  }

  getWebViewScrollHeight() {
    return this.webViewRef ? this.webViewRef.scrollHeight : 0;
  }

  scrollToOffset(options) {
    if (this.webViewRef) {
      this.webViewRef.scrollTop = options.y;
      setTimeout(() => {
        this.webViewRef.style.visibility = 'visible';
      }, 0);
    }
  }

  render() {
    const { ListHeaderComponent, ListFooterComponent, data, inverted } = this.props;
    let messages = data;
    if (inverted) {
      messages = data.slice().reverse();
    }
    return (
      <div
        ref={ref => this.webViewRef = ref}
        style={styles.container}
      >
        {ListHeaderComponent()}
        {messages.map(this.renderItem)}
        {ListFooterComponent()}
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
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'stretch',
    visibility: 'hidden',
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
