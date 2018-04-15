import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import PropTypes from 'prop-types';

const CustomStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

CustomStatusBar.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

export default CustomStatusBar;
