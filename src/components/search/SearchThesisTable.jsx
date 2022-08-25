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

const thesisData = [
  {
    "date": "11/05/2022",
    "title": "Lorem ipsum dolor sit amet, consect Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "dept": "CSE",
    "researcher": "Mr John Smith",
    "guide": "Mr Amit Pandey",
  },
]

export default function SearchThesisTable() {
  return(
    <Card>
    {/* <CardHeader /> */}
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sortDirection="desc">
                Date
              </TableCell>
              <TableCell>
                Thesis Title
              </TableCell>
              <TableCell>
                Department
              </TableCell>
              <TableCell>
                Researcher
              </TableCell>
              <TableCell>
                Guide
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {thesisData.map((data) => (
              <TableRow
                hover
                key={data.date}
              >
                <TableCell>
                  {data.date}
                </TableCell>
                <TableCell>
                  {data.title}
                </TableCell>
                {/* <TableCell>
                  {format(data.date, 'dd/MM/yyyy')}
                </TableCell> */}
                <TableCell>
                  {data.dept}
                </TableCell>
                <TableCell>
                  {data.dept}
                </TableCell>
                <TableCell>
                  {data.guide}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
  </Card>
  )
}
