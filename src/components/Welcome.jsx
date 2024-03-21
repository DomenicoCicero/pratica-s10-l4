import Alert from "react-bootstrap/Alert";

const Welcome = () => {
  return (
    <Alert variant="secondary">
      <Alert.Heading>Hey, felice di vederti</Alert.Heading>
      <p>Benvenuto in EpiBooks! Potrai acquistare libri di qualsiasi genere.</p>
      <hr />
      <p className="mb-0">Se il tuo acquisto supera 50$ la spedizione sarà gratuita.</p>
    </Alert>
  );
};

export default Welcome;
