import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, Image, Button } from 'react-native';

import NewButton from './components/newButton';

const HomeScreen = ({ navigation }) => {

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#0b2447" }}>
        <View className="flex flex-row mt-5 mx-32">
          <Image
            source={require('../assets/user.png')}
          />
        </View>
        <View>
          <Text className="text-color1 text-center mt-5 text-8xl font-monbaiti" >Ours</Text>
          <Text className="text-color1 text-center text-3xl font-monbaiti">The Team Investing App</Text>
          <View className="h-1 bg-color1 mx-10  mt-10" />
        </View>
        <View className="mt-20 mb-40">
          <NewButton
            title="Sign In"
            bgStyle="bg-color1 p-1 rounded-full m-2 mx-20"
            textStyle="text-center text-2xl"
            customClick={() => navigation.navigate('SignIn')}
          />
          <View className="border-2 border-color1 p-1 rounded-full m-2 mx-20">
            <NewButton
              title="Join Group"
              bgStyle=""
              textStyle="text-center text-xl text-color1"
              customClick={() => navigation.navigate('JoinGroup1')}
            />
          </View>
          <View className="border-2 border-color1 p-1 rounded-full m-2 mx-20">
            <NewButton
              title="New Group"
              bgStyle=""
              textStyle="text-center text-xl text-color1"
              customClick={() => navigation.navigate('NewGroup01')}
            />
          </View>
          <View className="border-2 border-color1 p-1 rounded-full m-2 mx-20">
            <NewButton
              title="Expenses"
              bgStyle=""
              textStyle="text-center text-xl text-color1"
              customClick={() => navigation.navigate('Expenses')}
            />
          </View>

          <View className="h-14 "></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;