import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const apiKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWJiNjRjNTllYzAwMTk5MGQ2ZjYiLCJpYXQiOjE3MTA0MjIwMDgsImV4cCI6MTcxMTYzMTYwOH0.ZGRoVV0MOKMtlQCyCGGRkPab-xxOgn2Whvl030CXnE4";

const initialStateForm = {
  comment: "",
  rate: "",
  elementId: "",
};

const AddComment = props => {
  const [form, setForm] = useState(initialStateForm);

  const addNewComment = e => {
    e.preventDefault();

    fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
    })
      .then(response => {
        if (response.ok) {
          window.alert("Commento aggiunto con successo!");
          setForm(initialStateForm);
        } else {
          window.alert("Errore, riprova più tardi!");
          throw new Error("Errore nel salvataggio del commento");
        }
      })
      .catch(error => {
        console.log("ERRORE", error);
      });
  };

  return (
    <Form className="my-3" onSubmit={addNewComment}>
      <Form.Group className="mb-3">
        <Form.Label>Add Comment</Form.Label>
        <Form.Control
          type="text"
          placeholder="add comment"
          required
          onChange={e => {
            setForm({ ...form, comment: e.target.value, elementId: props.singleBook });
          }}
          value={form.comment}
        />
      </Form.Group>
      <Form.Select
        aria-label="Default select example"
        required
        onChange={e => {
          setForm({ ...form, rate: e.target.value });
        }}
        value={form.rate}
      >
        <option>Add Rate</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
      <Button className="mt-2" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default AddComment;
