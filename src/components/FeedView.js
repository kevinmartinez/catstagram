import React, { Fragment } from 'react'
import styled from 'styled-components'
import SiteHeader from './SiteHeader'
import AdminImage from '../containers/AdminImage'
import ImageGrid from './ImageGrid'

const FeedSection = styled.section`
  width: 960px;
  max-width: 90%;
  margin: 0 auto;
`
class FeedView extends React.Component {
  render() {
    return (
      <Fragment>
        <FeedSection>
          {/* <SiteHeader /> */}
          {/* If looking show Image(s), If want to upload, show addImage (or what it is named) */}
          <ImageGrid />
        </FeedSection>
        {/* <AdminImage /> */}
      </Fragment>
    )
  }
}

export default FeedView
