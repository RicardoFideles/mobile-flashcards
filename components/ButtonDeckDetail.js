import React from 'react';

import { Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const ButtonDeckDetail = ({ title, path, icon }) => {
  return (
    <Button
      icon={{ name: icon }}
      backgroundColor="#03A9F4"
      buttonStyle={styles.buttonStyle}
      title={title}
      onPress={() => {
        this.props.navigation.navigate(path, {
          navTitle: title,
          title: title,
        });
      }}
    />
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    marginTop: 20,
  },
});

export default ButtonDeckDetail;
