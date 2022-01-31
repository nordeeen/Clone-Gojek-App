import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const GopayFeature = props => {
  return (
    <View style={styles.iconSecGopayOne}>
      <Image source={props.image} style={styles.iconPictureGopay} />
      <Text style={styles.textSecGopay}>{props.title}</Text>
    </View>
  );
};

export default GopayFeature;

const styles = StyleSheet.create({
  wrapperFirstSectionGopay: {
    marginHorizontal: 17,
    marginTop: 8,
  },
  wrapperSectionGopay: {
    backgroundColor: '#2C5FB8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  iconGopay: {
    width: 100,
    height: 26,
  },
  textGopay: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  wrapperSecondSectionGopay: {
    backgroundColor: '#2F65BD',
    paddingTop: 18,
    paddingBottom: 14,
    flexDirection: 'row',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  iconPictureGopay: {
    width: 36,
    height: 36,
  },
  textSecGopay: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 15,
    color: 'white',
  },
  iconSecGopayOne: {
    flex: 1,
    alignItems: 'center',
  },
  iconSecGopayTwo: {
    flex: 1,
    alignItems: 'center',
  },
  // eslint-disable-next-line prettier/prettier
  iconSecGopayThree: {
    flex: 1,
    alignItems: 'center',
  },
  iconSecGopayFour: {
    flex: 1,
    alignItems: 'center',
  },
});
