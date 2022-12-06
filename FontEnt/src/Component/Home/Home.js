import React from 'react';
import Carosal from './Carosal';
import HelpLine from './HelpLine';
import SecondService from './Section/SecondService';
import Service from './Section/Service';


const Home = () => {
    return (
        <div>
            <Carosal></Carosal>
            <Service></Service>
            <SecondService></SecondService>
            <HelpLine></HelpLine>
        </div>
    );
};

export default Home;