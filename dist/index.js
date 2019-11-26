'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var uuid = _interopDefault(require('uuid'));
var Lightbox = _interopDefault(require('react-image-lightbox'));
var PropTypes = _interopDefault(require('prop-types'));
var moment = _interopDefault(require('moment'));
var ReactNative = require('react-native');
var ReactNative__default = _interopDefault(ReactNative);
var React = require('react');
var React__default = _interopDefault(React);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function isSameDay() {
  var currentMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var diffMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!diffMessage.createdAt) {
    return false;
  }

  var currentCreatedAt = moment(currentMessage.createdAt);
  var diffCreatedAt = moment(diffMessage.createdAt);

  if (!currentCreatedAt.isValid() || !diffCreatedAt.isValid()) {
    return false;
  }

  return currentCreatedAt.isSame(diffCreatedAt, 'day');
}
function isSameUser() {
  var currentMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var diffMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return !!(diffMessage.user && currentMessage.user && diffMessage.user.id === currentMessage.user.id);
}

var utils = /*#__PURE__*/Object.freeze({
  isSameDay: isSameDay,
  isSameUser: isSameUser
});

var Color = {
  defaultColor: '#b2b2b2',
  backgroundTransparent: 'transparent',
  defaultBlue: '#0084ff',
  leftBubbleBackground: '#f0f0f0',
  black: '#000',
  white: '#fff',
  carrot: '#e67e22',
  emerald: '#2ecc71',
  peterRiver: '#3498db',
  wisteria: '#8e44ad',
  alizarin: '#e74c3c',
  turquoise: '#1abc9c',
  midnightBlue: '#2c3e50',
  optionTintColor: '#007AFF',
  timeTextColor: '#aaa'
};

var Actions =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Actions, _React$Component);

  function Actions(props) {
    var _this;

    _classCallCheck(this, Actions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Actions).call(this, props));
    _this.onActionsPress = _this.onActionsPress.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Actions, [{
    key: "onActionsPress",
    value: function onActionsPress() {
      var _this2 = this;

      var options = this.props.options;
      var optionKeys = Object.keys(options);
      var cancelButtonIndex = optionKeys.indexOf('Cancel');
      this.context.actionSheet().showActionSheetWithOptions({
        options: optionKeys,
        cancelButtonIndex: cancelButtonIndex,
        tintColor: this.props.optionTintColor
      }, function (buttonIndex) {
        var key = optionKeys[buttonIndex];

        if (key) {
          options[key](_this2.props);
        }
      });
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      if (this.props.icon) {
        return this.props.icon();
      }

      return React__default.createElement(ReactNative.View, {
        style: [styles.wrapper, this.props.wrapperStyle]
      }, React__default.createElement(ReactNative.Text, {
        style: [styles.iconText, this.props.iconTextStyle]
      }, "+"));
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.createElement(ReactNative.TouchableOpacity, {
        style: [styles.container, this.props.containerStyle],
        onPress: this.props.onPressActionButton || this.onActionsPress
      }, this.renderIcon());
    }
  }]);

  return Actions;
}(React__default.Component);
var styles = ReactNative.StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    marginLeft: 10,
    marginBottom: 10
  },
  wrapper: {
    borderRadius: 13,
    borderColor: Color.defaultColor,
    borderWidth: 2,
    flex: 1
  },
  iconText: {
    color: Color.defaultColor,
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: Color.backgroundTransparent,
    textAlign: 'center'
  }
});
Actions.contextTypes = {
  actionSheet: PropTypes.func
};
Actions.defaultProps = {
  onSend: function onSend() {},
  options: {},
  optionTintColor: Color.optionTintColor,
  icon: null,
  containerStyle: {},
  iconTextStyle: {},
  wrapperStyle: {}
};

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var TouchableOpacity =
/*#__PURE__*/
function (_Component) {
  _inherits(TouchableOpacity, _Component);

  function TouchableOpacity() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TouchableOpacity);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TouchableOpacity)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      pressed: false
    };

    _this.handleButtonPress = function () {
      var _this$props = _this.props,
          onLongPress = _this$props.onLongPress,
          withoutFeedback = _this$props.withoutFeedback;

      _this.setState({
        pressed: true
      });

      _this.buttonPressTimer = setTimeout(onLongPress, 500);
    };

    _this.handleButtonRelease = function () {
      _this.setState({
        pressed: false
      });

      clearTimeout(_this.buttonPressTimer);
    };

    return _this;
  }

  _createClass(TouchableOpacity, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          onPress = _this$props2.onPress,
          withoutFeedback = _this$props2.withoutFeedback;
      var pressed = this.state.pressed;
      var style = this.props.style;

      if (!withoutFeedback) {
        style = _objectSpread({}, styles$1.container, pressed ? styles$1.containerPressed : styles$1.containerNotPressed, style);
      }

      return React__default.createElement("div", {
        style: style,
        onClick: onPress,
        onTouchStart: this.handleButtonPress,
        onTouchEnd: this.handleButtonRelease,
        onMouseDown: this.handleButtonPress,
        onMouseUp: this.handleButtonRelease,
        onMouseLeave: this.handleButtonRelease
      }, children);
    }
  }]);

  return TouchableOpacity;
}(React.Component);
var styles$1 = {
  container: {
    cursor: 'pointer'
  },
  containerNotPressed: {
    opacity: 1
  },
  containerPressed: {
    opacity: 0.5
  }
};
TouchableOpacity.defaultProps = {
  onPress: function onPress() {},
  onLongPress: function onLongPress() {},
  withoutFeedback: false,
  style: {}
};

var carrot = Color.carrot,
    emerald = Color.emerald,
    peterRiver = Color.peterRiver,
    wisteria = Color.wisteria,
    alizarin = Color.alizarin,
    turquoise = Color.turquoise,
    midnightBlue = Color.midnightBlue;

var GiftedAvatar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GiftedAvatar, _React$Component);

  function GiftedAvatar() {
    _classCallCheck(this, GiftedAvatar);

    return _possibleConstructorReturn(this, _getPrototypeOf(GiftedAvatar).apply(this, arguments));
  }

  _createClass(GiftedAvatar, [{
    key: "setAvatarColor",
    value: function setAvatarColor() {
      var userName = this.props.user.name || '';
      var name = userName.toUpperCase().split(' ');

      if (name.length === 1) {
        this.avatarName = "".concat(name[0].charAt(0));
      } else if (name.length > 1) {
        this.avatarName = "".concat(name[0].charAt(0)).concat(name[1].charAt(0));
      } else {
        this.avatarName = '';
      }

      var sumChars = 0;

      for (var i = 0; i < userName.length; i += 1) {
        sumChars += userName.charCodeAt(i);
      } // inspired by https://github.com/wbinnssmith/react-user-avatar
      // colors from https://flatuicolors.com/


      var colors = [carrot, emerald, peterRiver, wisteria, alizarin, turquoise, midnightBlue];
      this.avatarColor = colors[sumChars % colors.length];
    }
  }, {
    key: "renderAvatar",
    value: function renderAvatar() {
      if (typeof this.props.user.avatar === 'function') {
        return this.props.user.avatar();
      }

      if (typeof this.props.user.avatar === 'string') {
        return React__default.createElement(ReactNative.Image, {
          source: {
            uri: this.props.user.avatar
          },
          style: [styles$2.avatarStyle, this.props.avatarStyle]
        });
      }

      if (typeof this.props.user.avatar === 'number') {
        return React__default.createElement(ReactNative.Image, {
          source: this.props.user.avatar,
          style: [styles$2.avatarStyle, this.props.avatarStyle]
        });
      }

      return null;
    }
  }, {
    key: "renderInitials",
    value: function renderInitials() {
      return React__default.createElement(ReactNative.Text, {
        style: [styles$2.textStyle, this.props.textStyle]
      }, this.avatarName);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      if (!this.props.user.name && !this.props.user.avatar) {
        // render placeholder
        return React__default.createElement(ReactNative.View, {
          style: [styles$2.avatarStyle, styles$2.avatarTransparent, this.props.avatarStyle],
          accessibilityTraits: "image"
        });
      }

      if (this.props.user.avatar) {
        return React__default.createElement(TouchableOpacity, {
          disabled: !this.props.onPress,
          onPress: function onPress() {
            var _this$props = _this.props,
                onPress = _this$props.onPress,
                other = _objectWithoutProperties(_this$props, ["onPress"]);

            if (_this.props.onPress) {
              _this.props.onPress(other);
            }
          },
          accessibilityTraits: "image"
        }, this.renderAvatar());
      }

      this.setAvatarColor();
      return React__default.createElement(TouchableOpacity, {
        disabled: !this.props.onPress,
        onPress: function onPress() {
          var _this$props2 = _this.props,
              onPress = _this$props2.onPress,
              other = _objectWithoutProperties(_this$props2, ["onPress"]);

          if (_this.props.onPress) {
            _this.props.onPress(other);
          }
        },
        style: _objectSpread({}, styles$2.avatarStyle, {
          backgroundColor: this.avatarColor
        }, this.props.avatarStyle),
        accessibilityTraits: "image"
      }, this.renderInitials());
    }
  }]);

  return GiftedAvatar;
}(React__default.Component);
var styles$2 = {
  avatarStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20
  },
  avatarTransparent: {
    backgroundColor: Color.backgroundTransparent
  },
  textStyle: {
    color: Color.white,
    fontSize: 16,
    backgroundColor: Color.backgroundTransparent,
    fontWeight: '100'
  }
};
GiftedAvatar.defaultProps = {
  user: {
    name: null,
    avatar: null
  },
  onPress: null,
  avatarStyle: {},
  textStyle: {}
};

var styles$3 = {
  left: ReactNative.StyleSheet.create({
    container: {
      marginRight: 8
    },
    onTop: {
      alignSelf: 'flex-start'
    },
    onBottom: {},
    image: {
      height: 36,
      width: 36,
      borderRadius: 18
    }
  }),
  right: ReactNative.StyleSheet.create({
    container: {
      marginLeft: 8
    },
    onTop: {
      alignSelf: 'flex-start'
    },
    onBottom: {},
    image: {
      height: 36,
      width: 36,
      borderRadius: 18
    }
  })
};

var Avatar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Avatar, _React$Component);

  function Avatar() {
    _classCallCheck(this, Avatar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Avatar).apply(this, arguments));
  }

  _createClass(Avatar, [{
    key: "renderAvatar",
    value: function renderAvatar() {
      var _this = this;

      if (this.props.renderAvatar) {
        var _this$props = this.props,
            renderAvatar = _this$props.renderAvatar,
            avatarProps = _objectWithoutProperties(_this$props, ["renderAvatar"]);

        return this.props.renderAvatar(avatarProps);
      }

      return React__default.createElement(GiftedAvatar, {
        avatarStyle: ReactNative.StyleSheet.flatten([styles$3[this.props.position].image, this.props.imageStyle[this.props.position]]),
        user: this.props.currentMessage.user,
        onPress: function onPress() {
          return _this.props.onPressAvatar && _this.props.onPressAvatar(_this.props.currentMessage.user);
        },
        onClick: function onClick() {
          return _this.props.onPressAvatar && _this.props.onPressAvatar(_this.props.currentMessage.user);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          renderAvatarOnTop = _this$props2.renderAvatarOnTop,
          showAvatarForEveryMessage = _this$props2.showAvatarForEveryMessage;
      var messageToCompare = renderAvatarOnTop ? this.props.previousMessage : this.props.nextMessage;
      var computedStyle = renderAvatarOnTop ? 'onTop' : 'onBottom';

      if (this.props.renderAvatar === null) {
        return null;
      }

      if (!showAvatarForEveryMessage && isSameUser(this.props.currentMessage, messageToCompare) && isSameDay(this.props.currentMessage, messageToCompare)) {
        return React__default.createElement(ReactNative.View, {
          style: [styles$3[this.props.position].container, this.props.containerStyle[this.props.position]]
        }, React__default.createElement(GiftedAvatar, {
          avatarStyle: ReactNative.StyleSheet.flatten([styles$3[this.props.position].image, this.props.imageStyle[this.props.position]])
        }));
      }

      return React__default.createElement(ReactNative.View, {
        style: [styles$3[this.props.position].container, styles$3[this.props.position][computedStyle], this.props.containerStyle[this.props.position]]
      }, this.renderAvatar());
    }
  }]);

  return Avatar;
}(React__default.Component);
Avatar.defaultProps = {
  renderAvatarOnTop: false,
  showAvatarForEveryMessage: false,
  position: 'left',
  currentMessage: {
    user: null
  },
  previousMessage: {},
  nextMessage: {},
  containerStyle: {},
  imageStyle: {},
  onPressAvatar: function onPressAvatar() {}
};

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

var TextExtraction =
/*#__PURE__*/
function () {
  /**
   * @param {String} text - Text to be parsed
   * @param {Object[]} patterns - Patterns to be used when parsed
   *                              other options than pattern would be added to the parsed content
   * @param {RegExp} patterns[].pattern - RegExp to be used for parsing
   */
  function TextExtraction(text, patterns) {
    _classCallCheck(this, TextExtraction);

    this.text = text;
    this.patterns = patterns || [];
  }
  /**
   * Returns parts of the text with their own props
   * @return {Object[]} - props for all the parts of the text
   */


  _createClass(TextExtraction, [{
    key: "parse",
    value: function parse() {
      var _this = this;

      var parsedTexts = [{
        children: this.text
      }];
      this.patterns.forEach(function (pattern) {
        var newParts = [];
        parsedTexts.forEach(function (parsedText) {
          // Only allow for now one parsing
          if (parsedText._matched) {
            newParts.push(parsedText);
            return;
          }

          var parts = [];
          var textLeft = parsedText.children;

          while (textLeft) {
            var matches = pattern.pattern.exec(textLeft);

            if (!matches) {
              break;
            }

            var previousText = textLeft.substr(0, matches.index);
            parts.push({
              children: previousText
            });
            parts.push(_this.getMatchedPart(pattern, matches[0], matches));
            textLeft = textLeft.substr(matches.index + matches[0].length);
          }

          parts.push({
            children: textLeft
          });
          newParts.push.apply(newParts, parts);
        });
        parsedTexts = newParts;
      }); // Remove _matched key.

      parsedTexts.forEach(function (parsedText) {
        return delete parsedText._matched;
      });
      return parsedTexts.filter(function (t) {
        return !!t.children;
      });
    } // private

    /**
     * @param {Object} matchedPattern - pattern configuration of the pattern used to match the text
     * @param {RegExp} matchedPattern.pattern - pattern used to match the text
     * @param {String} text - Text matching the pattern
     * @param {String[]} text - Result of the RegExp.exec
     * @return {Object} props for the matched text
     */

  }, {
    key: "getMatchedPart",
    value: function getMatchedPart(matchedPattern, text, matches) {
      var props = {};
      Object.keys(matchedPattern).forEach(function (key) {
        if (key === 'pattern' || key === 'renderText') {
          return;
        }

        if (typeof matchedPattern[key] === 'function') {
          props[key] = function () {
            return matchedPattern[key](text);
          };
        } else {
          props[key] = matchedPattern[key];
        }
      });
      var children = text;

      if (matchedPattern.renderText && typeof matchedPattern.renderText === 'function') {
        children = matchedPattern.renderText(text, matches);
      }

      return _objectSpread({}, props, {
        children: children,
        _matched: true
      });
    }
  }]);

  return TextExtraction;
}();

var PATTERNS = {
  url: /(https?:\/\/|www\.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/i,
  phone: /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/,
  email: /\S+@\S+\.\S+/
};

var ParsedText =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ParsedText, _React$Component);

  function ParsedText() {
    _classCallCheck(this, ParsedText);

    return _possibleConstructorReturn(this, _getPrototypeOf(ParsedText).apply(this, arguments));
  }

  _createClass(ParsedText, [{
    key: "setNativeProps",
    value: function setNativeProps(nativeProps) {
      this._root.setNativeProps(nativeProps);
    }
  }, {
    key: "getPatterns",
    value: function getPatterns() {
      return this.props.parse.map(function (option) {
        var type = option.type,
            patternOption = _objectWithoutProperties(option, ["type"]);

        if (type) {
          if (!PATTERNS[type]) {
            throw new Error("".concat(option.type, " is not a supported type"));
          }

          patternOption.pattern = PATTERNS[type];
        }

        return patternOption;
      });
    }
  }, {
    key: "getParsedText",
    value: function getParsedText() {
      if (!this.props.parse) {
        return this.props.children;
      }

      if (typeof this.props.children !== 'string') {
        return this.props.children;
      }

      var textExtraction = new TextExtraction(this.props.children, this.getPatterns());
      var childrenProps = this.props.childrenProps || {};

      var props = _objectSpread({}, this.props);

      delete props.childrenProps;
      return textExtraction.parse().map(function (props, index) {
        return React__default.createElement(ReactNative__default.Text, Object.assign({
          key: "parsedText-".concat(index)
        }, childrenProps, props));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var props = _objectSpread({}, this.props);

      delete props.childrenProps;
      return React__default.createElement(ReactNative__default.Text, Object.assign({
        ref: function ref(_ref) {
          return _this._root = _ref;
        }
      }, props), this.getParsedText());
    }
  }]);

  return ParsedText;
}(React__default.Component);

ParsedText.displayName = 'ParsedText';
ParsedText.defaultProps = {
  parse: null
};

var WWW_URL_PATTERN = /^www\./i;

var MessageText =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MessageText, _React$Component);

  function MessageText(props) {
    var _this;

    _classCallCheck(this, MessageText);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MessageText).call(this, props));
    _this.onUrlPress = _this.onUrlPress.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onPhonePress = _this.onPhonePress.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onEmailPress = _this.onEmailPress.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(MessageText, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.currentMessage.text !== nextProps.currentMessage.text;
    }
  }, {
    key: "onUrlPress",
    value: function onUrlPress(url) {
      // When someone sends a message that includes a website address beginning with "www." (omitting the scheme),
      // react-native-parsed-text recognizes it as a valid url, but Linking fails to open due to the missing scheme.
      if (WWW_URL_PATTERN.test(url)) {
        this.onUrlPress("http://".concat(url));
      } else {
        ReactNative.Linking.canOpenURL(url).then(function (supported) {
          if (!supported) {
            // eslint-disable-next-line
            console.error('No handler for URL:', url);
          } else {
            ReactNative.Linking.openURL(url);
          }
        });
      }
    }
  }, {
    key: "onPhonePress",
    value: function onPhonePress(phone) {
      var options = ['Call', 'Text', 'Cancel'];
      var cancelButtonIndex = options.length - 1;
      this.context.actionSheet().showActionSheetWithOptions({
        options: options,
        cancelButtonIndex: cancelButtonIndex
      }, function (buttonIndex) {// switch (buttonIndex) {
        //   case 0:
        //     Communications.phonecall(phone, true);
        //     break;
        //   case 1:
        //     Communications.text(phone);
        //     break;
        // }
      });
    }
  }, {
    key: "onEmailPress",
    value: function onEmailPress(email) {// Communications.email(email, null, null, null, null);
    }
  }, {
    key: "render",
    value: function render() {
      var linkStyle = ReactNative.StyleSheet.flatten([styles$4[this.props.position].link, this.props.linkStyle[this.props.position]]);
      return React__default.createElement(ReactNative.View, {
        style: [styles$4[this.props.position].container, this.props.containerStyle[this.props.position]]
      }, React__default.createElement(ParsedText, {
        style: [styles$4[this.props.position].text, this.props.textStyle[this.props.position], this.props.customTextStyle],
        parse: _toConsumableArray(this.props.parsePatterns(linkStyle)).concat([{
          type: 'url',
          style: linkStyle,
          onPress: this.onUrlPress
        }, {
          type: 'phone',
          style: linkStyle,
          onPress: this.onPhonePress
        }, {
          type: 'email',
          style: linkStyle,
          onPress: this.onEmailPress
        }]),
        childrenProps: _objectSpread({}, this.props.textProps)
      }, this.props.currentMessage.text));
    }
  }]);

  return MessageText;
}(React__default.Component);
var textStyle = {
  fontSize: 16,
  lineHeight: 20,
  marginTop: 5,
  marginBottom: 5,
  marginLeft: 10,
  marginRight: 10
};
var styles$4 = {
  left: ReactNative.StyleSheet.create({
    container: {},
    text: _objectSpread({
      color: 'black'
    }, textStyle),
    link: {
      color: 'black',
      textDecorationLine: 'underline'
    }
  }),
  right: ReactNative.StyleSheet.create({
    container: {},
    text: _objectSpread({
      color: 'white'
    }, textStyle),
    link: {
      color: 'white',
      textDecorationLine: 'underline'
    }
  })
};
MessageText.contextTypes = {
  actionSheet: PropTypes.func
};
MessageText.defaultProps = {
  position: 'left',
  currentMessage: {
    text: ''
  },
  containerStyle: {},
  textStyle: {},
  linkStyle: {},
  customTextStyle: {},
  textProps: {},
  parsePatterns: function parsePatterns() {
    return [];
  }
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "@keyframes closeWindow {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.ril__outer {\n  background-color: rgba(0, 0, 0, 0.85);\n  outline: none;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  -ms-content-zooming: none;\n  -ms-user-select: none;\n  -ms-touch-select: none;\n  touch-action: none;\n}\n\n.ril__outerClosing {\n  opacity: 0;\n}\n\n.ril__inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.ril__image,\n.ril__imagePrev,\n.ril__imageNext {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  max-width: none;\n  -ms-content-zooming: none;\n  -ms-user-select: none;\n  -ms-touch-select: none;\n  touch-action: none;\n}\n\n.ril__imageDiscourager {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n}\n\n.ril__navButtons {\n  border: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 20px;\n  height: 34px;\n  padding: 40px 30px;\n  margin: auto;\n  cursor: pointer;\n  opacity: 0.7;\n}\n.ril__navButtons:hover {\n  opacity: 1;\n}\n.ril__navButtons:active {\n  opacity: 0.7;\n}\n\n.ril__navButtonPrev {\n  left: 0;\n  background: rgba(0, 0, 0, 0.2)\n    url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjM0Ij48cGF0aCBkPSJtIDE5LDMgLTIsLTIgLTE2LDE2IDE2LDE2IDEsLTEgLTE1LC0xNSAxNSwtMTUgeiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==')\n    no-repeat center;\n}\n\n.ril__navButtonNext {\n  right: 0;\n  background: rgba(0, 0, 0, 0.2)\n    url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjM0Ij48cGF0aCBkPSJtIDEsMyAyLC0yIDE2LDE2IC0xNiwxNiAtMSwtMSAxNSwtMTUgLTE1LC0xNSB6IiBmaWxsPSIjRkZGIi8+PC9zdmc+')\n    no-repeat center;\n}\n\n.ril__downloadBlocker {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image: url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');\n  background-size: cover;\n}\n\n.ril__caption,\n.ril__toolbar {\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n}\n\n.ril__caption {\n  bottom: 0;\n  max-height: 150px;\n  overflow: auto;\n}\n\n.ril__captionContent {\n  padding: 10px 20px;\n  color: #fff;\n}\n\n.ril__toolbar {\n  top: 0;\n  height: 50px;\n}\n\n.ril__toolbarSide {\n  height: 50px;\n  margin: 0;\n}\n\n.ril__toolbarLeftSide {\n  padding-left: 20px;\n  padding-right: 0;\n  flex: 0 1 auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ril__toolbarRightSide {\n  padding-left: 0;\n  padding-right: 20px;\n  flex: 0 0 auto;\n}\n\n.ril__toolbarItem {\n  display: inline-block;\n  line-height: 50px;\n  padding: 0;\n  color: #fff;\n  font-size: 120%;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ril__toolbarItemChild {\n  vertical-align: middle;\n}\n\n.ril__builtinButton {\n  width: 40px;\n  height: 35px;\n  cursor: pointer;\n  border: none;\n  opacity: 0.7;\n}\n.ril__builtinButton:hover {\n  opacity: 1;\n}\n.ril__builtinButton:active {\n  outline: none;\n}\n\n.ril__builtinButtonDisabled {\n  cursor: default;\n  opacity: 0.5;\n}\n.ril__builtinButtonDisabled:hover {\n  opacity: 0.5;\n}\n\n.ril__closeButton {\n  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48cGF0aCBkPSJtIDEsMyAxLjI1LC0xLjI1IDcuNSw3LjUgNy41LC03LjUgMS4yNSwxLjI1IC03LjUsNy41IDcuNSw3LjUgLTEuMjUsMS4yNSAtNy41LC03LjUgLTcuNSw3LjUgLTEuMjUsLTEuMjUgNy41LC03LjUgLTcuNSwtNy41IHoiIGZpbGw9IiNGRkYiLz48L3N2Zz4=')\n    no-repeat center;\n}\n\n.ril__zoomInButton {\n  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTEgMTlsNi02Ii8+PHBhdGggZD0iTTkgOGg2Ii8+PHBhdGggZD0iTTEyIDV2NiIvPjwvZz48Y2lyY2xlIGN4PSIxMiIgY3k9IjgiIHI9IjciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')\n    no-repeat center;\n}\n\n.ril__zoomOutButton {\n  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTEgMTlsNi02Ii8+PHBhdGggZD0iTTkgOGg2Ii8+PC9nPjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')\n    no-repeat center;\n}\n\n.ril__outerAnimating {\n  animation-name: closeWindow;\n}\n\n@keyframes pointFade {\n  0%,\n  19.999%,\n  100% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n}\n\n.ril__loadingCircle {\n  width: 60px;\n  height: 60px;\n  position: relative;\n}\n\n.ril__loadingCirclePoint {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.ril__loadingCirclePoint::before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 11%;\n  height: 30%;\n  background-color: #fff;\n  border-radius: 30%;\n  animation: pointFade 800ms infinite ease-in-out both;\n}\n.ril__loadingCirclePoint:nth-of-type(1) {\n  transform: rotate(0deg);\n}\n.ril__loadingCirclePoint:nth-of-type(7) {\n  transform: rotate(180deg);\n}\n.ril__loadingCirclePoint:nth-of-type(1)::before,\n.ril__loadingCirclePoint:nth-of-type(7)::before {\n  animation-delay: -800ms;\n}\n.ril__loadingCirclePoint:nth-of-type(2) {\n  transform: rotate(30deg);\n}\n.ril__loadingCirclePoint:nth-of-type(8) {\n  transform: rotate(210deg);\n}\n.ril__loadingCirclePoint:nth-of-type(2)::before,\n.ril__loadingCirclePoint:nth-of-type(8)::before {\n  animation-delay: -666ms;\n}\n.ril__loadingCirclePoint:nth-of-type(3) {\n  transform: rotate(60deg);\n}\n.ril__loadingCirclePoint:nth-of-type(9) {\n  transform: rotate(240deg);\n}\n.ril__loadingCirclePoint:nth-of-type(3)::before,\n.ril__loadingCirclePoint:nth-of-type(9)::before {\n  animation-delay: -533ms;\n}\n.ril__loadingCirclePoint:nth-of-type(4) {\n  transform: rotate(90deg);\n}\n.ril__loadingCirclePoint:nth-of-type(10) {\n  transform: rotate(270deg);\n}\n.ril__loadingCirclePoint:nth-of-type(4)::before,\n.ril__loadingCirclePoint:nth-of-type(10)::before {\n  animation-delay: -400ms;\n}\n.ril__loadingCirclePoint:nth-of-type(5) {\n  transform: rotate(120deg);\n}\n.ril__loadingCirclePoint:nth-of-type(11) {\n  transform: rotate(300deg);\n}\n.ril__loadingCirclePoint:nth-of-type(5)::before,\n.ril__loadingCirclePoint:nth-of-type(11)::before {\n  animation-delay: -266ms;\n}\n.ril__loadingCirclePoint:nth-of-type(6) {\n  transform: rotate(150deg);\n}\n.ril__loadingCirclePoint:nth-of-type(12) {\n  transform: rotate(330deg);\n}\n.ril__loadingCirclePoint:nth-of-type(6)::before,\n.ril__loadingCirclePoint:nth-of-type(12)::before {\n  animation-delay: -133ms;\n}\n.ril__loadingCirclePoint:nth-of-type(7) {\n  transform: rotate(180deg);\n}\n.ril__loadingCirclePoint:nth-of-type(13) {\n  transform: rotate(360deg);\n}\n.ril__loadingCirclePoint:nth-of-type(7)::before,\n.ril__loadingCirclePoint:nth-of-type(13)::before {\n  animation-delay: 0ms;\n}\n\n.ril__loadingContainer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.ril__imagePrev .ril__loadingContainer,\n.ril__imageNext .ril__loadingContainer {\n  display: none;\n}\n\n.ril__errorContainer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n}\n.ril__imagePrev .ril__errorContainer,\n.ril__imageNext .ril__errorContainer {\n  display: none;\n}\n\n.ril__loadingContainer__icon {\n  color: #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n";
styleInject(css);

var MessageImage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MessageImage, _React$Component);

  function MessageImage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MessageImage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MessageImage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      isOpen: false,
      messageIndex: 0
    };

    _this.onClickImage = function () {
      _this.setState({
        isOpen: true
      });
    };

    return _this;
  }

  _createClass(MessageImage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          imageMessages = _this$props.imageMessages,
          currentMessage = _this$props.currentMessage,
          imageProps = _this$props.imageProps,
          containerStyle = _this$props.containerStyle,
          imageStyle = _this$props.imageStyle;
      var _this$state = this.state,
          isOpen = _this$state.isOpen,
          messageIndex = _this$state.messageIndex;

      if (isOpen) {
        console.log('messageIndex', messageIndex);
      }

      return React__default.createElement(TouchableOpacity, {
        onPress: this.onClickImage,
        style: _objectSpread({}, styles$5.container, containerStyle)
      }, React__default.createElement(ReactNative.Image, Object.assign({}, imageProps, {
        style: [styles$5.image, this.props.imageStyle],
        source: {
          uri: currentMessage.image
        }
      })), isOpen && React__default.createElement(Lightbox, {
        onCloseRequest: function onCloseRequest() {
          return _this2.setState({
            isOpen: false
          });
        },
        mainSrc: imageMessages[messageIndex].image,
        nextSrc: imageMessages[(messageIndex + 1) % imageMessages.length].image,
        prevSrc: imageMessages[(messageIndex + imageMessages.length - 1) % imageMessages.length].image,
        onMovePrevRequest: function onMovePrevRequest() {
          return _this2.setState({
            messageIndex: (messageIndex + imageMessages.length - 1) % imageMessages.length
          });
        },
        onMoveNextRequest: function onMoveNextRequest() {
          return _this2.setState({
            messageIndex: (messageIndex + 1) % imageMessages.length
          });
        }
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (state.isOpen) {
        return {};
      }

      var imageMessages = props.imageMessages,
          currentMessage = props.currentMessage;
      var messagesIds = imageMessages.map(function (item) {
        return item.id;
      });
      var messageIndex = messagesIds.indexOf(currentMessage.id);
      return {
        messageIndex: messageIndex
      };
    }
  }]);

  return MessageImage;
}(React__default.Component);
var styles$5 = ReactNative.StyleSheet.create({
  container: {},
  image: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
    resizeMode: 'cover'
  },
  imageActive: {
    flex: 1,
    resizeMode: 'contain'
  }
});
MessageImage.defaultProps = {
  currentMessage: {
    image: null
  },
  containerStyle: {},
  imageStyle: {},
  imageProps: {},
  lightboxProps: {}
};

function MessageVideo(_ref) {
  var containerStyle = _ref.containerStyle,
      videoProps = _ref.videoProps,
      videoStyle = _ref.videoStyle,
      currentMessage = _ref.currentMessage;
  return (// eslint-disable-next-line no-use-before-define
    React__default.createElement(ReactNative.View, {
      style: [styles$6.container, containerStyle]
    })
  );
}
var styles$6 = ReactNative.StyleSheet.create({
  container: {}
});
MessageVideo.defaultProps = {
  currentMessage: {// video: null,
  },
  containerStyle: {},
  videoStyle: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3
  },
  videoProps: {}
};

var MIN_COMPOSER_HEIGHT = 41;
var MAX_COMPOSER_HEIGHT = 41;
var DEFAULT_PLACEHOLDER = 'Type a message...';
var DATE_FORMAT = 'll';
var TIME_FORMAT = 'LT';

function Time(_ref, context) {
  var position = _ref.position,
      containerStyle = _ref.containerStyle,
      currentMessage = _ref.currentMessage,
      timeFormat = _ref.timeFormat,
      textStyle = _ref.textStyle,
      timeTextStyle = _ref.timeTextStyle;
  return React__default.createElement(ReactNative.View, {
    style: [styles$7[position].container, containerStyle[position]]
  }, React__default.createElement(ReactNative.Text, {
    style: [styles$7[position].text, textStyle[position], timeTextStyle[position]]
  }, moment(currentMessage.createdAt).locale(context.getLocale()).format(timeFormat)));
}
var containerStyle = {
  marginLeft: 10,
  marginRight: 10,
  marginBottom: 5
};
var textStyle$1 = {
  fontSize: 10,
  backgroundColor: 'transparent',
  textAlign: 'right'
};
var styles$7 = {
  left: ReactNative.StyleSheet.create({
    container: _objectSpread({}, containerStyle),
    text: _objectSpread({
      color: Color.timeTextColor
    }, textStyle$1)
  }),
  right: ReactNative.StyleSheet.create({
    container: _objectSpread({}, containerStyle),
    text: _objectSpread({
      color: Color.white
    }, textStyle$1)
  })
};
Time.contextTypes = {
  getLocale: PropTypes.func
};
Time.defaultProps = {
  position: 'left',
  currentMessage: {
    createdAt: null
  },
  containerStyle: {},
  textStyle: {},
  timeFormat: TIME_FORMAT,
  timeTextStyle: {}
};

var Bubble =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Bubble, _React$Component);

  function Bubble() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Bubble);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Bubble)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onLongPress = function () {
      if (_this.props.onLongPress) {
        _this.props.onLongPress(_this.context, _this.props.currentMessage);
      } else if (_this.props.currentMessage.text) {
        var options = ['Copy Text', 'Cancel'];
        var cancelButtonIndex = options.length - 1;

        _this.context.actionSheet().showActionSheetWithOptions({
          options: options,
          cancelButtonIndex: cancelButtonIndex
        }, function (buttonIndex) {
          switch (buttonIndex) {
            case 0:
              ReactNative.Clipboard.setString(_this.props.currentMessage.text);
              break;

            default:
              break;
          }
        });
      }
    };

    return _this;
  }

  _createClass(Bubble, [{
    key: "handleBubbleToNext",
    value: function handleBubbleToNext() {
      if (isSameUser(this.props.currentMessage, this.props.nextMessage) && isSameDay(this.props.currentMessage, this.props.nextMessage)) {
        return ReactNative.StyleSheet.flatten([styles$8[this.props.position].containerToNext, this.props.containerToNextStyle[this.props.position]]);
      }

      return null;
    }
  }, {
    key: "handleBubbleToPrevious",
    value: function handleBubbleToPrevious() {
      if (isSameUser(this.props.currentMessage, this.props.previousMessage) && isSameDay(this.props.currentMessage, this.props.previousMessage)) {
        return ReactNative.StyleSheet.flatten([styles$8[this.props.position].containerToPrevious, this.props.containerToPreviousStyle[this.props.position]]);
      }

      return null;
    }
  }, {
    key: "renderMessageText",
    value: function renderMessageText() {
      if (this.props.currentMessage.text) {
        var _this$props = this.props,
            containerStyle = _this$props.containerStyle,
            wrapperStyle = _this$props.wrapperStyle,
            messageTextProps = _objectWithoutProperties(_this$props, ["containerStyle", "wrapperStyle"]);

        if (this.props.renderMessageText) {
          return this.props.renderMessageText(messageTextProps);
        }

        return React__default.createElement(MessageText, messageTextProps);
      }

      return null;
    }
  }, {
    key: "renderMessageImage",
    value: function renderMessageImage() {
      if (this.props.currentMessage.image) {
        var _this$props2 = this.props,
            containerStyle = _this$props2.containerStyle,
            wrapperStyle = _this$props2.wrapperStyle,
            messageImageProps = _objectWithoutProperties(_this$props2, ["containerStyle", "wrapperStyle"]);

        if (this.props.renderMessageImage) {
          return this.props.renderMessageImage(messageImageProps);
        }

        return React__default.createElement(MessageImage, messageImageProps);
      }

      return null;
    }
  }, {
    key: "renderMessageVideo",
    value: function renderMessageVideo() {
      if (this.props.currentMessage.video) {
        var _this$props3 = this.props,
            containerStyle = _this$props3.containerStyle,
            wrapperStyle = _this$props3.wrapperStyle,
            messageVideoProps = _objectWithoutProperties(_this$props3, ["containerStyle", "wrapperStyle"]);

        if (this.props.renderMessageVideo) {
          return this.props.renderMessageVideo(messageVideoProps);
        }

        return React__default.createElement(MessageVideo, messageVideoProps);
      }

      return null;
    }
  }, {
    key: "renderTicks",
    value: function renderTicks() {
      var currentMessage = this.props.currentMessage;

      if (this.props.renderTicks) {
        return this.props.renderTicks(currentMessage);
      }

      if (currentMessage.user.id !== this.props.user.id) {
        return;
      }

      if (currentMessage.sent || currentMessage.received || currentMessage.pending) {
        return React__default.createElement(ReactNative.View, {
          style: styles$8.tickView
        }, currentMessage.sent && React__default.createElement(ReactNative.Text, {
          style: [styles$8.tick, this.props.tickStyle]
        }, "\u2713"), currentMessage.received && React__default.createElement(ReactNative.Text, {
          style: [styles$8.tick, this.props.tickStyle]
        }, "\u2713"), currentMessage.pending && React__default.createElement(ReactNative.Text, {
          style: [styles$8.tick, this.props.tickStyle]
        }, "\uD83D\uDD53"));
      }

      return null;
    }
  }, {
    key: "renderTime",
    value: function renderTime() {
      if (this.props.currentMessage.createdAt) {
        var _this$props4 = this.props,
            containerStyle = _this$props4.containerStyle,
            wrapperStyle = _this$props4.wrapperStyle,
            timeProps = _objectWithoutProperties(_this$props4, ["containerStyle", "wrapperStyle"]);

        if (this.props.renderTime) {
          return this.props.renderTime(timeProps);
        }

        return React__default.createElement(Time, timeProps);
      }

      return null;
    }
  }, {
    key: "renderUsername",
    value: function renderUsername() {
      var currentMessage = this.props.currentMessage;

      if (this.props.renderUsernameOnMessage) {
        if (currentMessage.user.id === this.props.user.id) {
          return null;
        }

        return React__default.createElement(ReactNative.View, {
          style: styles$8.usernameView
        }, React__default.createElement(ReactNative.Text, {
          style: [styles$8.username, this.props.usernameStyle]
        }, "~ ", currentMessage.user.name));
      }

      return null;
    }
  }, {
    key: "renderCustomView",
    value: function renderCustomView() {
      if (this.props.renderCustomView) {
        return this.props.renderCustomView(this.props);
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.createElement(ReactNative.View, {
        style: [styles$8[this.props.position].container, this.props.containerStyle[this.props.position]]
      }, React__default.createElement(ReactNative.View, {
        style: [styles$8[this.props.position].wrapper, this.props.wrapperStyle[this.props.position], this.handleBubbleToNext(), this.handleBubbleToPrevious()]
      }, React__default.createElement(TouchableOpacity, Object.assign({
        withoutFeedback: true,
        onLongPress: this.onLongPress,
        accessibilityTraits: "text"
      }, this.props.touchableProps), React__default.createElement(ReactNative.View, null, this.renderCustomView(), this.renderMessageImage(), this.renderMessageVideo(), this.renderMessageText(), React__default.createElement(ReactNative.View, {
        style: [styles$8[this.props.position].bottom, this.props.bottomContainerStyle[this.props.position]]
      }, this.renderUsername(), this.renderTime(), this.renderTicks())))));
    }
  }]);

  return Bubble;
}(React__default.Component);
var styles$8 = {
  left: ReactNative.StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start'
    },
    wrapper: {
      borderRadius: 15,
      backgroundColor: Color.leftBubbleBackground,
      marginRight: 60,
      minHeight: 20,
      justifyContent: 'flex-end'
    },
    containerToNext: {
      borderBottomLeftRadius: 3
    },
    containerToPrevious: {
      borderTopLeftRadius: 3
    },
    bottom: {
      flexDirection: 'row',
      justifyContent: 'flex-start'
    }
  }),
  right: ReactNative.StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-end'
    },
    wrapper: {
      borderRadius: 15,
      backgroundColor: Color.defaultBlue,
      marginLeft: 60,
      minHeight: 20,
      justifyContent: 'flex-end'
    },
    containerToNext: {
      borderBottomRightRadius: 3
    },
    containerToPrevious: {
      borderTopRightRadius: 3
    },
    bottom: {
      flexDirection: 'row',
      justifyContent: 'flex-end'
    }
  }),
  tick: {
    fontSize: 10,
    backgroundColor: Color.backgroundTransparent,
    color: Color.white
  },
  tickView: {
    flexDirection: 'row',
    marginRight: 10
  },
  username: {
    top: -3,
    left: 0,
    fontSize: 12,
    backgroundColor: 'transparent',
    color: '#aaa'
  },
  usernameView: {
    flexDirection: 'row',
    marginHorizontal: 10
  }
};
Bubble.contextTypes = {
  actionSheet: PropTypes.func
};
Bubble.defaultProps = {
  touchableProps: {},
  onLongPress: null,
  renderMessageImage: null,
  renderMessageVideo: null,
  renderMessageText: null,
  renderCustomView: null,
  renderUsername: null,
  renderTicks: null,
  renderTime: null,
  position: 'left',
  currentMessage: {
    text: null,
    createdAt: null,
    image: null
  },
  nextMessage: {},
  previousMessage: {},
  containerStyle: {},
  wrapperStyle: {},
  bottomContainerStyle: {},
  tickStyle: {},
  usernameStyle: {},
  containerToNextStyle: {},
  containerToPreviousStyle: {}
};

/* eslint no-use-before-define: ["error", { "variables": false }] */
function SystemMessage(_ref) {
  var currentMessage = _ref.currentMessage,
      containerStyle = _ref.containerStyle,
      wrapperStyle = _ref.wrapperStyle,
      textStyle = _ref.textStyle;
  return React__default.createElement(ReactNative.View, {
    style: [styles$9.container, containerStyle]
  }, React__default.createElement(ReactNative.View, {
    style: [styles$9.wrapper, wrapperStyle]
  }, React__default.createElement(ReactNative.Text, {
    style: [styles$9.text, textStyle]
  }, currentMessage.text)));
}
var styles$9 = ReactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 5,
    marginBottom: 10
  },
  text: {
    backgroundColor: Color.backgroundTransparent,
    color: Color.defaultColor,
    fontSize: 12,
    fontWeight: '300'
  }
});
SystemMessage.defaultProps = {
  currentMessage: {
    system: false
  },
  containerStyle: {},
  wrapperStyle: {},
  textStyle: {}
};

var Composer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Composer, _React$Component);

  function Composer() {
    _classCallCheck(this, Composer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Composer).apply(this, arguments));
  }

  _createClass(Composer, [{
    key: "onContentSizeChange",
    value: function onContentSizeChange(e) {
      var contentSize = e.nativeEvent.contentSize; // Support earlier versions of React Native on Android.

      if (!contentSize) return;

      if (!this.contentSize || this.contentSize.width !== contentSize.width || this.contentSize.height !== contentSize.height) {
        this.contentSize = contentSize;
        this.props.onInputSizeChanged(this.contentSize);
      }
    }
  }, {
    key: "onChangeText",
    value: function onChangeText(text) {
      this.props.onTextChanged(text);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      var _this$props = this.props,
          text = _this$props.text,
          onSend = _this$props.onSend;

      if (e.keyCode === 13 && e.shiftKey === false) {
        onSend({
          text: text.trim()
        }, true);
        e.preventDefault();
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return React__default.createElement("textarea", Object.assign({
        onKeyDown: function onKeyDown(e) {
          return _this.onKeyDown(e);
        },
        placeholder: this.props.placeholder,
        onChange: function onChange(event) {
          return _this.onChangeText(event.target.value);
        },
        style: _objectSpread({}, styles$a.textInput, this.props.textInputStyle),
        value: this.props.text
      }, this.props.textInputProps));
    }
  }]);

  return Composer;
}(React__default.Component);
var styles$a = {
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
    width: '100%'
  }
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
  onTextChanged: function onTextChanged() {},
  onInputSizeChanged: function onInputSizeChanged() {}
};

/* eslint no-use-before-define: ["error", { "variables": false }] */
function Day(_ref, context) {
  var dateFormat = _ref.dateFormat,
      currentMessage = _ref.currentMessage,
      previousMessage = _ref.previousMessage,
      nextMessage = _ref.nextMessage,
      containerStyle = _ref.containerStyle,
      wrapperStyle = _ref.wrapperStyle,
      textStyle = _ref.textStyle,
      inverted = _ref.inverted;

  if (!isSameDay(currentMessage, inverted ? previousMessage : nextMessage)) {
    return React__default.createElement(ReactNative.View, {
      style: [styles$b.container, containerStyle]
    }, React__default.createElement(ReactNative.View, {
      style: wrapperStyle
    }, React__default.createElement(ReactNative.Text, {
      style: [styles$b.text, textStyle]
    }, moment(currentMessage.createdAt).locale(context.getLocale()).format(dateFormat).toUpperCase())));
  }

  return null;
}
var styles$b = ReactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 10
  },
  text: {
    backgroundColor: Color.backgroundTransparent,
    color: Color.defaultColor,
    fontSize: 12,
    fontWeight: '600'
  }
});
Day.contextTypes = {
  getLocale: PropTypes.func
};
Day.defaultProps = {
  currentMessage: {
    // TODO: test if crash when createdAt === null
    createdAt: null
  },
  previousMessage: {},
  nextMessage: {},
  containerStyle: {},
  wrapperStyle: {},
  textStyle: {},
  dateFormat: DATE_FORMAT
};

function Send(_ref) {
  var text = _ref.text,
      containerStyle = _ref.containerStyle,
      onSend = _ref.onSend,
      children = _ref.children,
      textStyle = _ref.textStyle,
      label = _ref.label,
      alwaysShowSend = _ref.alwaysShowSend;

  if (alwaysShowSend || text.trim().length > 0) {
    return React__default.createElement(TouchableOpacity, {
      testID: "send",
      accessible: true,
      accessibilityLabel: "send",
      style: _objectSpread({}, styles$c.container, containerStyle),
      onPress: function onPress() {
        console.log('asdasdasd');
        onSend({
          text: text.trim()
        }, true);
      },
      accessibilityTraits: "button"
    }, React__default.createElement(ReactNative.View, null, children || React__default.createElement(ReactNative.Text, {
      style: [styles$c.text, textStyle]
    }, label)));
  }

  return React__default.createElement(ReactNative.View, null);
}
var styles$c = ReactNative.StyleSheet.create({
  container: {
    height: 44,
    justifyContent: 'flex-end'
  },
  text: {
    color: Color.defaultBlue,
    fontWeight: '600',
    fontSize: 17,
    backgroundColor: Color.backgroundTransparent,
    marginBottom: 12,
    marginLeft: 10,
    marginRight: 10
  }
});
Send.defaultProps = {
  text: '',
  onSend: function onSend() {},
  label: 'Send',
  containerStyle: {},
  textStyle: {},
  children: null,
  alwaysShowSend: false
};

var InputToolbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputToolbar, _React$Component);

  function InputToolbar(props) {
    var _this;

    _classCallCheck(this, InputToolbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputToolbar).call(this, props));
    _this.keyboardWillShow = _this.keyboardWillShow.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.keyboardWillHide = _this.keyboardWillHide.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      position: 'static'
    };
    return _this;
  }

  _createClass(InputToolbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.keyboardWillShowListener = ReactNative.Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
      this.keyboardWillHideListener = ReactNative.Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.keyboardWillShowListener.remove();
      this.keyboardWillHideListener.remove();
    }
  }, {
    key: "keyboardWillShow",
    value: function keyboardWillShow() {
      if (this.state.position !== 'relative') {
        this.setState({
          position: 'relative'
        });
      }
    }
  }, {
    key: "keyboardWillHide",
    value: function keyboardWillHide() {
      if (this.state.position !== 'absolute') {
        this.setState({
          position: 'absolute'
        });
      }
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      if (this.props.renderActions) {
        return this.props.renderActions(this.props);
      }

      if (this.props.onPressActionButton) {
        return React__default.createElement(Actions, this.props);
      }

      return null;
    }
  }, {
    key: "renderSend",
    value: function renderSend() {
      if (this.props.renderSend) {
        return this.props.renderSend(this.props);
      }

      return React__default.createElement(Send, this.props);
    }
  }, {
    key: "renderComposer",
    value: function renderComposer() {
      if (this.props.renderComposer) {
        return this.props.renderComposer(this.props);
      }

      return React__default.createElement(Composer, this.props);
    }
  }, {
    key: "renderAccessory",
    value: function renderAccessory() {
      if (this.props.renderAccessory) {
        return React__default.createElement(ReactNative.View, {
          style: [styles$d.accessory, this.props.accessoryStyle]
        }, this.props.renderAccessory(this.props));
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.createElement(ReactNative.View, {
        style: [styles$d.container, this.props.containerStyle, {
          position: this.state.position,
          height: this.props.composerHeight
        }]
      }, React__default.createElement(ReactNative.View, {
        style: [styles$d.primary, this.props.primaryStyle]
      }, this.renderActions(), this.renderComposer(), this.renderSend()), this.renderAccessory());
    }
  }]);

  return InputToolbar;
}(React__default.Component);
var styles$d = ReactNative.StyleSheet.create({
  container: {
    borderTopWidth: ReactNative.StyleSheet.hairlineWidth,
    borderTopColor: Color.defaultColor,
    backgroundColor: Color.white,
    bottom: 0,
    left: 0,
    right: 0
  },
  primary: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  accessory: {
    height: 44
  }
});
InputToolbar.defaultProps = {
  renderAccessory: null,
  renderActions: null,
  renderSend: null,
  renderComposer: null,
  containerStyle: {},
  primaryStyle: {},
  accessoryStyle: {},
  onPressActionButton: function onPressActionButton() {}
};

var LoadEarlier =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoadEarlier, _React$Component);

  function LoadEarlier() {
    _classCallCheck(this, LoadEarlier);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoadEarlier).apply(this, arguments));
  }

  _createClass(LoadEarlier, [{
    key: "renderLoading",
    value: function renderLoading() {
      if (this.props.isLoadingEarlier === false) {
        return React__default.createElement(ReactNative.Text, {
          style: [styles$e.text, this.props.textStyle]
        }, this.props.label);
      }

      return React__default.createElement(ReactNative.View, null, React__default.createElement(ReactNative.Text, {
        style: [styles$e.text, this.props.textStyle, {
          opacity: 0
        }]
      }, this.props.label), React__default.createElement(ReactNative.ActivityIndicator, {
        color: "white",
        size: "small",
        style: [styles$e.activityIndicator, this.props.activityIndicatorStyle]
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return React__default.createElement(ReactNative.TouchableOpacity, {
        style: [styles$e.container, this.props.containerStyle],
        onPress: function onPress() {
          if (_this.props.onLoadEarlier) {
            _this.props.onLoadEarlier();
          }
        },
        disabled: this.props.isLoadingEarlier === true,
        accessibilityTraits: "button"
      }, React__default.createElement(ReactNative.View, {
        style: [styles$e.wrapper, this.props.wrapperStyle]
      }, this.renderLoading()));
    }
  }]);

  return LoadEarlier;
}(React__default.Component);
var styles$e = ReactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.defaultColor,
    borderRadius: 15,
    height: 30,
    paddingLeft: 10,
    paddingRight: 10
  },
  text: {
    backgroundColor: Color.backgroundTransparent,
    color: Color.white,
    fontSize: 12
  },
  activityIndicator: {
    marginTop: 0
  }
});
LoadEarlier.defaultProps = {
  onLoadEarlier: function onLoadEarlier() {},
  isLoadingEarlier: false,
  label: 'Load earlier messages',
  containerStyle: {},
  wrapperStyle: {},
  textStyle: {},
  activityIndicatorStyle: {}
};

var styles$f = {
  left: ReactNative.StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      marginLeft: 8,
      marginRight: 0
    }
  }),
  right: ReactNative.StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      marginLeft: 0,
      marginRight: 8
    }
  })
};

var Message =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Message, _React$Component);

  function Message() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Message);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Message)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.getInnerComponentProps = function () {
      var _this$props = _this.props,
          containerStyle = _this$props.containerStyle,
          props = _objectWithoutProperties(_this$props, ["containerStyle"]);

      return _objectSpread({}, props, {
        isSameUser: isSameUser,
        isSameDay: isSameDay
      });
    };

    return _this;
  }

  _createClass(Message, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var next = nextProps.currentMessage;
      var current = this.props.currentMessage;
      return next.send !== current.send || next.received !== current.received || next.pending !== current.pending || next.createdAt !== current.createdAt || next.text !== current.text || next.image !== current.image || next.video !== current.video;
    }
  }, {
    key: "renderDay",
    value: function renderDay() {
      if (this.props.currentMessage.createdAt) {
        var dayProps = this.getInnerComponentProps();

        if (this.props.renderDay) {
          return this.props.renderDay(dayProps);
        }

        return React__default.createElement(Day, dayProps);
      }

      return null;
    }
  }, {
    key: "renderBubble",
    value: function renderBubble() {
      var bubbleProps = this.getInnerComponentProps();

      if (this.props.renderBubble) {
        return this.props.renderBubble(bubbleProps);
      }

      return React__default.createElement(Bubble, bubbleProps);
    }
  }, {
    key: "renderSystemMessage",
    value: function renderSystemMessage() {
      var systemMessageProps = this.getInnerComponentProps();

      if (this.props.renderSystemMessage) {
        return this.props.renderSystemMessage(systemMessageProps);
      }

      return React__default.createElement(SystemMessage, systemMessageProps);
    }
  }, {
    key: "renderAvatar",
    value: function renderAvatar() {
      if (this.props.user.id === this.props.currentMessage.user.id && !this.props.showUserAvatar) {
        return null;
      }

      var avatarProps = this.getInnerComponentProps();
      var currentMessage = avatarProps.currentMessage;

      if (currentMessage.user.avatar === null) {
        return null;
      }

      return React__default.createElement(Avatar, avatarProps);
    }
  }, {
    key: "render",
    value: function render() {
      var sameUser = isSameUser(this.props.currentMessage, this.props.nextMessage);
      return React__default.createElement(ReactNative.View, null, this.renderDay(), this.props.currentMessage.system ? this.renderSystemMessage() : React__default.createElement(ReactNative.View, {
        style: [styles$f[this.props.position].container, {
          marginBottom: sameUser ? 2 : 10
        }, !this.props.inverted && {
          marginBottom: 2
        }, this.props.containerStyle[this.props.position]]
      }, this.props.position === 'left' ? this.renderAvatar() : null, this.renderBubble(), this.props.position === 'right' ? this.renderAvatar() : null));
    }
  }]);

  return Message;
}(React__default.Component);
Message.defaultProps = {
  renderAvatar: undefined,
  renderBubble: null,
  renderDay: null,
  renderSystemMessage: null,
  position: 'left',
  currentMessage: {},
  nextMessage: {},
  previousMessage: {},
  user: {},
  containerStyle: {},
  showUserAvatar: true,
  inverted: true
};

var WebScrollView =
/*#__PURE__*/
function (_Component) {
  _inherits(WebScrollView, _Component);

  function WebScrollView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, WebScrollView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WebScrollView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.renderItem = function (item, index) {
      var renderItem = _this.props.renderItem;
      return renderItem({
        item: item,
        index: index
      });
    };

    return _this;
  }

  _createClass(WebScrollView, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var y = 0;

      if (this.props.inverted) {
        y = this.getWebViewScrollHeight();
      }

      this.scrollToOffset({
        y: y,
        animated: true
      });
    }
  }, {
    key: "getWebViewScrollHeight",
    value: function getWebViewScrollHeight() {
      return this.webViewRef ? this.webViewRef.scrollHeight : 0;
    }
  }, {
    key: "scrollToOffset",
    value: function scrollToOffset(options) {
      var _this2 = this;

      if (this.webViewRef) {
        this.webViewRef.scrollTop = options.y;
        setTimeout(function () {
          _this2.webViewRef.style.visibility = 'visible';
        }, 0);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          ListHeaderComponent = _this$props.ListHeaderComponent,
          ListFooterComponent = _this$props.ListFooterComponent,
          data = _this$props.data,
          inverted = _this$props.inverted;
      var messages = data;

      if (inverted) {
        messages = data.slice().reverse();
      }

      return React__default.createElement("div", {
        ref: function ref(_ref) {
          return _this3.webViewRef = _ref;
        },
        style: styles$g.container
      }, ListHeaderComponent(), messages.map(this.renderItem), ListFooterComponent());
    }
  }]);

  return WebScrollView;
}(React.Component);
var styles$g = {
  container: {
    height: '100%',
    minHeight: '100%',
    width: '100%',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'stretch',
    visibility: 'hidden'
  }
};
WebScrollView.defaultProps = {
  data: [],
  extraData: {},
  ListHeaderComponent: function ListHeaderComponent() {},
  ListFooterComponent: function ListFooterComponent() {},
  inverted: false
};

var MessageContainer =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(MessageContainer, _React$PureComponent);

  function MessageContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MessageContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MessageContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      showScrollBottom: false,
      imageMessages: []
    };

    _this.renderFooter = function () {
      if (_this.props.renderFooter) {
        var footerProps = _objectSpread({}, _this.props);

        return _this.props.renderFooter(footerProps);
      }

      return null;
    };

    _this.renderLoadEarlier = function () {
      if (_this.props.loadEarlier === true) {
        var loadEarlierProps = _objectSpread({}, _this.props);

        if (_this.props.renderLoadEarlier) {
          return _this.props.renderLoadEarlier(loadEarlierProps);
        }

        return React__default.createElement(LoadEarlier, loadEarlierProps);
      }

      return null;
    };

    _this.renderRow = function (_ref) {
      var item = _ref.item,
          index = _ref.index;

      if (!item.id && item.id !== 0) {
        console.warn('GiftedChat: `id` is missing for message', JSON.stringify(item));
      }

      if (!item.user) {
        if (!item.system) {
          console.warn('GiftedChat: `user` is missing for message', JSON.stringify(item));
        }

        item.user = {};
      }

      var _this$props = _this.props,
          messages = _this$props.messages,
          restProps = _objectWithoutProperties(_this$props, ["messages"]);

      var previousMessage = messages[index + 1] || {};
      var nextMessage = messages[index - 1] || {};
      var imageMessages = _this.state.imageMessages;

      var messageProps = _objectSpread({}, restProps, {
        key: item.id,
        currentMessage: item,
        previousMessage: previousMessage,
        nextMessage: nextMessage,
        position: item.user.id === _this.props.user.id ? 'right' : 'left',
        imageMessages: imageMessages
      });

      if (_this.props.renderMessage) {
        return _this.props.renderMessage(messageProps);
      }

      return React__default.createElement(Message, messageProps);
    };

    _this.renderHeaderWrapper = function () {
      return React__default.createElement(ReactNative.View, {
        style: styles$h.headerWrapper
      }, _this.renderLoadEarlier());
    };

    _this.keyExtractor = function (item) {
      return "".concat(item.id);
    };

    return _this;
  }

  _createClass(MessageContainer, [{
    key: "scrollTo",
    value: function scrollTo(options) {
      if (this.flatListRef && options) {
        this.flatListRef.scrollToOffset(options);
      }
    }
  }, {
    key: "getMessageContainerHeight",
    value: function getMessageContainerHeight() {
      return this.flatListRef ? this.flatListRef.getWebViewScrollHeight() : 0;
    }
  }, {
    key: "scrollToBottom",
    value: function scrollToBottom() {
      var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var y = 0;

      if (this.props.inverted) {
        y = this.getMessageContainerHeight();
      }

      this.scrollTo({
        y: y,
        animated: animated
      });
    }
  }, {
    key: "renderScrollToBottomWrapper",
    value: function renderScrollToBottomWrapper() {
      var scrollToBottomComponent = React__default.createElement(ReactNative.View, {
        style: styles$h.scrollToBottomStyle
      }, React__default.createElement(TouchableOpacity, {
        onPress: this.scrollToBottom,
        hitSlop: {
          top: 5,
          left: 5,
          right: 5,
          bottom: 5
        }
      }, React__default.createElement(ReactNative.Text, null, "V")));

      if (this.props.scrollToBottomComponent) {
        return React__default.createElement(TouchableOpacity, {
          onPress: this.scrollToBottom,
          hitSlop: {
            top: 5,
            left: 5,
            right: 5,
            bottom: 5
          }
        }, this.props.scrollToBottomComponent);
      }

      return scrollToBottomComponent;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.messages.length === 0) {
        return React__default.createElement(ReactNative.View, {
          style: styles$h.container
        });
      }

      return React__default.createElement(ReactNative.View, {
        style: {
          flex: 1
        },
        onLayout: function onLayout() {
          _this2.scrollToBottom();
        }
      }, this.state.showScrollBottom && this.props.scrollToBottom ? this.renderScrollToBottomWrapper() : null, React__default.createElement(WebScrollView, {
        ref: function ref(_ref2) {
          return _this2.flatListRef = _ref2;
        },
        keyExtractor: this.keyExtractor,
        extraData: this.props.extraData,
        enableEmptySections: true,
        automaticallyAdjustContentInsets: false,
        inverted: this.props.inverted,
        data: this.props.messages,
        style: styles$h.listStyle,
        contentContainerStyle: styles$h.contentContainerStyle,
        renderItem: this.renderRow,
        ListFooterComponent: this.renderHeaderWrapper,
        ListHeaderComponent: this.renderFooter
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var messages = props.messages;
      var imageMessages = messages.filter(function (item) {
        return item.image;
      });
      return {
        imageMessages: imageMessages
      };
    }
  }]);

  return MessageContainer;
}(React__default.PureComponent);
var styles$h = ReactNative.StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainerStyle: {
    justifyContent: 'flex-end'
  },
  headerWrapper: {
    flex: 1
  },
  listStyle: {
    flex: 1
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
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 1
  }
});
MessageContainer.defaultProps = {
  messages: [],
  user: {},
  renderFooter: null,
  renderMessage: null,
  onLoadEarlier: function onLoadEarlier() {},
  inverted: true,
  loadEarlier: false,
  listViewProps: {},
  invertibleScrollViewProps: {},
  extraData: null,
  scrollToBottom: false,
  scrollToBottomOffset: 200
};

var GiftedChat =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GiftedChat, _React$Component);

  function GiftedChat(props) {
    var _this;

    _classCallCheck(this, GiftedChat);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GiftedChat).call(this, props)); // default values

    _this._isMounted = false;
    _this._keyboardHeight = 0;
    _this._bottomOffset = 0;
    _this._maxHeight = null;
    _this._isFirstLayout = true;
    _this._locale = 'en';
    _this._messages = [];
    _this.state = {
      isInitialized: false,
      // initialization will calculate maxHeight before rendering the chat
      composerHeight: 40,
      typingDisabled: false
    };
    _this.onSend = _this.onSend.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getLocale = _this.getLocale.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onInputSizeChanged = _this.onInputSizeChanged.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onInputTextChanged = _this.onInputTextChanged.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onMainViewLayout = _this.onMainViewLayout.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onInitialLayoutViewLayout = _this.onInitialLayoutViewLayout.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.invertibleScrollViewProps = {
      inverted: _this.props.inverted
    };
    return _this;
  }

  _createClass(GiftedChat, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        getLocale: this.getLocale
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          messages = _this$props.messages,
          text = _this$props.text;
      this.setIsMounted(true);
      this.initLocale();
      this.setMessages(messages || []);
      this.setTextFromProp(text);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setIsMounted(false);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      var messages = nextProps.messages,
          text = nextProps.text;
      this.setMessages(messages || []);
      this.setTextFromProp(text);
      return true;
    }
  }, {
    key: "initLocale",
    value: function initLocale() {
      if (this.props.locale === null || moment.locales().indexOf(this.props.locale) === -1) {
        this.setLocale('en');
      } else {
        this.setLocale(this.props.locale);
      }
    }
  }, {
    key: "setLocale",
    value: function setLocale(locale) {
      this._locale = locale;
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this._locale;
    }
  }, {
    key: "setTextFromProp",
    value: function setTextFromProp(textProp) {
      // Text prop takes precedence over state.
      if (textProp !== undefined && textProp !== this.state.text) {
        this.setState({
          text: textProp
        });
      }
    }
  }, {
    key: "getTextFromProp",
    value: function getTextFromProp(fallback) {
      if (this.props.text === undefined) {
        return fallback;
      }

      return this.props.text;
    }
  }, {
    key: "setMessages",
    value: function setMessages(messages) {
      this._messages = messages;
    }
  }, {
    key: "getMessages",
    value: function getMessages() {
      return this._messages;
    }
  }, {
    key: "setBottomOffset",
    value: function setBottomOffset(value) {
      this._bottomOffset = value;
    }
  }, {
    key: "getBottomOffset",
    value: function getBottomOffset() {
      return this._bottomOffset;
    }
  }, {
    key: "setIsFirstLayout",
    value: function setIsFirstLayout(value) {
      this._isFirstLayout = value;
    }
  }, {
    key: "getIsFirstLayout",
    value: function getIsFirstLayout() {
      return this._isFirstLayout;
    }
  }, {
    key: "setIsTypingDisabled",
    value: function setIsTypingDisabled(value) {
      this.setState({
        typingDisabled: value
      });
    }
  }, {
    key: "getIsTypingDisabled",
    value: function getIsTypingDisabled() {
      return this.state.typingDisabled;
    }
  }, {
    key: "setIsMounted",
    value: function setIsMounted(value) {
      this._isMounted = value;
    }
  }, {
    key: "getIsMounted",
    value: function getIsMounted() {
      return this._isMounted;
    }
  }, {
    key: "scrollToBottom",
    value: function scrollToBottom() {
      var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this._messageContainerRef === null) {
        return;
      }

      this._messageContainerRef.scrollToBottom(animated);
    }
  }, {
    key: "renderMessages",
    value: function renderMessages() {
      var _this2 = this;

      return React__default.createElement("div", {
        style: {
          height: "calc(100% - ".concat(this.state.composerHeight, "px)"),
          display: 'flex'
        }
      }, React__default.createElement(MessageContainer, Object.assign({}, this.props, {
        invertibleScrollViewProps: this.invertibleScrollViewProps,
        messages: this.getMessages(),
        ref: function ref(component) {
          return _this2._messageContainerRef = component;
        }
      })), this.renderChatFooter());
    }
  }, {
    key: "onSend",
    value: function onSend() {
      var _this3 = this;

      var messages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var shouldResetInputToolbar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!Array.isArray(messages)) {
        messages = [messages];
      }

      messages = messages.map(function (message) {
        return _objectSpread({}, message, {
          user: _this3.props.user,
          createdAt: new Date(),
          id: _this3.props.messageIdGenerator()
        });
      });

      if (shouldResetInputToolbar === true) {
        this.setIsTypingDisabled(true);
        this.resetInputToolbar();
      }

      this.props.onSend(messages);
      this.scrollToBottom();

      if (shouldResetInputToolbar === true) {
        setTimeout(function () {
          if (_this3.getIsMounted() === true) {
            _this3.setIsTypingDisabled(false);
          }
        }, 100);
      }
    }
  }, {
    key: "resetInputToolbar",
    value: function resetInputToolbar() {
      this.notifyInputTextReset();
      this.setState({
        text: this.getTextFromProp('')
      });
    }
  }, {
    key: "focusTextInput",
    value: function focusTextInput() {
      if (this.textInput) {
        this.textInput.focus();
      }
    }
  }, {
    key: "onInputSizeChanged",
    value: function onInputSizeChanged(size) {}
  }, {
    key: "onInputTextChanged",
    value: function onInputTextChanged(text) {
      if (this.getIsTypingDisabled()) {
        return;
      }

      if (this.props.onInputTextChanged) {
        this.props.onInputTextChanged(text);
      } // Only set state if it's not being overridden by a prop.


      if (this.props.text === undefined) {
        this.setState({
          text: text
        });
      }
    }
  }, {
    key: "notifyInputTextReset",
    value: function notifyInputTextReset() {
      if (this.props.onInputTextChanged) {
        this.props.onInputTextChanged('');
      }
    }
  }, {
    key: "onInitialLayoutViewLayout",
    value: function onInitialLayoutViewLayout(e) {
      var layout = e.nativeEvent.layout;

      if (layout.height <= 0) {
        return;
      }

      this.notifyInputTextReset();
      this.setState({
        isInitialized: true,
        text: this.getTextFromProp('')
      });
    }
  }, {
    key: "onMainViewLayout",
    value: function onMainViewLayout(e) {}
  }, {
    key: "renderInputToolbar",
    value: function renderInputToolbar() {
      var _this4 = this;

      var inputToolbarProps = _objectSpread({}, this.props, {
        text: this.getTextFromProp(this.state.text),
        composerHeight: this.state.composerHeight,
        onSend: this.onSend,
        onInputSizeChanged: this.onInputSizeChanged,
        onTextChanged: this.onInputTextChanged,
        textInputProps: _objectSpread({}, this.props.textInputProps, {
          ref: function ref(textInput) {
            return _this4.textInput = textInput;
          },
          maxLength: this.getIsTypingDisabled() ? 0 : this.props.maxInputLength
        })
      });

      if (this.props.renderInputToolbar) {
        return this.props.renderInputToolbar(inputToolbarProps);
      }

      return React__default.createElement(InputToolbar, inputToolbarProps);
    }
  }, {
    key: "renderChatFooter",
    value: function renderChatFooter() {
      if (this.props.renderChatFooter) {
        var footerProps = _objectSpread({}, this.props);

        return this.props.renderChatFooter(footerProps);
      }

      return null;
    }
  }, {
    key: "renderLoading",
    value: function renderLoading() {
      if (this.props.renderLoading) {
        return this.props.renderLoading();
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.isInitialized === true) {
        return React__default.createElement(ReactNative.View, {
          style: styles$i.container,
          onLayout: this.onMainViewLayout
        }, this.renderMessages(), this.renderInputToolbar());
      }

      return React__default.createElement(ReactNative.View, {
        style: styles$i.container,
        onLayout: this.onInitialLayoutViewLayout
      }, this.renderLoading());
    }
  }], [{
    key: "append",
    value: function append() {
      var currentMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var messages = arguments.length > 1 ? arguments[1] : undefined;
      var inverted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (!Array.isArray(messages)) {
        messages = [messages];
      }

      return inverted ? messages.concat(currentMessages) : currentMessages.concat(messages);
    }
  }, {
    key: "prepend",
    value: function prepend() {
      var currentMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var messages = arguments.length > 1 ? arguments[1] : undefined;
      var inverted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (!Array.isArray(messages)) {
        messages = [messages];
      }

      return inverted ? currentMessages.concat(messages) : messages.concat(currentMessages);
    }
  }]);

  return GiftedChat;
}(React__default.Component);

var styles$i = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    height: '100%'
  }
});
GiftedChat.childContextTypes = {
  getLocale: PropTypes.func
};
GiftedChat.defaultProps = {
  messages: [],
  text: undefined,
  placeholder: DEFAULT_PLACEHOLDER,
  messageIdGenerator: function messageIdGenerator() {
    return uuid.v4();
  },
  user: {},
  onSend: function onSend() {},
  locale: null,
  timeFormat: TIME_FORMAT,
  dateFormat: DATE_FORMAT,
  isAnimated: false,
  loadEarlier: false,
  onLoadEarlier: function onLoadEarlier() {},
  isLoadingEarlier: false,
  renderLoading: null,
  renderLoadEarlier: null,
  renderAvatar: undefined,
  showUserAvatar: false,
  onPressAvatar: null,
  renderUsernameOnMessage: false,
  renderAvatarOnTop: false,
  renderBubble: null,
  renderSystemMessage: null,
  onLongPress: null,
  renderMessage: null,
  renderMessageText: null,
  renderMessageImage: null,
  imageProps: {},
  videoProps: {},
  lightboxProps: {},
  textInputProps: {},
  listViewProps: {},
  renderCustomView: null,
  renderDay: null,
  renderTime: null,
  renderFooter: null,
  renderChatFooter: null,
  renderInputToolbar: null,
  renderComposer: null,
  renderActions: null,
  renderSend: null,
  renderAccessory: null,
  onPressActionButton: null,
  bottomOffset: 0,
  minInputToolbarHeight: 44,
  keyboardShouldPersistTaps: 'never',
  onInputTextChanged: null,
  maxInputLength: null,
  forceGetKeyboardHeight: false,
  inverted: true,
  extraData: null,
  minComposerHeight: MIN_COMPOSER_HEIGHT,
  maxComposerHeight: MAX_COMPOSER_HEIGHT
};

exports.GiftedChat = GiftedChat;
exports.Actions = Actions;
exports.Avatar = Avatar;
exports.Bubble = Bubble;
exports.SystemMessage = SystemMessage;
exports.MessageImage = MessageImage;
exports.MessageText = MessageText;
exports.Composer = Composer;
exports.Day = Day;
exports.InputToolbar = InputToolbar;
exports.LoadEarlier = LoadEarlier;
exports.Message = Message;
exports.MessageContainer = MessageContainer;
exports.Send = Send;
exports.Time = Time;
exports.GiftedAvatar = GiftedAvatar;
exports.utils = utils;
