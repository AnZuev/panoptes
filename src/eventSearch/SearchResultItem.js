import React, {Component} from 'react';
import './index.css';
import SearchBlock from "./SearchBlock.js"

class SearchResultItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            chosen: false
        };
        this.choose = this.choose.bind(this);
        this.unchoose = this.unchoose.bind(this);

    }


    choose() {
        if(this.state.chosen){
            window.eventSearch.setActive(null);
            this.setState({
                chosen: false
            });
        }else{
            window.eventSearch.setActive(this);
            this.setState({
                chosen: true
            });
        }

    }

    unchoose(){
        this.setState({
            chosen: false
        })
    }
    render() {
        let date = `${this.props.date.toLocaleDateString()}`.split("/").join(".");
        let img = <img src="/imgs/eventTriangle.svg" alt=""/>;
        let isChosen = "eventSearch__resultItem__chosen";
        if(!this.state.chosen){
            isChosen = "";
        }

        return (
            <div className={`eventSearch__resultItem  ${isChosen}`} onClick={this.choose}>
                <p>
                    <span className={`eventSearch__resultItem__title`}>{this.props.title}</span>
                    <span
                        className="eventSearch__resultItem__itemId darkBlueText">{this.props.type}-{this.props.id}
                    </span>
                </p>
                <div className="blockTenPXHeight"></div>
                <p>
                    <span className="eventSearch__resultItem__numberOfFlights">{this.props.numberOfFlights} flights</span>
                    <span className="eventSearch__resultItem__date">{date}</span>
                </p>
            </div>
        );
    }
}

export default SearchResultItem;
