import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import { deleteMerchant, pageMerchants, getMerchants } from '../actions/merchantActions';
// Child components
import MerchantList from '../components/MerchantList';


class MerchantsPage extends React.Component {


    componentDidMount() {
        if (this.props.location.search !== "") {
            this.props.actions.pageMerchants(this.props.location.pathname + this.props.location.search)
        } else {
            this.props.actions.getMerchants();
        }
    }


    componentDidUpdate() {
        if (this.props.location.search !== "") {
            this.props.actions.pageMerchants(this.props.location.pathname + this.props.location.search)
        } else {
            this.props.actions.getMerchants();
        }
        return null;
    }

    constructor(props) {
        super(props);
        this.deleteMerchant = this.deleteMerchant.bind(this);
        if (this.props.location.search !== "") {
            this.props.actions.pageMerchants(this.props.location.pathname + this.props.location.search)
        } else {
            this.props.actions.getMerchants();
        }

    }

    deleteMerchant(id) {
        if (window.confirm('Voce esta certo que quer deletar')) {
            this.props.actions.deleteMerchant(id);
        }
    }

    render() {
        return (
            <div className="merchants">
                {

                    <MerchantList movies={this.props.merchants} pages={this.props.pages}
                        onDeleteMovie={this.deleteMerchant} currentPage={this.props.currentPage} />
                }
            </div>
        )
    }
}


function mapStateToProps(state, ownProps) {
    // Set page number to 1 if no number in url params
    debugger;
    let merchants = '';
    let pageNo = ownProps.match.params.pageNo || 1;

    if (state.merchants.length === 0)
        merchants = state.merchants;
    else
        merchants = state.merchants.results;

    return {
        merchants: merchants,
        pages: Math.ceil(state.merchants.count / 10), // Determine number of pages for pagination
        currentPage: pageNo,
        ajaxLoading: true,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ deleteMerchant, pageMerchants, getMerchants }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MerchantsPage);
