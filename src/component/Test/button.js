import React from 'react';
import {Transitioning,Transition} from 'react-native-reanimated';
import {View,Text,StyleSheet,Button} from 'react-native'

const Sequence = ()=>{

    const transition = (
       <Transition.Sequence>
           <Transition.Out type="scale" />
           <Transition.Change interpolation="easeInOut" />
           <Transition.In type="fade" />
       </Transition.Sequence>
    )
  const ref = React.useRef();
  const [isShow,setShow] = React.useState(true)
    return(
      <Transitioning.View
        ref={ref}
        transition={transition}
        style={styles.container}
      >
          <Button 
           title="show or hide"
           color="#bbb"
           onPress={()=>{
               ref.current.animateNextTransition();
               setShow(!isShow)
           }}
          />
        {isShow && (<Text>Tap the above button</Text>)}
      </Transitioning.View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        flex:1,
        alignItems:"center"
    }
})

export {Sequence}