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
  let sum, sum1;
  rows.map((row) => {
      let n1= row.payableAmount
      let n2= row.bookingAmount
      let num =parseInt(n1)
      let num1 =parseInt(n2)
     sum += n1
     sum1 += n2
  })
  return (<>
    <div class='Header'>
        <h1>Budget Table</h1>
        
        <div class="budget-section">
            <h4>Total Amount: </h4>
            <h4>Total Invoice: </h4>
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