import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Grid } from 'semantic-ui-react';

import { DateRangeSelect } from './utils';
import * as Actions from './actions';

class NamedDateRangeSelect extends React.Component {
    render(){
        const title = this.props.date[0];
        const dates = this.props.date[1];

        return (
            <Grid.Row>
              <Grid.Column width={12}>
                {title}
                <DateRangeSelect dates={dates}
                                 onChange={(d) => {
                                     this.props.actions.setDates(this.props.block,
                                                                 this.props.idx,
                                                                 title, d)
                  }} />
              </Grid.Column>
            </Grid.Row>
        );
    }
}

const mapStateToProps = (state, props) => ({
    date: state.main[props.block][props.idx],
});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(NamedDateRangeSelect);
