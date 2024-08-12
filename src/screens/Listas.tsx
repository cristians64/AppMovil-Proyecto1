import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent'
import { styles } from '../theme/AppTheme'
import { ButtonComponent } from '../components/ButtonComponent'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

interface Props extends NativeStackScreenProps<any,any> {}


import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ropa Caballero',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Ropa Dama',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Calzado',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export const Listas = ({navigation}:Props) => {
  return (
  <View>
    <StatusBar backgroundColor="rgb( 212, 8, 8 )"/>
        <TitleComponent title={"Nuestros Productos"}/>
        <BodyComponent>

            <Text style={styles.text}>Lo mas nuevo</Text>

            <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
            
            <ButtonComponent 
            onPress={()=>navigation.navigate("Inicio")}
            title='INICIO'/>
        </BodyComponent>
        </View>
  )

  
}
