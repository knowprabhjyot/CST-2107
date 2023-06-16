import { useContext } from 'react'
import UserContext from '../../context/UserContext'
import RepoCard from '../RepoCard';
import { Box } from '@mui/material';

export default function RepoList() {
    const data = useContext(UserContext);
    console.log(data, 'val')

    const renderUI = () => {
        return data.map((repo, index) => (
           <RepoCard key={index} repo={repo} />
        ))
    }

    return (
        <div style={{ display: 'grid', gap: 8, gridTemplateColumns: 'auto auto auto'}}>
            {renderUI()}
        </div>
    )

}
