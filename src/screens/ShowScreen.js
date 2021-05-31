import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { getComments } from '../api/actions';
import Comment from '../components/Comment';

const ShowScreen = ({ navigation }) => {
  const [comments, setComments] = useState([]);
  const id = navigation.getParam('id');

  useEffect(() => {
    setComments(getComments(id));

    const listener = navigation.addListener('didFocus', () => {
      setComments(getComments(id));
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        data={comments}
        keyExtractor={comment => comment.id}
        renderItem={({ item }) => {
          return (    
            <Comment item={item} />        
          );
        }}
      />
    </View>

};

const styles = StyleSheet.create({});

export default ShowScreen;
