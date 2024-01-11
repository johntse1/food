import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';

//Pass a callback to the child component search bar

//In this case, the state of term is managed by searchscreen, and is then passed into the child component searchbar
const SearchScreen =()=>{
    const [term, setTerm] = useState('');

    return (
    <View>
        <SearchBar term={term} on TermChange={newTerm => setTerm(newTerm)}/>
        <Text>Search screen</Text>
    </View>
    );
}

const stlyes = StyleSheet.create({});
export default SearchScreen;
