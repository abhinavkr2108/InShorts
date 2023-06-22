import React, { createContext, useState, useEffect } from "react";
import { getNewsAPI, getSourceAPI } from "./newsApi";
import axios from "axios"

export const NewsContext = createContext();

const context = ({children}) =>{
    const [news, setNews] = useState([]);
    const [index, setIndex] = useState(0);
    const [category, setCategory] = useState("general");
    const [source, setSource] = useState();
    const [darkTheme, setDarkTheme] = useState(true);

    const fetchNews = async(reset= category) => {
        try {
            const {data} = await axios.get(getNewsAPI(reset));
            setNews(data);
            setIndex(1);
        } catch (error) {
            console.log(error)
        }
        
    }

    const fetchNewsFromSource = async() =>{
        try {
            const {data} = await axios.get(getSourceAPI(source));
            setNews(data);
            setIndex(1);
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchNews()
    }, [category])

    useEffect(() => {
        fetchNewsFromSource()
    }, [source])

    return(
        <NewsContext.Provider value={{darkTheme, setDarkTheme, news, index, setIndex, fetchNews, category, setCategory, setSource}}>{children}</NewsContext.Provider>
    )
}

export default context