import React from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import { styles } from '../theme/AppTheme'




export const BodyComponent = (props:any) => {
    const {height} = useWindowDimensions();
    return (
    <View style={{
        ...styles.contentbody,
        height:height*0.89
    }} >
        {props.children}
    </View>
  )
}
