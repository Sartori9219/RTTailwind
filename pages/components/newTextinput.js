import React from 'react';
import { View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NewTextinput = (props) => {
  return (
    <View className= "mx-10 mt-2 border-color2 border-b-[2px]">
      {props.label?<Text className={props.lbStyle?props.lbStyle:"text-2xl text-color2 font-monbaiti"}>{props.label}</Text>:""}
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor='white'
        type={props.type}
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        className={props.txStyle}
        blurOnSubmit={false}
        value={props.value}
      />
      {props.component1}
    </View>
  );
};

export default NewTextinput;