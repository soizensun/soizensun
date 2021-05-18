import React from 'react'
import '../css/ProjectContainer.css'
import { RiGitRepositoryLine } from "react-icons/ri";
import StackContainerSmall from './StackContainerSmall'
import { ucarStack } from '../util/ProjectStack/ucarStack';
import { pplottoStack } from '../util/ProjectStack/pplottoStack'
import { greenPayStack } from '../util/ProjectStack/greenPayStack'
import { petTrackStack } from '../util/ProjectStack/petTrackStack'
import { soizensunStack } from '../util/ProjectStack/soizensunStack'

export default function ProjectContainer(props) {
    return (
        <div className="block">
            <div className="card">
                <h3 className="title"><RiGitRepositoryLine/> Product predict</h3>
                <div className="tag">Fontend project</div>
                <div className="content">
                    Android application to predict Eucalyptus's product
                </div>
                <StackContainerSmall renderLogo={ucarStack} />
                <div className="github">
                    <a href="https://github.com/soizensun/productPredict_project" target="_blank" rel="noreferrer">
                        Github repository ▶
                    </a>
                </div>
            </div>
            <div className="card">
                <h3 className="title"><RiGitRepositoryLine/> pplotto</h3>
                <div className="tag">Fontend project</div>
                <div className="content">
                    Website for manage lotto's group
                </div>
                <StackContainerSmall renderLogo={pplottoStack}/>
                <div className="github">
                    <a href="https://github.com/soizensun/pplotto" target="_blank" rel="noreferrer">
                        Github repository ▶
                    </a>
                </div>
            </div>
            <div className="card">
                <h3 className="title"><RiGitRepositoryLine/> GreenPay</h3>
                <div className="tag">Full stack project</div>
                <div className="content">
                    Greenpay E-commerce Application Platform for Social Responsibility 
                </div>
                <StackContainerSmall renderLogo={greenPayStack}/>
                <div className="github">
                    <a href="https://github.com/soizensun/GreenPay" target="_blank" rel="noreferrer">
                        Github repository ▶
                    </a>
                </div>
            </div>
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

