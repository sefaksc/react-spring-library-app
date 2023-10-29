import React from 'react'
import ExploreBooks from './components/ExploreBooks';
import { Carousel } from './components/Carousel';
import Heros from './components/Heros';
import LibraryServices from './components/LibraryServices';

const HomePage = () => {
    return (
      <>
        <ExploreBooks />
        <Carousel />
        <Heros />
        <LibraryServices />
      </>
    );
}

export default HomePage