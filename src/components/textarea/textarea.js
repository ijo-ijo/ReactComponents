import React from 'react';
import PropTypes from 'prop-types';
require("./textarea.less");

// import './textarea.css';
export default class Textarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focused:false,
            mouseover:false,
            text:'',
            expanded:false
        }

        this.setFocus = this.setFocus.bind(this);
        this.setBlur = this.setBlur.bind(this);
        this.setText = this.setText.bind(this);
        this.clearText = this.clearText.bind(this);
        this.setMouseover = this.setMouseover.bind(this);
        this.setMouseout = this.setMouseout.bind(this);
        this.setToggle = this.setToggle.bind(this);
    }

    // componentWillMount() {
    // }

    // componentDidMount() {
    // }

    setFocus() {
        this.setState({ focused: true });
    }

    setBlur() {
        this.setState({ focused: false });
    }

    setText(e){
        this.setState({ text: e.target.value });
    }

    clearText(){
        this.setState({ text: '' });
    }

    setMouseover(){
        this.setState({ mouseover: true });
    }

    setMouseout(){
        this.setState({ mouseover: false });
    }

    setToggle(){
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        let deafaultClassName = 'textarea';
        let containerClassName = ['textarea-container'];
        if (this.props.className) {
            containerClassName.push(this.state.className);
        }
        if (!this.state.text) {
            containerClassName.push('textarea-empty');
        }
        if (this.props.readOnly) {
            containerClassName.push('textarea-readonly');
        }
        if (this.props.disabled) {
            containerClassName.push('textarea-disabled');
        }
        if (this.state.mouseover) {
            containerClassName.push('textarea-mouseover');
        }else{
            containerClassName.push('textarea-mouseout');
        }
        if (this.state.focused) {
            containerClassName.push('textarea-focus');
        }else{
            containerClassName.push('textarea-blur');
        }
        if (this.state.expanded) {
            containerClassName.push('textarea-expanded');
        }else{
            containerClassName.push('textarea-collapsed');
        }

        return (
            <div className={containerClassName.join(' ')}>
                <input type="text" style={{display:(this.state.expanded?'none':'block')}} name="" className={'textarea-input textarea-input-'+(this.props.className||deafaultClassName)} placeholder={this.props.placeholder} readOnly={this.props.readonly} disabled={this.props.disabled} onChange={ this.setText } value={ this.state.text } onMouseOver={this.setMouseover} onMouseOut={this.setMouseout} onFocus={this.setFocus} onBlur={this.setBlur} tabIndex="0" />
                <textarea name="" style={{display:(!this.state.expanded?'none':'block')}} className={'textarea-textarea textarea-textarea-'+(this.props.className||deafaultClassName)} placeholder={this.props.placeholder} readOnly={this.props.readonly} disabled={this.props.disabled} onChange={ this.setText } value={ this.state.text } onMouseOver={this.setMouseover} onMouseOut={this.setMouseout} onFocus={this.setFocus} onBlur={this.setBlur} tabIndex="0"></textarea>
                <button style={{display:(!this.state.text?'none':'inline-block')}} type="button" className="textarea-button textarea-button-icon textarea-button-icon-eraser" title="Erase" onClick={ this.clearText } tabIndex="0">
                    <i className="fa fa-eraser" aria-hidden="true"></i>
                </button>
                <button type="button" className="textarea-button textarea-button-icon textarea-button-icon-toggler" title="Toggle" onClick={ this.setToggle } tabIndex="0">
                    <i className="fa fa-align-justify" aria-hidden="true"></i>
                </button>
                <span style={{display:(this.state.expanded?'none':'inline-block')}} className="textarea-state-icon textarea-textarea-expanded" title="Collapsed">
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                </span>
                <span style={{display:(!this.state.expanded?'none':'inline-block')}} className="textarea-state-icon textarea-textarea-collapsed" title="Expanded">
                    <i className="fa fa-caret-up" aria-hidden="true"></i>
                </span>
            </div>
        );
    }
}

Textarea.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    readonly: PropTypes.bool,
    disabled: PropTypes.bool
};