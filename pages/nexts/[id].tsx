import type { Users, User } from "../../Types/Users";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: Users = await res.json();
  const paths = data.map((next) => {
    return {
      params: { id: next.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as Params;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data: User = await res.json();
  return {
    props: {
      next: data,
    },
  };
};

interface Props {
  next: User;
}

const Details: React.FC<Props> = ({ next }) => {
  return (
    <div>
      <h1>{next.name}</h1>
      <p>{next.email}</p>
      <p>{next.website}</p>
      <p>{next.address.city}</p>
    </div>
  );
};

export default Details;
