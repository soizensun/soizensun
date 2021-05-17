import React from 'react'
import '../css/ProjectContainer.css'
import { RiGitRepositoryLine } from "react-icons/ri";
import StackContainerSmall from './StackContainerSmall'
import { ucarStack } from '../util/ProjectStack/ucarStack';
import { pplottoStack } from '../util/ProjectStack/pplottoStack'
import { greenPayStack } from '../util/ProjectStack/greenPayStack'
import { petTrackStack } from '../util/ProjectStack/petTrackStack'

export default function ProjectContainer(props) {
    return (
        <div className="block">
            <div className="card">
                <h3 className="title"><RiGitRepositoryLine/> Product predict</h3>
                <div className="content">
                    Android application to predict Eucalyptus's product
                </div>
                <StackContainerSmall renderLogo={ucarStack} />
                <div className="github">
                    <a href="https://github.com/soizensun/productPredict_project" target="_blank">
                        Github repository ▶
                    </a>
                </div>
            </div>
            <div className="card">
                <h3 className="title"><RiGitRepositoryLine/> pplotto</h3>
                <div className="content">
                    Website for manage lotto group
                </div>
                <StackContainerSmall renderLogo={pplottoStack}/>
                <div className="github">
                    <a href="https://github.com/soizensun/pplotto" target="_blank">
                        Github repository ▶
                    </a>
                </div>
            </div>
            <div className="card">
                <h3 className="title"><RiGitRepositoryLine/> GreenPay</h3>
                <div className="content">
                    Greenpay E-commerce Application Platform for Social Responsibility 
                </div>
                <StackContainerSmall renderLogo={greenPayStack}/>
                <div className="github">
                    <a href="https://github.com/soizensun/GreenPay" target="_blank">
                        Github repository ▶
                    </a>
                </div>
            </div>
            <div className="card">
                <h3 className="title"><RiGitRepositoryLine/> petTrack</h3>
                <div className="content">
                    Website to manage the pet. Such as food medicine weightใ
                </div>
                <StackContainerSmall renderLogo={petTrackStack}/>
                <div className="github">
                    <a href="https://github.com/soizensun/pet-track" target="_blank">
                        Github repository ▶
                    </a>
                </div>
            </div>
        </div>
    )
}

