/* eslint-disable react/prop-types */
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import React from 'react'

// eslint-disable-next-line react/prop-types
export default function RepoCard(props) {
    console.log(props, 'value')
    return (
        <Card>
            <CardActionArea>
                {/* <CardMedia
                    component="img"
                    height="140"
                    image={props.data?.owner.avatar_url}
                    alt="green iguana"
                /> */}
                <img src={props.repo?.owner.avatar_url} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.repo.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {props.repo.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
