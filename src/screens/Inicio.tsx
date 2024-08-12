import React, { useState } from 'react'
import { StatusBar, Text, TextInputComponent, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent'
import { styles } from '../theme/AppTheme'
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'


interface Props extends NativeStackScreenProps<any,any> {}

interface FormLogin{
  usuario:string;
  contraseña:string;
}

export const Inicio = ({navigation}:Props) => {
  
  const [formLogin, setFormLogin] = useState<FormLogin>({
    usuario:"",
    contraseña:""

  });

  const handleSetValues = (key:string, value:string) =>{
    

    setFormLogin({...formLogin,[key]:value})
  }

  const handleSingIn = () => {
      console.log(formLogin)
  }
  
  return (
    <View>
        <StatusBar backgroundColor="rgb( 212, 8, 8 )"/>
        <TitleComponent title={"Iniciar Sesion"}/>
        <BodyComponent>
            <Text style={styles.text}>Hola como estas</Text>
            <InputComponent placeholder='Usuario' handleSetValues={handleSetValues} pass="usuario"/>
            <InputComponent placeholder='Contraseña' password={true} handleSetValues={handleSetValues} pass="contraseña"/>
            

            <ButtonComponent title='Iniciar Sesion' onPress={handleSingIn} />
            <ButtonComponent 
            onPress={()=>navigation.navigate("Registro")}
            title='Registrarse'/>
            <ButtonComponent title='Productos' onPress={()=>navigation.navigate("Lista")}/>
        </BodyComponent>
    </View>
  )
}
