import React from 'react'
import { Text, useWindowDimensions } from 'react-native'
import { styles } from '../theme/AppTheme';


interface Props {
    title:String;
}



export const TitleComponent = ({title}:Props) => {
  const{height}= useWindowDimensions();
  
  return (
    <Text style={{
      ...styles.title,
    height:height*0.11}}>{title}</Text>
  )
}
