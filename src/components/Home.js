import React, { Component } from 'react';
import { Button, ButtonGroup, Col, PageHeader, Panel, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { decrement, decrementAsync, increment, incrementAsync } from '../modules/counter';

class Home extends Component {

  elementToggle(value) {
    console.log(value);
  }

  render() {
    const { count, increment, incrementAsync, isIncrementing, decrement, decrementAsync, isDecrementing, changePage } = this.props;
    return (
      <Col xs={6} xsOffset={3}>
        <div className="text-center">
          <PageHeader> Push buttons and open values </PageHeader>
          <div className="d-flex justify-content-center">
            <Panel>
              <Panel.Body>
                <ButtonGroup>
                  <Button style={{ width: '100px' }} onClick={() => this.elementToggle('DAY')}>Day</Button>
                  <Button style={{ width: '100px' }} onClick={() => this.elementToggle('MONTH')}>Month</Button>
                  <Button style={{ width: '100px' }} onClick={() => this.elementToggle('YEAR')}>Year</Button>
                </ButtonGroup>
                <Table responsive>
                  <thead>
                  <tr>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Table cell</td>
                  </tr>
                  </tbody>
                </Table>
                <ButtonGroup>
                  <Button
                    bsStyle="danger"
                    style={{ width: '300px' }}
                    onClick={() => this.elementToggle('RESET')}>
                    Reset
                  </Button>
                </ButtonGroup>
              </Panel.Body>
            </Panel>
          </div>
          <div>
            <p>Count: {count}</p>

            <p>
              <Button onClick={increment} disabled={isIncrementing}>Increment</Button>
              <Button onClick={incrementAsync} disabled={isIncrementing}>Increment Async</Button>
            </p>

            <p>
              <Button onClick={decrement} disabled={isDecrementing}>Decrementing</Button>
              <Button onClick={decrementAsync} disabled={isDecrementing}>Decrement Async</Button>
            </p>

            <p><Button onClick={() => changePage()}>Go to about page via redux</Button></p>
          </div>
        </div>
      </Col>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleElement,
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about')
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
