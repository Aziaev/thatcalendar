import React, { Component } from 'react';
import { Button, ButtonGroup, Col, PageHeader, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import Dates from '../components/Dates';
import { FIELDS } from '../constants';
import { toogleCalendarField } from '../modules/toggler';
import { resetButton, toggleButton } from '../style';

class Home extends Component {

  render() {
    const { toogleCalendarField } = this.props;
    return (
      <Col xs={12}>
        <div className="text-center">
          <PageHeader> Push buttons and open values </PageHeader>
          <Panel>
            <Panel.Body>
              <ButtonGroup>
                {
                  FIELDS.map((item, index) =>
                    <Button active={!!this.props[item.toLowerCase()]} key={index} style={toggleButton} onClick={() => toogleCalendarField(item)}>
                      {item}
                    </Button>)
                }
              </ButtonGroup>
              <Dates
                {...this.props}
              />
              <Button
                bsStyle="danger"
                style={resetButton}
                onClick={toogleCalendarField}>
                Clear
              </Button>
            </Panel.Body>
          </Panel>
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
