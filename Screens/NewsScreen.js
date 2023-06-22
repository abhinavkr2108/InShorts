import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native'
import React, { createContext, Component, useContext, useState, useEffect } from "react";
import { NewsContext } from '../API/Context';
import SingleNews from '../components/SingleNews';


const NewsScreen = () => {
    const {
        news: { articles },
    } = useContext(NewsContext);
    // console.log(articles)
    const windowHeight = Dimensions.get("window").height;
    const [activeIndex, setActiveIndex] = useState()
   
    
   
  return (
    <View style={styles.carousel}>
        {
            articles &&(
               <FlatList
                    data={articles}
                    renderItem={({item, index})=>(
                        <SingleNews item={item} index={index}/>
                    
                    )}
                /> 
            )
        } 
    </View>
      
  )
    
}

const styles= StyleSheet.create({
    itemView:{
        width: "90%",
        height: 150,
        backgroundColor: "white",
        alignSelf: "center",
        marginTop: 10,
        elevation: 4,
        shadowColor: "black",
    }
})


export default NewsScreen