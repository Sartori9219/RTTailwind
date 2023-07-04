import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NewButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.customClick}
      className={props.bgStyle}
      >
      <Text className={props.textStyle}>
        {props.icon?<Icon name={props.icon} size={20} className="ml-1"/>:""}
        {props.icon?" ":""}{props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default NewButton;