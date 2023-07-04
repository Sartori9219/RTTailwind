import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,Text,TextInput,TouchableOpacity ,
  SafeAreaView,
} from 'react-native';
// import { Picker } from '@react-native-picker/picker'
import { CheckBox } from 'react-native-elements';
import Collapsible from 'react-native-collapsible';
import NewTextinput from './components/newTextinput';
import NewButton from './components/newButton';

const NewGroup3 = ({ navigation, route }) => {
  // let [selectedItem, setSelectedItem] = useState('');
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');
  const [isCollapsed, setIsCollapsed] = useState([true, true]);
  const [isChecked, setIsChecked] = useState([false,false,false,false]);
  const handleCheckBoxChange = (index) => {
    const chState = [...isChecked];
    chState[index] = !chState[index];
    setIsChecked(chState);
  };

  const handleCollapse = (index) => {
    const newState = [...isCollapsed];
    newState[index] = !newState[index];
    setIsCollapsed(newState);
  };
  let register_project = () => {
    console.log(userName, userContact, userAddress);

    if (!userName) {
      alert('Please fill name');
      return;
    }
    if (!userContact) {
      alert('Please fill Contact Number');
      return;
    }
    if (!userAddress) {
      alert('Please fill Address');
      return;
    }
    navigation.navigate('Dashboard')
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1,backgroundColor:"#0b2447"  }} >
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Text className="text-color2 text-center mx-20 text-4xl border-b-[2px] border-color2 font-monbaiti">Project Name</Text>
              <Text className="text-center text-xl text-color2 font-monbaiti">$ Total Budget</Text>
              <View className="border-[1px] border-color2 rounded-3xl mt-2 mx-4 pb-6">
                <View>
                  <NewTextinput
                    label="Phase Name"
                    lbStyle="text-color2 text-xl font-monbaiti"
                    value={userName}
                    txStyle="p-1 text-color2"
                    onChangeText={
                      (userName) => setUserName(userName)
                    }
                  />
                </View>
                <View>
                  <NewTextinput
                    label="Budget"
                    lbStyle="text-color2 text-xl font-monbaiti"
                    placeholder = "$500"
                    value={userName}
                    txStyle="p-1 text-color2"
                    onChangeText={
                      (userName) => setUserName(userName)
                    }
                  />
                </View>
                <View>
                  <NewTextinput
                    label="Est. Date of Completion"
                    lbStyle="text-color2 text-xl font-monbaiti"
                    value={userName}
                    txStyle="p-1 text-color2"
                    onChangeText={
                      (userName) => setUserName(userName)
                    }
                  />
                </View>
                <View className= "mx-10 mt-2">
                  <Text className="text-color2 text-xl font-monbaiti">Objective</Text>
                  <TextInput
                  value={userContact}
                  placeholderTextColor='white'
                  multiline={true}
                  numberOfLines={4}
                  placeholder="This  should be a clear and concise message, explaining what you plan on accomplishing druing this phase"
                  className="bg-color3 border-color2 border-[1px] rounded-2xl mt-2 p-2"
                  onChangeText={
                    (userContact) => setUserContact(userContact)
                  }
                  maxLength={30}
                  />
                </View>
              </View>
              <NewButton
                title="+ Add New"
                bgStyle="mt-3"
                textStyle = "text-center text-color2 pb-1"
                customClick={() => progresshandle(10)}
              />
              <View className="mx-4">
                <TouchableOpacity onPress={() => handleCollapse(0)}>
                  <Text className="text-2xl text-color2 border-b-[2px] border-color2 font-monbaiti">Members</Text>
                </TouchableOpacity>
                <Collapsible collapsed={isCollapsed[0]}>
                  <View>
                    <CheckBox
                      checked={isChecked[0]}
                      onPress={() => handleCheckBoxChange(0)}
                      title='Bent T.'
                      containerStyle={{ backgroundColor: '#0b2447', borderWidth: 0,padding:0 }}
                      titleProps={{ style: { color: '#EFDCD3', fontSize: 16 } }}
                      textStyle={{ fontWeight: 'normal',color:'#EFDCD3' }}
                    />
                    <CheckBox
                      checked={isChecked[1]}
                      onPress={() => handleCheckBoxChange(1)}
                      title='Chris B.'
                      containerStyle={{ backgroundColor: '#0b2447', borderWidth: 0 ,padding:0}}
                      titleProps={{ style: { color: '#EFDCD3', fontSize: 16 } }}
                      textStyle={{ fontWeight: 'normal',color:'#EFDCD3' }}
                    />
                    <CheckBox
                      checked={isChecked[2]}
                      onPress={() => handleCheckBoxChange(2)}
                      title='Chris M.'
                      containerStyle={{ backgroundColor: '#0b2447', borderWidth: 0,padding:0 }}
                      titleProps={{ style: { color: '#EFDCD3', fontSize: 16 } }}
                      textStyle={{ fontWeight: 'normal',color:'#EFDCD3' }}
                    />
                    <CheckBox
                      checked={isChecked[3]}
                      onPress={() => handleCheckBoxChange(3)}
                      title='Ginesha P.'
                      containerStyle={{ backgroundColor: '#0b2447', borderWidth: 0,padding:0 }}
                      titleProps={{ style: { color: '#EFDCD3', fontSize: 16 } }}
                      textStyle={{ fontWeight: 'normal',color:'#EFDCD3' }}
                    />
                  </View>
                </Collapsible>
                <TouchableOpacity onPress={() => handleCollapse(1)}>
                  <Text className="text-2xl text-color2 border-b-[2px] border-color2 font-monbaiti">Project Manager</Text>
                </TouchableOpacity>
                <Collapsible collapsed={isCollapsed[1]}>
                  <Text>This is component 2!</Text>
                </Collapsible>
              </View>

              <NewButton
                title="Skip For Now"
                bgStyle="mt-3"
                textStyle = "text-center text-color2 pb-1"
                customClick={() => navigation.navigate('Dashboard')}
              />
              <View className="bg-color2 p-1 rounded-full mt-1 mx-36">
                <NewButton
                  title="Next"
                  bgStyle=""
                  textStyle = "text-center text-xl text-color3"
                  customClick={() => navigation.navigate('Dashboard')}
                />
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
    </SafeAreaView>
  );
};

export default NewGroup3;