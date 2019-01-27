import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const ip = "http://dateapi.sabrinaherrero.com";

export default class Pictures extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tileData: [],
            loaded: false,
        };
    }

    componentDidMount() {
        let dates = [];
        fetch(`${ip}/image?results_per_page=99`).then(results => {
            return results.json();
        })
            .then(data => {
                    // let numObjects = data.num_results;
                    let objects = data.objects;
                    debugger;
                    for (let i = 0; i < Object.keys(objects).length; i++) {
                        // debugger;
                        dates.push(objects[i]);
                    }
                    this.setState({
                        tileData: dates,
                        loaded: true
                    })
                }
            )
    }

    handleDeleteClick(e) {
        debugger;

        // alert('are you sure you want to delete');
        fetch(`${ip}/date/${e.target.value}`, {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
        })
            .then(data => {
                console.log(data);
            });
        console.log('Click happened');
    }


    // componentDidUpdate(prevProps, prevState, snapshot) {
    // }

    render() {
        return (
            <Row>
                <Col>
                    <h2 className={'text-center '}>Pictures</h2>

                    <br/>
                    {this.state.loaded && <GridList cellHeight={160} cols={3}>
                        {this.state.tileData.map(tile => (
                            <GridListTile key={tile.image_id} cols={tile.cols || 1}>
                                <img src={tile.link} alt={tile.description}/>
                            </GridListTile>
                        ))}
                    </GridList>
                    }
                </Col>
            </Row>
        );
    }

}

