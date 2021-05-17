import React from 'react';
import {View, Text, Button} from 'react-native';
const String = () => {
  var txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var str = "Please locate where 'locate' occurs!";
  const indexOf = () => {
    var str1 = "Please locate where 'locate' occurs!";
    var pos = str1.indexOf('locate', 15);
    console.log(pos);
  };
  const search = () => {
    var str1 = "Please locate where 'locate' occurs!";
    var pos = str1.search('locate');
    console.log(pos);
  };
  const slice = () => {
    var str1 = 'Apple, Banana, Kiwi';
    var res = str1.slice(7, 13);
    console.log(res);
  };
  const sliceMinus = () => {
    var str1 = 'Apple, Banana, Kiwi';
    var res = str1.slice(-12, -6);
    console.log(res);
  };
  const substring = () => {
    var str1 = 'Apple, Banana, Kiwi';
    var res = str1.substring(7, 13);
    console.log(res);
  };
  const substr = () => {
    var str1 = 'Apple, Banana, Kiwi';
    var res = str1.substr(7, 6);
    console.log(res);
  };
  const substrOneparameter = () => {
    var str1 = 'Apple, Banana, Kiwi';
    var res = str1.substr(7);
    console.log(res);
  };
  const substrMinusOnePara = () => {
    var str1 = 'Apple, Banana, Kiwi';
    var res = str1.substr(-4);
    console.log(res);
  };
  const replace = () => {
    var str1 = 'Please visit Microsoft!';
    var n = str1.replace(/MICROSOFT/i, 'Mohit');
    console.log(n);
  };
  const toUpperCase = () => {
    var text1 = 'Hello World!'; // String
    var text2 = text1.toUpperCase();
    console.log(text2);
  };
  const toLowerCase = () => {
    var text1 = 'Hello World!'; // String
    var text2 = text1.toLowerCase();
    console.log(text2);
  };
  const concat = () => {
    var text1 = 'Hello';
    var text2 = 'World';
    var text3 = text1.concat(' ', text2);
    console.log(text3);
  };
  const charAt = () => {
    var str1 = 'HELLO WORLD';

    console.log(str1.charAt(0));
  };
  const trim = () => {
    var str1 = '       Hello World!        ';

    console.log(str1.trim());
  };
  const charCodeAt = () => {
    var str1 = 'HELLO WORLD';
    console.log(str1.charCodeAt(0));
  };
  const split = () => {
    var txt1 = 'a,b,c,d,e'; // String
    console.log(txt1.split(','));
  };
  const SetValue = () => {
    let days = ['senin', 'senin', 'selasa', 'selasa', 'rabu', 'kamis', 'rabu'];
    const arrOne = new Set(days);
    console.log(arrOne);
  };
  return (
    <View>
      <Text>This is a String </Text>
      <Button
        title="String  length"
        onPress={() => {
          console.log(txt.length);
        }}
      />
      <Button
        title="String  indexOf"
        onPress={() => {
          console.log(str.indexOf('locate'));
        }}
      />
      <Button
        title="String  lastIndexOf"
        onPress={() => {
          console.log(str.lastIndexOf('locate'));
        }}
      />
      <Button
        title="indexOf by indexing"
        onPress={() => {
          indexOf();
        }}
      />
      <Button
        title="search"
        onPress={() => {
          search();
        }}
      />
      <Button
        title="slice"
        onPress={() => {
          slice();
        }}
      />
      <Button
        title="sliceMinus"
        onPress={() => {
          sliceMinus();
        }}
      />
      <Button
        title="substring"
        onPress={() => {
          substring();
        }}
      />
      <Button
        title="substr"
        onPress={() => {
          substr();
        }}
      />
      <Button
        title="substrOneparameter"
        onPress={() => {
          substrOneparameter();
        }}
      />
      <Button
        title="substrMinusOnePara"
        onPress={() => {
          substrMinusOnePara();
        }}
      />
      <Button
        title="replace"
        onPress={() => {
          replace();
        }}
      />
      <Button
        title="toUpperCase"
        onPress={() => {
          toUpperCase();
        }}
      />
      <Button
        title="toLowerCase"
        onPress={() => {
          toLowerCase();
        }}
      />
      <Button
        title="concat"
        onPress={() => {
          concat();
        }}
      />
      <Button
        title="trim"
        onPress={() => {
          trim();
        }}
      />
      <Button
        title="charAt"
        onPress={() => {
          charAt();
        }}
      />
      <Button
        title="charCodeAt"
        onPress={() => {
          charCodeAt();
        }}
      />
      <Button
        title="split"
        onPress={() => {
          split();
        }}
      />
      <Button
        title="Set Keyword"
        onPress={() => {
          SetValue();
        }}
      />
    </View>
  );
};
export default String;
