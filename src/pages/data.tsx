import Container from "@/components/global/container";

const Data = () => {
  return (
    <Container>
      <p>Data</p>
      {data.map((item, index) => (
        <div key={index}>{`${item}: item with ${index}`}</div>
      ))}
    </Container>
  );
};

export default Data;

const data = new Array(25).fill("New line");
