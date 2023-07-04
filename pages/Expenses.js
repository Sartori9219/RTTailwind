import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LineChart } from 'react-native-chart-kit';
import NewButton from './components/newButton';

const HomeScreen = ({ navigation }) => {

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#0b2447" }}>
        <View>
          <Text className="text-white1 text-center text-3xl font-monbaiti underline">Expenses</Text>
        </View>
        <View className="mt-6 mb-40">
          <View className="flex flex-row justify-center">
            <TouchableOpacity className="mt-2 mr-3">
              <Icon name="angle-left" size={18} color="white" />
            </TouchableOpacity>
            <Text className="text-white1 text-center text-2xl font-monbaiti">Project Name</Text>
            <TouchableOpacity className="mt-2 ml-3">
              <Icon name="angle-right" size={18} color="white" />
            </TouchableOpacity>
          </View>
          <View className="mt-1 flex flex-row justify-center gap-x-1">
            <Icon name="circle-o" size={7} color="white" />
            <Icon name="circle-o" size={7} color="white" />
            <Icon name="circle" size={7} color="white" />
            <Icon name="circle-o" size={7} color="white" />
            <Icon name="circle-o" size={7} color="white" />
          </View>
          <View className="flex flex-row justify-center">
            <TouchableOpacity className="mt-2">
              <Text className="text-white1 text-center text-1xl font-monbaiti underline">
                Add Category
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row justify-center">
            <TouchableOpacity
              className="bg-white1 p-1 rounded-full m-2 mr-10 w-32"
            >
              <Text className="text-center text-1xl font-monbaiti">
                Schedule Payout
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-white1 p-1 rounded-full m-2 w-32"
            >
              <Text className="text-center text-1xl font-monbaiti">
                Add Expense
              </Text>
            </TouchableOpacity>
          </View>
          <View className="justify-center">
            <Text className="text-white2 text-1xl font-monbaiti ml-10 mt-10">
              August 2,2023
            </Text>
            <View className="flex flex-row bg-color5 justify-center mx-5 mt-2">
              <Text className="text-white1 text-lg font-monbaiti mr-20">
                Transfer - Chris B.
              </Text>
              <Text className="text-white1 text-lg font-monbaiti">
                -$100.28
              </Text>
            </View>
            <View className="flex flex-row bg-color5 justify-center mx-5 mt-2">
              <Text className="text-white1 text-lg font-monbaiti mr-44">
                Fiverr
              </Text>
              <Text className="text-white1 text-lg font-monbaiti">
                -$58.62
              </Text>
            </View>
          </View>
          <View className="justify-center">
            <Text className="text-white2 text-1xl font-monbaiti ml-10 mt-10">
              August 2,2023
            </Text>
            <View className="flex flex-row bg-color5 justify-center mx-5 mt-2">
              <Text className="text-white1 text-lg font-monbaiti mr-12">
                Contribution -Deja H.
              </Text>
              <Text className="text-white1 text-lg font-monbaiti">
                -$564.98
              </Text>
            </View>
          </View>
          <View className="h-14 "></View>
        </View>
      </View>
    </SafeAreaView >
  );
};

export default HomeScreen;