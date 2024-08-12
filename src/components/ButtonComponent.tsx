import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/AppTheme'

interface Props{
  title:string;
  onPress:() => void;
}

export const ButtonComponent = ({title, onPress}:Props) => {
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={styles.button}
    >
        <Text>{title}</Text>
    </TouchableOpacity>
  )
}
