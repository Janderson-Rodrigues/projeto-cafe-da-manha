import React, {useStade} from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './Menu.css'

import coffee1 from '../assets/image/graos.jpg';
import coffee2 from '..assets/image/croissant.jpg';
import coffee3 from '../assets/image/cha.jpg';
import coffee4 from '..assets/image/milkshake.jpg';
import coffee5 from ''

function Menu() {
    const [currentImage, setCurrentImage] =useStade(coffee1);

    return(
        <div className="menu-container">
            <div className='menu-header'>
                <h1>Café da manha</h1>
            </div>

            <div className="menu-content">
                <div className="menu-image">
                    <img src={currentImage} alt="Menu" />
                </div>

                <div className="menu-tabs">
                    <Tabs
                        defaultActiveKey="cafes"
                        id="style-menu-tabs"
                        className="mb-3"
                        onSelect={(key) => {
                            switch (key) {
                                case 'cafe':
                                    setCurrentImage(coffee1);
                                    break;
                                case 'sobremesa':
                                    setCurrentImage(coffee2);
                                    break;
                                case 'especiais':
                                    setCurrentImage(coffee3);
                                    break;
                                case 'bebidas-geladas':
                                    setCurrentImage(coffee4);
                                    break;
                                case 'chas':
                                    setCurrentImage(coffee5)
                            }
                        }}
                    >
                    </Tabs>                
                </div>
            </div>

        </div>
    )
}