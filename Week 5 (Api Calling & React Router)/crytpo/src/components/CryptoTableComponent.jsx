import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link } from 'react-router-dom';

const CryptoTableComponent = ({ data }) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="Crypto Table">
                <TableHead>
                    <TableRow>
                        <TableCell>Coin</TableCell>
                        <TableCell>Symbol</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Price Change</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        data.map((cryptoCurrency) => {
                            return <TableRow>
                                <TableCell>
                                    <Box display={'flex'} alignItems={'center'} gap={8}>
                                        <img width={40} src={cryptoCurrency.image} />

                                        {/* Behind the scene it uses an anchor tag only */}
                                        <Link to={`/crypto/${cryptoCurrency.id}`}>
                                            {cryptoCurrency.name}
                                        </Link>
                                    </Box>
                                </TableCell>
                                <TableCell>{cryptoCurrency.symbol}</TableCell>
                                <TableCell>{cryptoCurrency.current_price}</TableCell>
                                <TableCell>
                                    <Box display={'flex'} alignItems={'center'} gap={2}>
                                        {
                                            cryptoCurrency.price_change_percentage_24h > 0 ? <ArrowUpwardIcon color='primary' /> : <ArrowDownwardIcon color='error' />
                                        }
                                        {cryptoCurrency.price_change_percentage_24h.toFixed(2)}%
                                    </Box>
                                </TableCell>
                            </TableRow>
                        })
                    }

                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CryptoTableComponent;