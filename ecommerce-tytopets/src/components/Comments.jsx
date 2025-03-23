import { HashLoader } from "react-spinners";
import { useFetch } from "../hooks/useFetch";

const Comments = () => {
  const {
    data: comentarios,
    isLoading,
    error,
  } = useFetch("https://jsonplaceholder.org/comments");
  console.log(isLoading);
  return (
    <div>
      {isLoading ? (
        <HashLoader />
      ) : (
        <div>
          {comentarios.map((comentario) => {
            return (
              <div key={comentario.id} style={{ marginBottom: "20px" }}>
                <h2>{comentario.comment}</h2>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Comments;