import React from 'react'
import axios from 'axios'
import ListNews from '../components/ListNews'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setNews } from '../store/actions'

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Indonesia Today'
  }

  componentDidMount() {
    axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=7d848d73b1de439696a0ba1014e08ed3').then(res => this.props.setNews(res.data.articles))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <ListNews
        data={this.props.redux.news}
        nav={this.props.navigation} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    redux: state
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ setNews }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
