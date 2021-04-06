import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import IndexElement from './element';
import { startGame, setAnswer } from '../../redux/index-reducer';

const Index = props => {
  useEffect(() => {
    props.startGame();
    // eslint-disable-next-line
  }, []);
  return (
    <IndexElement {...props} />
  )
}

const mapStateToProps = state => {
  return {
    field: state.indexData.gameSettings.field,
    way: state.indexData.gameSettings.way,
    posStart: state.indexData.gameSettings.posStart,
    posEnd: state.indexData.gameSettings.posEnd,
    posAnswer: state.indexData.gameSettings.posAnswer,
    isWin: state.indexData.gameSettings.isWin,
  }
}

export default connect(mapStateToProps, { startGame, setAnswer })(Index);