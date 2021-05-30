import React from 'react'
import { Text, View, FlatList, Dimensions } from 'react-native'
import CarItem from '../CarItem'
import styles from './styles';
import cars from './cars';
const CarsList = () => {
  return (
    <View>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment={'start'}
        showsVerticalScrollIndicator={'none'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  )
}
export default CarsList;