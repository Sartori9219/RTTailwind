import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,Text,
  SafeAreaView,
} from 'react-native';
import { ProgressBar } from 'react-native-paper';

import NewTextinput from './components/newTextinput';
import NewButton from './components/newButton';
import {useStore} from "../zustand";

const NewGroup01 = ({ navigation, route }) => {
  const ncount1 = useStore(state => state.ncount1)
  const ncount2 = useStore(state => state.ncount2)
  const ncount3 = useStore(state => state.ncount3)
  const ncount4 = useStore(state => state.ncount4)
  const nUser1 = useStore(state => state.nUser1)
  const progress11 = useStore(state => state.progress11)
  let progress = ncount1 + ncount2 + ncount3 + ncount4;
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    password: '',
    rpassword: ''
  });

  const { fName, lName, password, rpassword } = formData;

  let register_user = () => {
    useStore.setState((state) => ({ nUser1: { fName: fName,lName:lName,password:password } }))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    if (!fName) {
      alert('Please fill First Name');
      return;
    }
    if (!lName) {
      alert('Please fill Last Name');
      return;
    }
    if (!password) {
      alert('Please fill Password');
      return;
    }
    if (!rpassword) {
      alert('Please fill Re-Password');
      return;
    }
    if(password!=rpassword){
      alert('Please match Password')
      return;
    }
    navigation.navigate('NewGroup02')
  };
  const handletext = (n,v) =>{
    setFormData({ ...formData, [n]:v });
  }
  useEffect(() => {
      let cc = 0;
      if(fName) cc = cc +5;
      if(lName) cc = cc +5;
      if(password) cc = cc +5;
      if(password&&password==rpassword) cc = cc +5;
      progress11(cc); 
    }, 
    [formData]
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1,backgroundColor:"#0b2447",}} >
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Text className="text-color2 text-center mx-20 font-monbaiti" style={{fontSize:40}}>Welcome to Your Team</Text>
              <View className="flex px-20 pb-3">
                <View className="border-2 border-color2 rounded-full h-60 w-60 text-center">
                  <Text className="text-color2 text-center font-monbaiti" style={{fontSize:25,marginTop:100}}>(Picture)</Text>
                </View>
              </View>
              <NewTextinput
                label="First Name"
                value={fName}
                name="fName"
                txStyle="p-1 text-color2"
                onChangeText={e=>handletext('fName',e)}
              />
              <NewTextinput
                label="Last Name"
                value={lName}
                name="lName"
                txStyle="p-1 text-color2"
                onChangeText={e=>handletext('lName',e)}
                maxLength={10}
              />
              <NewTextinput
                label="Password"
                placeholder=""
                value={password}
                secureTextEntry={true}

                name="password"
                txStyle="p-1 text-color2"
                onChangeText={e=>handletext('password',e)}
                maxLength={10}
              />
              <NewTextinput
                label="Re-Enter Password"
                value={rpassword}
                secureTextEntry={true}

                name="rpassword"
                txStyle="p-2 text-color2"
                onChangeText={e=>handletext('rpassword',e)}
                maxLength={10}
              />
              <View className="bg-color2 p-1 rounded-full mt-3 mx-36">
                <NewButton
                  title="Next"
                  bgStyle=""
                  textStyle = "text-center text-xl text-color3"
                  customClick={register_user}
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

export default NewGroup01;