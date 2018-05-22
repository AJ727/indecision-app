import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    };
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => 
                optionToRemove !== option
            )
        }));
    };
    handleCloseWindow = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }
    handlePick = () => {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };
    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add item';
        }

        else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((prevState) => ({
                options: prevState.options.concat(option)
        }))
    };
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            
            if(options) {
                this.setState(() => ({ options }));
            }
        } catch(e) {
            // Do nothing
        }
    };
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    };
    componentWillUnmount() {
        console.log('unmount!')
    };
    render() {
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
                <OptionModal 
                    selectedOption = {this.state.selectedOption}
                    handleCloseWindow = {this.handleCloseWindow}
                />
            </div>
        )
    };
}


