import React from 'react'
import { FlatList, TouchableHighlight } from 'react-native'
import News from './News'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getNews } from '../store/actions'

class ListNews extends React.Component {

  _viewDetail = (item) => {
    this.props.nav.navigate('Detail')
    this.props.getNews(item)
  }

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={({ item }) =>
          <TouchableHighlight
            onPress={() => this._viewDetail(item)}
            underlayColor={'#FFF'}>
            <News news={item} />
          </TouchableHighlight>}
        keyExtractor={item => item.title}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ getNews }, dispatch)

export default connect(null, mapDispatchToProps)(ListNews)
