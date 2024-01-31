import React from 'react'

import AdminNav from './AdminNav';

import '../assets/css/AdminHome.css'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import '../App.css'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';


function AdminHome() {
    const data = [
        {
        //   name: 'Monday',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
        //   name: 'Tuesday',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
        //   name: 'Wednesday',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
        //   name: 'Thursday',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
        //   name: 'Friday',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
        //   name: 'Saturday',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        // {
        //   name: 'Page G',
        //   uv: 3490,
        //   pv: 4300,
        //   amt: 2100,
        // },
      ];
    return ( 
        <>
        <AdminNav/>
        <main className='main-container ml-64  bg-gray-900 h-screen'>
        <div className='main-title'>
            <h3><span className='text-orange-600'>WELCOME </span>Admin</h3>
        </div>

        <div className='main-cards '>
            <div className='card6 ml-20 w-38'>
                <div className='card-inner'>
                    <h3>Total Loans</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>45</h1>
            </div>
            <div className='card6  ml-20 w-38'>
                <div className='card-inner '>
                    <h3>Loan Approval Pending</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card ml-20 w-38'>
                <div className='card-inner'>
                    <h3 className='txt'>Loans Approved</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1 className='txt'>33</h1>
            </div>
            {/* <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div> */}
        </div>

        
    </main>
        </>
     );
}

export default AdminHome;