import styles from "../../styles/Nexts.module.css";
import Link from "next/link";
import type { Users } from "../../Types/Users";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: Users = await res.json();
  return {
    props: {
      nexts: data,
    },
  };
};

interface Props {
  nexts: Users;
}

const Nexts: React.FC<Props> = ({ nexts }) => {
  return (
    <div>
      <h1>All Nexts</h1>
      {nexts.map((next) => (
        <Link href={"/nexts/" + next.id} key={next.id}>
          <a className={styles.single}>
            <h3>{next.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Nexts;
