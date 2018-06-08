import React from 'react';
import { Col, PageHeader, Panel } from 'react-bootstrap';

export default () => (
  <Col xs={6} xsOffset={3}>
    <div className="text-center">
      <PageHeader> About </PageHeader>
      <div className="d-flex justify-content-center">
        <Panel>
          <Panel.Body>
            <a href='https://github.com/Aziaev/thatcalendar.git'>Github link</a>
          </Panel.Body>
        </Panel>
      </div>
    </div>
  </Col>
)
