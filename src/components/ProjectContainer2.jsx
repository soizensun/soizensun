import React from 'react'
import '../css/ProjectContainer.css'
import { RiGitRepositoryLine } from "react-icons/ri";
import StackContainerSmall from './StackContainerSmall'
import { ucarStack } from '../util/ProjectStack/ucarStack';
import { pplottoStack } from '../util/ProjectStack/pplottoStack'
import { greenPayStack } from '../util/ProjectStack/greenPayStack'
import { petTrackStack } from '../util/ProjectStack/petTrackStack'
import { soizensunStack } from '../util/ProjectStack/soizensunStack'

export default function ProjectContainer2(props) {
    return (
        <div className="block">
            <div className="card">
                <h3 className="title"><RiGitRepositoryLine/> PetTrack</h3>
                <div className="tag">Full stack project</div>
                <div className="content">
                    Website to manage the pet. Such as food medicine weight
                </div>
                <StackContainerSmall renderLogo={petTrackStack}/>
                <div className="github">
                    <a href="https://github.com/soizensun/pet-track" target="_blank" rel="noreferrer">
                        Github repository ▶
                    </a>
                </div>
            </div>
            <div className="card">
                <h3 className="title"><RiGitRepositoryLine/> soizensun</h3>
                <div className="tag">This project</div>
                <div className="content">
                    My portfolio website. The website you are exploring now.
                </div>
                <StackContainerSmall renderLogo={soizensunStack}/>
                <div className="github">
                    <a href="https://github.com/soizensun/soizensun" target="_blank" rel="noreferrer">
                        Github repository ▶
                    </a>
                </div>
            </div>
        </div>
    )
}

