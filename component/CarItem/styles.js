import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height
        // backgroundColor: '#678ed2'
      },
      titles: {
        marginTop: '30%',
        alignItems: 'center'
      },
      title: {
        fontSize: 40,
        fontWeight: '500'
      },
      subtitle: {
        marginTop: '1 %',
        color: '#5c5e62'
      },
      sidetag:{
      textDecorationLine: 'underline',
       
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      },
      buttonContainer:{
        position: 'absolute',
        bottom: 50,
        width: '100%'
      }
});

export default styles;