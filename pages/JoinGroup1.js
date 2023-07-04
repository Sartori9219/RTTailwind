import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,Text,TextInput,
  SafeAreaView,
} from 'react-native';

import NewButton from './components/newButton';

const JoinGroup1 = ({ navigation, route }) => {
  let [grouplink, setGrouplink] = useState('');

  let register_user = () => {
    console.log(grouplink);

    if (!grouplink) {
      alert('Please fill grouplink');
      return;
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-color3">
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Text className="text-color2 text-center mx-20 " style={{fontSize:44,fontFamily:"monbaiti"}}>Welcome to Your Team</Text>
              <View className="mt-20 pt-40">
                {/* <View className="h-40"/> */}
                <Text className="text-center text-color2">Enter group Link</Text>
                <View className="flex flex-row mx-10 border-color2 border-b-[1px]">
                  <TextInput
                    placeholder=""
                    value={grouplink}
                    className="w-20 basis-11/12"
                    onChangeText={
                      (userName) => setGrouplink(grouplink)
                    }
                    // style={{ padding: 10 }}
                  />
                  <NewButton 
                    icon="arrow-right" 
                    bgStyle="h-8 w-10 basis-1/12 bg-color2 rounded-full pt-1 pl-1"
                    customClick={() => navigation.navigate('JoinGroup2')}
                    />
                </View>
                
              </View>
              <Text className="text-color2 text-center text-2xl mt-10">QR</Text>
              <View className="bg-color2 p-1 rounded-full mt-6 mx-32">
                <NewButton
                  title="Scan QR"
                  bgStyle=""
                  textStyle = "text-center text-xl text-color3"
                  customClick={() => navigation.navigate('JoinGroup1')}
                />
              </View>
              
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
    </SafeAreaView>
  );
};

export default JoinGroup1;