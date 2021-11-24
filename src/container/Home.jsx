import React from 'react';
import Kartunama from '../component/Kartunama';

class Home extends React.Component {
    render() {
        return (
            <Kartunama 
                nama=": Mohammad Sulthonul Adhim"
                lahir=": Gresik, 02 Mei 1996"
                status=": Belum Menikah"
                hobi=": Membaca"
                />
        )
    }
}

export default Home;