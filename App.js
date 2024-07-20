import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Button, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
      <Button
        title="Login"
        onPress={() => navigation.replace('Home')}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Top Story Section</Text>
        <ScrollView horizontal>
          {/* Dummy Profiles */}
          {[...Array(5)].map((_, i) => (
            <View key={i} style={styles.storyProfile}>
              <Text>Profile {i + 1}</Text>
            </View>
          ))}
        </ScrollView>

        <Text>Posts Section</Text>
        {[...Array(5)].map((_, i) => (
          <View key={i} style={styles.post}>
            <Text>Post {i + 1}</Text>
          </View>
        ))}

        <Text>Profile Suggestions Section</Text>
        {[...Array(5)].map((_, i) => (
          <View key={i} style={styles.suggestion}>
            <Text>Suggestion {i + 1}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.profileIcon}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
      <View style={styles.profileSection}>
        <Text>Profile Picture</Text>
        <Text>Followers: 100</Text>
        <Text>Following: 150</Text>
      </View>
      <View style={styles.profileSection}>
        <Text>Posts: 10</Text>
      </View>
      <ScrollView horizontal>
        {[...Array(5)].map((_, i) => (
          <View key={i} style={styles.postCard}>
            <Text>Post {i + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyProfile: {
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  post: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  suggestion: {
    width: '100%',
    height: 50,
    marginVertical: 5,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileSection: {
    margin: 10,
    alignItems: 'center',
  },
  postCard: {
    width: 150,
    height: 200,
    margin: 10,
    backgroundColor: '#bbb',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
