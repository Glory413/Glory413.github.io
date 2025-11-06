import { gql } from "@apollo/client"

export default {
  Queries: {
    getProfile: gql`
      query GetProfile {
        profiles {
          id
          bgImages {
            url
          }
        }
      }
    `,

    getBio: gql`
      query GetBio {
        profiles {
          bio
        }
      }
    `,

    getServices: gql`
      query GetServices {
        services {
          id
          title
          serviceDesc
        }
      }
    `
  }
}
