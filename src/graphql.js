export const ListGrudges = `
  query ListGrudges {
    listGrudges {
      items {
        id
        person
        deed
        avenged
      }
    }
  }
`;

export const CreateGrudge = `
  mutation CreateGrudge(
    $person: String!
    $deed: String!
    $avenged: Boolean!
  ) {
    createGrudges(input: {
      person: $person,
      deed: $deed,
      avenged: $avenged
    }) {
      id
      person
      deed
      avenged
    }
  }
`;

export const SubscribeToNewGrudge = `
  subscription onCreateGrudges {
    onCreateGrudges {
      id
      person
      deed
      avenged
    }
  }
`;
