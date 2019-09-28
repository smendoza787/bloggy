import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Title from '../components/Title'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Title title="Henry" />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
