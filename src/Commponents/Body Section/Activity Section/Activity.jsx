import React from 'react'
import './activity.css'

//  Imported Icons ===================
import {BsArrowRightShort} from 'react-icons/bs'

// Imported Images =============
import img from '../../../Assets/user 2.jpg'
import img2 from '../../../Assets/user 3.jpg'
import img3 from '../../../Assets/user 4.jpg'
import img4 from '../../../Assets/user 5.jpg'
import img5 from '../../../Assets/user 7.jpg'

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={img} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Martin Ol</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            1 min ago
          </div>

        </div>
        <div className="singleCustomer flex">
          <img src={img2} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Zidan Yaku</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            3 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={img3} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Fin Iland</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            5 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={img4} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Elbert Kuyo</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            12 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={img5} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Elbert Kuyo</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            12 min ago
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity
