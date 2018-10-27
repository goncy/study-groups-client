// @flow
import type { Container } from 'unstated'

import React, { Component } from 'react'
import connect from 'unstated-connect'

import GroupContainer from '../container'
import styled from 'styled-components'
import { Pane, Text, Button } from 'evergreen-ui'

type
Props = {
  containers: Array < Container >,
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 24px;
  .side-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    margin-top: -200px;
    .university-image {
      width: 185px;
      height: 185px;
      border-radius: 100%;
      margin-bottom: 20px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 100%;
      }
    }
    button {
      width: 80%;
      justify-content: center;
      align-items: center;
      height: 50px;
      font-weight: bold;
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: 1.22px;
      text-align: center;
      text-transform: uppercase;
    }
  }
  .sub-text {
    opacity: 0.52;
    font-weight: bold;
    font-size: 16px;
    color: #000000;
    letter-spacing: 0.42px;
    text-align: center;
  }
`

class DetailsScreen extends Component {
  props: Props

  async componentDidMount () {
    const {containers: [group], match} = this.props
    await group.fetch(match.params.id)
  }

  render () {
    const {
      containers: [group],
    } = this.props
    const groupData = group.state.selected && group.state.selected.data
    if (groupData) {
      console.log(groupData)
      return (
        <Wrapper>
          <Pane
            elevation={1}
            float="left"
            width={'80%'}
            maxWidth={'1024'}
            height={515}
            padding={42}
            margin={24}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="row"
          >
            <div className="side-info">
              <div className="university-image">
                <img src="https://www.dc.uba.ar/Trash/eventos/icpc/2009/images/uba_logo.jpg" alt="UBA"/>
              </div>
              <Button appearance="primary" intent="success">Unirse</Button>
              <span className={'sub-text'}>QUEDAN 3 LUGARES</span>
            </div>
          </Pane>
        </Wrapper>
      )
    } else {
      return ''
    }

  }
}

export default connect([GroupContainer])(DetailsScreen)
