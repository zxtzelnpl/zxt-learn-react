export default [
  {
    'name': 'View',
    'Props': [
      {
        'name': 'onStartShouldSetResponder',
        'type': 'function',
        'require': false
      },
      {
        'name': 'accessibilityLabel',
        'type': 'node',
        'require': false
      },
      {
        'name': 'hitSlop',
        'type': 'object: {top: number, left: number, bottom: number, right: number}',
        'require': false
      },
      {
        'name': 'nativeID',
        'type': 'string',
        'require': false
      },
      {
        'name': 'onAccessibilityTap',
        'type': 'function',
        'require': false
      },
      {
        'name': 'onLayout',
        'type': 'function',
        'require': false
      },
      {
        'name': 'onMagicTap',
        'type': 'function',
        'require': false
      },
      {
        'name': 'onMoveShouldSetResponder',
        'type': 'function',
        'require': false
      },
      {
        'name': 'onMoveShouldSetResponderCapture',
        'type': 'function',
        'require': false
      },
      {
        'name': 'onResponderGrant',
        'type': 'function',
        'require': false
      },
      {
        'name': 'onResponderMove',
        'type': 'function',
        'require': false
      },
      {
        'name': 'onResponderReject',
        'type': 'function',
        'require': false
      },
      {
        'name': 'onResponderRelease',
        'type': 'function',
        'require': false
      },
      {
        'name': 'onResponderTerminate',
        'type': 'function',
        'require': false
      },
      {
        'name': 'onResponderTerminationRequest',
        'type': 'function',
        'require': false
      },
      {
        'name': 'accessible',
        'type': 'bool',
        'require': false
      },
      {
        'name': 'onStartShouldSetResponderCapture',
        'type': 'function',
        'require': false
      },
      {
        'name': 'pointerEvents',
        'type': 'enum(\'box-none\', \'none\', \'box-only\', \'auto\')',
        'require': false
      },
      {
        'name': 'removeClippedSubviews',
        'type': 'bool',
        'require': false
      },
      {
        'name': 'style',
        'type': 'view styles',
        'require': false
      },
      {
        'name': 'testID',
        'type': 'string',
        'require': false
      },
      {
        'name': 'accessibilityComponentType',
        'type': 'AccessibilityComponentTypes',
        'require': false,
        'platform': 'Android'
      },
      {
        'name': 'accessibilityLiveRegion',
        'type': 'enum(\'none\', \'polite\', \'assertive\')',
        'require': false,
        'platform': 'Android'
      },
      {
        'name': 'collapsable',
        'type': 'bool',
        'require': false,
        'platform': 'Android'
      },
      {
        'name': 'importantForAccessibility',
        'type': 'enum(\'auto\', \'yes\', \'no\', \'no-hide-descendants\')',
        'require': false,
        'platform': 'Android'
      },
      {
        'name': 'needsOffscreenAlphaCompositing',
        'type': 'bool',
        'require': false,
        'platform': 'Android'
      },
      {
        'name': 'renderToHardwareTextureAndroid',
        'type': 'bool',
        'require': false,
        'platform': 'Android'
      },
      {
        'name': 'accessibilityTraits',
        'type': 'AccessibilityTraits, ,array of AccessibilityTraits',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'accessibilityViewIsModal',
        'type': 'bool',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'shouldRasterizeIOS',
        'type': 'bool',
        'require': false,
        'platform': 'iOS'
      }
    ],
    'Methods': []

  },
  {
    'name': 'ScrollView',
    'inherits': ['View'],
    'Props': [
      {
        'name': 'alwaysBounceVertical',
        'type': 'bool',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'contentContainerStyle',
        'type': 'StyleSheetPropType(View Style props)',
        'require': false
      },
      {
        'name': 'keyboardDismissMode',
        'type': 'enum(\'none\', \'on-drag\', \'interactive\')',
        'require': false
      },
      {
        'name': 'keyboardShouldPersistTaps',
        'type': 'enum(\'always\', \'never\', \'handled\', false, true)',
        'require': false
      },
      {
        'name': 'onContentSizeChange',
        'type': 'function',
        'require': false
      },
      {
        'name': 'onMomentumScrollBegin',
        'type': 'function',
        'require': false
      },
      {
        'name': 'onMomentumScrollEnd',
        'type': 'function',
        'require': false
      },
      {
        'name': 'onScroll',
        'type': 'function',
        'require': false
      },
      {
        'name': 'pagingEnabled',
        'type': 'bool',
        'require': false
      },
      {
        'name': 'refreshControl',
        'type': 'element',
        'require': false
      },
      {
        'name': 'removeClippedSubviews',
        'type': 'bool',
        'require': false
      },
      {
        'name': 'scrollEnabled',
        'type': 'bool',
        'require': false
      },
      {
        'name': 'showsHorizontalScrollIndicator',
        'type': 'bool',
        'require': false
      },
      {
        'name': 'showsVerticalScrollIndicator',
        'type': 'bool',
        'require': false
      },
      {
        'name': 'stickyHeaderIndices',
        'type': 'array of number',
        'require': false
      },
      {
        'name': 'endFillColor',
        'type': 'color',
        'require': false,
        'platform': 'Android'
      },
      {
        'name': 'overScrollMode',
        'type': 'enum(\'auto\', \'always\', \'never\')',
        'require': false,
        'platform': 'Android'
      },
      {
        'name': 'scrollPerfTag',
        'type': 'string',
        'require': false,
        'platform': 'Android'
      },
      {
        'name': 'DEPRECATED_sendUpdatedChildFrames',
        'type': 'bool',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'alwaysBounceHorizontal',
        'type': 'bool',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'horizontal',
        'type': 'bool',
        'require': false
      },
      {
        'name': 'automaticallyAdjustContentInsets',
        'type': 'bool',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'bounces',
        'type': 'bool',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'bouncesZoom',
        'type': 'bool',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'canCancelContentTouches',
        'type': 'bool',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'centerContent',
        'type': 'bool',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'contentInset',
        'type': 'object: {top: number, left: number, bottom: number, right: number}',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'contentInsetAdjustmentBehavior',
        'type': 'enum(\'automatic\', \'scrollableAxes\', \'never\', \'always\')',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'contentOffset',
        'type': 'PointPropType',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'decelerationRate',
        'type': 'enum(\'fast\', \'normal\'), ,number',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'directionalLockEnabled',
        'type': 'bool',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'indicatorStyle',
        'type': 'enum(\'default\', \'black\', \'white\')',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'maximumZoomScale',
        'type': 'number',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'minimumZoomScale',
        'type': 'number',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'pinchGestureEnabled',
        'type': 'bool',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'scrollEventThrottle',
        'type': 'number',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'scrollIndicatorInsets',
        'type': 'object: {top: number, left: number, bottom: number, right: number}',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'scrollsToTop',
        'type': 'bool',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'snapToAlignment',
        'type': 'enum(\'start\', \'center\', \'end\')',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'snapToInterval',
        'type': 'number',
        'require': false,
        'platform': 'iOS'
      },
      {
        'name': 'zoomScale',
        'type': 'number',
        'require': false,
        'platform': 'iOS'
      }
    ],
    'Methods': [
      {
        'name': 'scrollTo()'
      },
      {
        'name': 'scrollToEnd()'
      },
      {
        'name': 'scrollWithoutAnimationTo()'
      },
      {
        'name': 'flashScrollIndicators()'
      }
    ]
  },
  {
    'name': 'VirtualizedList',
    'Props': [
      {
        'name': 'last',
        'type': 'number',
        'require': false
      },
      {
        'name': 'first',
        'type': 'number',
        'require': false
      },
      {
        'name': 'horizontal',
        'require': false
      },
      {
        'name': 'initialNumToRender',
        'require': false
      },
      {
        'name': 'keyExtractor',
        'require': false
      },
      {
        'name': 'disableVirtualization',
        'require': false
      },
      {
        'name': 'maxToRenderPerBatch',
        'require': false
      },
      {
        'name': 'onEndReachedThreshold',
        'require': false
      },
      {
        'name': 'scrollEventThrottle',
        'require': false
      },
      {
        'name': 'updateCellsBatchingPeriod',
        'require': false
      },
      {
        'name': 'windowSize',
        'require': false
      }
    ],
    'Methods': [
      {
        'name': 'scrollToEnd()'
      },
      {
        'name': 'scrollToIndex()'
      },
      {
        'name': 'scrollToItem()'
      },
      {
        'name': 'scrollToOffset()'
      },
      {
        'name': 'recordInteraction()'
      },
      {
        'name': 'flashScrollIndicators()'
      }
    ]
  },
  {
    'name': 'FlatList',
    'inherits': ['ScrollView'],
    'Props': [
      {
        'name': 'numColumns',
        'require': false
      }
    ],
    'Methods': [
      {
        'name': 'scrollToEnd()'
      },
      {
        'name': 'scrollToIndex()'
      },
      {
        'name': 'scrollToItem()'
      },
      {
        'name': 'scrollToOffset()'
      },
      {
        'name': 'recordInteraction()'
      },
      {
        'name': 'flashScrollIndicators()'
      }
    ]
  },
  {
    'name': 'SectionList',
    'Props': [
      {
        'name': 'stickySectionHeadersEnabled',
        'require': false
      }
    ],
    'Methods': [
      {
        'name': 'scrollToLocation()'
      },
      {
        'name': 'recordInteraction()'
      },
      {
        'name': 'flashScrollIndicators()'
      },
    ]
  },
  {
    'name': 'ViewPagerAndroid',
    'inherits': ['View'],
    'Props': [
      {
        'name': 'initialPage',
        'require': false
      },
      {
        'name': 'keyboardDismissMode',
        'require': false
      },
      {
        'name': 'onPageScroll',
        'require': false
      },
      {
        'name': 'onPageScrollStateChanged',
        'require': false
      },
      {
        'name': 'onPageSelected',
        'require': false
      },
      {
        'name': 'pageMargin',
        'require': false
      },
      {
        'name': 'peekEnabled',
        'require': false
      },
      {
        'name': 'scrollEnabled',
        'require': false
      },
    ],
    'Methods': []
  },
  {
    'name': 'Text',
    'Props': [
      {
        'name': 'selectable',
        'type':'bool',
        'require': false
      },
      {
        'name': 'accessible',
        'type':'bool',
        'require': false
      },
      {
        'name': 'ellipsizeMode',
        'type':'enum(\'head\', \'middle\', \'tail\', \'clip\')',
        'require': false
      },
      {
        'name': 'nativeID',
        'type':'string',
        'require': false
      },
      {
        'name': 'numberOfLines',
        'type':'number',
        'require': false
      },
      {
        'name': 'onLayout',
        'type':'function',
        'require': false
      },
      {
        'name': 'onLongPress',
        'type':'function',
        'require': false
      },
      {
        'name': 'onPress',
        'type':'function',
        'require': false
      },
      {
        'name': 'pressRetentionOffset',
        'type':'object: {top: number, left: number, bottom: number, right: number}',
        'require': false
      },
      {
        'name': 'allowFontScaling',
        'type':'bool',
        'require': false
      },
      {
        'name': 'style',
        'type':'style',
        'require': false
      },
      {
        'name': 'testID',
        'type':'string',
        'require': false
      },
      {
        'name': 'disabled',
        'type':'bool',
        'require': false,
        'platform':'Android'
      },
      {
        'name': 'selectionColor',
        'type':'color',
        'require': false,
        'platform':'Android'
      },
      {
        'name': 'textBreakStrategy',
        'type':'enum(\'simple\', \'highQuality\', \'balanced\')',
        'require': false,
        'platform':'Android'
      },
      {
        'name': 'adjustsFontSizeToFit',
        'type':'bool',
        'require': false,
        'platform':'iOS'
      },
      {
        'name': 'minimumFontScale',
        'type':'number',
        'require': false,
        'platform':'iOS'
      },
      {
        'name': 'suppressHighlighting',
        'type':'bool',
        'require': false,
        'platform':'iOS'
      },
    ],
    'Methods': []
  },
  {
    'name':'TextInput',
    'inherits':['View'],
    'Props':[
      {
        'name':'placeholderTextColor',
        'type':'color',
        'require':false
      },
      {
        'name':'allowFontScaling',
        'type':'bool',
        'require':false
      },
      {
        'name':'autoCorrect',
        'type':'bool',
        'require':false
      },
      {
        'name':'autoFocus',
        'type':'bool',
        'require':false
      },
      {
        'name':'blurOnSubmit',
        'type':'bool',
        'require':false
      },
      {
        'name':'caretHidden',
        'type':'bool',
        'require':false
      },
      {
        'name':'defaultValue',
        'type':'string',
        'require':false
      },
      {
        'name':'editable',
        'type':'bool',
        'require':false
      },
      {
        'name':'keyboardType',
        'type':'enum(\'default\', \'email-address\', \'numeric\', \'phone-pad\', \'ascii-capable\', \'numbers-and-punctuation\', \'url\', \'number-pad\', \'name-phone-pad\', \'decimal-pad\', \'twitter\', \'web-search\', \'visible-password\')',
        'require':false
      },
      {
        'name':'maxHeight',
        'type':'number',
        'require':false
      },
      {
        'name':'maxLength',
        'type':'number',
        'require':false
      },
      {
        'name':'multiline',
        'type':'bool',
        'require':false
      },
      {
        'name':'onBlur',
        'type':'function',
        'require':false
      },
      {
        'name':'onChange',
        'type':'function',
        'require':false
      },
      {
        'name':'onChangeText',
        'type':'function',
        'require':false
      },
      {
        'name':'onContentSizeChange',
        'type':'function',
        'require':false
      },
      {
        'name':'onEndEditing',
        'type':'function',
        'require':false
      },
      {
        'name':'onFocus',
        'type':'function',
        'require':false
      },
      {
        'name':'onLayout',
        'type':'function',
        'require':false
      },
      {
        'name':'onScroll',
        'type':'function',
        'require':false
      },
      {
        'name':'onSelectionChange',
        'type':'function',
        'require':false
      },
      {
        'name':'onSubmitEditing',
        'type':'function',
        'require':false
      },
      {
        'name':'placeholder',
        'type':'string',
        'require':false
      },
      {
        'name':'autoCapitalize',
        'type':'enum(\'none\', \'sentences\', \'words\', \'characters\')',
        'require':false
      },
      {
        'name':'returnKeyType',
        'type':'enum(\'done\', \'go\', \'next\', \'search\', \'send\', \'none\', \'previous\', \'default\', \'emergency-call\', \'google\', \'join\', \'route\', \'yahoo\')',
        'require':false
      },
      {
        'name':'secureTextEntry',
        'type':'bool',
        'require':false
      },
      {
        'name':'selectTextOnFocus',
        'type':'bool',
        'require':false
      },
      {
        'name':'selection',
        'type':'object: {start: number,end: number}',
        'require':false
      },
      {
        'name':'selectionColor',
        'type':'color',
        'require':false
      },
      {
        'name':'style',
        'type':'Text',
        'require':false
      },
      {
        'name':'value',
        'type':'string',
        'require':false
      },
      {
        'name':'autoGrow',
        'type':'bool',
        'require':false,
        'platform':'Android'
      },
      {
        'name':'disableFullscreenUI',
        'type':'bool',
        'require':false,
        'platform':'Android'
      },
      {
        'name':'inlineImageLeft',
        'type':'string',
        'require':false,
        'platform':'Android'
      },
      {
        'name':'inlineImagePadding',
        'type':'number',
        'require':false,
        'platform':'Android'
      },
      {
        'name':'numberOfLines',
        'type':'number',
        'require':false,
        'platform':'Android'
      },
      {
        'name':'returnKeyLabel',
        'type':'string',
        'require':false,
        'platform':'Android'
      },
      {
        'name':'textBreakStrategy',
        'type':'enum(\'simple\', \'highQuality\', \'balanced\')',
        'require':false,
        'platform':'Android'
      },
      {
        'name':'underlineColorAndroid',
        'type':'color',
        'require':false,
        'platform':'Android'
      },
      {
        'name':'clearButtonMode',
        'type':'enum(\'never\', \'while-editing\', \'unless-editing\', \'always\')',
        'require':false,
        'platform':'iOS'
      },
      {
        'name':'clearTextOnFocus',
        'type':'bool',
        'require':false,
        'platform':'iOS'
      },
      {
        'name':'dataDetectorTypes',
        'type':'enum(\'phoneNumber\', \'link\', \'address\', \'calendarEvent\', \'none\', \'all\'), ,array of enum(\'phoneNumber\', \'link\', \'address\', \'calendarEvent\', \'none\', \'all\')',
        'require':false,
        'platform':'iOS'
      },
      {
        'name':'enablesReturnKeyAutomatically',
        'type':'bool',
        'require':false,
        'platform':'iOS'
      },
      {
        'name':'keyboardAppearance',
        'type':'enum(\'default\', \'light\', \'dark\')',
        'require':false,
        'platform':'iOS'
      },
      {
        'name':'onKeyPress',
        'type':'function',
        'require':false,
        'platform':'iOS'
      },
      {
        'name':'selectionState',
        'type':'DocumentSelectionState',
        'require':false,
        'platform':'iOS'
      },
      {
        'name':'spellCheck',
        'type':'bool',
        'require':false,
        'platform':'iOS'
      }
    ],
    'Methods':[
      {
        'name':'isFocused()'
      },
      {
        'name':'clear()'
      }
    ]
  },
  {
    'name':'Button',
    'Props':[
      {
        'name':'onPress',
        'type':'function',
        'require':true
      },
      {
        'name':'title',
        'type':'string',
        'require':true
      },
      {
        'name':'accessibilityLabel',
        'type':'string',
        'require':false
      },
      {
        'name':'color',
        'type':'color',
        'require':false
      },
      {
        'name':'disabled',
        'type':'bool',
        'require':false
      },
      {
        'name':'testID',
        'type':'string',
        'require':false
      },
      {
        'name':'hasTVPreferredFocus',
        'type':'bool',
        'require':false,
        'platform':'iOS'
      },
    ]
  },
  {
    'name':'Image',
    'Props':[
      {
        'name':'style',
        'type':'style',
        'require':false
      },
      {
        'name':'blurRadius',
        'type':'number',
        'require':false
      },
      {
        'name':'onLayout',
        'type':'function',
        'require':false
      },
      {
        'name':'onLoad',
        'type':'function',
        'require':false
      },
      {
        'name':'onLoadEnd',
        'type':'function',
        'require':false
      },
      {
        'name':'onLoadStart',
        'type':'function',
        'require':false
      },
      {
        'name':'resizeMode',
        'type':'enum(\'cover\', \'contain\', \'stretch\', \'repeat\', \'center\')',
        'require':false
      },
      {
        'name':'source',
        'type':'ImageSourcePropType',
        'require':false
      },
      {
        'name':'onError',
        'type':'function',
        'require':false
      },
      {
        'name':'testID',
        'type':'string',
        'require':false
      },
      {
        'name':'resizeMethod',
        'type':'enum(\'auto\', \'resize\', \'scale\')',
        'require':false,
        'platform':'Android'
      },
      {
        'name':'accessibilityLabel',
        'type':'node',
        'require':false,
        'platform':'iOS'
      },
      {
        'name':'accessible',
        'type':'bool',
        'require':false,
        'platform':'iOS'
      },
      {
        'name':'capInsets',
        'type':'object: {top: number, left: number, bottom: number, right: number}',
        'require':false,
        'platform':'iOS'
      },
      {
        'name':'defaultSource',
        'type':'object: {uri: string,width: number,height: number,scale: number}, ,number',
        'require':false,
        'platform':'iOS'
      },
      {
        'name':'onPartialLoad',
        'type':'function',
        'require':false,
        'platform':'iOS'
      },
      {
        'name':'onProgress',
        'type':'function',
        'require':false,
        'platform':'iOS'
      }
    ],
    'Methods':[
      {
        'name':'getSize()'
      },
      {
        'name':'prefetch()'
      }
    ]
  },
  {
    'name':'RefreshControl',
    'inherits':['View'],
    'Props':[
      {
        'name':'refreshing',
        'type':'bool',
        'require':true
      },
      {
        'name':'onRefresh',
        'type':'function',
        'require':false
      },
      {
        'name':'colors',
        'type':'array of color',
        'require':false,
        'platform':'Android'
      },
      {
        'name':'enabled',
        'type':'bool',
        'require':false,
        'platform':'Android'
      },
      {
        'name':'progressBackgroundColor',
        'type':'color',
        'require':false,
        'platform':'Android'
      },
      {
        'name':'progressViewOffset',
        'type':'number',
        'require':false,
        'platform':'Android'
      },
      {
        'name':'size',
        'type':'enum(RefreshLayoutConsts.SIZE.DEFAULT, RefreshLayoutConsts.SIZE.LARGE)',
        'require':false,
        'platform':'Android'
      },
      {
        'name':'tintColor',
        'type':'color',
        'require':false,
        'platform':'iOS'
      },
      {
        'name':'title',
        'type':'string',
        'require':false,
        'platform':'iOS'
      },
      {
        'name':'titleColor',
        'type':'color',
        'require':false,
        'platform':'iOS'
      }
    ]
  }
]