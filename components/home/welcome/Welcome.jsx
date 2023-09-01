import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants';
import styles from './welcome.style';
import { TextInput } from 'react-native-gesture-handler';

const jobtypes = ['Full-Time', 'Part-Time', 'Remote', 'Contractor'];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setactiveJobType] = useState('Full-Time');
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>HELLO ARBAAZCODE</Text>
        <Text style={styles.welcomeMessage}>FIND YOUR PERFECT JOB</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="Land a job"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image source={icons.search} style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={jobtypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setactiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

// const styl = StyleSheet.create();

export default Welcome;
