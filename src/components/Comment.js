import React, from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { getComments } from '../api/actions';

const Comment = ({ item }) => {
  
    return (           
      <View style={styles.row}>
        <Text style={styles.Name}>
          {item.Name} 
        </Text>
        <Text style={styles.name}>
          {item.Email} 
        </Text>
        <Text style={styles.body}>
          {item.Body} 
        </Text>
        <Text>...</Text>
      </View>
    );  
};

const styles = StyleSheet.create({
  body: {
    fontSize: 12
  },
  name: {
    fontSize: 14
  },
});

export default Comment;
