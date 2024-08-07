import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'


const projectId ="j06sgl5p"
const dataset ='production'
const apiVersion ='2024-08-06'
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
