import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Platform } from 'react-native';
import { white } from '../utils/colors';

const PrimaryButton = ({ title, onPress, backgroundColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn,
        { backgroundColor: backgroundColor },
      ]}
    >
      <Text style={styles.submitBtnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iosSubmitBtn: {
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  AndroidSubmitBtn: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
});

export default PrimaryButton;
