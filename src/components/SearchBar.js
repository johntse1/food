import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {EvilIcons} from '@expo/vector-icons'

//pass the callback from this child component to the search screen, so the search screen can actually render in the other component

const SearchBar =({term, onTermChange})=>{
    return (
        <View style={styles.backgroundStyle}>
            <EvilIcons name='search' color='black' style={styles.iconStyle}/>
            <TextInput 
                placeholder='Search' 
                style={styles.inputStyle}
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
            ></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop: 10,
        backgroundColor: '#E9F2E5',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 10,
        flexDirection: 'row',
    },
    inputStyle:{
        flex:1,
        fontSize: 18
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});
export default SearchBar;