import React from 'react'
import { TextInput, View } from 'react-native'
import { styles } from '../theme/AppTheme';
import Icon from "react-native-vector-icons/MaterialIcons"

interface Props{
    placeholder:string;
    handleSetValues:(key:string, value:string)=>void;
    pass:string;
    password?:boolean;
    hasIcon?:boolean;
  }

export const InputComponent = ({placeholder,handleSetValues,pass,password,hasIcon}:Props) => {
  
  
    return (
      <View>
      <Icon 
      style={styles.iconVisibility}
      hasIcon={hasIcon}
      name="visibility" 
      color="blue" 
      size={25}/>
    
    <TextInput
        style={styles.input}
        keyboardType='default'
        onChangeText={(value)=>handleSetValues(pass,value)}
        placeholder={placeholder}
        secureTextEntry={password}
    
    />
    </View>
  )
}
