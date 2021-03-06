import React from 'react';
import { Image } from 'react-native';
import { Header, Left, Body, Right, Title } from 'native-base';

const logoWhite = require('../assets/Logo_Animal_Testing_V2.png');

const HeaderComponent = () => (
  <Header>
    <Left>
      <Image
        resizeMode="contain"
        style={{ width: 40, height: 40 }}
        source={logoWhite}
      />
    </Left>
    <Body style={{ justifyContent: 'center', alignItems: 'center', flex: 2 }}>
      <Title>Animal Testing</Title>
    </Body>
    <Right />
  </Header>
);

export default HeaderComponent;
