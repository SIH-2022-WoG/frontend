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
import {Link} from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from './Severitypill';

export const Submissions = ({viewAll=true, ...props}) => (
  <Card {...props}>
    <CardHeader title={props.title}/>
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Thesis title
              </TableCell>
              <TableCell>
                Guide
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((order) => (
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
                  <SeverityPill
                    color={(order.status === 'approved' && 'success')
                    || (order.status === 'rejected' && 'error')
                    || 'warning'}
                  >
                    {order.status}
                  </SeverityPill>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    {viewAll && (
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2,
        "&>a":{textDecoration: 'none'}
      }}
    >
      <Link to={"/theses"}>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Link>
    </Box>
    )}
  </Card>
);
