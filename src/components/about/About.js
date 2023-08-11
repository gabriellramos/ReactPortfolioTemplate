import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p> 
                {info.bio}
            </p>
        </>;
    }

    return (
        
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <h2>Em desenvolvimento!</h2><br></br>
            {aboutMeText()}
        </Box>
    )
}