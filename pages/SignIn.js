import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert, Image, Text,
  SafeAreaView,
} from 'react-native';
import NewTextinput from './components/newTextinput';
import NewButton from './components/newButton';
const SignIn = ({ navigation, route }) => {
  let [userName, setUserName] = useState('');
  let [password, setPassword] = useState('');

  let register_user = () => {
    if (!userName) {
      alert('Please fill name');
      return;
    }
    if (!password) {
      alert('Please fill password');
      return;
    }
    navigation.navigate('Dashboard')

  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-color3">
      <View className="flex flex-row mt-5 mx-32">
          <Image
            source={require('../assets/user.png')}
          />
        </View>
        <View>
          <Text className="text-color4 text-center mt-5 text-6xl font-monbaiti">Ours</Text>
          <Text className="text-color4 text-center text-3xl font-monbaiti">The Team Investing App</Text>
        </View>
        <View style={{ flex: 1 }} className="mt-10">
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <NewTextinput
                label="Username"
                txStyle="p-2 text-color2"
                value={userName}
                onChangeText={
                  (userName) => setUserName(userName)
                }
                style={{ padding: 10 }}
              />
              <NewTextinput
                txStyle="p-2 text-color2"
                label="Password"
                type="password"
                value={password}
                onChangeText={
                  (password) => setPassword(password)
                }
                maxLength={10}
                keyboardType="numeric"
                style={{ padding: 10 }}
              />
              <NewButton 
              // bgStyle="bg-orange-100 p-1 rounded-full mt-4 mx-32"
              textStyle = "text-white1 pl-12"
              title="forget password" 
              customClick={register_user} />
              <NewButton 
              bgStyle="bg-color1 p-1 rounded-full mt-4 mx-32"
              textStyle = "text-center text-xl"
              title="SignIn" 
              customClick={register_user} />
            <View>
              <View className="flex flex-row px-8">
                <View className="h-[0.5px] bg-color2 basis-1/3  mt-10"/>
                <View className="basis-1/3">
                  <Text className="text-center text-white1 pt-7 text-md">or sign in with</Text>
                </View>
                <View className="h-[0.5px] bg-color2 basis-1/3  mt-10"/>

              </View>

              <View className="border-[2px] border-color1 p-1 rounded-full mt-5 mx-20">

                <NewButton
                  title="Apple"
                  bgStyle=""
                  icon="apple"
                  textStyle ="text-center text-xl text-color1"
                  customClick={() => navigation.navigate('Dashboard')}
                />
              </View>
              <View className="border-[2px] border-color1 p-1 rounded-full m-2 mx-20">
                <NewButton
                  title="Google"
                  bgStyle=""
                  icon="google"
                  textStyle ="text-center text-xl text-color1"
                  customClick={() => navigation.navigate('Dashboard')}
                />
              </View>
            </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;