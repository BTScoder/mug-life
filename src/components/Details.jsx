import { useParams } from "react-router-dom";

const Details = ({ products }) => {
  const { id } = useParams();
  const selectedItem = products?.find((item) => item.id === parseInt(id));
  console.log(selectedItem);
  return (
    <>
      <p>{selectedItem?.name}</p>
      <p>{selectedItem?.description}</p>
      <p>${selectedItem?.price}</p>
    </>
  );
};

export default Details;
