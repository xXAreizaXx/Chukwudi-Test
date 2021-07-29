import { getProducts, getCategory } from '../services/index'
import ArrowRigth from '../components/Icons/ArrowRigth'
import ArrowSplit from '../components/Icons/ArrowSplit'
import Avatar from '../components/Icons/Avatar'
import Clock from '../components/Icons/Clock'
import Collapse from '../components/Icons/Collapse'
import HamburguerWithColor from '../components/Icons/HamburguerWithColor'
import Head from 'next/head'
import Image from 'next/image'
import Party from '../assets/images/d.png'
import Publish from '../assets/images/headerimage.png'
import React, { useState, useEffect } from 'react'
import Search from '../components/Icons/Search'
import Star from '../components/Icons/Star'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])


  useEffect(() => {
    getProducts().then(products => setProducts(products))
    getCategory().then(category => setCategory(category))

  }, [])




  return (
    <>
      <Head>
        <title>Chukwudi</title>
        <meta name="description" content="Tecnic test to IMAGINAMOS S.A.S" />
        <link rel="icon" href="/store.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <Collapse />
            <h2>Chukwudi</h2>
            <div className={styles.inputSearch}>
              <Search />
              <input type="search" name="Search" id={styles.search} placeholder="Search" />
            </div>
          </header>

          <div className={styles.publisher}>
            <Image className={styles.imgPublish} src={Publish} alt="Publish" width={250} height={250} />
            <div className={styles.prom}>
              <h2>
                $0 delivery for 30 days!
                <Image src={Party} alt="Party" width={30} height={30} />
              </h2>
              <p>$0 delivery free for orders over $10 for 30 days</p>
              <a href="">Learn more<ArrowRigth /></a>
            </div>
          </div>

          <div className={styles.category}>
            <div className={styles.navCategory}>
              <h1>Restaurants <HamburguerWithColor /></h1>
              <div className={styles.delivery}>
                <label><Clock fill="#FFF" with="15" height="15" />Delivery: </label>
                <select>
                  <option defaultValue>Now</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className={styles.menu}>
              <ol className={styles.listMenu}>
                {
                  category.map(({ id, icon, name }) =>
                    <li key={id}>
                      <a href="">
                        <button>
                          <Image src={icon} alt={name} width={30} height={30} />
                        </button>
                        {name}
                      </a>
                    </li>
                  )
                }
              </ol>
              <button className={styles.arrowSplit}><ArrowSplit /></button>
            </div>
          </div>

          <div className={styles.products}>
            {
              products.map(({ id, name, qualification, time, price, image }) =>
                <div className={styles.cardProduct} key={id}>
                  <div className={styles.imageBox}>
                    <Image className={styles.imageCard} src={image} alt={name} width={250} height={150} />
                    <div className={styles.durations}>{time}</div>
                  </div>
                  <h3>{name}</h3>
                  <div className={styles.score}>
                    <button><Star />{qualification}</button>
                    <p>$ {price}</p>
                  </div>
                </div>
              )
            }
          </div>
        </div>

        <div className={styles.myOrder}>
          <header className={styles.orderHeader}>
            <Avatar />
            <p className={styles.numberOfProducts}>3</p>
          </header>
          <h1 className={styles.titleMyOrder}>My 😎 <br />Order</h1>
          <div className={styles.userInfo}>
            <div className={styles.directions}>
              <p>625 St Marks Ave</p>
              <a href="" className={styles.edit}>Edit</a>
            </div>
            <div className={styles.deliveryTime}>
              <p><Clock fill="#FED748" with="25" height="25" />35 min</p>
              <a href="" className={styles.chooseTime}>Choose time</a>
            </div>
          </div>
          <div className={styles.products}>

          </div>
          <h1>Total: </h1>
          <div>
            <p>Persons</p>
            <input type="number" name="" id="" />
            <button>Checkout &rarr;</button>
          </div>


        </div>
      </div >
    </>


  )
}
