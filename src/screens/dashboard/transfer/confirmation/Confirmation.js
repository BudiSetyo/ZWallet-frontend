import React from 'react';
import {View, ScrollView, Text} from 'react-native';

import Header from './Header';
import Content from './Content';

import styles from './styles';

const Confirmation = props => {
  const data = props.route.params;
  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} dataReceiver={data} />
      <ScrollView>
        <Content navigation={props.navigation} dataReceiver={data} />
      </ScrollView>
    </View>
  );
};

export default Confirmation;
