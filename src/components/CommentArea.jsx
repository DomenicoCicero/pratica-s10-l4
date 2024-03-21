import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

const apiKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWJiNjRjNTllYzAwMTk5MGQ2ZjYiLCJpYXQiOjE3MTA0MjIwMDgsImV4cCI6MTcxMTYzMTYwOH0.ZGRoVV0MOKMtlQCyCGGRkPab-xxOgn2Whvl030CXnE4";

const CommentArea = props => {
  const [commentsArray, setCommentsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin]);

  const fetchComments = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${props.asin}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nel reperimento dei dati");
        }
      })
      .then(commentsArrayFromAPI => {
        setCommentsArray(commentsArrayFromAPI);
        setIsLoading(false);
      })
      .catch(error => {
        console.log("ERRORE", error);
        setIsLoading(false);
        setIsError(true);
      });
  };

  return (
    <>
      {isLoading === true && (
        <div>
          <Spinner animation="border" variant="success" />
        </div>
      )}

      <CommentsList commentsList={commentsArray} singleBookAsin={props.asin} />

      {isLoading === false && isError === false && <AddComment singleBook={props.asin} />}

      {isError === true && (
        <div>
          <Alert variant="danger">Qualcosa è andato storto</Alert>
        </div>
      )}
    </>
  );
};

export default CommentArea;
