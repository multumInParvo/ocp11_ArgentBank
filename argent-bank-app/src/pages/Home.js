// Home.js

import React from 'react'
import Banner from '../components/Banner'
import '../styles/Home.css'
import FeaturesData from '../data/FeaturesData.json'
import FeatureItem from '../components/FeatureItem'
import imgChat from '../img/icon-chat.png'
import imgMoney from '../img/icon-money.png'
import imgSecurity from '../img/icon-security.png'

function Home() {

    const IconImage = {
        "icon-chat.png": imgChat,
        "icon-money.png": imgMoney,
        "icon-security.png": imgSecurity
    }

    return (
        <main>
            <Banner />
            <section className='features'>
                {FeaturesData.map((data) => (
                <FeatureItem
                    key={data.id}
                    image={IconImage[data.image]}
                    imageAlt={data.imageAlt}
                    title={data.title}
                    description={data.description}
                />
            ))}
            </section>
        </main>
    )
}

export default Home