import { useRouter } from "next/router";

const Comment = () => {
  const router = useRouter();
  const { id, comment } = router.query;
  console.log("router--comment", router);
  return (
    <div>
      <div>
        ID : {id}
        <br />
        Comment : {comment}
      </div>
    </div>
  );
};
export default Comment;
