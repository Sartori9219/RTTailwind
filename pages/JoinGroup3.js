import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,Text,
  SafeAreaView,
} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import {useStore} from "../zustand";

import NewTextinput from './components/newTextinput';
import NewButton from './components/newButton';

const JoinGroup3 = ({ navigation, route }) => {

  const jcount1 = useStore(state => state.jcount1)
  const jcount2 = useStore(state => state.jcount2)
  const increment2 = useStore(state => state.increment2)
  let progress = jcount1 + jcount2;
  const [formData, setFormData] = useState({
    phoneNumber: '',
    email: '',
    city: '',
    userstate: ''
  });

  const { phoneNumber, email, city, userstate } = formData;

  let register_user = () => {

    if (!phoneNumber) {
      alert('Please fill name');
      return;
    }
    if (!email) {
      alert('Please fill Contact Number');
      return;
    }
  };
  const handletext = (n,v) =>{
    setFormData({ ...formData, [n]:v });
  }
  useEffect(() => {
      let cc = 0;
      if(email) cc = cc +20;
      if(phoneNumber) cc = cc +20;
      if(city) cc = cc +10;
      if(userstate) cc = cc +10;
      increment2(cc); 
    }, 
    [formData]
  )
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1,backgroundColor:"#0b2447"  }} >
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Text className="text-color2 text-center mx-20 font-monbaiti text-[40px]">Welcome to Your Team</Text>
              <View className="flex px-20 pb-3">
                <View className="border-2 border-color2 rounded-full h-60 w-60 text-center">
                  <Text className="text-color2 text-center text-[25px] mt-24">(Picture)</Text>
                </View>
              </View>
              <NewTextinput
                label="Phone Number"
                value={phoneNumber}
                txStyle="p-1 text-color2"
                onChangeText={e=>handletext('phoneNumber',e)}
              />
              <NewTextinput
                label="Email"
                value={email}
                txStyle="p-1 text-color2"
                onChangeText={e=>handletext('email',e)}
                maxLength={20}
                keyboardType="email-address"
              />
              <NewTextinput
                label="City"
                placeholder=""
                value={city}
                txStyle="p-1 text-color2"
                onChangeText={e=>handletext('city',e)}

                maxLength={30}
              />
              <NewTextinput
                label="State"
                value={userstate}
                txStyle="p-2 text-color2"
                onChangeText={e=>handletext('userstate',e)}

                maxLength={30}
              />
              <View className="bg-color2 p-1 rounded-full mt-3 mx-36">
                <NewButton
                  title="Next"
                  bgStyle=""
                  textStyle = "text-center text-xl text-color3"
                  customClick={() => navigation.navigate('JoinGroup3')}
                />
              </View>
              <View className="mx-10">
                {progress==0?"":<Text className="text-color2 text-center">{progress}%</Text>}
                <ProgressBar progress={progress/100} className="mt-3 rounded-md h-2 bg-slate-100" />
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
    </SafeAreaView>
  );
};

export default JoinGroup3;