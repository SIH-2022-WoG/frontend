import React from "react";
import { format } from 'date-fns';
// import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';

export default function SearchCollegeTable() {
  return(
    <Card>
    {/* <CardHeader /> */}
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                Publications
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {props.data.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                  {order.customer.name}
                </TableCell>
                <TableCell>
                  {order.ref}
                </TableCell>
                <TableCell>
                  {format(order.createdAt, 'dd/MM/yyyy')}
                </TableCell>
                <TableCell>

                </TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
  </Card>
  )
}
