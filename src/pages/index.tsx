import { Box, chakra } from '@chakra-ui/react'
import React from 'react'
import Head from 'next/head'
import { table } from './api/airtable'

export default function Home({ airtableRecords }) {
  return (
    <Box>
      <Head>
        <title>posts from Airtable</title>
      </Head>
      <chakra.h1>Posts</chakra.h1>
      <div>
        {airtableRecords.map((record) => (
          <div key={record.id}>
            <h2>{record.fields.Title}</h2>
            <p>{record.fields.Description}</p>
          </div>
        ))}
      </div>
    </Box>
  )
}

export async function getStaticProps(context) {
  let airtableRecords = await table
    .select({
      maxRecords: 10,
      sort: [
        { field: 'Slug', direction: 'asc' },
        { field: 'Title', direction: 'desc' },
      ],
    })
    .firstPage()

  airtableRecords = airtableRecords.map((record) => {
    return {
      id: record.id,
      fields: record.fields,
    }
  })

  return {
    props: {
      airtableRecords: airtableRecords,
    },
  }
}
