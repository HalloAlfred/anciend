import React, { Component } from 'react'
import { QuestionWrapper } from '../components'


type ProjectType = {
    productType: string;
    productPrice: number;
    productTimeFrame: string;
}

interface IProps {

}

interface IState {
    activeProject: ProjectType;
}

export class EntrySlide extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            activeProject: { productType: "", productPrice: 0, productTimeFrame: "new Date()" }
        }
    }

    componentDidMount() {
        let savedProject = sessionStorage.getItem('saved_projects');
        let parsedProject = null

        if (savedProject)
            parsedProject = JSON.parse(savedProject)

        if (parsedProject && parsedProject !== this.state.activeProject) {
            this.setState({ activeProject: parsedProject })
        }
    }

    render() {
        return (
            <QuestionWrapper>
                <h1 style={{ color: "white" }}>New project</h1>
                <h1 style={{ color: "white" }}>Saved projects</h1>
                <h3>{this.state.activeProject.productType}</h3>
                <h3>{this.state.activeProject.productPrice}</h3>
                <h3>{this.state.activeProject.productTimeFrame}</h3>
            </QuestionWrapper>
        )
    }
}

export default EntrySlide