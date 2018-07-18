import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Grid } from 'semantic-ui-react';

import { DateSelect, DateRangeSelect } from './utils';
import * as Actions from './actions';

class NamedDateSelect extends React.Component {
    render(){
        const title = this.props.date[0];
        const date = this.props.date[1][0];

        return (
            <Grid.Row>
              <Grid.Column width={12}>
                {title}
                <DateSelect date={date}
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
    date: state[props.block][props.idx],
});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(NamedDateSelect);