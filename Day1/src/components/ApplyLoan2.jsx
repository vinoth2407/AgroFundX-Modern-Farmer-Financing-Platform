import React from 'react';
import '../assets/css/Apply_Loan1.css'
import { useNavigate  } from 'react-router';
import Footer from './Footer';


const Apply_Loan2 = () => {
    const [apply, setApply] = React.useState(false);
  const navigate =useNavigate();
    const hello =() =>{
        console.log(apply)
        navigate('/Apply_Loan')
    }
  return (
    <>
    <div className='body22'>
       {!apply ?( 
           <div className="container99">
      <div className="title1">LOAN DETAILS</div>
      <form action="#" onSubmit={()=>{setApply(true)}}>
        <div className="user__details">
          <div className="input__box" style = {{gap:"19px"}}>
            <span className="details">select type documents</span>
            <select className='input___box' required>
             <option value="" disabled>please pic a type</option>
             <option value="Veg">Adhar card</option>
             <option value="Non Veg">pan card</option>
               </select>
          </div>
          <div className="input__box" style = {{gap:"19px"}}> 
          <span className="details">Enter files: </span>
          <input type="file" placeholder="Choose a file" required/>
          </div>
        </div>
        <div >
            <button className="button33">submit</button>
        </div>
        <div className='vasa1'>
          <button  className='button-13' onClick={hello}>1</button>
           <button className='button-13'>2</button>
        </div>
      </form>
    {/* ):(<h1>hello</h1>)} */}
    </div>
    ):(
        <div className="container99">
            <div className="title1">LOAN APPLIED SUCCESSFULLY</div>
            <div className="title1">your track id : 12345678</div>
            <div>
            <button className='button34'>track status</button>
            </div>
        </div>
    )}
    </div>
    <Footer/>
    </>
  );
};

export default Apply_Loan2;