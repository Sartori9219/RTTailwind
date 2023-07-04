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

const NewGroup1 = ({ navigation, route }) => {
  const ncount1 = useStore(state => state.ncount1)
  const ncount2 = useStore(state => state.ncount2)
  const ncount3 = useStore(state => state.ncount3)
  const ncount4 = useStore(state => state.ncount4)
  const progress13 = useStore(state => state.progress13)
  let progress = ncount1 + ncount2 + ncount3 + ncount4;

  const [formData, setFormData] = useState({
    groupName: '',
    rAccount: '',
    accountNumber: '',
  });

  const { groupName, rAccount, accountNumber } = formData;

  let register_user = () => {
    if (!groupName) {
      alert('Please fill Group Name');
      return;
    }
    useStore.setState((state) => ({ group1: formData }))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

    navigation.navigate('NewGroup2')
  };
  const handletext = (n,v) =>{
    setFormData({ ...formData, [n]:v });
  }
  useEffect(() => {
      let cc = 0;
      if(groupName) cc = cc +15;
      if(rAccount) cc = cc +5;
      if(accountNumber) cc = cc +5;
      progress13(cc); 
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
              <Text className="text-color2 text-center mx-20 text-[40px] font-monbaiti">Welcome to Your Team</Text>
              <View className="mt-16">
              </View>
              <NewTextinput
                label="Group Name"
                value={groupName}
                name="groupName"
                txStyle="p-1 text-color2"
                onChangeText={e=>handletext('groupName',e)}
              />
              <View className="border-[3px] border-color2 p-1 rounded-3xl mt-14 mx-4 pb-8">
                <View className="bg-color2 p-1 rounded-full mt-8 mx-12">
                  <NewButton
                    title="Connect Back Account"
                    bgStyle=""
                    textStyle = "text-center text-xl text-color3 pb-1"
                    customClick={() => navigation.navigate('JoinGroup1')}
                  />
                </View>
                <NewButton
                    title="or Add Manualy"
                    bgStyle="my-5"
                    textStyle = "text-center text-color2 pb-1"
                    customClick={() => navigation.navigate('JoinGroup1')}
                  />
                  <NewTextinput
                    label="Routing Account"
                    value={rAccount}
                    name="rAccount"
                    txStyle="p-1 text-color2"
                    onChangeText={e=>handletext('rAccount',e)}
                    maxLength={30}
                  />
                  <NewTextinput
                    label="Account Number"
                    value={accountNumber}
                    name="accountNumber"
                    txStyle="p-1 text-color2"
                    onChangeText={e=>handletext('accountNumber',e)}
                    maxLength={30}
                  />
               
              </View>
              <NewButton
                title="Optional"
                bgStyle="my-3"
                textStyle = "text-center text-color2 pb-1"
                customClick={() => progresshandle(10)}
              />
              
              <View className="bg-color2 p-1 rounded-full mt-3 mx-36">
                <NewButton
                  title="Next"
                  bgStyle=""
                  textStyle = "text-center text-xl text-color3"
                  customClick={() => register_user()}
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

export default NewGroup1;