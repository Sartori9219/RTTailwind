import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,Text,Dimensions,Image,
  SafeAreaView,
} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

import NewTextinput from './components/newTextinput';
import NewButton from './components/newButton';
import {useStore} from "../zustand";

// const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const NewGroup2 = ({ navigation, route }) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let randomText = "";
  for (let i = 0; i < 20; i++) {
    randomText += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  const ncount1 = useStore(state => state.ncount1)
  const ncount2 = useStore(state => state.ncount2)
  const ncount3 = useStore(state => state.ncount3)
  const ncount4 = useStore(state => state.ncount4)
  const group1 = useStore(state => state.group1)
  const progress14 = useStore(state => state.progress14)
  let progress = ncount1 + ncount2 + ncount3 + ncount4;

  let [groupLink, setGroupLink] = useState(randomText);

  const saveGroup = () => {
    const insertGroup = {
      GroupName:group1.groupName,
      RoutingAccount:group1.rAccount,
      AccountNumber:group1.accountNumber,
      GroupLink:groupLink,
      Members:"j36RF9x6IlgX2IjNPNYC"
    }
    console.log(insertGroup)
    firestore().collection('group').add(insertGroup)
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      Alert.alert(
        'Alert',
        'The group data has been successfully saved.',
        [
          {
            text: 'Ok',
            onPress: () => navigation.navigate('NewGroup3'),
          },
        ],
        {
          cancelable: true,
          onDismiss: () => navigation.navigate('NewGroup3')
        },
      );
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
      Alert.alert(
        'Alert',
        'Failed to save group data.',
        [
          {
            text: 'Ok',
          },
        ]
      );
    });
  }
  useEffect(() => {
    let cc = 0;
    if(groupLink) cc = cc +10;
    progress14(cc); 
  }, 
  [groupLink]
)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1,backgroundColor:"#0b2447"  }} >
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
                <View className="mx-20">
                  <Image
                    source={require('../assets/qr.png')}
                  />
                </View>
                
              <Text className="text-color2 text-center mt-8 mx-20 font-monbaiti text-[22px]">{group1.groupName}</Text>
              <View className="mt-24 flex flex-row">
                <View className="basis-1/5">
                  <Text className="text-white1 font-monbaiti mt-6 text-right">Group Link  |</Text>
                </View>
                <View className="basis-4/5">
                    <NewTextinput
                      placeholder = "Their Group link"
                      value={groupLink}
                      txStyle="p-1 text-color2"
                      onChangeText={e=>setGroupLink(e)}
                      maxLength={20}
                    />
                </View>
                
              </View>
             
              <View className="bg-color2 p-1 rounded-full mt-12 mx-28">
                  <NewButton
                    title="Share Link"
                    bgStyle=""
                    textStyle = "text-center text-xl text-color3 pb-1"
                    customClick={() => navigation.navigate('JoinGroup1')}
                  />
              </View>
              <View className="bg-color2 p-1 rounded-full mt-24 mx-36">
                <NewButton
                  title="Next"
                  bgStyle=""
                  textStyle = "text-center text-xl text-color3"
                  customClick={() => saveGroup()}
                />
              </View>
              <View className="mx-10 mt-6">
                {progress==0?"":<Text className="text-color2 text-center">{progress}%</Text>}
                <ProgressBar progress={progress/100} className="mt-3 rounded-md h-2 bg-slate-100" />
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
    </SafeAreaView>
  );
};

export default NewGroup2;