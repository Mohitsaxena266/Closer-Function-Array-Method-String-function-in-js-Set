import React from 'react';
import {View, Text, Button} from 'react-native';
const Array = () => {
  var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

  return (
    <View>
      <Text>This is a Array Function</Text>
      <Button
        title="Array Pop"
        onPress={() => {
          fruits.pop();
        }}
      />
      <Button
        title="Array join"
        onPress={() => {
          fruits.push('Kiwi');
        }}
      />
      <Button
        title="Array shift"
        onPress={() => {
          fruits.shift();
        }}
      />
      <Button
        title="Array UNshift"
        onPress={() => {
          fruits.unshift('Lemon');
        }}
      />
      <Button
        title="Array Fruits del"
        onPress={() => {
          delete fruits[0];
        }}
      />
      <Button
        title="Array splice"
        onPress={() => {
          fruits.splice(0, 1, 'Lemon', 'Kiwi');
        }}
      />
      <Button
        title="print Array to String"
        onPress={() => {
          console.log(fruits.toString());
        }}
      />
      <Button
        title="Array sort"
        onPress={() => {
          console.log(fruits.sort());
        }}
      />
      <Button
        title="Array reverse"
        onPress={() => {
          console.log(fruits.reverse());
        }}
      />
      <Button
        title="Array print"
        onPress={() => {
          console.log(fruits);
        }}
      />
    </View>
  );
};
export default Array;
