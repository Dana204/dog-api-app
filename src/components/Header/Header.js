// import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './Header.css';

const Header = (props) => {
  const [dog, setDog] = useState([]);

  useEffect(() => {
    const fetchRandomDog = async () => {
      const response = await fetch('https://dog.ceo/api/breed/shihtzu/images');
      const responseData = await response.json();
      setDog(responseData.message);
    }

    fetchRandomDog();
  }, [])
    
  const randomDog = dog.slice(0,1).map((dogsrc , index) =>
    <img src={dogsrc} alt='poodle' className='header__profile-img' />
  );

  const newNameHandler = (enteredNameData) => {
    const nameData = {
      ...enteredNameData
    };
    props.onEditName(nameData);
  }


  return (
    <header>
      {randomDog}
        {/* <img src={} alt='poodle' className='header__profile-img' /> */}
        <div className='header__info'>
            <h1>{props.pname}</h1>
            <p>The best dog walks are in the mornings along the beach.<br /> I just love the sand beneath my paws.</p>
        </div>
        <Dropdown onSaveNewName={newNameHandler} />
    </header>
  )
}

export default Header