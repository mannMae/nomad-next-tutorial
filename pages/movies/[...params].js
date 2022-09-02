import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail() {
  const router = useRouter();
  const [title, id] = params || [];
  console.log(router);
  return (
    <div>
      <Seo title={title} />
      {/* <h4>{router.query.title || "Loading..."}</h4> */}
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
