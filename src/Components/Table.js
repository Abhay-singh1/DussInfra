import {React, useState}  from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import rows from '../Data/Data.json'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Table.css'


const MainTable = () => {
  const [open,setOpen] = useState('Pending');

  const styles ={
    backgroundColor: open ? 'red': 'green'
  }
  let sum =0;
  let sum1 = 0;
  let n1=[];
  let n2 = [];
  rows.map((row) => {
        n1.push(parseInt(row.payableAmount))
       n2.push(parseInt(row.bookingAmount))
  })
  
  for (const value of n1){
    sum += value
  }
  for (const value of n2){
    sum1 += value
  }
  console.log(sum,sum1)



  return (<>
    <div class='Header'>
        <h1>Budget Table</h1>
        
        <div class="budget-section">
            <h4>Total Amount: {sum} &nbsp; </h4>
            <h4>Total Invoice: {sum1} &nbsp; </h4>
        </div>
        
    </div>
    <TableContainer >
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="right">Id / Serial Number</TableCell>
            <TableCell align="right">Company Name</TableCell>
            <TableCell align="right">Quantity of Resource Alias booked </TableCell>
            <TableCell align="right">Payment Status </TableCell>
            <TableCell align="right">Payable Amount </TableCell>
            <TableCell align="right">Due / Pending Amount </TableCell>
            <TableCell align="right">Add Amount </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            
            
            <TableRow
              key={row.id}
            >
              
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.companyName}</TableCell>
              <TableCell align="right">{row.resourceAlias.length}</TableCell>
              <TableCell align="right" onChange={() =>{ setOpen(row.paymentStatus) }}
                style={styles}> {row.paymentStatus}
              </TableCell>
              <TableCell align="right">{row.payableAmount}</TableCell>
              <TableCell align="right">{row.bookingAmount}</TableCell>
              <TableCell sx={{display: 'flex'}}align="right">
              <Button>
                  <AddCircleRoundedIcon />
              </Button>
              <TextField
                sx={{width:'15ch'}}
                label="Amount"
                size="small"
              />
              </TableCell>
              
            </TableRow>
           ) 
            )} 
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default MainTable