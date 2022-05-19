
import './Home.css'
import { Container, Table } from 'react-bootstrap'
import {BsFillArrowUpRightCircleFill} from 'react-icons/bs'
import Graph from './Images/graph 1.webp'
import Visa from './Images/visa-logo.svg'
import paypal from './Images/paypal logo.jpg'
import youtube from './Images/youtube logo.jpg'
import Amazon from './Images/Amazon-logo2.jpg'
import Dashboard from '../../../Component/SideNav/Dashboard'
import Header from '../../../Component/Header/Header'

const Home = () => {

  const Transactions = [
    {image:paypal, name:'Paypal', details:'Shopping', amount:'$1,440'},
    {image:youtube, name:'Youtube', details:'Subscription', amount:'$440'},
    {image:Amazon, name:'Amazon', details:'Shopping', amount:'$1,240'}
  ]
  console.log(Transactions)

  return (
    
    <div>
      <Header />
      <div className='parent-container'>
      <Dashboard />
      
      <Container>
          <div  className='row-div'>
            <div className='stat-div'>
              <h4 >Statistics</h4>
              <div className='graph-container'>
                <img src={Graph} alt='graph'/>
              </div>
              
            </div>
            <div className ="card-div">
              <h4>Card</h4>
              <div className='cards'>
                <div className='visa-container'>
                  <img src={Visa} alt='visa logo'/>
                </div>
                <p>Total Balance</p>
                <h3>$24,000</h3>
              </div>
            </div>
          </div>
        
        
        {/* testing out tables */}
        <div className='table-div'>
          <div className='table-header'>
            <h4>Last Transactions</h4>
            <h6>See more <BsFillArrowUpRightCircleFill /></h6>
          </div>
          <Table striped bordered>
            
            <thead></thead>
            <tbody>
              
              {
                Transactions ? Transactions.map((Transaction =>
                  <tr>
                    
                    <td>
                      <div className='logo-div'>
                        <img src={Transaction.image} className='logo' alt='transact'/>
                         <p>{Transaction.name}</p>
                      </div>
                    </td>
                    
                    <td style={{fontFamily:'cursive'}}>{Transaction.details}</td>
                    <td style={{fontFamily:'cursive'}}>{Transaction.amount}</td>
                  </tr>
                )):console.log('error dey guy')
              }
              
              
            </tbody>
          </Table>
        </div>

      </Container>
      </div>
     
    </div>
  )
}

export default Home