import React from 'react'
import { CategoryList } from '../constants'
import { Chip } from '@mui/material'
import './Category.css';

export default function Category(props) {
    return CategoryList.map((category, index) => <Chip onClick={() => props.addCategory(category)} className='chip' key={index} label={category} variant="outlined" />)
}
