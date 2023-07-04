import React, { useState, useEffect } from 'react';

import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,Text,Dimensions,Image,TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Divider } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';
import Pie from 'react-native-pie';
import NewButton from './components/newButton';

const Projects = ({ navigation, route }) => {
  console.log(route.params.projectID);
  let [chart, setChart] = useState([
    {
      percentage: 10,
      color: '#C70039',
    },
    {
      percentage: 20,
      color: '#44CD40',
    },
    {
      percentage: 30,
      color: '#404FCD',
    },
    {
      percentage: 40,
      color: '#EBD22F',
    },
  ])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1,backgroundColor:"#0b2447"  }} >
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <View className="p-3">
                  <TouchableOpacity>
                    <Icon name="align-justify" size={25} color="white"/>
                  </TouchableOpacity>
                 <Text className="text-white1 text-4xl basis-4/6 text-center font-monbaiti">Unity - Team Investing</Text>
              </View>
              <View className="items-center flex-1">
                <Pie
                  radius={130}
                  innerRadius={100}
                  sections={chart}
                  dividerSize={1}
                  strokeCap={'butt'}
                />
              </View>
              <View className="flex flex-row item-center">
                <Icon name="circle" size={15} color="white" className="m-2"/>
                <Icon name="circle" size={15} color="white" className="m-2"/>
                <Icon name="circle" size={20} color="gray" className="m-2"/>
                <Icon name="circle" size={15} color="white" className="m-2"/>
              </View>
              <Divider width={3} className="mx-10 bg-color1 mt-3"/>
              <TouchableOpacity
               onPress={()=>alert(0)}
              >
                <View className="flex flex-row mt-3 bg-white1/[.026] mx-10 rounded-[26px] pt-3" >
                  <View className="basis-2/12">
                    <View className="bg-white1 h-5 w-5 mt-1 ml-2 rounded-full"></View>
                  </View>
                  <View className="basis-8/12">
                    <Text className="text-white1 text-[22px] font-monbaiti">Unity Team Investing</Text>
                    <Text className="text-white1 text-[18px] font-monbaiti">$25,195,70</Text>
                  </View>
                  <View className="basis-2/12">
                    <Icon name="caret-up" size={25} color="green"/>
                  </View>
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity
               onPress={()=>alert(0)}
              >
                <View className="flex flex-row mt-3 bg-white1/[.026] mx-10 rounded-[26px] pt-3" >
                  <View className="basis-2/12">
                    <View className="bg-white1 h-5 w-5 mt-1 ml-2 rounded-full"></View>
                  </View>
                  <View className="basis-8/12">
                    <Text className="text-white1 text-[22px] font-monbaiti">Plan 2</Text>
                    <Text className="text-white1 text-[18px] font-monbaiti">$40,358,71</Text>
                  </View>
                  <View className="basis-2/12">
                    <Icon name="caret-up" size={25} color="green"/>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
               onPress={()=>alert(0)}
              >
                <View className="flex flex-row mt-3 bg-white1/[.026] mx-10 rounded-[26px] pt-3" >
                  <View className="basis-2/12">
                    <View className="bg-white1 h-5 w-5 mt-1 ml-2 rounded-full"></View>
                  </View>
                  <View className="basis-8/12">
                    <Text className="text-white1 text-[22px] font-monbaiti">Plan 3</Text>
                    <Text className="text-white1 text-[18px] font-monbaiti">$10,032,69</Text>
                  </View>
                  <View className="basis-2/12">
                    <Icon name="caret-up" size={25} color="green"/>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
               onPress={()=>alert(0)}
              >
                <View className="flex flex-row mt-3 bg-white1/[.026] mx-10 rounded-[26px] pt-3" >
                  <View className="basis-2/12">
                    <View className="bg-white1 h-5 w-5 mt-1 ml-2 rounded-full"></View>
                  </View>
                  <View className="basis-8/12">
                    <Text className="text-white1 text-[22px] font-monbaiti">Plan 4</Text>
                    <Text className="text-white1 text-[18px] font-monbaiti">$25,195,70</Text>
                  </View>
                  <View className="basis-2/12">
                    <Icon name="caret-down" size={25} color="red"/>
                  </View>
                </View>
              </TouchableOpacity>
              <View className="bg-white1/[.026] p-1 rounded-full mt-3 mx-16">
                <NewButton
                  title="Create New Project"
                  bgStyle=""
                  textStyle = "text-center text-xl text-white1 font-monbaiti text-[22px]"
                  customClick={() => navigation.navigate('NewGroup3')}
                />
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
    </SafeAreaView>
  );
};

export default Projects;