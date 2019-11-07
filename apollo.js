import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";

const makeApolloClient = (token) => {

  const link = new HttpLink({
    uri: `https://eu1.prisma.sh/joep-barmentlo/BlogFormation/dev`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const cache = new InMemoryCache()

  const client = new ApolloClient({
    link,
    cache
  });
  return client;
}

export default makeApolloClient;