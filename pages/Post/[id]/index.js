import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("[id]", router);
  return <div>Post : {id}</div>;
};
export default Post;
