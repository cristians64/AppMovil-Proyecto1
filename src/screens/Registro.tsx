import React, { useState } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent'
import { InputComponent } from '../components/InputComponent'
import { styles } from '../theme/AppTheme'
import { ButtonComponent } from '../components/ButtonComponent'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

interface FormLogin{
  usuario:string;
  correo:string,
  celular:string,
  contraseña:string;
}
interface Props extends NativeStackScreenProps<any,any> {}



export const Registro = ({navigation}:Props) => {
  
  const [formLogin, setFormLogin] = useState<FormLogin>({
    usuario:"",
    correo:"",
    celular:"",
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
        <TitleComponent title={"Registrarse"}/>
        <BodyComponent>
            <Text style={styles.text}>Unetenos</Text>
            <InputComponent placeholder='Usuario' handleSetValues={handleSetValues} pass="usuario"/>
            <InputComponent placeholder='Correo' handleSetValues={handleSetValues} pass="correo"/>
            <InputComponent placeholder='Celular' handleSetValues={handleSetValues} pass="celular"/>
            <InputComponent placeholder='Contraseña' hasIcon={false} password={true} handleSetValues={handleSetValues} pass="contraseña"/>
            <ButtonComponent title='Registrarse' onPress={handleSingIn}/>
            <ButtonComponent title='Productos' onPress={()=>navigation.navigate("Lista")}/>
            <ButtonComponent title='VOLVER' onPress={()=>navigation.navigate("Inicio")}/>
            
        </BodyComponent>
    </View>
  )
}
