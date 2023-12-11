import { useState } from "react";
import "./App.css";
import LazyImage from "./components/LazyImage";
import { Button } from "react-bootstrap";
import { random } from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const Myrandom = () => random(1, 123);
  const generateId = (): string => Math.random().toString(36).substr(2, 9);

  //  Types

  const addNewFox: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const target = event.target;
    console.log(target);
    const newItem: IImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${Myrandom()}.jpg`,
    };
    setImage([...imagenes, newItem]);
  };

  //generar simple unique id
  const [imagenes, setImage] = useState<Array<IImageItem>>([]);

  return (
    <>
      <div className="bg-body-secondary">
        <h1 className="container text-center mt-5">React con TypeSript</h1>
      </div>
      <div className="container-fluid">
        <Button className="w-100" variant="secondary" onClick={addNewFox}>
          Agregar zorro
        </Button>
      </div>

      {imagenes.map(({ id, url }) => (
        <div key={id} className="container text-center">
          <LazyImage
            src={url}
            onClick={() => console.log("click image")}
            title="Random fox"
            alt="fox"
            height="auto"
            width={320}
            className="m-2 bg-black"
          />
        </div>
      ))}
    </>
  );
}

export default App;
