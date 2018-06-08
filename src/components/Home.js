import React, { Component } from 'react';
import { Button, ButtonGroup, Col, PageHeader, Panel, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { toogleCalendarField } from '../modules/toggler';

class Home extends Component {

  render() {
    console.log(this.props);
    const { toogleCalendarField, day, month, year } = this.props;
    return (
      <Col xs={6} xsOffset={3}>
        <div className="text-center">
          <PageHeader> Push buttons and open values </PageHeader>
          <div className="d-flex justify-content-center">
            <Panel>
              <Panel.Body>
                <ButtonGroup>
                  <Button style={{ width: '100px' }} onClick={() => toogleCalendarField('DAY')}>Day</Button>
                  <Button style={{ width: '100px' }} onClick={() => toogleCalendarField('MONTH')}>Month</Button>
                  <Button style={{ width: '100px' }} onClick={() => toogleCalendarField('YEAR')}>Year</Button>
                </ButtonGroup>
                <Table responsive>
                  <thead>
                  <tr>
                    <th/>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td><h1>{day ? day : '__'} . {month ? month : '__'} . {year ? year : '____'}</h1></td>
                  </tr>
                  </tbody>
                </Table>
                <ButtonGroup>
                  <Button
                    bsStyle="danger"
                    style={{ width: '300px' }}
                    onClick={toogleCalendarField}>
                    Reset
                  </Button>
                </ButtonGroup>
              </Panel.Body>
            </Panel>
          </div>
        </div>
      </Col>
    );
  }
}

const mapStateToProps = state => ({
  day: state.toggler.day,
  month: state.toggler.month,
  year: state.toggler.year
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toogleCalendarField,
  changePage: () => push('/about')
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
